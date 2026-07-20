"use server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

async function requireTenant() {
  const session = await auth();
  if (!session || session.user.role !== "TENANT") throw new Error("Unauthorized");
  return session;
}

export async function getAdminDashboardStats() {
  await requireAdmin();
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  const [totalRooms, occupiedRooms, availableRooms, maintenanceRooms, totalTenants, openRequests, pendingPayments, totalPaymentsThisMonth, totalRevenue, overdueBills] = await Promise.all([
    prisma.room.count(),
    prisma.room.count({ where: { status: "OCCUPIED" } }),
    prisma.room.count({ where: { status: "AVAILABLE" } }),
    prisma.room.count({ where: { status: "MAINTENANCE" } }),
    prisma.user.count({ where: { role: "TENANT", active: true } }),
    prisma.maintenanceRequest.count({ where: { status: { in: ["OPEN", "ASSIGNED", "IN_PROGRESS"] } } }),
    prisma.rentPayment.count({ where: { status: "PENDING" } }),
    prisma.rentPayment.count({ where: { status: "CONFIRMED", paidAt: { gte: startOfMonth } } }),
    prisma.rentPayment.aggregate({ where: { status: "CONFIRMED", paidAt: { gte: startOfYear } }, _sum: { amount: true } }),
    prisma.utilityBill.count({ where: { status: "OVERDUE" } }),
  ]);

  const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;

  const recentPayments = await prisma.rentPayment.findMany({
    where: { status: "CONFIRMED" },
    include: { tenancy: { include: { tenant: true, room: true } } },
    orderBy: { paidAt: "desc" },
    take: 5,
  });

  const recentRequests = await prisma.maintenanceRequest.findMany({
    where: { status: { in: ["OPEN", "ASSIGNED", "IN_PROGRESS"] } },
    include: { tenant: true, room: true },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  // Monthly revenue for chart (current year)
  const paymentsThisYear = await prisma.rentPayment.findMany({
    where: { status: "CONFIRMED", paidAt: { gte: startOfYear } },
    select: { paidAt: true, amount: true },
  });

  const monthlyRevenue = Array.from({ length: 12 }, (_, i) => {
    const monthPayments = paymentsThisYear.filter((p) => p.paidAt && new Date(p.paidAt).getMonth() === i);
    return monthPayments.reduce((sum, p) => sum + p.amount, 0);
  });

  return {
    totalRooms,
    occupiedRooms,
    availableRooms,
    maintenanceRooms,
    totalTenants,
    openRequests,
    pendingPayments,
    totalPaymentsThisMonth,
    totalRevenue: totalRevenue._sum.amount ?? 0,
    occupancyRate,
    overdueBills,
    monthlyRevenue,
    recentPayments,
    recentRequests,
  };
}

export async function getTenantDashboardStats() {
  const session = await requireTenant();
  const tenancy = await prisma.tenancy.findFirst({
    where: { tenantId: session.user.id },
    include: { room: true },
    orderBy: { startDate: "desc" },
  });
  if (!tenancy) return null;

  const [payments, bills, requests, unreadNotifications, overdueBills] = await Promise.all([
    prisma.rentPayment.findMany({ where: { tenancyId: tenancy.id }, orderBy: { paidAt: "desc" } }),
    prisma.utilityBill.findMany({ where: { tenancyId: tenancy.id }, orderBy: { dueDate: "desc" } }),
    prisma.maintenanceRequest.findMany({ where: { tenantId: session.user.id }, orderBy: { createdAt: "desc" } }),
    prisma.notification.count({ where: { userId: session.user.id, status: "SENT", readAt: null } }),
    prisma.utilityBill.count({ where: { tenancyId: tenancy.id, status: "OVERDUE" } }),
  ]);

  const totalPaid = payments.filter((p) => p.status === "CONFIRMED").reduce((sum, p) => sum + p.amount, 0);
  const totalBills = bills.reduce((sum, b) => sum + b.amount, 0);
  const openRequests = requests.filter((r) => !["RESOLVED", "CLOSED"].includes(r.status)).length;
  const paidBills = bills.filter((b) => b.status === "PAID").reduce((sum, b) => sum + b.amount, 0);
  const unpaidBills = bills.filter((b) => b.status !== "PAID");
  const nextDueBill = unpaidBills.length > 0
    ? unpaidBills.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0]
    : null;

  return {
    tenancy,
    payments,
    bills,
    requests,
    unreadNotifications,
    totalPaid,
    totalBills,
    paidBills,
    openRequests,
    nextDueBill,
    overdueBills,
  };
}
