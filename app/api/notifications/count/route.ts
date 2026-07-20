import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ count: 0 });
  const count = await prisma.notification.count({
    where: { userId: session.user.id, status: "SENT", readAt: null },
  });
  return NextResponse.json({ count });
}
