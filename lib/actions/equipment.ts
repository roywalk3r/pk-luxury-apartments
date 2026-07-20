"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { CreateEquipmentSchema, UpdateEquipmentSchema, type ActionState } from "@/lib/validation";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

function parseOptionalDate(value: string): Date | undefined {
  return value ? new Date(value) : undefined;
}

export async function getEquipment() {
  await requireAdmin();
  return prisma.equipment.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getEquipmentById(id: string) {
  await requireAdmin();
  return prisma.equipment.findUnique({ where: { id } });
}

export async function createEquipmentAction(_state: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const raw = Object.fromEntries(formData.entries());
  const parsed = CreateEquipmentSchema.safeParse(raw);
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const {
    name,
    type,
    location,
    serialNumber,
    purchaseDate,
    lifespanMonths,
    warrantyExpiry,
    lastServicedAt,
    status,
    notes,
  } = parsed.data;

  await prisma.equipment.create({
    data: {
      name,
      type: type || null,
      location: location || null,
      serialNumber: serialNumber || null,
      purchaseDate: new Date(purchaseDate),
      lifespanMonths,
      warrantyExpiry: parseOptionalDate(warrantyExpiry),
      lastServicedAt: parseOptionalDate(lastServicedAt),
      status,
      notes: notes || null,
    },
  });

  revalidatePath("/admin/equipment");
  return { message: "Equipment added" };
}

export async function updateEquipmentAction(id: string, _state: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const raw = Object.fromEntries(formData.entries());
  const parsed = UpdateEquipmentSchema.safeParse(raw);
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const {
    name,
    type,
    location,
    serialNumber,
    purchaseDate,
    lifespanMonths,
    warrantyExpiry,
    lastServicedAt,
    status,
    notes,
  } = parsed.data;

  await prisma.equipment.update({
    where: { id },
    data: {
      name,
      type: type || null,
      location: location || null,
      serialNumber: serialNumber || null,
      purchaseDate: new Date(purchaseDate),
      lifespanMonths,
      warrantyExpiry: parseOptionalDate(warrantyExpiry),
      lastServicedAt: parseOptionalDate(lastServicedAt),
      status,
      notes: notes || null,
    },
  });

  revalidatePath("/admin/equipment");
  revalidatePath(`/admin/equipment/${id}`);
  return { message: "Equipment updated" };
}

export async function deleteEquipmentAction(id: string): Promise<ActionState> {
  await requireAdmin();
  await prisma.equipment.delete({ where: { id } });
  revalidatePath("/admin/equipment");
  return { message: "Equipment deleted" };
}
