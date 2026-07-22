import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { RoomForm } from "@/components/forms/room-form";
import { archiveRoomAction } from "@/lib/actions/rooms";
import { Button } from "@/components/ui/button";

export default async function EditRoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = await prisma.room.findUnique({ where: { id } });
  if (!room) notFound();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Edit Room {room.number}</h1>
      <RoomForm room={room} submitLabel="Update room" />
      <form action={archiveRoomAction.bind(null, id)} className="mt-6">
        <Button type="submit" variant="outline">Archive (set MAINTENANCE)</Button>
      </form>
    </div>
  );
}
