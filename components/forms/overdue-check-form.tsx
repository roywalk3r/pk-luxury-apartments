"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { detectOverdueBillsAction } from "@/lib/actions/bills";
import { FormToast } from "@/components/forms/form-toast";

export function OverdueCheckForm() {
  const [state, formAction, pending] = useActionState(detectOverdueBillsAction, undefined);
  return (
    <form action={formAction} className="flex items-center gap-3">
      <FormToast state={state} />
      <Button type="submit" disabled={pending} variant="outline">
        {pending ? "Checking..." : "Run overdue check"}
      </Button>
    </form>
  );
}
