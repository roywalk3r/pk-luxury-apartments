"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { NotificationBell } from "@/components/nav/notification-bell";
import type { ReactNode } from "react";

const labelMap: Record<string, string> = {
  "": "Home",
  admin: "Admin",
  tenant: "Tenant",
  "admin-dashboard": "Dashboard",
  "admin-rooms": "Rooms",
  "admin-equipment": "Equipment",
  "admin-tenants": "Tenants",
  "admin-bookings": "Bookings",
  "admin-payments": "Payments",
  "admin-bills": "Bills",
  "admin-maintenance": "Maintenance",
  "admin-reports": "Reports",
  "admin-announcements": "Announcements",
  "admin-payments-new": "Record payment",
  "admin-bills-new": "Post bill",
  "admin-rooms-new": "New room",
  "admin-tenants-new": "New tenant",
  "admin-equipment-new": "New equipment",
  "maintenance-new": "New request",
  "payments-verify": "Verify payment",
};

function formatSegment(seg: string) {
  if (labelMap[seg]) return labelMap[seg];
  if (seg.startsWith("[") && seg.endsWith("]")) return "Details";
  if (/^c[a-z0-9]{20,}$/i.test(seg)) return "Details";
  return seg.replace(/-/g, " ").replace(/\w/g, (c) => c.toUpperCase());
}

export function AppHeader({
  role,
  userName,
  title,
  description,
  actions,
}: {
  role: "ADMIN" | "STAFF" | "TENANT";
  userName?: string | null;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  const pathname = usePathname() || "";
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.length === 0 ? ["Home"] : segments.map(formatSegment);

  return (
    <header className="app-header">
      <div className="flex flex-1 items-center gap-3 min-w-0">
        <MobileNav role={role} userName={userName} />
        <div className="hidden min-w-0 flex-1 items-center gap-2 lg:flex">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
                <span className={i === crumbs.length - 1 ? "font-semibold text-foreground" : ""}>{crumb}</span>
              </span>
            ))}
          </nav>
        </div>
        <div className="lg:hidden min-w-0 flex-1 truncate">
          <h2 className="truncate text-sm font-semibold leading-tight">{title}</h2>
          {description && <p className="truncate text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {role === "TENANT" && <NotificationBell />}
        {actions}
      </div>
    </header>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}
