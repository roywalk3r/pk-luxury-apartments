"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { CreateRoomSchema, UpdateRoomSchema, type ActionState } from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function createRoomAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = CreateRoomSchema.safeParse({
    number: formData.get("number"),
    type: formData.get("type"),
    size: formData.get("size"),
    monthlyRent: formData.get("monthlyRent"),
    description: formData.get("description") ?? "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  const room = await prisma.room.create({ data: parsed.data });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "room.create", entityType: "Room", entityId: room.id },
  });
  revalidatePath("/admin/rooms");
  redirect("/admin/rooms");
}

export async function updateRoomAction(
  id: string,
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = UpdateRoomSchema.safeParse({
    number: formData.get("number"),
    type: formData.get("type"),
    size: formData.get("size"),
    monthlyRent: formData.get("monthlyRent"),
    description: formData.get("description") ?? "",
    status: formData.get("status"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.room.update({ where: { id }, data: parsed.data });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "room.update", entityType: "Room", entityId: id },
  });
  revalidatePath("/admin/rooms");
  revalidatePath(`/admin/rooms/${id}`);
  redirect("/admin/rooms");
}

export async function archiveRoomAction(id: string) {
  const session = await requireAdmin();
  await prisma.room.update({ where: { id }, data: { status: "MAINTENANCE" } });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "room.archive", entityType: "Room", entityId: id },
  });
  revalidatePath("/admin/rooms");
}
