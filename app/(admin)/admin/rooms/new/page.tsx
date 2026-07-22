import { RoomForm } from "@/components/forms/room-form";

export default function NewRoomPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Add Room</h1>
      <RoomForm submitLabel="Create room" />
    </div>
  );
}
