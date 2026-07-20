import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { notify } from "@/lib/actions/notifications";
import { rentReminderEmail } from "@/lib/services/email";
import { rentReminderSms } from "@/lib/services/sms";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

  return NextResponse.json({ ok: true, sent });
}
