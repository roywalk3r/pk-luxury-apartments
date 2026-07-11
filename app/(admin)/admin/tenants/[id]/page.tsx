import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { updateTenantAction } from "@/lib/actions/tenants";
import { TenantForm } from "@/components/forms/tenant-form";

export default async function EditTenantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tenant = await prisma.user.findUnique({ where: { id } });
  if (!tenant || tenant.role !== "TENANT") notFound();
  const action = updateTenantAction.bind(null, id);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit tenant</h1>
      <TenantForm
        mode="edit"
        action={action}
        defaults={{ name: tenant.name, phone: tenant.phone ?? "", active: tenant.active }}
        submitLabel="Save changes"
      />
    </div>
  );
}
