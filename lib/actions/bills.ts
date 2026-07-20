"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { CreateUtilityBillSchema, UpdateUtilityBillSchema, type ActionState } from "@/lib/validation";
import { redirect } from "next/navigation";
import { flashMessage } from "@/lib/flash";
import { notify, notifyNewBill, notifyAdmins } from "@/lib/actions/notifications";

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

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

export async function createBillAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = CreateUtilityBillSchema.safeParse({
    tenancyId: formData.get("tenancyId"),
    amount: formData.get("amount"),
    dueDate: formData.get("dueDate"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const tenancy = await prisma.tenancy.findUnique({
    where: { id: parsed.data.tenancyId },
    include: { tenant: true, room: true },
  });
  if (!tenancy) return { errors: { tenancyId: ["Tenancy not found"] } };

  await prisma.$transaction(async (tx) => {
    await tx.utilityBill.create({
      data: {
        tenancyId: parsed.data.tenancyId,
        amount: parsed.data.amount,
        dueDate: parsed.data.dueDate,
      },
    });
    await tx.auditLog.create({
      data: {
        userId: session.user.id,
        action: "bill.create",
        entityType: "UtilityBill",
      },
    });
  });

  await notifyNewBill({
    userId: tenancy.tenantId,
    tenantName: tenancy.tenant.name,
    roomNumber: tenancy.room.number,
    amount: formatCedis(parsed.data.amount),
    dueDate: new Date(parsed.data.dueDate).toLocaleDateString("en-GH"),
  });

  revalidatePath("/admin/bills");
  revalidatePath("/dashboard");
  await flashMessage("Bill posted", "success");
  redirect("/admin/bills");
}

export async function updateBillAction(id: string, _: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const parsed = UpdateUtilityBillSchema.safeParse({ status: formData.get("status") });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.utilityBill.update({
    where: { id },
    data: { status: parsed.data.status, paidAt: parsed.data.status === "PAID" ? new Date() : null },
  });
  revalidatePath("/admin/bills");
  revalidatePath("/dashboard");
  return { message: "Bill updated" };
}

export async function detectOverdueBillsAction(): Promise<ActionState> {
  await requireAdmin();
  const now = new Date();
  const overdue = await prisma.utilityBill.findMany({
    where: { status: "UNPAID", dueDate: { lt: now } },
    include: { tenancy: { include: { tenant: true, room: true } } },
  });
  if (overdue.length === 0) return { message: "No overdue bills found" };

  await prisma.$transaction(
    overdue.map((bill) =>
      prisma.utilityBill.update({
        where: { id: bill.id },
        data: { status: "OVERDUE" },
      }),
    ),
  );

  for (const bill of overdue) {
    const tenant = bill.tenancy.tenant;
    const dueDate = new Date(bill.dueDate).toLocaleDateString("en-GH");
    await notify({
      userId: tenant.id,
      subject: "Utility bill overdue",
      body: `Your water bill of ${formatCedis(bill.amount)} for room ${bill.tenancy.room.number} was due on ${dueDate} and is now overdue.`,
    });
    await notifyAdmins({
      subject: "Utility bill overdue",
      body: `${tenant.name} has an overdue water bill of ${formatCedis(bill.amount)} for room ${bill.tenancy.room.number} (due ${dueDate}).`,
    });
  }

  revalidatePath("/admin/bills");
  revalidatePath("/admin/dashboard");
  revalidatePath("/dashboard");
  return { message: `${overdue.length} bill${overdue.length === 1 ? "" : "s"} marked overdue` };
}

export async function getTenantBills() {
  const session = await requireTenant();
  return prisma.utilityBill.findMany({
    where: { tenancy: { tenantId: session.user.id } },
    include: { tenancy: { include: { room: true } } },
    orderBy: { dueDate: "desc" },
  });
}

export async function getAllBills() {
  await requireAdmin();
  return prisma.utilityBill.findMany({
    include: { tenancy: { include: { tenant: true, room: true } } },
    orderBy: { dueDate: "desc" },
  });
}
