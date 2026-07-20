"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createBookingAction } from "@/lib/actions/bookings";
import { FormToast } from "@/components/forms/form-toast";

export function BookingForm({ roomId }: { roomId: string }) {
  const [state, formAction, pending] = useActionState(createBookingAction, undefined);
  return (
    <form action={formAction} className="space-y-4">
      <FormToast state={state} />
      <input type="hidden" name="roomId" value={roomId} />
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" placeholder="Your full name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="e.g. 024 000 0000" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="preferredMoveInDate">Preferred move-in date</Label>
        <Input id="preferredMoveInDate" name="preferredMoveInDate" type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" name="message" placeholder="Any extra details..." />
      </div>
      {state?.errors && Object.entries(state.errors).map(([k, v]) => (
        <p key={k} className="text-sm text-red-600">{v[0]}</p>
      ))}
      <Button type="submit" className="w-full" disabled={pending}>Submit booking request</Button>
    </form>
  );
}
