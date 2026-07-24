"use client";

import Link from "next/link";
import { RoomImage } from "@/components/room-image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Room = {
  id: string;
  number: string;
  type: string;
  size: string;
  monthlyRent: number;
  description?: string | null;
  imageUrl?: string | null;
  status?: string;
};

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    maximumFractionDigits: 0,
  }).format(amount);

type RoomCardProps = {
  room: Room;
  variant?: "default" | "featured";
};

export function RoomCard({ room, variant = "default" }: RoomCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <RoomImage
          src={room.imageUrl}
          alt={`Room ${room.number} - ${room.type}`}
          className={isFeatured ? "aspect-[4/3]" : "aspect-[16/10]"}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 border border-white/20 bg-white/90 text-foreground shadow-sm backdrop-blur"
        >
          {room.status === "AVAILABLE" ? "Available" : room.type}
        </Badge>
      </div>

      <CardHeader className={isFeatured ? "pb-2" : "pb-3"}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">Room {room.number}</CardTitle>
            <CardDescription>
              {room.type} · {room.size}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">{formatPrice(room.monthlyRent)}</div>
            <div className="text-xs text-muted-foreground">/month</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {room.description || "A well-appointed apartment ready for comfortable living."}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Link
          href={`/book/${room.id}`}
          className={cn(buttonVariants({ className: "w-full" }))}
        >
          {isFeatured ? "Book this room" : "Request booking"}
          <ArrowRight className="ml-2 size-4" data-icon="inline-end" />
        </Link>
      </CardFooter>
    </Card>
  );
}
