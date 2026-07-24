import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { BookingForm } from "@/components/forms/booking-form";
import { RoomImage } from "@/components/room-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Home, BedDouble, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(amount);

export default async function BookRoomPage({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  const room = await prisma.room.findUnique({
    where: { id: roomId },
  });

  if (!room) notFound();

  const isAvailable = room.status === "AVAILABLE";

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col p-6">
      <Link
        href="/rooms"
        className={cn(buttonVariants({ variant: "ghost" }), "mb-6 w-fit")}
      >
        <ArrowLeft className="mr-2 size-4" />
        Back to rooms
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Request a booking</h1>
        <p className="mt-2 text-muted-foreground">
          Complete the form below and PK management will confirm your move-in date within 24 hours.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        {/* Room summary sidebar */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <Card className="overflow-hidden rounded-2xl">
            <RoomImage src={room.imageUrl} alt={`Room ${room.number}`} className="aspect-[4/3]" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <BedDouble className="size-5 text-primary" />
                    <h2 className="text-lg font-semibold">Room {room.number}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {room.type} · {room.size}
                  </p>
                </div>
                <Badge variant={isAvailable ? "secondary" : "outline"}>
                  {isAvailable ? "Available" : room.status}
                </Badge>
              </div>

              <Separator className="my-4" />

              <div className="flex items-end justify-between">
                <span className="text-sm text-muted-foreground">Monthly rent</span>
                <span className="text-xl font-bold text-primary">{formatPrice(room.monthlyRent)}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="flex items-center gap-1.5">
                  <Home className="size-3.5" />
                  {room.type}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  Haatso, Ghana
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking form */}
        <div className="space-y-6">
          {isAvailable ? (
            <Card className="rounded-2xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="gold-gradient flex size-10 items-center justify-center rounded-full text-primary-foreground">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Your details</h2>
                  <p className="text-sm text-muted-foreground">We need this to get back to you about Room {room.number}.</p>
                </div>
              </div>
              <BookingForm roomId={room.id} roomNumber={room.number} />
            </Card>
          ) : (
            <Card className="rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                <BedDouble className="size-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Room is unavailable</h2>
              <p className="mx-auto mt-2 max-w-sm text-muted-foreground">
                Room {room.number} is currently {room.status.toLowerCase()}. Browse other available rooms instead.
              </p>
              <Link
                href="/rooms"
                className={cn(buttonVariants({ size: "lg" }), "mt-6")}
              >
                Browse available rooms
              </Link>
            </Card>
          )}

          <div className="flex items-center gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4">
            <CheckCircle2 className="size-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              No payment is required now. This is only a request. Management will contact you to confirm and arrange a viewing.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
