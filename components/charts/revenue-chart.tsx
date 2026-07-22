"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function formatCedis(amount: number) {
  return `GHS ${(amount / 100).toFixed(0)}`;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function RevenueChart({ data }: { data: number[] }) {
  const chartData = data.map((amount, index) => ({
    month: MONTHS[index],
    amount: amount / 100,
  }));

  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickFormatter={(value) => `GHS ${value}`}
          />
          <Tooltip
            cursor={{ fill: "var(--muted)" }}
            contentStyle={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
            }}
            formatter={(value) => [formatCedis(Number(value) * 100), "Revenue"]}
          />
          <Bar
            dataKey="amount"
            fill="var(--primary)"
            radius={[6, 6, 0, 0]}
            className="transition-opacity hover:opacity-80"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
