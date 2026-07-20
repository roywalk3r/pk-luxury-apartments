"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { deleteEquipmentAction } from "@/lib/actions/equipment";
import { FormToast } from "@/components/forms/form-toast";

export function DeleteEquipmentButton({ id }: { id: string }) {
  const action = deleteEquipmentAction.bind(null, id);
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <form action={formAction} className="inline">
      <FormToast state={state} />
      <Button type="submit" variant="ghost" size="sm" disabled={pending} className="text-destructive hover:text-destructive">
        {pending ? "Deleting..." : "Delete"}
      </Button>
    </form>
  );
}
