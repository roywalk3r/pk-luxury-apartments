import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { TenantForm } from "@/components/forms/tenant-form";

export default async function EditTenantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tenant = await prisma.user.findUnique({ where: { id, role: "TENANT" } });
  if (!tenant) notFound();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Edit Tenant</h1>
      <TenantForm
        mode="edit"
        tenant={tenant}
        submitLabel="Save changes"
      />
    </div>
  );
}
