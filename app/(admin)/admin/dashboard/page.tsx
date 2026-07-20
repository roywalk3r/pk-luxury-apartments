import Link from "next/link";
import { getAdminDashboardStats } from "@/lib/actions/dashboard";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LiveClock } from "@/components/live-clock";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { OccupancyChart } from "@/components/charts/occupancy-chart";
import {
  Users,
  Home,
  Wrench,
  CreditCard,
  ArrowRight,
  Droplets,
  Bell,
  TrendingUp,
  Wallet,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

export default async function AdminDashboardPage() {
  const stats = await getAdminDashboardStats();

  const kpiCards = [
    {
      label: "Total rooms",
      value: stats.totalRooms,
      sub: `${stats.availableRooms} available`,
      icon: Home,
      href: "/admin/rooms",
    },
    {
      label: "Occupancy rate",
      value: `${stats.occupancyRate}%`,
      sub: `${stats.occupiedRooms} occupied`,
      icon: TrendingUp,
      href: "/admin/rooms",
    },
    {
      label: "Active tenants",
      value: stats.totalTenants,
      sub: "Current residents",
      icon: Users,
      href: "/admin/tenants",
    },
    {
      label: "Open maintenance",
      value: stats.openRequests,
      sub: "Needs attention",
      icon: Wrench,
      href: "/admin/maintenance",
    },
    {
      label: "Pending payments",
      value: stats.pendingPayments,
      sub: "Awaiting confirmation",
      icon: CreditCard,
      href: "/admin/payments",
    },
    {
      label: "Overdue bills",
      value: stats.overdueBills,
      sub: "Need follow-up",
      icon: AlertCircle,
      href: "/admin/bills",
    },
    {
      label: "Revenue this year",
      value: formatCedis(stats.totalRevenue),
      sub: `${stats.totalPaymentsThisMonth} payments this month`,
      icon: Wallet,
      href: "/admin/reports",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Live overview of PK Luxury Apartments operations.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <LiveClock />
          <div className="flex gap-2">
            <Link href="/admin/payments/new" className={buttonVariants({ size: "sm" })}>
              <CreditCard className="mr-2 h-4 w-4" /> Record payment
            </Link>
            <Link href="/admin/bills/new" className={buttonVariants({ size: "sm", variant: "outline" })}>
              <Droplets className="mr-2 h-4 w-4" /> Add bill
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpiCards.map((c) => (
          <Link key={c.label} href={c.href} className="group">
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
                <c.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{c.value}</p>
                <p className="text-xs text-muted-foreground">{c.sub}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              <CardTitle>Monthly revenue ({new Date().getFullYear()})</CardTitle>
            </div>
            <CardDescription>Confirmed rent payments by month</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart data={stats.monthlyRevenue} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              <CardTitle>Room occupancy</CardTitle>
            </div>
            <CardDescription>Current room status distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <OccupancyChart
              occupied={stats.occupiedRooms}
              available={stats.availableRooms}
              maintenance={stats.maintenanceRooms}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <CardTitle>Recent rent payments</CardTitle>
            </div>
            <Link href="/admin/payments" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1")}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.recentPayments.length === 0 && <p className="text-sm text-muted-foreground">No payments recorded yet.</p>}
            {stats.recentPayments.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{p.tenancy.tenant.name}</p>
                    <p className="text-xs text-muted-foreground">Room {p.tenancy.room.number} • {p.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatCedis(p.amount)}</p>
                  <p className="text-xs text-muted-foreground">{p.paidAt ? new Date(p.paidAt).toLocaleDateString() : "Pending"}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Open maintenance requests</CardTitle>
            </div>
            <Link href="/admin/maintenance" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-1")}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.recentRequests.length === 0 && <p className="text-sm text-muted-foreground">No open requests.</p>}
            {stats.recentRequests.map((r) => (
              <div key={r.id} className="flex items-start justify-between rounded-lg border p-3 transition-colors hover:bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CalendarCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.title}</p>
                    <p className="text-xs text-muted-foreground">Room {r.room.number} • {r.tenant.name}</p>
                  </div>
                </div>
                <Badge variant={r.priority === "URGENT" ? "destructive" : "secondary"}>{r.priority}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
