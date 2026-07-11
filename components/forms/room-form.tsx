"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { type ServerAction } from "@/lib/validation";

type Props = {
  action: ServerAction;
  defaults?: {
    number?: string;
    type?: string;
    size?: string;
    monthlyRent?: number;
    description?: string;
    status?: "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";
  };
  submitLabel?: string;
};

export function RoomForm({ action, defaults, submitLabel = "Save" }: Props) {
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="number">Room number</Label>
        <Input id="number" name="number" required defaultValue={defaults?.number} />
        {state?.errors?.number?.[0] && <p className="text-sm text-red-600">{state.errors.number[0]}</p>}
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Input id="type" name="type" required defaultValue={defaults?.type} placeholder="1BR / 2BR / Studio" />
        {state?.errors?.type?.[0] && <p className="text-sm text-red-600">{state.errors.type[0]}</p>}
      </div>
      <div>
        <Label htmlFor="size">Size</Label>
        <Input id="size" name="size" required defaultValue={defaults?.size} placeholder="e.g. 45 sqm" />
        {state?.errors?.size?.[0] && <p className="text-sm text-red-600">{state.errors.size[0]}</p>}
      </div>
      <div>
        <Label htmlFor="monthlyRent">Monthly rent (pesewas)</Label>
        <Input
          id="monthlyRent" name="monthlyRent" type="number" min="1" required
          defaultValue={defaults?.monthlyRent}
        />
        {state?.errors?.monthlyRent?.[0] && (
          <p className="text-sm text-red-600">{state.errors.monthlyRent[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" defaultValue={defaults?.description} />
      </div>
      {defaults?.status !== undefined && (
        <div>
          <Label htmlFor="status">Status</Label>
          <input type="hidden" name="status" defaultValue={defaults.status} />
          <p className="text-sm text-muted-foreground mt-1">{defaults.status}</p>
        </div>
      )}
      <Button type="submit" disabled={pending}>{pending ? "Saving..." : submitLabel}</Button>
    </form>
  );
}
