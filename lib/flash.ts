"use server";

import { cookies } from "next/headers";

type FlashType = "success" | "error" | "info";

type FlashPayload = { message: string; type: FlashType };

const FLASH_COOKIE = "flash";

export async function flashMessage(message: string, type: FlashType = "info") {
  const cookieStore = await cookies();
  cookieStore.set(FLASH_COOKIE, JSON.stringify({ message, type }), {
    maxAge: 10,
    path: "/",
  });
}

export async function getFlashMessage(): Promise<FlashPayload | null> {
  const cookieStore = await cookies();
  const value = cookieStore.get(FLASH_COOKIE)?.value;
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as FlashPayload;
    cookieStore.delete(FLASH_COOKIE);
    return parsed;
  } catch {
    return null;
  }
}
