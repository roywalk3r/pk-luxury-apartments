"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createBillAction } from "@/lib/actions/bills";
import { FormToast } from "@/components/forms/form-toast";

type Tenancy = { id: string; tenant: { name: string }; room: { number: string } };

export function BillForm({ tenancies }: { tenancies: Tenancy[] }) {
  const [state, formAction, pending] = useActionState(createBillAction, undefined);
  return (
    <form action={formAction} className="space-y-4">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="tenancyId">Tenant / Room</Label>
        <Select name="tenancyId">
          <SelectTrigger><SelectValue placeholder="Select tenant" /></SelectTrigger>
          <SelectContent>
            {tenancies.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.tenant.name} — Room {t.room.number}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (pesewas)</Label>
        <Input id="amount" name="amount" type="number" min={1} placeholder="e.g. 5000" required />
        <p className="text-xs text-muted-foreground">Enter amount in pesewas (e.g. 5000 = GHS 50.00)</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="dueDate">Due date</Label>
        <Input id="dueDate" name="dueDate" type="date" defaultValue={new Date().toISOString().split("T")[0]} required />
      </div>
      {state?.errors && Object.entries(state.errors).map(([k, v]) => (
        <p key={k} className="text-sm text-red-600">{v[0]}</p>
      ))}
      <Button type="submit" className="w-full" disabled={pending}>Post bill</Button>
    </form>
  );
}
