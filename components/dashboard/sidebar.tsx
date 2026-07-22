"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Home,
  Users,
  CalendarCheck,
  CreditCard,
  Droplets,
  Wrench,
  Package,
  BarChart3,
  Megaphone,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";

type NavItem = { href: string; label: string; icon: LucideIcon };
type NavSection = { title: string; items: NavItem[] };

const adminSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/admin/reports", label: "Reports", icon: BarChart3 },
    ],
  },
  {
    title: "Property",
    items: [
      { href: "/admin/rooms", label: "Rooms", icon: Home },
      { href: "/admin/equipment", label: "Equipment", icon: Package },
    ],
  },
  {
    title: "People",
    items: [
      { href: "/admin/tenants", label: "Tenants", icon: Users },
      { href: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
    ],
  },
  {
    title: "Operations",
    items: [
      { href: "/admin/payments", label: "Payments", icon: CreditCard },
      { href: "/admin/bills", label: "Bills", icon: Droplets },
      { href: "/admin/maintenance", label: "Maintenance", icon: Wrench },
      { href: "/admin/announcements", label: "Announcements", icon: Megaphone },
    ],
  },
];

const tenantSections: NavSection[] = [
  {
    title: "My Home",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/profile", label: "My profile", icon: Settings },
    ],
  },
  {
    title: "Activity",
    items: [
      { href: "/payments", label: "Payments", icon: CreditCard },
      { href: "/bills", label: "Bills", icon: Droplets },
      { href: "/maintenance", label: "Maintenance", icon: Wrench },
      { href: "/notifications", label: "Notifications", icon: Bell },
    ],
  },
];

export function Sidebar({ role, userName }: { role: "ADMIN" | "STAFF" | "TENANT"; userName?: string | null }) {
  const pathname = usePathname();
  const sections = role === "TENANT" ? tenantSections : adminSections;

  return (
    <aside className="app-sidebar">
      <Link href="/" className="app-sidebar-logo">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl gold-gradient shadow-sm">
          <Image src="/favicon.svg" alt="PK" width={20} height={20} className="invert" />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold">PK Luxury</span>
          <span className="text-[10px] font-medium text-muted-foreground">Apartment system</span>
        </div>
      </Link>

      <div className="mt-2 flex-1 space-y-4">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="app-sidebar-section">{section.title}</div>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="app-sidebar-link"
                    data-active={active ? "true" : "false"}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border bg-muted/40 p-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {userName?.slice(0, 1).toUpperCase() ?? "U"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold leading-tight">{userName ?? "Account"}</p>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {role === "TENANT" ? "Resident" : role === "STAFF" ? "Staff" : "Administrator"}
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-muted-foreground transition-colors hover:text-destructive"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
