"use server";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import {
  CreateTenantSchema, UpdateTenantSchema, type ActionState,
} from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function createTenantAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = CreateTenantSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    password: formData.get("password"),
    roomId: formData.get("roomId"),
    monthlyRent: formData.get("monthlyRent"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const existing = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (existing) {
    return { errors: { email: ["A user with this email already exists"] } };
  }

  const room = await prisma.room.findUnique({ where: { id: parsed.data.roomId } });
  if (!room || room.status !== "AVAILABLE") {
    return { errors: { roomId: ["Room is not available"] } };
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);
  const user = await prisma.$transaction(async (tx) => {
    const created = await tx.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        passwordHash,
        role: "TENANT",
      },
    });
    await tx.tenancy.create({
      data: {
        tenantId: created.id,
        roomId: parsed.data.roomId,
        startDate: new Date(),
        monthlyRent: parsed.data.monthlyRent,
      },
    });
    const updated = await tx.room.updateMany({
      where: { id: parsed.data.roomId, status: "AVAILABLE" },
      data: { status: "OCCUPIED" },
    });
    if (updated.count === 0) {
      throw new Error("Room is not available");
    }
    await tx.auditLog.create({
      data: { userId: session.user.id, action: "tenant.create", entityType: "User", entityId: created.id },
    });
    return created;
  });
  revalidatePath("/admin/tenants");
  redirect("/admin/tenants");
}

export async function updateTenantAction(
  id: string,
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = UpdateTenantSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone") ?? "",
    active: formData.get("active") === "on",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.user.update({
    where: { id },
    data: { name: parsed.data.name, phone: parsed.data.phone || null, active: parsed.data.active },
  });
  await prisma.auditLog.create({
    data: { userId: session.user.id, action: "tenant.update", entityType: "User", entityId: id },
  });
  revalidatePath("/admin/tenants");
  revalidatePath(`/admin/tenants/${id}`);
  redirect("/admin/tenants");
}
