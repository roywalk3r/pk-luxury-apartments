import { prisma } from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const [roomCount, tenantCount, staffCount, occupiedCount] = await Promise.all([
    prisma.room.count(),
    prisma.user.count({ where: { role: "TENANT", active: true } }),
    prisma.user.count({ where: { role: { in: ["ADMIN", "STAFF"] } } }),
    prisma.room.count({ where: { status: "OCCUPIED" } }),
  ]);
  const stats = [
    { label: "Rooms", value: roomCount },
    { label: "Occupied", value: occupiedCount },
    { label: "Active tenants", value: tenantCount },
    { label: "Staff + Admin", value: staffCount },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
