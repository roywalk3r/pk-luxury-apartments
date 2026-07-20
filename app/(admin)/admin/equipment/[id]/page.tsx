import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { getEquipmentById } from "@/lib/actions/equipment";
import { EquipmentForm } from "@/components/forms/equipment-form";

export default async function EditEquipmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const equipment = await getEquipmentById(id);
  if (!equipment) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Edit equipment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Equipment details</CardTitle>
          <CardDescription>Update asset information, status, and service history.</CardDescription>
        </CardHeader>
        <CardContent>
          <EquipmentForm equipment={equipment} />
        </CardContent>
      </Card>
    </div>
  );
}
