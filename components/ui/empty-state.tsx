import Image from "next/image";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  image,
  title,
  description,
  action,
  className,
}: {
  icon?: LucideIcon;
  image?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("surface flex flex-col items-center justify-center px-6 py-12 text-center sm:py-16", className)}>
      {image ? (
        <div className="relative mb-4 h-32 w-32 sm:h-40 sm:w-40">
          <Image src={image} alt="" fill className="object-contain" sizes="160px" />
        </div>
      ) : Icon ? (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
      ) : null}
      <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
