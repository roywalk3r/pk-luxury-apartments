"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createMaintenanceRequestAction } from "@/lib/actions/maintenance";
import { FormToast } from "@/components/forms/form-toast";

type Room = { id: string; number: string };

export function TenantMaintenanceForm({ rooms }: { rooms: Room[] }) {
  const [state, formAction, pending] = useActionState(createMaintenanceRequestAction, undefined);
  return (
    <form action={formAction} className="space-y-4">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="roomId">Room</Label>
        <Select name="roomId" defaultValue={rooms[0]?.id}>
          <SelectTrigger><SelectValue placeholder="Select room" /></SelectTrigger>
          <SelectContent>
            {rooms.map((r) => (
              <SelectItem key={r.id} value={r.id}>Room {r.number}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select name="category">
          <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Plumbing">Plumbing</SelectItem>
            <SelectItem value="Electrical">Electrical</SelectItem>
            <SelectItem value="Carpentry">Carpentry</SelectItem>
            <SelectItem value="Painting">Painting</SelectItem>
            <SelectItem value="Appliance">Appliance</SelectItem>
            <SelectItem value="Security">Security</SelectItem>
            <SelectItem value="Cleaning">Cleaning</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="e.g. Leaking kitchen tap" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" placeholder="Describe the issue in detail..." required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priority">Priority</Label>
        <Select name="priority" defaultValue="MEDIUM">
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="LOW">Low</SelectItem>
            <SelectItem value="MEDIUM">Medium</SelectItem>
            <SelectItem value="HIGH">High</SelectItem>
            <SelectItem value="URGENT">Urgent</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {state?.errors && Object.entries(state.errors).map(([k, v]) => (
        <p key={k} className="text-sm text-red-600">{v[0]}</p>
      ))}
      <Button type="submit" className="w-full" disabled={pending}>Submit request</Button>
    </form>
  );
}
