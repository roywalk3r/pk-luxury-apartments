"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createTenantAction, updateTenantAction } from "@/lib/actions/tenants";
import { FormToast } from "@/components/forms/form-toast";

type Room = { id: string; number: string; monthlyRent: number };
type Tenant = { id: string; name: string; phone: string | null; active: boolean };

type Props = (
  | { mode: "create"; rooms: Room[]; tenant?: undefined; submitLabel?: string }
  | { mode: "edit"; tenant: Tenant; rooms?: undefined; submitLabel?: string }
);

export function TenantForm(props: Props) {
  const action = props.mode === "edit" ? updateTenantAction.bind(null, props.tenant.id) : createTenantAction;
  const tenant = props.mode === "edit" ? props.tenant : undefined;
  const rooms = props.mode === "create" ? props.rooms : [];
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required defaultValue={tenant?.name} />
        {state?.errors?.name?.[0] && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
      </div>
      {props.mode === "create" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
            {state?.errors?.email?.[0] && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Initial password</Label>
            <Input id="password" name="password" type="password" required minLength={6} />
          </div>
        </>
      )}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" defaultValue={tenant?.phone ?? ""} />
      </div>
      {props.mode === "create" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="roomId">Room</Label>
            <Select name="roomId" defaultValue={rooms[0]?.id}>
              <SelectTrigger><SelectValue placeholder="Select a room" /></SelectTrigger>
              <SelectContent>
                {rooms.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    Room {r.number} — GHS {(r.monthlyRent / 100).toFixed(2)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyRent">Monthly rent (pesewas)</Label>
            <Input id="monthlyRent" name="monthlyRent" type="number" required defaultValue={rooms[0]?.monthlyRent} />
          </div>
        </>
      )}
      {props.mode === "edit" && (
        <div className="flex items-center gap-2">
          <input id="active" name="active" type="checkbox" defaultChecked={tenant?.active} />
          <Label htmlFor="active">Active account</Label>
        </div>
      )}
      <Button type="submit" disabled={pending}>{props.submitLabel ?? (props.mode === "create" ? "Create tenant" : "Update tenant")}</Button>
    </form>
  );
}
