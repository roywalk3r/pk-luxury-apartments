import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function TenantDashboardPage() {
  const session = await auth();
  const tenancy = await prisma.tenancy.findFirst({
    where: { tenantId: session!.user.id, endDate: null },
    include: { room: true },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {session!.user.name}</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Your room</CardTitle>
        </CardHeader>
        <CardContent>
          {tenancy ? (
            <>
              <p>Room {tenancy.room.number} — {tenancy.room.type}</p>
              <p className="text-muted-foreground text-sm mt-1">
                Rent: GHS {(tenancy.monthlyRent / 100).toFixed(2)}/mo
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">No active tenancy. Contact the manager.</p>
          )}
        </CardContent>
      </Card>
      <p className="mt-6 text-sm text-muted-foreground">
        Payments, maintenance requests, and reports are coming in a future update.
      </p>
    </div>
  );
}
