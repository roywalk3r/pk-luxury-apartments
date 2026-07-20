import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { EquipmentForm } from "@/components/forms/equipment-form";

export default function NewEquipmentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Add equipment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Equipment details</CardTitle>
          <CardDescription>Track maintenance assets and their expected lifespan.</CardDescription>
        </CardHeader>
        <CardContent>
          <EquipmentForm />
        </CardContent>
      </Card>
    </div>
  );
}
