import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OverdueCheckForm } from "@/components/forms/overdue-check-form";
import { ReportFilters } from "@/components/forms/report-filters";
import { ReportExportButton } from "@/components/forms/report-export-button";

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

type PageProps = {
  searchParams: Promise<{ from?: string; to?: string; requestStatus?: string }>;
};

export default async function ReportsPage({ searchParams }: PageProps) {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) redirect("/login");

  const { from, to, requestStatus } = await searchParams;
  const fromDate = from ? new Date(from) : undefined;
  const toDate = to ? new Date(to) : undefined;

  const dateFilter =
    fromDate || toDate
      ? {
          dueDate: {
            ...(fromDate && { gte: fromDate }),
            ...(toDate && { lte: toDate }),
          },
        }
      : {};
  const paidFilter =
    fromDate || toDate
      ? {
          paidAt: {
            ...(fromDate && { gte: fromDate }),
            ...(toDate && { lte: toDate }),
          },
        }
      : {};

  const [rooms, tenants, payments, bills, requests] = await Promise.all([
    prisma.room.findMany({ orderBy: { number: "asc" } }),
    prisma.user.findMany({ where: { role: "TENANT" }, orderBy: { name: "asc" } }),
    prisma.rentPayment.findMany({
      where: paidFilter,
      include: { tenancy: { include: { tenant: true, room: true } } },
      orderBy: { paidAt: "desc" },
    }),
    prisma.utilityBill.findMany({
      where: dateFilter,
      include: { tenancy: { include: { tenant: true, room: true } } },
      orderBy: { dueDate: "desc" },
    }),
    prisma.maintenanceRequest.findMany({
      where: requestStatus ? { status: requestStatus as never } : {},
      include: { tenant: true, room: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const totalRent = payments.filter((p) => p.status === "CONFIRMED").reduce((sum, p) => sum + p.amount, 0);
  const totalBillsPaid = bills.filter((b) => b.status === "PAID").reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Aggregated data on rooms, tenants, payments, bills and maintenance.</p>
        </div>
        <ReportExportButton from={from} to={to} requestStatus={requestStatus} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Filters</CardTitle>
            <p className="text-sm text-muted-foreground">Date range applies to payments and bills; status filters maintenance requests.</p>
          </div>
        </CardHeader>
        <CardContent>
          <ReportFilters />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card><CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Total rooms</CardTitle></CardHeader><CardContent><p className="text-3xl font-semibold">{rooms.length}</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Active tenants</CardTitle></CardHeader><CardContent><p className="text-3xl font-semibold">{tenants.length}</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Rent collected</CardTitle></CardHeader><CardContent><p className="text-3xl font-semibold">{formatCedis(totalRent)}</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Bills paid</CardTitle></CardHeader><CardContent><p className="text-3xl font-semibold">{formatCedis(totalBillsPaid)}</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Overdue detection</CardTitle>
            <p className="text-sm text-muted-foreground">{bills.filter((b) => b.status === "OVERDUE").length} overdue bills currently recorded.</p>
          </div>
          <OverdueCheckForm />
        </CardHeader>
      </Card>

      <Card>
        <CardHeader><CardTitle>Room occupancy</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow><TableHead>Room</TableHead><TableHead>Type</TableHead><TableHead>Status</TableHead><TableHead>Rent</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {rooms.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.number}</TableCell>
                  <TableCell>{r.type}</TableCell>
                  <TableCell><Badge variant={r.status === "OCCUPIED" ? "default" : r.status === "AVAILABLE" ? "secondary" : "destructive"}>{r.status}</Badge></TableCell>
                  <TableCell>{formatCedis(r.monthlyRent)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Payment history</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow><TableHead>Tenant</TableHead><TableHead>Room</TableHead><TableHead>Amount</TableHead><TableHead>Method</TableHead><TableHead>Date</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.tenancy.tenant.name}</TableCell>
                  <TableCell>{p.tenancy.room.number}</TableCell>
                  <TableCell>{formatCedis(p.amount)}</TableCell>
                  <TableCell>{p.method}</TableCell>
                  <TableCell>{p.paidAt ? new Date(p.paidAt).toLocaleDateString() : "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Maintenance requests</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow><TableHead>Title</TableHead><TableHead>Room</TableHead><TableHead>Tenant</TableHead><TableHead>Status</TableHead><TableHead>Priority</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.title}</TableCell>
                  <TableCell>{r.room.number}</TableCell>
                  <TableCell>{r.tenant.name}</TableCell>
                  <TableCell>{r.status}</TableCell>
                  <TableCell><Badge variant={r.priority === "URGENT" ? "destructive" : "secondary"}>{r.priority}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
