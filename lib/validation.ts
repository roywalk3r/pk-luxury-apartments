import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const CreateRoomSchema = z.object({
  number: z.string().min(1, "Room number is required"),
  type: z.string().min(1, "Type is required"),
  size: z.string().min(1, "Size is required"),
  monthlyRent: z.coerce.number().int().positive("Rent must be positive (in pesewas)"),
  description: z.string().optional().default(""),
});

export const UpdateRoomSchema = CreateRoomSchema.extend({
  status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE"]),
});

export const CreateTenantSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional().default(""),
  password: z.string().min(6, "Password must be at least 6 characters"),
  roomId: z.string().min(1, "Room is required"),
  monthlyRent: z.coerce.number().int().positive("Rent must be positive (in pesewas)"),
});

export const UpdateTenantSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional().default(""),
  active: z.coerce.boolean(),
});

export const UpdateProfileSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional().default(""),
  profileImageUrl: z.string().url().optional().or(z.literal("")),
});

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm your new password"),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ActionState = {
  errors?: Record<string, string[]>;
  message?: string;
} | undefined;

export type ServerAction = (state: ActionState, formData: FormData) => Promise<ActionState>;
