"use client";

import { useActionState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initiateBillPayment } from "@/lib/actions/payments";
import { FormToast } from "@/components/forms/form-toast";

export function BillPayForm({ billId }: { billId: string }) {
  const [state, formAction, pending] = useActionState(initiateBillPayment, undefined);

  return (
    <form action={formAction} className="inline-flex items-center">
      <input type="hidden" name="billId" value={billId} />
      <FormToast state={state} />
      <Button type="submit" size="sm" variant="outline" className="gap-1" disabled={pending}>
        <CreditCard className="h-3.5 w-3.5" />
        {pending ? "Starting..." : "Pay now"}
      </Button>
    </form>
  );
}
