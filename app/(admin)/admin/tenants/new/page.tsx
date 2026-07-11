import { prisma } from "@/lib/db";
import { createTenantAction } from "@/lib/actions/tenants";
import { TenantForm } from "@/components/forms/tenant-form";

export default async function NewTenantPage() {
  const rooms = await prisma.room.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { number: "asc" },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New tenant</h1>
      {rooms.length === 0 ? (
        <p className="text-muted-foreground">No available rooms. Create or free a room first.</p>
      ) : (
        <TenantForm
          mode="create"
          action={createTenantAction}
          rooms={rooms.map((r) => ({ id: r.id, number: r.number, monthlyRent: r.monthlyRent }))}
          submitLabel="Create tenant"
        />
      )}
    </div>
  );
}
