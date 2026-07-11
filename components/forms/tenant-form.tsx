"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type ServerAction } from "@/lib/validation";

type Room = { id: string; number: string; monthlyRent: number };

type Props =
  | { mode: "create"; action: ServerAction; rooms: Room[]; defaults?: undefined; submitLabel?: string }
  | { mode: "edit"; action: ServerAction; rooms?: undefined; defaults: { name: string; phone: string; active: boolean }; submitLabel?: string };

export function TenantForm(props: Props) {
  const [state, formAction, pending] = useActionState(props.action, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required defaultValue={props.defaults?.name} />
        {state?.errors?.name?.[0] && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
      </div>
      {props.mode === "create" ? (
        <>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
            {state?.errors?.email?.[0] && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
          </div>
          <div>
            <Label htmlFor="password">Initial password</Label>
            <Input id="password" name="password" type="password" required minLength={6} />
            {state?.errors?.password?.[0] && (
              <p className="text-sm text-red-600">{state.errors.password[0]}</p>
            )}
          </div>
        </>
      ) : (
        <input type="hidden" name="email" value="" />
      )}
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" defaultValue={props.defaults?.phone} />
      </div>
      {props.mode === "create" && (
        <>
          <div>
            <Label htmlFor="roomId">Room</Label>
            <input type="hidden" name="roomId" value={props.rooms[0]?.id ?? ""} />
            <Select defaultValue={props.rooms[0]?.id}>
              <SelectTrigger><SelectValue placeholder="Select a room" /></SelectTrigger>
              <SelectContent>
                {props.rooms.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    Room {r.number} — GHS {(r.monthlyRent / 100).toFixed(2)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state?.errors?.roomId?.[0] && <p className="text-sm text-red-600">{state.errors.roomId[0]}</p>}
          </div>
          <div>
            <Label htmlFor="monthlyRent">Monthly rent (pesewas)</Label>
            <Input id="monthlyRent" name="monthlyRent" type="number" min="1" required defaultValue={props.rooms[0]?.monthlyRent} />
            {state?.errors?.monthlyRent?.[0] && (
              <p className="text-sm text-red-600">{state.errors.monthlyRent[0]}</p>
            )}
          </div>
        </>
      )}
      {props.mode === "edit" && (
        <div className="flex items-center gap-2">
          <input id="active" name="active" type="checkbox" defaultChecked={props.defaults.active} />
          <Label htmlFor="active">Account active</Label>
        </div>
      )}
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : (props.submitLabel ?? "Save")}
      </Button>
    </form>
  );
}
