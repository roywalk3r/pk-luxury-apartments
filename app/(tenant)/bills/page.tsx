import { getTenantBills } from "@/lib/actions/bills";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Droplets } from "lucide-react";
import { BillPayForm } from "@/components/forms/bill-pay-form";
import { isPaystackConfigured } from "@/lib/services/paystack";

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

export default async function TenantBillsPage() {
  const [bills, paystackReady] = await Promise.all([getTenantBills(), isPaystackConfigured()]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">My Utility Bills</h1>
        <p className="text-muted-foreground">Water bills for your tenancy.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5" /> Water bills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Amount</TableHead>
                <TableHead>Due date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bills.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">No bills posted.</TableCell>
                </TableRow>
              )}
              {bills.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{formatCedis(b.amount)}</TableCell>
                  <TableCell>{new Date(b.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={b.status === "PAID" ? "default" : b.status === "OVERDUE" ? "destructive" : "secondary"}>
                      {b.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {b.status !== "PAID" && paystackReady && (<BillPayForm billId={b.id} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
