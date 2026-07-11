import Link from "next/link";
import { prisma } from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { monthlyRent: "asc" },
  });
  return (
    <main className="flex flex-1 flex-col p-6 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
      {rooms.length === 0 && <p className="text-muted-foreground">No rooms available right now.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle>Room {room.number}</CardTitle>
                <Badge>{room.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{room.size}</p>
              <p className="mt-2 text-lg font-semibold">
                GHS {(room.monthlyRent / 100).toFixed(2)}/mo
              </p>
              {room.description && <p className="mt-2 text-sm">{room.description}</p>}
              <Link
                href={`/book/${room.id}`}
                className="mt-3 inline-block text-sm font-medium underline"
              >
                Request booking →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
