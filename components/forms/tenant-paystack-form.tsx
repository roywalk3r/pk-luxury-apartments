"use client";

import { useActionState } from "react";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initiateTenantPayment } from "@/lib/actions/payments";
import { FormToast } from "@/components/forms/form-toast";

type ActiveTenancy = {
  id: string;
  monthlyRent: number;
  room: {
    number: string;
    type: string;
  };
};

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

export function TenantPaystackForm({ tenancies }: { tenancies: ActiveTenancy[] }) {
  const [state, formAction, pending] = useActionState(initiateTenantPayment, undefined);
  const defaultTenancy = tenancies[0];

  if (!defaultTenancy) {
    return (
      <p className="text-sm text-muted-foreground">
        No active tenancy is available for online rent payment.
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="tenancyId">Room</Label>
        <select
          id="tenancyId"
          name="tenancyId"
          defaultValue={defaultTenancy.id}
          className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {tenancies.map((tenancy) => (
            <option key={tenancy.id} value={tenancy.id}>
              Room {tenancy.room.number} · {tenancy.room.type} · {formatCedis(tenancy.monthlyRent)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount in pesewas</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          min={100}
          step={1}
          defaultValue={defaultTenancy.monthlyRent}
          required
        />
        <p className="text-xs text-muted-foreground">
          Example: 150000 means GHS 1,500.00. Paystack will open Mobile Money and card checkout.
        </p>
      </div>

      {state?.errors &&
        Object.entries(state.errors).map(([field, messages]) => (
          <p key={field} className="text-sm text-destructive">
            {messages?.[0]}
          </p>
        ))}

      <Button type="submit" className="w-full gap-2" disabled={pending}>
        <CreditCard className="h-4 w-4" />
        {pending ? "Starting checkout..." : "Pay with Paystack"}
      </Button>
    </form>
  );
}
