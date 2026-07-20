"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { exportReportsCsv } from "@/lib/actions/reports";
import { FormToast } from "@/components/forms/form-toast";
import { Download } from "lucide-react";

export function ReportExportButton({ from, to, requestStatus }: { from?: string; to?: string; requestStatus?: string }) {
  const [state, formAction, pending] = useActionState(exportReportsCsv, undefined);

  useEffect(() => {
    if (!state?.csv) return;
    const blob = new Blob([state.csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = state.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [state]);

  return (
    <form action={formAction} className="flex items-center gap-2">
      <FormToast state={state} />
      <input type="hidden" name="from" value={from ?? ""} />
      <input type="hidden" name="to" value={to ?? ""} />
      <input type="hidden" name="requestStatus" value={requestStatus ?? ""} />
      <Button type="submit" variant="outline" size="sm" disabled={pending}>
        <Download className="mr-2 h-4 w-4" />
        {pending ? "Exporting..." : "Export CSV"}
      </Button>
    </form>
  );
}
