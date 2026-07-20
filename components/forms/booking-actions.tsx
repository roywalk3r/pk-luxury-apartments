"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { confirmBookingAction, rejectBookingAction } from "@/lib/actions/bookings";
import { FormToast } from "@/components/forms/form-toast";

export function BookingActions({ id }: { id: string }) {
  const [confirmState, confirmAction, confirmPending] = useActionState(confirmBookingAction.bind(null, id), undefined);
  const [rejectState, rejectAction, rejectPending] = useActionState(rejectBookingAction.bind(null, id), undefined);

  return (
    <div className="flex items-center gap-2">
      <FormToast state={confirmState ?? rejectState} />
      <form action={confirmAction}>
        <Button type="submit" size="sm" disabled={confirmPending || rejectPending}>
          {confirmPending ? "Confirming..." : "Confirm"}
        </Button>
      </form>
      <form action={rejectAction}>
        <Button type="submit" size="sm" variant="outline" disabled={confirmPending || rejectPending}>
          {rejectPending ? "Rejecting..." : "Reject"}
        </Button>
      </form>
    </div>
  );
}
