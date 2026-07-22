"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function NotificationBell() {
  const { data: session } = useSession();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!session) return;
    async function load() {
      try {
        const res = await fetch("/api/notifications/count");
        if (res.ok) {
          const data = await res.json();
          setCount(data.count || 0);
        }
      } catch {
        // ignore
      }
    }
    load();
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, [session]);

  return (
    <Link href="/tenant/notifications" className="relative">
      <Bell className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </Link>
  );
}
