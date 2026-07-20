"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createPaymentAction } from "@/lib/actions/payments";
import { FormToast } from "@/components/forms/form-toast";

type Tenancy = { id: string; monthlyRent: number; tenant: { name: string }; room: { number: string } };

export function PaymentForm({ tenancies, defaultTenancyId }: { tenancies: Tenancy[]; defaultTenancyId?: string }) {
  const selected = tenancies.find((t) => t.id === defaultTenancyId) || tenancies[0];
  const [state, formAction, pending] = useActionState(createPaymentAction, undefined);
  return (
    <form action={formAction} className="space-y-4">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="tenancyId">Tenant / Room</Label>
        <Select name="tenancyId" defaultValue={selected.id}>
          <SelectTrigger><SelectValue placeholder="Select tenant" /></SelectTrigger>
          <SelectContent>
            {tenancies.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.tenant.name} — Room {t.room.number} (GHS {(t.monthlyRent / 100).toFixed(2)})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (pesewas)</Label>
        <Input id="amount" name="amount" type="number" min={1} defaultValue={selected.monthlyRent} required />
        <p className="text-xs text-muted-foreground">Enter amount in pesewas (e.g. 150000 = GHS 1,500.00)</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="method">Payment method</Label>
        <Select name="method" defaultValue="MOMO">
          <SelectTrigger><SelectValue placeholder="Select method" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="MOMO">Mobile Money</SelectItem>
            <SelectItem value="VISA">Visa / Card</SelectItem>
            <SelectItem value="CASH">Cash</SelectItem>
            <SelectItem value="OTHER">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reference">Reference / Transaction ID</Label>
        <Input id="reference" name="reference" placeholder="Optional" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="paidAt">Payment date</Label>
        <Input id="paidAt" name="paidAt" type="date" defaultValue={new Date().toISOString().split("T")[0]} required />
      </div>
      {state?.errors && Object.entries(state.errors).map(([k, v]) => (
        <p key={k} className="text-sm text-red-600">{v[0]}</p>
      ))}
      <Button type="submit" className="w-full" disabled={pending}>Record payment</Button>
    </form>
  );
}
