import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { renderToBuffer } from "@react-pdf/renderer";
import { ReceiptDocument } from "@/components/receipts/receipt-pdf";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { paymentId } = await params;
  const payment = await prisma.rentPayment.findUnique({
    where: { id: paymentId },
    include: { tenancy: { include: { tenant: true, room: true } } },
  });

  if (!payment) {
    return NextResponse.json({ error: "Payment not found" }, { status: 404 });
  }

  const isOwner =
    session.user.role === "TENANT" && payment.tenancy.tenantId === session.user.id;
  const isAdminOrStaff =
    session.user.role === "ADMIN" || session.user.role === "STAFF";

  if (!isOwner && !isAdminOrStaff) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const buffer = await renderToBuffer(
    ReceiptDocument({
      tenantName: payment.tenancy.tenant.name,
      roomNumber: payment.tenancy.room.number,
      amount: `GHS ${(payment.amount / 100).toFixed(2)}`,
      method: payment.method,
      paidAt: payment.paidAt
        ? new Date(payment.paidAt).toLocaleDateString("en-GH")
        : "Pending",
      reference: payment.paystackReference || payment.reference || payment.id,
    })
  );

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="receipt-${paymentId}.pdf"`,
    },
  });
}
