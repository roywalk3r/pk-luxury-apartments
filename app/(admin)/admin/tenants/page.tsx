import Link from "next/link";
import { prisma } from "@/lib/db";
import { Button, buttonVariants } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function TenantsListPage() {
  const tenants = await prisma.user.findMany({
    where: { role: "TENANT" },
    orderBy: { name: "asc" },
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Tenants</h1>
        <Link href="/admin/tenants/new" className={buttonVariants()}>Add tenant</Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="font-medium">{t.name}</TableCell>
              <TableCell>{t.email}</TableCell>
              <TableCell>{t.phone ?? "—"}</TableCell>
              <TableCell>
                <Badge variant={t.active ? "default" : "secondary"}>
                  {t.active ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell>
                <Link href={`/admin/tenants/${t.id}`} className="underline">Edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
