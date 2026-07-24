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
  imageUrl: z.string().url("Enter a valid image URL").optional().default(""),
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
  imageUrl: z.string().url("Enter a valid image URL").optional().default(""),
});

export const UpdateTenantSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional().default(""),
  active: z.coerce.boolean(),
});

export const UpdateProfileSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional().default(""),
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

export const CreatePaymentSchema = z.object({
  tenancyId: z.string().min(1, "Tenancy is required"),
  amount: z.coerce.number().int().positive("Amount must be positive (in pesewas)"),
  method: z.enum(["MOMO", "VISA", "CASH", "OTHER"]),
  reference: z.string().optional().default(""),
  paidAt: z.coerce.date().optional(),
});

export const UpdatePaymentSchema = z.object({
  status: z.enum(["PENDING", "CONFIRMED", "FAILED"]),
});

export const CreateUtilityBillSchema = z.object({
  tenancyId: z.string().min(1, "Tenancy is required"),
  amount: z.coerce.number().int().positive("Amount must be positive (in pesewas)"),
  dueDate: z.coerce.date(),
});

export const UpdateUtilityBillSchema = z.object({
  status: z.enum(["UNPAID", "PAID", "OVERDUE"]),
});

export const CreateMaintenanceRequestSchema = z.object({
  roomId: z.string().min(1, "Room is required"),
  category: z.string().min(1, "Category is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
});

export const UpdateMaintenanceRequestSchema = z.object({
  status: z.enum(["OPEN", "ASSIGNED", "IN_PROGRESS", "RESOLVED", "CLOSED"]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),
  assignedToId: z.string().optional().or(z.literal("")),
});

export const CreateBookingSchema = z.object({
  roomId: z.string().min(1, "Room is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  preferredMoveInDate: z.coerce.date().optional(),
  message: z.string().optional().default(""),
});

export const MarkNotificationReadSchema = z.object({
  id: z.string().min(1),
});

export const AnnouncementSchema = z.object({
  subject: z.string().min(2, "Subject is required"),
  body: z.string().min(2, "Body is required"),
  sendEmail: z.enum(["true", "false"]).optional().default("false"),
  sendSms: z.enum(["true", "false"]).optional().default("false"),
});

export const CreateEquipmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().optional().default(""),
  location: z.string().optional().default(""),
  serialNumber: z.string().optional().default(""),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  lifespanMonths: z.coerce.number().int().positive("Lifespan must be a positive number of months"),
  warrantyExpiry: z.string().optional().default(""),
  lastServicedAt: z.string().optional().default(""),
  status: z.enum(["ACTIVE", "UNDER_MAINTENANCE", "RETIRED", "REPLACED"]).default("ACTIVE"),
  notes: z.string().optional().default(""),
});

export const UpdateEquipmentSchema = CreateEquipmentSchema;

export type ActionState = {
  errors?: Record<string, string[]>;
  message?: string;
} | undefined;

export type ServerAction = (state: ActionState, formData: FormData) => Promise<ActionState>;
