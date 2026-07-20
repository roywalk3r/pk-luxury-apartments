"use client";

import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
  message: string | null;
  type?: "success" | "error" | "info";
};

export function FlashToast({ message, type = "info" }: Props) {
  useEffect(() => {
    if (!message) return;
    if (type === "success") toast.success(message);
    else if (type === "error") toast.error(message);
    else toast(message);
  }, [message, type]);

  return null;
}
