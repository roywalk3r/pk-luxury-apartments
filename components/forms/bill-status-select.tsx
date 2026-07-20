"use client";
import { useActionState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { updateBillAction } from "@/lib/actions/bills";
import { FormToast } from "@/components/forms/form-toast";

export function BillStatusSelect({ id, status }: { id: string; status: string }) {
  const action = updateBillAction.bind(null, id);
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} name={`bill-${id}`}>
      <FormToast state={state} />
      <Select name="status" defaultValue={status} onValueChange={() => formAction(new FormData(document.forms.namedItem(`bill-${id}`) as HTMLFormElement))} disabled={pending}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="UNPAID">Unpaid</SelectItem>
          <SelectItem value="PAID">Paid</SelectItem>
          <SelectItem value="OVERDUE">Overdue</SelectItem>
        </SelectContent>
      </Select>
    </form>
  );
}
