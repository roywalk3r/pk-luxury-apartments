"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { CreateBookingSchema, type ActionState } from "@/lib/validation";
import { redirect } from "next/navigation";
import { flashMessage } from "@/lib/flash";
import { notifyBookingRequest, notifyAdmins } from "@/lib/actions/notifications";

export async function createBookingAction(_: ActionState, formData: FormData): Promise<ActionState> {
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

  await notifyBookingRequest({
    userId: prospect.id,
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    roomNumber: room.number,
  });

  await notifyAdmins({
    subject: "New booking request",
    body: `${parsed.data.name} requested to book room ${room.number}. Contact: ${parsed.data.phone}.`,
  });

  revalidatePath("/rooms");
  await flashMessage("Booking request submitted", "success");
  redirect(`/rooms?booked=${encodeURIComponent(parsed.data.roomId)}`);
}
