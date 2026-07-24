import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { RoomImage } from "@/components/room-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Home, MapPin, Calendar, ArrowRight, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(amount);

export default async function BookingSuccessPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const bookingId = typeof params.booking === "string" ? params.booking : null;

  if (!bookingId) {
    notFound();
  }

  const booking = await prisma.bookingRequest.findUnique({
    where: { id: bookingId },
    include: { room: true },
  });

  if (!booking) {
    notFound();
  }

  const moveInDate = booking.preferredMoveInDate
    ? new Date(booking.preferredMoveInDate).toLocaleDateString("en-GH", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col p-6">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="size-10 text-primary" />
        </div>
        <Badge variant="outline" className="mb-3">
          Booking request received
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Thanks, {booking.name.split(" ")[0]}!</h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Your request for Room {booking.room.number} has been submitted. PK management will review it and contact you within 24 hours.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="gold-gradient flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">1</div>
                <div>
                  <p className="font-medium">Management reviews your request</p>
                  <p className="text-sm text-muted-foreground">We check availability and prepare your move-in details.</p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-4">
                <div className="gold-gradient flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">2</div>
                <div>
                  <p className="font-medium">We contact you</p>
                  <p className="text-sm text-muted-foreground">You will hear from us by phone or email within 24 hours.</p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-4">
                <div className="gold-gradient flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">3</div>
                <div>
                  <p className="font-medium">Confirm and move in</p>
                  <p className="text-sm text-muted-foreground">Once confirmed, you will receive your tenancy portal access.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rooms"
              className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")}
            >
              Browse more rooms
            </Link>
            <Link
              href="/"
              className={cn(buttonVariants({ className: "w-full sm:w-auto" }))}
            >
              Back to home
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>

        <Card className="h-fit overflow-hidden rounded-2xl">
          <RoomImage src={booking.room.imageUrl} alt={`Room ${booking.room.number}`} className="aspect-[4/3]" />
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold">Room {booking.room.number}</h2>
            <p className="text-sm text-muted-foreground">
              {booking.room.type} · {booking.room.size}
            </p>

            <Separator className="my-4" />

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-muted-foreground" />
                <span className="break-all">{booking.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-muted-foreground" />
                <span>{booking.phone}</span>
              </div>
              {moveInDate && (
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 size-4 text-muted-foreground" />
                  <span>{moveInDate}</span>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Home className="mt-0.5 size-4 text-muted-foreground" />
                <span>{booking.room.type}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <span>Haatso, Greater Accra, Ghana</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-end justify-between">
              <span className="text-sm text-muted-foreground">Monthly rent</span>
              <span className="text-xl font-bold text-primary">{formatPrice(booking.room.monthlyRent)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
