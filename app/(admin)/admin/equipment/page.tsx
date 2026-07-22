import Link from "next/link";
import { getEquipment } from "@/lib/actions/equipment";
import { buttonVariants } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DeleteEquipmentButton } from "@/components/forms/delete-equipment-button";

export default async function EquipmentListPage() {
  const items = await getEquipment();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Equipment</h1>
        <Link href="/admin/equipment/new" className={buttonVariants()}>Add equipment</Link>
      </div>
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Purchased</TableHead>
              <TableHead>Lifespan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground">No equipment recorded yet.</TableCell>
              </TableRow>
            )}
            {items.map((item: { id: string; name: string; type: string | null; location: string | null; purchaseDate: Date; lifespanMonths: number; status: string }) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.type ?? "—"}</TableCell>
                <TableCell>{item.location ?? "—"}</TableCell>
                <TableCell>{new Date(item.purchaseDate).toLocaleDateString()}</TableCell>
                <TableCell>{item.lifespanMonths} months</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "ACTIVE"
                        ? "default"
                        : item.status === "UNDER_MAINTENANCE"
                          ? "outline"
                          : "secondary"
                    }
                  >
                    {item.status.replace(/_/g, " ").toLowerCase()}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link href={`/admin/equipment/${item.id}`} className="text-sm font-medium hover:underline">Edit</Link>
                    <DeleteEquipmentButton id={item.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
