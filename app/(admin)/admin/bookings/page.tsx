import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getPendingBookings } from "@/lib/actions/bookings";
import { BookingActions } from "@/components/forms/booking-actions";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(2)}`;
}

export default async function AdminBookingsPage() {
  const session = await auth();
  if (!session || (session.user.role !== "ADMIN" && session.user.role !== "STAFF")) {
    redirect("/login");
  }

  const bookings = await getPendingBookings();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Booking requests</h1>
        <p className="text-muted-foreground">Review and confirm incoming room bookings.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <p className="text-sm text-muted-foreground">No pending booking requests.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Move-in</TableHead>
                  <TableHead>Rent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell>{b.room.number} — {b.room.type}</TableCell>
                    <TableCell>{b.name}</TableCell>
                    <TableCell>
                      <div className="text-sm">{b.email}</div>
                      <div className="text-xs text-muted-foreground">{b.phone}</div>
                    </TableCell>
                    <TableCell>
                      {b.preferredMoveInDate ? new Date(b.preferredMoveInDate).toLocaleDateString() : "—"}
                    </TableCell>
                    <TableCell>{formatCedis(b.room.monthlyRent)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{b.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <BookingActions id={b.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
