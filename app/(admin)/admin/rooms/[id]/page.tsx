import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { RoomForm } from "@/components/forms/room-form";
import { updateRoomAction } from "@/lib/actions/rooms";
import { archiveRoomAction } from "@/lib/actions/rooms";
import { Button } from "@/components/ui/button";

export default async function EditRoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = await prisma.room.findUnique({ where: { id } });
  if (!room) notFound();
  const action = updateRoomAction.bind(null, id);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit room {room.number}</h1>
      <RoomForm
        action={action}
        defaults={{
          number: room.number, type: room.type, size: room.size,
          monthlyRent: room.monthlyRent, description: room.description ?? "", status: room.status,
        }}
      />
      <form action={archiveRoomAction.bind(null, id)} className="mt-6">
        <Button type="submit" variant="outline">Archive (set MAINTENANCE)</Button>
      </form>
    </div>
  );
}
