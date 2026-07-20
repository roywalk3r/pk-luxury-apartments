"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createRoomAction, updateRoomAction } from "@/lib/actions/rooms";
import { FormToast } from "@/components/forms/form-toast";

type Room = { id: string; number: string; type: string; size: string; monthlyRent: number; description?: string | null; status?: "AVAILABLE" | "OCCUPIED" | "MAINTENANCE" };

export function RoomForm({ room }: { room?: Room }) {
  const action = room ? updateRoomAction.bind(null, room.id) : createRoomAction;
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="number">Room number</Label>
        <Input id="number" name="number" required defaultValue={room?.number} />
        {state?.errors?.number?.[0] && <p className="text-sm text-red-600">{state.errors.number[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Input id="type" name="type" required defaultValue={room?.type} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="size">Size</Label>
        <Input id="size" name="size" required defaultValue={room?.size} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="monthlyRent">Monthly rent (pesewas)</Label>
        <Input id="monthlyRent" name="monthlyRent" type="number" required defaultValue={room?.monthlyRent} />
        <p className="text-xs text-muted-foreground">GHS value × 100 (e.g. 150000 = GHS 1,500.00)</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" name="description" defaultValue={room?.description ?? ""} />
      </div>
      {room && (
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select name="status" defaultValue={room.status}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="AVAILABLE">Available</SelectItem>
              <SelectItem value="OCCUPIED">Occupied</SelectItem>
              <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <Button type="submit" disabled={pending}>{room ? "Update room" : "Create room"}</Button>
    </form>
  );
}
