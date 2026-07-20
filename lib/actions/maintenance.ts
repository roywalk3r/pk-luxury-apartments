"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { CreateMaintenanceRequestSchema, UpdateMaintenanceRequestSchema, type ActionState } from "@/lib/validation";
import { redirect } from "next/navigation";
import { flashMessage } from "@/lib/flash";
import { notifyMaintenanceUpdate, notifyAdmins } from "@/lib/actions/notifications";

async function requireAdmin() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    throw new Error("Unauthorized");
  }
  return session;
}

async function requireTenant() {
  const session = await auth();
  if (!session || session.user.role !== "TENANT") throw new Error("Unauthorized");
  return session;
}

export async function createMaintenanceRequestAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireTenant();
  const parsed = CreateMaintenanceRequestSchema.safeParse({
    roomId: formData.get("roomId"),
    category: formData.get("category"),
    title: formData.get("title"),
    description: formData.get("description"),
    priority: formData.get("priority") || "MEDIUM",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const tenancy = await prisma.tenancy.findFirst({
    where: { tenantId: session.user.id, roomId: parsed.data.roomId },
    include: { room: true },
  });
  if (!tenancy) return { errors: { roomId: ["You are not assigned to this room"] } };

  const request = await prisma.$transaction(async (tx) => {
    const r = await tx.maintenanceRequest.create({
      data: {
        tenantId: session.user.id,
        roomId: parsed.data.roomId,
        category: parsed.data.category,
        title: parsed.data.title,
        description: parsed.data.description,
        priority: parsed.data.priority,
        status: "OPEN",
      },
    });
    return r;
  });

  await notifyAdmins({
    subject: "New maintenance request",
    body: `${session.user.name} reported "${request.title}" in room ${tenancy.room.number}. Priority: ${request.priority}.`,
  });

  revalidatePath("/dashboard");
  revalidatePath("/admin/maintenance");
  await flashMessage("Maintenance request submitted", "success");
  redirect("/dashboard");
}

export async function updateMaintenanceRequestAction(id: string, _: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireAdmin();
  const parsed = UpdateMaintenanceRequestSchema.safeParse({
    status: formData.get("status"),
    priority: formData.get("priority"),
    assignedToId: formData.get("assignedToId") || "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };

  const existing = await prisma.maintenanceRequest.findUnique({
    where: { id },
    include: { tenant: true, room: true },
  });
  if (!existing) return { message: "Request not found" };

  await prisma.maintenanceRequest.update({
    where: { id },
    data: {
      status: parsed.data.status,
      priority: parsed.data.priority,
      assignedToId: parsed.data.assignedToId || null,
      resolvedAt: parsed.data.status === "RESOLVED" ? new Date() : existing.resolvedAt,
    },
  });

  await notifyMaintenanceUpdate({
    userId: existing.tenantId,
    tenantName: existing.tenant.name,
    title: existing.title,
    roomNumber: existing.room.number,
    status: parsed.data.status,
  });

  await prisma.auditLog.create({
    data: {
      userId: session.user.id,
      action: "maintenance.update",
      entityType: "MaintenanceRequest",
      entityId: id,
    },
  });

  revalidatePath("/admin/maintenance");
  revalidatePath("/dashboard");
  return { message: "Request updated" };
}

export async function getTenantMaintenanceRequests() {
  const session = await requireTenant();
  return prisma.maintenanceRequest.findMany({
    where: { tenantId: session.user.id },
    include: { room: true, assignedTo: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getAllMaintenanceRequests() {
  await requireAdmin();
  return prisma.maintenanceRequest.findMany({
    include: { tenant: true, room: true, assignedTo: true },
    orderBy: { createdAt: "desc" },
  });
}
