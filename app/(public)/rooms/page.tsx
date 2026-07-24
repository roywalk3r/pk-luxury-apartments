import Link from "next/link";
import { prisma } from "@/lib/db";
import { RoomCard } from "@/components/room-card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany({
    where: { status: "AVAILABLE" },
    orderBy: { monthlyRent: "asc" },
  });

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col p-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-3">
            {rooms.length} room{rooms.length === 1 ? "" : "s"} available
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Available Rooms</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Browse move-in ready apartments and submit a booking request. Management will confirm your move-in date.
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "w-fit")}
        >
          Back to home
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>

      {rooms.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <h2 className="text-xl font-semibold">No rooms available right now</h2>
          <p className="mt-2 text-muted-foreground">
            Check back soon or contact management for upcoming availability.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}
    </main>
  );
}
