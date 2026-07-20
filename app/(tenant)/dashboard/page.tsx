import Link from "next/link";
import { getTenantDashboardStats } from "@/lib/actions/dashboard";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LiveClock } from "@/components/live-clock";
import { cn } from "@/lib/utils";
import {
  CreditCard,
  Droplets,
  Wrench,
  Bell,
  ArrowRight,
  Home,
  Zap,
  CalendarClock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

export default async function TenantDashboardPage() {
  const data = await getTenantDashboardStats();
  if (!data) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No active tenancy found. Contact management if you believe this is an error.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { tenancy, payments, requests, unreadNotifications, totalPaid, totalBills, paidBills, openRequests, nextDueBill, overdueBills } = data;
  const billBalance = totalBills - paidBills;

  const cards = [
    { label: "My room", value: tenancy.room.number, icon: Home, href: "#" },
    { label: "Total rent paid", value: formatCedis(totalPaid), icon: CreditCard, href: "/payments" },
    { label: "Water bill balance", value: formatCedis(billBalance), icon: Droplets, href: "/bills" },
    { label: "Open requests", value: openRequests, icon: Wrench, href: "/maintenance" },
    { label: "Overdue bills", value: overdueBills, icon: AlertCircle, href: "/bills", variant: overdueBills > 0 ? "destructive" as const : undefined },
  ];

  const nextDueDate = nextDueBill ? new Date(nextDueBill.dueDate).toLocaleDateString() : "No upcoming bill";
  const isOverdue = nextDueBill && new Date(nextDueBill.dueDate) < new Date() && nextDueBill.status !== "PAID";

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">My Dashboard</h1>
          <p className="text-muted-foreground">Welcome back — here is everything about your tenancy.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <LiveClock />
          <div className="flex gap-2">
            <Link href="/maintenance/new" className={buttonVariants({ size: "sm" })}>
              <Wrench className="mr-2 h-4 w-4" /> Request maintenance
            </Link>
            <Link href="/profile" className={buttonVariants({ size: "sm", variant: "outline" })}>My profile</Link>
          </div>
        </div>
      </div>

      {unreadNotifications > 0 && (
        <div className="flex items-center gap-3 rounded-xl border bg-primary/5 p-4 text-sm">
          <Bell className="h-5 w-5 text-primary" />
          <span>You have {unreadNotifications} new notification{unreadNotifications === 1 ? "" : "s"}.</span>
          <Link href="/notifications" className="ml-auto font-medium text-primary hover:underline">View</Link>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="group">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
                <c.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{c.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <CardTitle>Recent payments</CardTitle>
            </div>
            <Link href="/payments" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1")}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {payments.length === 0 && <p className="text-sm text-muted-foreground">No payments recorded yet.</p>}
            {payments.slice(0, 5).map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{formatCedis(p.amount)}</p>
                    <p className="text-xs text-muted-foreground">{p.method} • {p.paidAt ? new Date(p.paidAt).toLocaleDateString() : "Pending"}</p>
                  </div>
                </div>
                <Badge variant={p.status === "CONFIRMED" ? "default" : "secondary"}>{p.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-primary" />
              <CardTitle>Upcoming bill</CardTitle>
            </div>
            <CardDescription>Next water bill due date</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {isOverdue ? <AlertCircle className="h-7 w-7" /> : <CheckCircle2 className="h-7 w-7" />}
              </div>
              <div>
                <p className="text-2xl font-semibold">{nextDueDate}</p>
                <p className="text-sm text-muted-foreground">
                  {nextDueBill ? formatCedis(nextDueBill.amount) : "—"}
                </p>
              </div>
            </div>
            {isOverdue && (
              <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                This bill is overdue. Please settle it as soon as possible.
              </div>
            )}
            <Link href="/bills" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}>
              View all bills
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <CardTitle>Open maintenance requests</CardTitle>
          </div>
          <Link href="/maintenance" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1")}>
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </CardHeader>
        <CardContent className="space-y-3">
          {requests.filter((r) => !["RESOLVED", "CLOSED"].includes(r.status)).length === 0 && (
            <p className="text-sm text-muted-foreground">No open requests. Great job keeping everything in order!</p>
          )}
          {requests.filter((r) => !["RESOLVED", "CLOSED"].includes(r.status)).slice(0, 5).map((r) => (
            <div key={r.id} className="flex items-start justify-between rounded-lg border p-3 transition-colors hover:bg-muted/30">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Wrench className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.status}</p>
                </div>
              </div>
              <Badge variant={r.priority === "URGENT" ? "destructive" : "secondary"}>{r.priority}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
