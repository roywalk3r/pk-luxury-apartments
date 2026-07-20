"use server";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { UpdateProfileSchema, ChangePasswordSchema, type ActionState } from "@/lib/validation";

async function requireTenant() {
  const session = await auth();
  if (!session || session.user.role !== "TENANT") throw new Error("Unauthorized");
  return session;
}

const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "profiles");
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function updateProfileAction(_: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireTenant();
  const parsed = UpdateProfileSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone") ?? "",
  });
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors };
  await prisma.user.update({
    where: { id: session.user.id },
    data: { name: parsed.data.name, phone: parsed.data.phone || null },
  });
  revalidatePath("/profile");
  return { message: "Profile updated" };
}

export async function uploadProfileImageAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState & { profileImageUrl?: string }> {
  const session = await requireTenant();
  const file = formData.get("image") as File | null;
  if (!file || file.size === 0) return { errors: { image: ["Select an image"] } };
  if (!ALLOWED_TYPES.includes(file.type)) return { errors: { image: ["Only JPG, PNG or WEBP images are allowed"] } };
  if (file.size > MAX_FILE_SIZE) return { errors: { image: ["Image must be smaller than 2 MB"] } };

  const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const filename = `${session.user.id}-${Date.now()}.${ext}`;
  const filepath = path.join(UPLOAD_DIR, filename);
  const publicUrl = `/images/profiles/${filename}`;

  const bytes = await file.arrayBuffer();
  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(filepath, Buffer.from(bytes));

  await prisma.user.update({ where: { id: session.user.id }, data: { profileImageUrl: publicUrl } });
  revalidatePath("/profile");
  return { message: "Profile picture updated", profileImageUrl: publicUrl };
}

export async function changePasswordAction(_: ActionState, formData: FormData): Promise<ActionState> {
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
