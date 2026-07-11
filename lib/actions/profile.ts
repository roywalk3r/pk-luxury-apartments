"use server";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import {
  UpdateProfileSchema, ChangePasswordSchema, type ActionState,
} from "@/lib/validation";

async function requireTenant() {
  const session = await auth();
  if (!session || session.user.role !== "TENANT") throw new Error("Unauthorized");
  return session;
}

export async function updateProfileAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireTenant();
  const parsed = UpdateProfileSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone") ?? "",
    profileImageUrl: formData.get("profileImageUrl") ?? "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: parsed.data.name,
      phone: parsed.data.phone || null,
      profileImageUrl: parsed.data.profileImageUrl || null,
    },
  });
  revalidatePath("/profile");
  return { message: "Profile updated" };
}

export async function changePasswordAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireTenant();
  const parsed = ChangePasswordSchema.safeParse({
    currentPassword: formData.get("currentPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return { message: "User not found" };
  const ok = await bcrypt.compare(parsed.data.currentPassword, user.passwordHash);
  if (!ok) return { errors: { currentPassword: ["Incorrect current password"] } };
  const passwordHash = await bcrypt.hash(parsed.data.newPassword, 12);
  await prisma.user.update({ where: { id: session.user.id }, data: { passwordHash } });
  return { message: "Password changed" };
}
