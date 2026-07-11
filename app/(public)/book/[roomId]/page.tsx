import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function BookStub({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  const room = await prisma.room.findUnique({ where: { id: roomId } });
  if (!room) notFound();
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Book Room {room.number}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Online booking is coming in a future update. Please contact the manager to reserve this room.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
