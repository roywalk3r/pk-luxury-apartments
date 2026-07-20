"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import {
  sendEmail,
  isEmailConfigured,
  paymentReceiptEmail,
  billPaymentReceiptEmail,
  maintenanceUpdateEmail,
  newBillEmail,
  bookingRequestEmail,
  announcementEmail,
  rentReminderEmail,
} from "@/lib/services/email";
import {
  sendSms,
  isSmsConfigured,
  paymentReceiptSms,
  billPaymentReceiptSms,
  maintenanceUpdateSms,
  newBillSms,
  bookingRequestSms,
  announcementSms,
  rentReminderSms,
} from "@/lib/services/sms";
import { AnnouncementSchema, type ActionState } from "@/lib/validation";

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function getMyNotifications() {
  const session = await requireAuth();
  return prisma.notification.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
}

export async function getUnreadCount() {
  const session = await requireAuth();
  return prisma.notification.count({
    where: { userId: session.user.id, status: "SENT", readAt: null },
  });
}

export async function markNotificationRead(id: string, _formData?: FormData) {
  const session = await requireAuth();
  const notification = await prisma.notification.findUnique({ where: { id } });
  if (!notification || notification.userId !== session.user.id) {
    throw new Error("Notification not found");
  }
  await prisma.notification.update({ where: { id }, data: { readAt: new Date() } });
  revalidatePath("/dashboard");
  revalidatePath("/notifications");
}

export async function notify({
  userId,
  subject,
  body,
  emailHtml,
  smsMessage,
  sendEmail: shouldSendEmail = true,
  sendSms: shouldSendSms = true,
}: {
  userId: string;
  subject: string;
  body: string;
  emailHtml?: string;
  smsMessage?: string;
  sendEmail?: boolean;
  sendSms?: boolean;
}) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  await prisma.notification.create({
    data: {
      userId,
      channel: "IN_APP",
      subject,
      body,
      status: "SENT",
      sentAt: new Date(),
    },
  });

  if (shouldSendEmail && user.email && emailHtml && isEmailConfigured()) {
    try {
      await sendEmail({ to: user.email, subject, html: emailHtml });
    } catch (err) {
      console.error("[Notify] Email failed:", err);
    }
  }

  if (shouldSendSms && user.phone && smsMessage && isSmsConfigured()) {
    try {
      await sendSms({ to: user.phone, message: smsMessage });
    } catch (err) {
      console.error("[Notify] SMS failed:", err);
    }
  }
}

export async function notifyPaymentConfirmation({
  userId,
  tenantName,
  roomNumber,
  amount,
  method,
  paidAt,
  reference,
}: {
  userId: string;
  tenantName: string;
  roomNumber: string;
  amount: string;
  method: string;
  paidAt: string;
  reference: string;
}) {
  const { subject, html } = paymentReceiptEmail({ tenantName, roomNumber, amount, method, paidAt, reference });
  const sms = paymentReceiptSms({ amount, reference });
  await notify({
    userId,
    subject,
    body: `Your rent payment of ${amount} for room ${roomNumber} has been confirmed. Ref: ${reference}.`,
    emailHtml: html,
    smsMessage: sms,
  });
}

export async function notifyBillPaymentConfirmation({
  userId,
  tenantName,
  roomNumber,
  amount,
  method,
  paidAt,
  reference,
}: {
  userId: string;
  tenantName: string;
  roomNumber: string;
  amount: string;
  method: string;
  paidAt: string;
  reference: string;
}) {
  const { subject, html } = billPaymentReceiptEmail({ tenantName, roomNumber, amount, method, paidAt, reference });
  const sms = billPaymentReceiptSms({ amount, reference });
  await notify({
    userId,
    subject,
    body: `Your water bill payment of ${amount} for room ${roomNumber} has been confirmed. Ref: ${reference}.`,
    emailHtml: html,
    smsMessage: sms,
  });
}

export async function notifyMaintenanceUpdate({
  userId,
  tenantName,
  title,
  roomNumber,
  status,
}: {
  userId: string;
  tenantName: string;
  title: string;
  roomNumber: string;
  status: string;
}) {
  const { subject, html } = maintenanceUpdateEmail({ tenantName, title, roomNumber, status });
  const sms = maintenanceUpdateSms({ title, status });
  await notify({
    userId,
    subject,
    body: `Your maintenance request "${title}" for room ${roomNumber} is now ${status.toLowerCase()}.`,
    emailHtml: html,
    smsMessage: sms,
  });
}

export async function notifyNewBill({
  userId,
  tenantName,
  roomNumber,
  amount,
  dueDate,
}: {
  userId: string;
  tenantName: string;
  roomNumber: string;
  amount: string;
  dueDate: string;
}) {
  const { subject, html } = newBillEmail({ tenantName, roomNumber, amount, dueDate });
  const sms = newBillSms({ amount, dueDate });
  await notify({
    userId,
    subject,
    body: `A new water bill of ${amount} has been posted for room ${roomNumber}. Due on ${dueDate}.`,
    emailHtml: html,
    smsMessage: sms,
  });
}

export async function notifyBookingRequest({
  userId,
  name,
  email,
  phone,
  roomNumber,
}: {
  userId: string;
  name: string;
  email: string;
  phone: string;
  roomNumber: string;
}) {
  const { subject, html } = bookingRequestEmail({ name, email, phone, roomNumber });
  const sms = bookingRequestSms({ roomNumber });
  await notify({
    userId,
    subject,
    body: `Your booking request for room ${roomNumber} has been received. We will contact you shortly.`,
    emailHtml: html,
    smsMessage: sms,
  });
}

export async function notifyAdmins({
  subject,
  body,
  emailHtml,
  smsMessage,
}: {
  subject: string;
  body: string;
  emailHtml?: string;
  smsMessage?: string;
}) {
  const admins = await prisma.user.findMany({
    where: { role: { in: ["ADMIN", "STAFF"] }, active: true },
  });

  for (const admin of admins) {
    await notify({
      userId: admin.id,
      subject,
      body,
      emailHtml,
      smsMessage,
    });
  }
}

export async function sendAnnouncementAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAuth();
  if (!["ADMIN", "STAFF"].includes(session.user.role)) {
    return { message: "Only admins can send announcements" };
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = AnnouncementSchema.safeParse(raw);
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const { subject, body, sendEmail: sendEmailFlag, sendSms: sendSmsFlag } = parsed.data;
  const { subject: emailSubject, html } = announcementEmail({ subject, body });
  const sms = announcementSms({ body });
  const shouldEmail = sendEmailFlag === "true";
  const shouldSms = sendSmsFlag === "true";

  const tenants = await prisma.user.findMany({
    where: { role: "TENANT", active: true },
    select: { id: true },
  });

  for (const tenant of tenants) {
    await notify({
      userId: tenant.id,
      subject: emailSubject,
      body,
      emailHtml: shouldEmail ? html : undefined,
      smsMessage: shouldSms ? sms : undefined,
      sendEmail: shouldEmail,
      sendSms: shouldSms,
    });
  }

  revalidatePath("/admin/announcements");
  revalidatePath("/notifications");
  return { message: `Announcement sent to ${tenants.length} tenant${tenants.length === 1 ? "" : "s"}` };
}

export async function sendRentRemindersAction(_state: ActionState, _formData: FormData): Promise<ActionState> {
  const session = await requireAuth();
  if (!["ADMIN", "STAFF"].includes(session.user.role)) {
    return { message: "Only admins can send rent reminders" };
  }

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const formatCedis = (amount: number) => `GHS ${(amount / 100).toFixed(2)}`;

  const tenancies = await prisma.tenancy.findMany({
    where: {
      OR: [{ endDate: null }, { endDate: { gte: now } }],
    },
    include: { tenant: true, room: true },
  });

  let sent = 0;
  for (const tenancy of tenancies) {
    const dueDay = tenancy.startDate.getDate();
    const dueDate = new Date(now.getFullYear(), now.getMonth(), dueDay);
    if (now < dueDate) continue;

    const paidThisMonth = await prisma.rentPayment.count({
      where: {
        tenancyId: tenancy.id,
        status: "CONFIRMED",
        billId: null,
        createdAt: { gte: monthStart, lt: monthEnd },
      },
    });
    if (paidThisMonth > 0) continue;

    const amount = formatCedis(tenancy.monthlyRent);
    const dueDateText = dueDate.toLocaleDateString();
    const { subject, html } = rentReminderEmail({
      tenantName: tenancy.tenant.name,
      roomNumber: tenancy.room.number,
      amount,
      dueDate: dueDateText,
    });
    const sms = rentReminderSms({ amount, dueDate: dueDateText });
    await notify({
      userId: tenancy.tenant.id,
      subject,
      body: `Your rent of ${amount} for room ${tenancy.room.number} is due on ${dueDateText}.`,
      emailHtml: html,
      smsMessage: sms,
    });
    sent++;
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/notifications");
  return { message: `Rent reminders sent to ${sent} tenant${sent === 1 ? "" : "s"}` };
}
