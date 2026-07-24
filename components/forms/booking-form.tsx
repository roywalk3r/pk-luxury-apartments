"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Loader2, Send } from "lucide-react";
import { createBookingAction } from "@/lib/actions/bookings";
import { FormToast } from "@/components/forms/form-toast";
import { cn } from "@/lib/utils";

type Props = {
  roomId: string;
  roomNumber: string;
};

export function BookingForm({ roomId, roomNumber }: Props) {
  const action = createBookingAction;
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-6">
      <FormToast state={state} />
      <input type="hidden" name="roomId" value={roomId} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Kwame Asante"
            required
            className={cn(state?.errors?.name && "border-destructive")}
          />
          {state?.errors?.name?.[0] && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className={cn(state?.errors?.email && "border-destructive")}
          />
          {state?.errors?.email?.[0] && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="024 000 0000"
            required
            className={cn(state?.errors?.phone && "border-destructive")}
          />
          {state?.errors?.phone?.[0] && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredMoveInDate" className="flex items-center gap-2">
            <Calendar className="size-4 text-muted-foreground" />
            Preferred move-in date
          </Label>
          <Input
            id="preferredMoveInDate"
            name="preferredMoveInDate"
            type="date"
            className={cn(state?.errors?.preferredMoveInDate && "border-destructive")}
          />
          {state?.errors?.preferredMoveInDate?.[0] && <p className="text-sm text-destructive">{state.errors.preferredMoveInDate[0]}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={`Tell us a bit about yourself and why you are interested in Room ${roomNumber}...`}
          rows={4}
          className={cn(state?.errors?.message && "border-destructive")}
        />
        {state?.errors?.message?.[0] && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Submitting request...
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Submit booking request
          </>
        )}
      </Button>
    </form>
  );
}
