"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ReportFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();

  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    startTransition(() => router.replace(`${pathname}?${next.toString()}`));
  }

  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="space-y-1">
        <Label htmlFor="from" className="text-xs">From</Label>
        <Input
          id="from"
          type="date"
          defaultValue={params.get("from") ?? undefined}
          onChange={(e) => update("from", e.target.value)}
          className="w-auto"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="to" className="text-xs">To</Label>
        <Input
          id="to"
          type="date"
          defaultValue={params.get("to") ?? undefined}
          onChange={(e) => update("to", e.target.value)}
          className="w-auto"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="requestStatus" className="text-xs">Maintenance status</Label>
        <Select
          defaultValue={(params.get("requestStatus") ?? undefined) as string | undefined}
          onValueChange={(value) => update("requestStatus", value ?? "")}
        >
          <SelectTrigger id="requestStatus" className="w-40">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="OPEN">Open</SelectItem>
            <SelectItem value="ASSIGNED">Assigned</SelectItem>
            <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
            <SelectItem value="RESOLVED">Resolved</SelectItem>
            <SelectItem value="CLOSED">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {pending && <span className="text-xs text-muted-foreground">Updating...</span>}
    </div>
  );
}
