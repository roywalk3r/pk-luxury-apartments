"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  Menu,
  X,
  LogOut,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string; icon: LucideIcon };

const adminItems: NavItem[] = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/rooms", label: "Rooms", icon: Home },
  { href: "/admin/tenants", label: "Tenants", icon: Users },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/bills", label: "Bills", icon: Droplets },
  { href: "/admin/maintenance", label: "Maintenance", icon: Wrench },
  { href: "/admin/equipment", label: "Equipment", icon: Package },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/announcements", label: "Announcements", icon: Megaphone },
];

const tenantItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/payments", label: "Payments", icon: CreditCard },
  { href: "/bills", label: "Bills", icon: Droplets },
  { href: "/maintenance", label: "Maintenance", icon: Wrench },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/profile", label: "Profile", icon: Settings },
];

export function MobileNav({ role, userName }: { role: "ADMIN" | "STAFF" | "TENANT"; userName?: string | null }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = role === "TENANT" ? tenantItems : adminItems;

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-card text-foreground lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] overflow-y-auto border-r bg-card p-4 shadow-2xl lg:hidden">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl gold-gradient">
                  <Image src="/favicon.svg" alt="PK" width={20} height={20} className="invert" />
                </span>
                <span className="text-sm font-bold">PK Luxury</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="space-y-1">
              {items.map((item) => {
                const active = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                      active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 rounded-xl border bg-muted/40 p-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
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
        </>
      )}
    </>
  );
}
