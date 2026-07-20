"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { CreatePaymentSchema, UpdatePaymentSchema, type ActionState } from "@/lib/validation";
import { redirect } from "next/navigation";
import { flashMessage } from "@/lib/flash";
import { initializePayment, verifyPayment, isPaystackConfigured } from "@/lib/services/paystack";
import { notifyPaymentConfirmation, notifyBillPaymentConfirmation, notifyAdmins } from "@/lib/actions/notifications";

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

function generateReference(prefix = "PAY") {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

export async function createPaymentAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = CreatePaymentSchema.safeParse({
    tenancyId: formData.get("tenancyId"),
    amount: formData.get("amount"),
    method: formData.get("method"),
    reference: formData.get("reference") ?? "",
    paidAt: formData.get("paidAt") || undefined,
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const tenancy = await prisma.tenancy.findUnique({
    where: { id: parsed.data.tenancyId },
    include: { tenant: true, room: true },
  });
  if (!tenancy) return { errors: { tenancyId: ["Tenancy not found"] } };

  const paidAt = parsed.data.paidAt || new Date();
  const reference = parsed.data.reference || generateReference("ADM");

  const p = await prisma.$transaction(async (tx) => {
    const payment = await tx.rentPayment.create({
      data: {
        tenancyId: parsed.data.tenancyId,
        amount: parsed.data.amount,
        method: parsed.data.method,
        status: "CONFIRMED",
        reference,
        paidAt,
        receiptUrl: "",
      },
    });
    await tx.rentPayment.update({
      where: { id: payment.id },
      data: { receiptUrl: `/api/receipts/${payment.id}` },
    });
    await tx.auditLog.create({
      data: {
        userId: session.user.id,
        action: "payment.create",
        entityType: "RentPayment",
        entityId: payment.id,
      },
    });
    return payment;
  });

  await prisma.rentPayment.update({
    where: { id: p.id },
    data: { receiptUrl: `/api/receipts/${p.id}` },
  });

  await notifyPaymentConfirmation({
    userId: tenancy.tenantId,
    tenantName: tenancy.tenant.name,
    roomNumber: tenancy.room.number,
    amount: formatCedis(p.amount),
    method: p.method,
    paidAt: new Date(paidAt).toLocaleDateString("en-GH"),
    reference: p.reference || p.id,
  });

  revalidatePath("/admin/payments");
  revalidatePath("/dashboard");
  await flashMessage("Payment recorded", "success");
  redirect("/admin/payments");
}

export async function updatePaymentAction(id: string, _: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const parsed = UpdatePaymentSchema.safeParse({ status: formData.get("status") });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.rentPayment.update({ where: { id }, data: { status: parsed.data.status } });
  revalidatePath("/admin/payments");
  revalidatePath("/dashboard");
  return { message: "Payment updated" };
}

export async function initiateTenantPayment(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireTenant();
  const tenancyId = formData.get("tenancyId") as string;
  const amount = formData.get("amount") as string;
  const amountPesewas = Math.round(Number(amount));

  if (!isPaystackConfigured()) {
    return { message: "Online payment is not configured. Please contact management." };
  }

  if (!tenancyId) {
    return { errors: { tenancyId: ["Select a tenancy"] } };
  }

  if (!Number.isFinite(amountPesewas) || amountPesewas < 100) {
    return { errors: { amount: ["Enter an amount of at least GHS 1.00"] } };
  }

  const tenancy = await prisma.tenancy.findFirst({
    where: { id: tenancyId, tenantId: session.user.id },
    include: { tenant: true, room: true },
  });
  if (!tenancy) return { errors: { tenancyId: ["Tenancy not found"] } };

  const reference = generateReference("PAY");

  const payment = await prisma.rentPayment.create({
    data: {
      tenancyId: tenancy.id,
      amount: amountPesewas,
      method: "OTHER",
      status: "PENDING",
      paystackReference: reference,
      receiptUrl: "",
    },
  });

  await prisma.rentPayment.update({
    where: { id: payment.id },
    data: { receiptUrl: `/api/receipts/${payment.id}` },
  });

  const appUrl = process.env.PAYSTACK_CALLBACK_BASE_URL || process.env.NEXTAUTH_URL || "http://localhost:3000";
  const callbackUrl = `${appUrl.replace(/\/$/, "")}/payments/verify`;

  let response;
  try {
    response = await initializePayment({
      email: tenancy.tenant.email,
      amount: amountPesewas,
      reference,
      callbackUrl,
      metadata: {
        tenancyId: tenancy.id,
        tenantId: session.user.id,
        paymentId: payment.id,
      },
    });
  } catch (error) {
    await prisma.rentPayment.update({
      where: { id: payment.id },
      data: { status: "FAILED" },
    });

    return {
      message: error instanceof Error ? error.message : "Failed to initialize payment",
    };
  }

  if (!response.status || !response.data.authorization_url) {
    await prisma.rentPayment.update({
      where: { id: payment.id },
      data: { status: "FAILED" },
    });
    return { message: response.message || "Failed to initialize payment" };
  }

  await prisma.rentPayment.update({
    where: { id: payment.id },
    data: {
      paystackAuthorizationUrl: response.data.authorization_url,
      paystackAccessCode: response.data.access_code,
    },
  });

  redirect(response.data.authorization_url);
}

export async function initiateBillPayment(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireTenant();
  const billId = formData.get("billId") as string;

  if (!isPaystackConfigured()) {
    return { message: "Online payment is not configured. Please contact management." };
  }
  if (!billId) return { errors: { billId: ["Bill is required"] } };

  const bill = await prisma.utilityBill.findUnique({
    where: { id: billId },
    include: { tenancy: { include: { tenant: true, room: true } } },
  });

  if (!bill) return { errors: { billId: ["Bill not found"] } };
  if (bill.tenancy.tenantId !== session.user.id) return { message: "Unauthorized" };
  if (bill.status === "PAID") return { errors: { billId: ["Bill is already paid"] } };

  const reference = generateReference("BILL");

  const payment = await prisma.rentPayment.create({
    data: {
      tenancyId: bill.tenancy.id,
      billId: bill.id,
      amount: bill.amount,
      method: "OTHER",
      status: "PENDING",
      paystackReference: reference,
      receiptUrl: `/api/receipts/bill/${bill.id}`,
    },
  });

  const appUrl = process.env.PAYSTACK_CALLBACK_BASE_URL || process.env.NEXTAUTH_URL || "http://localhost:3000";
  const callbackUrl = `${appUrl.replace(/\/$/, "")}/payments/verify?bill=1`;

  let response;
  try {
    response = await initializePayment({
      email: bill.tenancy.tenant.email,
      amount: bill.amount,
      reference,
      callbackUrl,
      metadata: {
        billId: bill.id,
        tenancyId: bill.tenancy.id,
        tenantId: session.user.id,
        paymentId: payment.id,
      },
    });
  } catch (error) {
    await prisma.rentPayment.update({ where: { id: payment.id }, data: { status: "FAILED" } });
    return { message: error instanceof Error ? error.message : "Failed to initialize payment" };
  }

  if (!response.status || !response.data.authorization_url) {
    await prisma.rentPayment.update({ where: { id: payment.id }, data: { status: "FAILED" } });
    return { message: response.message || "Failed to initialize payment" };
  }

  await prisma.rentPayment.update({
    where: { id: payment.id },
    data: {
      paystackAuthorizationUrl: response.data.authorization_url,
      paystackAccessCode: response.data.access_code,
    },
  });

  redirect(response.data.authorization_url);
}

export async function verifyPaystackPayment(reference: string): Promise<ActionState> {
  const session = await requireTenant();

  if (!isPaystackConfigured()) {
    return { message: "Online payment is not configured." };
  }

  const existing = await prisma.rentPayment.findUnique({
    where: { paystackReference: reference },
    include: { bill: { include: { tenancy: { include: { tenant: true, room: true } } } }, tenancy: { include: { tenant: true, room: true } } },
  });

  if (!existing) return { message: "Payment record not found" };
  if (existing.tenancy.tenantId !== session.user.id) {
    return { message: "Unauthorized" };
  }

  const response = await verifyPayment(reference);

  if (!response.status) {
    return { message: response.message || "Verification failed" };
  }

  const isSuccess = response.data.status === "success";
  const paidAt = response.data.paid_at ? new Date(response.data.paid_at) : new Date();
  const isBillPayment = Boolean(existing.billId);

  await prisma.$transaction(async (tx) => {
    await tx.rentPayment.update({
      where: { id: existing.id },
      data: {
        status: isSuccess ? "CONFIRMED" : "FAILED",
        method: response.data.channel === "mobile_money" ? "MOMO" : response.data.channel === "card" ? "VISA" : "OTHER",
        paidAt: isSuccess ? paidAt : null,
        paystackTransactionId: reference,
        paystackPaidAt: paidAt,
        paystackChannel: response.data.channel,
        paystackCardType: response.data.card_type || null,
        paystackBank: response.data.bank || null,
        paystackMobileMoneyNumber: response.data.authorization?.mobile_money_number || null,
        reference: reference,
        receiptUrl: isBillPayment ? `/api/receipts/bill/${existing.billId}` : `/api/receipts/${existing.id}`,
      },
    });

    if (isSuccess && existing.billId) {
      await tx.utilityBill.update({
        where: { id: existing.billId },
        data: { status: "PAID", paidAt, receiptUrl: `/api/receipts/bill/${existing.billId}` },
      });
    }
  });

  if (isSuccess) {
    const tenantName = existing.tenancy.tenant.name;
    const roomNumber = existing.tenancy.room.number;
    const amount = formatCedis(existing.amount);
    const method = response.data.channel;
    const paidAtFormatted = paidAt.toLocaleDateString("en-GH");

    if (isBillPayment && existing.bill) {
      await notifyBillPaymentConfirmation({
        userId: existing.tenancy.tenantId,
        tenantName,
        roomNumber,
        amount,
        method,
        paidAt: paidAtFormatted,
        reference,
      });
      await notifyAdmins({
        subject: "Utility bill payment received",
        body: `${tenantName} paid water bill ${amount} for room ${roomNumber} via ${method}. Ref: ${reference}`,
      });
    } else {
      await notifyPaymentConfirmation({
        userId: existing.tenancy.tenantId,
        tenantName,
        roomNumber,
        amount,
        method,
        paidAt: paidAtFormatted,
        reference,
      });
      await notifyAdmins({
        subject: "Rent payment received",
        body: `${tenantName} paid ${amount} for room ${roomNumber} via ${method}. Ref: ${reference}`,
      });
    }
  }

  revalidatePath("/payments");
  revalidatePath("/bills");
  revalidatePath("/dashboard");
  revalidatePath("/admin/payments");
  revalidatePath("/admin/bills");
  revalidatePath("/admin/dashboard");

  return { message: isSuccess ? "Payment successful" : `Payment ${response.data.status}` };
}

export async function getTenantPayments() {
  const session = await requireTenant();
  return prisma.rentPayment.findMany({
    where: { tenancy: { tenantId: session.user.id } },
    include: { tenancy: { include: { room: true } } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getTenantActiveTenancies() {
  const session = await requireTenant();
  return prisma.tenancy.findMany({
    where: { tenantId: session.user.id, endDate: null },
    include: { room: true },
    orderBy: { startDate: "desc" },
  });
}

export async function getAllPayments() {
  await requireAdmin();
  return prisma.rentPayment.findMany({
    include: { tenancy: { include: { tenant: true, room: true } } },
    orderBy: { createdAt: "desc" },
  });
}
