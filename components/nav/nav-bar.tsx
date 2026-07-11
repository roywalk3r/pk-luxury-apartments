"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";

export function NavBar() {
  const { data: session, status } = useSession();
  if (status === "loading") return null;
  const role = session?.user?.role;
  return (
    <header className="border-b">
      <nav className="flex items-center gap-4 p-4 max-w-6xl mx-auto">
        <Link href="/" className="font-bold">PK Apartments</Link>
        <div className="flex items-center gap-3 ml-auto text-sm">
          {(role === "ADMIN" || role === "STAFF") && (
            <>
              <Link href="/admin/dashboard">Admin</Link>
              <Link href="/admin/rooms">Rooms</Link>
              <Link href="/admin/tenants">Tenants</Link>
            </>
          )}
          {role === "TENANT" && <Link href="/dashboard">Dashboard</Link>}
          {!session ? (
            <Link href="/login" className={buttonVariants({ size: "sm", variant: "outline" })}>
              Sign in
            </Link>
          ) : (
            <>
              <Link href="/profile" className="text-muted-foreground">{session.user?.name}</Link>
              <Button size="sm" variant="ghost" onClick={() => signOut({ callbackUrl: "/login" })}>
                Sign out
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
