"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendAnnouncementAction } from "@/lib/actions/notifications";
import { FormToast } from "@/components/forms/form-toast";

export function AnnouncementForm() {
  const [state, formAction, pending] = useActionState(sendAnnouncementAction, undefined);
  return (
    <form action={formAction} className="space-y-4 max-w-xl">
      <FormToast state={state} />
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="e.g. Water supply interruption" required />
        {state?.errors?.subject && <p className="text-sm text-destructive">{state.errors.subject[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="body">Message</Label>
        <Textarea id="body" name="body" rows={5} placeholder="Write the announcement here..." required />
        {state?.errors?.body && <p className="text-sm text-destructive">{state.errors.body[0]}</p>}
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <input id="sendEmail" name="sendEmail" type="checkbox" value="true" defaultChecked className="h-4 w-4 rounded border-input text-primary focus:ring-primary" />
          <Label htmlFor="sendEmail" className="font-normal">Send email</Label>
        </div>
        <div className="flex items-center gap-2">
          <input id="sendSms" name="sendSms" type="checkbox" value="true" defaultChecked className="h-4 w-4 rounded border-input text-primary focus:ring-primary" />
          <Label htmlFor="sendSms" className="font-normal">Send SMS</Label>
        </div>
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send announcement"}
      </Button>
    </form>
  );
}
