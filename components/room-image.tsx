"use client";

import { useState } from "react";
import Image from "next/image";
import { BedDouble } from "lucide-react";
import { cn } from "@/lib/utils";

type RoomImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
};

export function RoomImage({ src, alt, className }: RoomImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={cn(
          "gold-gradient relative flex w-full items-center justify-center overflow-hidden text-primary-foreground",
          className || "aspect-[4/3]"
        )}
      >
        <BedDouble className="size-20 opacity-60" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-muted",
        className || "aspect-[4/3]"
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <BedDouble className="size-16 animate-pulse text-muted-foreground/40" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-105"
        unoptimized
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
}
