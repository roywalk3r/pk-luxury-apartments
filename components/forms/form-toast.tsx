"use client";

import { useEffect } from "react";
import { toast } from "sonner";

type FormState = { message?: string; errors?: Record<string, string[]>; [key: string]: unknown } | undefined;

export function FormToast({ state }: { state: FormState }) {
  useEffect(() => {
    if (state?.message) toast(state.message);
    if (state?.errors) {
      Object.values(state.errors)
        .flat()
        .forEach((error) => toast.error(error));
    }
  }, [state]);

  return null;
}
