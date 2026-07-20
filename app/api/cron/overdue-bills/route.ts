import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { notify, notifyAdmins } from "@/lib/actions/notifications";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const formatCedis = (amount: number) => `GHS ${(amount / 100).toFixed(2)}`;

  const overdue = await prisma.utilityBill.findMany({
    where: { status: "UNPAID", dueDate: { lt: now } },
    include: { tenancy: { include: { tenant: true, room: true } } },
  });

  if (overdue.length === 0) {
    return NextResponse.json({ ok: true, marked: 0 });
  }

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

  return NextResponse.json({ ok: true, marked: overdue.length });
}
