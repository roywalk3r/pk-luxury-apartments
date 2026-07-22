"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const COLORS = ["var(--primary)", "var(--accent)", "var(--muted-foreground)"];

export function OccupancyChart({
  occupied,
  available,
  maintenance,
}: {
  occupied: number;
  available: number;
  maintenance: number;
}) {
  const data = [
    { name: "Occupied", value: occupied },
    { name: "Available", value: available },
    { name: "Maintenance", value: maintenance },
  ];

  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={24}
            iconType="circle"
            formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
