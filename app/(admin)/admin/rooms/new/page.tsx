import { createRoomAction } from "@/lib/actions/rooms";
import { RoomForm } from "@/components/forms/room-form";

export default function NewRoomPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">New room</h1>
      <RoomForm action={createRoomAction} submitLabel="Create room" />
    </div>
  );
}
