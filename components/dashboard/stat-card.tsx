import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ElementType, ReactNode } from "react";

export function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  href,
  trend,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: LucideIcon;
  href?: string;
  trend?: { value: string; direction: "up" | "down" };
}) {
  const Wrapper: ElementType = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "kpi-card block",
        href && "transition-transform hover:-translate-y-0.5"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="metric mt-2 text-2xl text-foreground sm:text-3xl">{value}</p>
          {sub && <p className="mt-1 truncate text-xs text-muted-foreground">{sub}</p>}
        </div>
        <div className="kpi-icon shrink-0">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {trend && (
        <p className={cn("mt-3 text-xs font-semibold", trend.direction === "up" ? "kpi-trend-up" : "kpi-trend-down")}>
          {trend.direction === "up" ? "↑" : "↓"} {trend.value}
        </p>
      )}
    </Wrapper>
  );
}
