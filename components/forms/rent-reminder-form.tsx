"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendRentRemindersAction } from "@/lib/actions/notifications";
import { FormToast } from "@/components/forms/form-toast";

export function RentReminderForm() {
  const [state, formAction, pending] = useActionState(sendRentRemindersAction, undefined);
  return (
    <form action={formAction} className="flex items-center gap-3">
      <FormToast state={state} />
      <Button type="submit" disabled={pending} variant="outline">
        {pending ? "Sending..." : "Send rent reminders"}
      </Button>
    </form>
  );
}
