import Link from "next/link";
import { prisma } from "@/lib/db";
import { Button, buttonVariants } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function RoomsListPage() {
  const rooms = await prisma.room.findMany({ orderBy: { number: "asc" } });
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Rooms</h1>
        <Link href="/admin/rooms/new" className={buttonVariants()}>Add room</Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Rent (GHS)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-medium">{r.number}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.size}</TableCell>
              <TableCell>{(r.monthlyRent / 100).toFixed(2)}</TableCell>
              <TableCell><Badge>{r.status}</Badge></TableCell>
              <TableCell><Link href={`/admin/rooms/${r.id}`} className="underline">Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
