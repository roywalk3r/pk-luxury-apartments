"use client";

import { useSyncExternalStore } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function subscribe(interval: number, callback: () => void) {
  const id = setInterval(callback, interval);
  return () => clearInterval(id);
}

function useNow(interval = 1000) {
  return useSyncExternalStore(
    (callback) => subscribe(interval, callback),
    () => new Date(),
    () => new Date()
  );
}

export function LiveClock({ className }: { className?: string }) {
  const now = useNow(1000);

  const formatted = now
    ? new Intl.DateTimeFormat("en-GH", {
        timeZone: "Africa/Accra",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
    : null;

  return (
    <Card className={cn("w-fit", className)}>
      <CardContent className="py-3 px-4">
        {!formatted ? (
          <Skeleton className="h-5 w-20" />
        ) : (
          <span className="text-sm font-medium tabular-nums">{formatted} GMT</span>
        )}
      </CardContent>
    </Card>
  );
}
