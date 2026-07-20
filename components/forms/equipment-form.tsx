"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createEquipmentAction, updateEquipmentAction } from "@/lib/actions/equipment";
import { FormToast } from "@/components/forms/form-toast";

type Equipment = {
  id: string;
  name: string;
  type?: string | null;
  location?: string | null;
  serialNumber?: string | null;
  purchaseDate: Date;
  lifespanMonths: number;
  warrantyExpiry?: Date | null;
  lastServicedAt?: Date | null;
  status: "ACTIVE" | "UNDER_MAINTENANCE" | "RETIRED" | "REPLACED";
  notes?: string | null;
};

function toDateInputValue(date?: Date | null) {
  if (!date) return "";
  const d = new Date(date);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

export function EquipmentForm({ equipment }: { equipment?: Equipment }) {
  const action = equipment
    ? updateEquipmentAction.bind(null, equipment.id)
    : createEquipmentAction;
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required defaultValue={equipment?.name} />
        {state?.errors?.name?.[0] && (
          <p className="text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Input id="type" name="type" defaultValue={equipment?.type ?? ""} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" defaultValue={equipment?.location ?? ""} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="serialNumber">Serial number</Label>
        <Input id="serialNumber" name="serialNumber" defaultValue={equipment?.serialNumber ?? ""} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="purchaseDate">Purchase date</Label>
        <Input
          id="purchaseDate"
          name="purchaseDate"
          type="date"
          required
          defaultValue={toDateInputValue(equipment?.purchaseDate)}
        />
        {state?.errors?.purchaseDate?.[0] && (
          <p className="text-sm text-red-600">{state.errors.purchaseDate[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lifespanMonths">Lifespan (months)</Label>
        <Input
          id="lifespanMonths"
          name="lifespanMonths"
          type="number"
          min={1}
          required
          defaultValue={equipment?.lifespanMonths}
        />
        {state?.errors?.lifespanMonths?.[0] && (
          <p className="text-sm text-red-600">{state.errors.lifespanMonths[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="warrantyExpiry">Warranty expiry</Label>
        <Input id="warrantyExpiry" name="warrantyExpiry" type="date" defaultValue={toDateInputValue(equipment?.warrantyExpiry)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastServicedAt">Last serviced</Label>
        <Input id="lastServicedAt" name="lastServicedAt" type="date" defaultValue={toDateInputValue(equipment?.lastServicedAt)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select name="status" defaultValue={equipment?.status ?? "ACTIVE"}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="UNDER_MAINTENANCE">Under maintenance</SelectItem>
            <SelectItem value="RETIRED">Retired</SelectItem>
            <SelectItem value="REPLACED">Replaced</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" rows={3} defaultValue={equipment?.notes ?? ""} />
      </div>
      <Button type="submit" disabled={pending}>
        {equipment ? "Update equipment" : "Add equipment"}
      </Button>
    </form>
  );
}
