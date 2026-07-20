import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { renderToBuffer } from "@react-pdf/renderer";
import { ReceiptDocument } from "@/components/receipts/receipt-pdf";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ billId: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { billId } = await params;
  const bill = await prisma.utilityBill.findUnique({
    where: { id: billId },
    include: { tenancy: { include: { tenant: true, room: true } }, payments: true },
  });

  if (!bill) {
    return NextResponse.json({ error: "Bill not found" }, { status: 404 });
  }

  const isOwner = session.user.role === "TENANT" && bill.tenancy.tenantId === session.user.id;
  const isAdminOrStaff = session.user.role === "ADMIN" || session.user.role === "STAFF";

  if (!isOwner && !isAdminOrStaff) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const confirmedPayment = bill.payments.find((p) => p.status === "CONFIRMED");
  const buffer = await renderToBuffer(
    ReceiptDocument({
      title: "Water Bill Receipt",
      tenantName: bill.tenancy.tenant.name,
      roomNumber: bill.tenancy.room.number,
      amount: `GHS ${(bill.amount / 100).toFixed(2)}`,
      method: confirmedPayment?.method ?? "Paystack",
      paidAt: bill.paidAt
        ? new Date(bill.paidAt).toLocaleDateString("en-GH")
        : "Pending",
      reference: confirmedPayment?.paystackReference ?? confirmedPayment?.reference ?? bill.id,
    })
  );

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="water-bill-receipt-${billId}.pdf"`,
    },
  });
}
