"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfileAction } from "@/lib/actions/profile";

export function ProfileForm({
  defaults,
}: {
  defaults: { name: string; phone: string; profileImageUrl: string };
}) {
  const [state, formAction, pending] = useActionState(updateProfileAction, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required defaultValue={defaults.name} />
        {state?.errors?.name?.[0] && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" defaultValue={defaults.phone} />
      </div>
      <div>
        <Label htmlFor="profileImageUrl">Profile image URL</Label>
        <Input id="profileImageUrl" name="profileImageUrl" defaultValue={defaults.profileImageUrl} />
      </div>
      {state?.message && <p className="text-sm text-muted-foreground">{state.message}</p>}
      <Button type="submit" disabled={pending}>{pending ? "Saving..." : "Save"}</Button>
    </form>
  );
}
