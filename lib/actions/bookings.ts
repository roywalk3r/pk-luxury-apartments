"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { CreateBookingSchema, type ActionState } from "@/lib/validation";
import { auth } from "@/lib/auth";
import { flashMessage } from "@/lib/flash";
import { notifyAdmins } from "@/lib/actions/notifications";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}


export async function createBookingAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = CreateBookingSchema.safeParse({
    roomId: formData.get("roomId"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    preferredMoveInDate: formData.get("preferredMoveInDate") || undefined,
    message: formData.get("message") ?? "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const room = await prisma.room.findUnique({ where: { id: parsed.data.roomId } });
  if (!room || room.status !== "AVAILABLE") {
    return { errors: { roomId: ["Room is no longer available"] } };
  }

  const prospect = await prisma.user.upsert({
    where: { email: parsed.data.email },
    update: { name: parsed.data.name, phone: parsed.data.phone },
    create: {
      email: parsed.data.email,
      name: parsed.data.name,
      phone: parsed.data.phone,
      role: "PROSPECT",
      passwordHash: "",
    },
  });

  const booking = await prisma.bookingRequest.create({
    data: {
      roomId: parsed.data.roomId,
      prospectId: prospect.id,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      preferredMoveInDate: parsed.data.preferredMoveInDate,
      message: parsed.data.message,
      status: "PENDING",
    },
  });

  await notifyAdmins({
    subject: "New booking request",
    body: `${parsed.data.name} requested to book room ${room.number}. Contact: ${parsed.data.phone}.`,
  });

  revalidatePath("/rooms");
  await flashMessage("Booking request submitted", "success");
  redirect(`/book/success?booking=${encodeURIComponent(booking.id)}`);
}

export async function getPendingBookings() {
  await requireAdmin();
  return prisma.bookingRequest.findMany({
    where: { status: "PENDING" },
    include: { room: true, prospect: true },
    orderBy: { createdAt: "desc" },
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function confirmBookingAction(id: string, _: ActionState, _formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const booking = await prisma.bookingRequest.findUnique({
    where: { id },
    include: { room: true, prospect: true },
  });
  if (!booking || booking.status !== "PENDING") {
    return { message: "Booking not found or already processed" };
  }
  if (!booking.prospect) {
    return { message: "Prospect record missing" };
  }
  if (booking.room.status !== "AVAILABLE") {
    return { message: "Room is no longer available" };
  }

  const tempPassword = Math.random().toString(36).substring(2, 10);

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: booking.prospectId! },
      data: {
        role: "TENANT",
        passwordHash: await bcrypt.hash(tempPassword, 12),
        active: true,
      },
    });
    await tx.tenancy.create({
      data: {
        tenantId: booking.prospectId!,
        roomId: booking.roomId,
        startDate: booking.preferredMoveInDate ?? new Date(),
        monthlyRent: booking.room.monthlyRent,
      },
    });
    await tx.room.update({ where: { id: booking.roomId }, data: { status: "OCCUPIED" } });
    await tx.bookingRequest.update({ where: { id }, data: { status: "CONFIRMED" } });
    await tx.auditLog.create({
      data: { userId: session.user.id, action: "booking.confirm", entityType: "BookingRequest", entityId: id },
    });
  });

  revalidatePath("/admin/bookings");
  revalidatePath("/admin/tenants");
  revalidatePath("/admin/rooms");
  revalidatePath("/dashboard");
  await flashMessage(`Booking confirmed. Temporary password: ${tempPassword}`, "success");
  redirect("/admin/bookings");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function rejectBookingAction(id: string, _: ActionState, _formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const booking = await prisma.bookingRequest.findUnique({ where: { id } });
  if (!booking || booking.status !== "PENDING") {
    return { message: "Booking not found or already processed" };
  }

  await prisma.bookingRequest.update({ where: { id }, data: { status: "REJECTED" } });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "booking.reject", entityType: "BookingRequest", entityId: id },
  });

  revalidatePath("/admin/bookings");
  await flashMessage("Booking rejected", "info");
  redirect("/admin/bookings");
}
