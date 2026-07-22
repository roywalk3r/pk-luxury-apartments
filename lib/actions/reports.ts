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

function csvEscape(value: string | number | Date | null | undefined): string {
  const text = value === null || value === undefined ? "" : String(value);
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function toDate(value: FormDataEntryValue | null): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value as string);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export async function exportReportsCsv(_: unknown, formData: FormData): Promise<{ csv: string; filename: string }> {
  await requireAdmin();
  const from = toDate(formData.get("from"));
  const to = toDate(formData.get("to"));
  const requestStatus = (formData.get("requestStatus") as string) || undefined;

  const dateFilter = from || to ? { dueDate: { ...(from && { gte: from }), ...(to && { lte: to }) } } : {};
  const paidFilter = from || to ? { paidAt: { ...(from && { gte: from }), ...(to && { lte: to }) } } : {};

  const [rooms, tenants, payments, bills, requests] = await Promise.all([
    prisma.room.findMany({ orderBy: { number: "asc" } }),
    prisma.user.findMany({ where: { role: "TENANT" }, orderBy: { name: "asc" } }),
    prisma.rentPayment.findMany({
      where: paidFilter,
      include: { tenancy: { include: { tenant: true, room: true } } },
      orderBy: { paidAt: "desc" },
    }),
    prisma.utilityBill.findMany({
      where: dateFilter,
      include: { tenancy: { include: { tenant: true, room: true } } },
      orderBy: { dueDate: "desc" },
    }),
    prisma.maintenanceRequest.findMany({
      where: requestStatus ? { status: requestStatus as 'OPEN' | 'ASSIGNED' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED' } : {},
      include: { tenant: true, room: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const rows: string[][] = [
    ["PK Luxury Apartments Report"],
    [],
    ["Total rooms", String(rooms.length)],
    ["Active tenants", String(tenants.length)],
    ["Rent collected", `GHS ${(payments.filter((p) => p.status === "CONFIRMED").reduce((sum, p) => sum + p.amount, 0) / 100).toFixed(2)}`],
    ["Bills paid", `GHS ${(bills.filter((b) => b.status === "PAID").reduce((sum, b) => sum + b.amount, 0) / 100).toFixed(2)}`],
    [],
    ["Payments"],
    ["Tenant", "Room", "Amount", "Method", "Status", "Date"],
    ...payments.map((p) => [
      p.tenancy.tenant.name,
      p.tenancy.room.number,
      `GHS ${(p.amount / 100).toFixed(2)}`,
      p.method,
      p.status,
      p.paidAt ? new Date(p.paidAt).toLocaleDateString() : "",
    ]),
    [],
    ["Bills"],
    ["Tenant", "Room", "Amount", "Status", "Due date"],
    ...bills.map((b) => [
      b.tenancy.tenant.name,
      b.tenancy.room.number,
      `GHS ${(b.amount / 100).toFixed(2)}`,
      b.status,
      new Date(b.dueDate).toLocaleDateString(),
    ]),
    [],
    ["Maintenance requests"],
    ["Title", "Room", "Tenant", "Status", "Priority"],
    ...requests.map((r) => [r.title, r.room.number, r.tenant.name, r.status, r.priority]),
  ];

  const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  const filename = `pk-apartments-report-${new Date().toISOString().split("T")[0]}.csv`;

  return { csv, filename };
}
