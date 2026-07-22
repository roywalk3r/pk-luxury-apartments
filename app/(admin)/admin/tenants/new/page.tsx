import { prisma } from "@/lib/db";
import { TenantForm } from "@/components/forms/tenant-form";
import { notFound } from "next/navigation";

export default async function NewTenantPage() {
  const rooms = await prisma.room.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { number: "asc" },
  });
  if (rooms.length === 0) notFound();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Add Tenant</h1>
      <TenantForm
        mode="create"
        rooms={rooms.map((r) => ({ id: r.id, number: r.number, monthlyRent: r.monthlyRent }))}
        submitLabel="Create tenant"
      />
    </div>
  );
}
