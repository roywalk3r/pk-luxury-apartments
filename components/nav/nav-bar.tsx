"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NotificationBell } from "./notification-bell";

export function NavBar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  if (status === "loading") return null;
  const role = session?.user?.role;

  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
  ];

  const adminLinks = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/rooms", label: "Rooms" },
    { href: "/admin/tenants", label: "Tenants" },
    { href: "/admin/bookings", label: "Bookings" },
    { href: "/admin/payments", label: "Payments" },
    { href: "/admin/bills", label: "Bills" },
    { href: "/admin/maintenance", label: "Maintenance" },
    { href: "/admin/reports", label: "Reports" },
  ];

  const tenantLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/payments", label: "Payments" },
    { href: "/bills", label: "Bills" },
    { href: "/maintenance", label: "Maintenance" },
    { href: "/notifications", label: "Notifications" },
  ];

  const roleLinks = role === "ADMIN" || role === "STAFF" ? adminLinks : role === "TENANT" ? tenantLinks : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <nav className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg gold-gradient text-white">
            <Building2 className="h-5 w-5" />
          </span>
          <span>PK Luxury Apartments</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {roleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {!session ? (
            <Link href="/login" className={buttonVariants({ size: "sm" })} title="Sign in">
              Sign in
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              {role === "TENANT" && <NotificationBell />}
              <Link href="/profile" className="text-muted-foreground hover:text-foreground">
                {session.user?.name}
              </Link>
              <Button size="sm" variant="ghost" onClick={() => signOut({ callbackUrl: "/login" })} title="Sign out">
                Sign out
              </Button>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4">
          <div className="flex flex-col gap-3 text-sm">
            {[...publicLinks, ...roleLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!session ? (
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm" }), "w-full justify-center")}
                onClick={() => setMenuOpen(false)}
              >
                Sign in
              </Link>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                className="justify-start px-0"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Sign out
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
