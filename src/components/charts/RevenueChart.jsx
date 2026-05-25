import { useState } from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { chartDatasets } from "../../data/chartDatasets";

export default function RevenueChart() {
  const [filter, setFilter] = useState("week");

  const data = chartDatasets[filter];

  const filters = [
    "today",
    "week",
    "month",
    "year",
  ];

  return (
    <div
      className="
      col-span-2
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      "
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Revenue Overview
        </h2>

        <div className="flex gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                px-4 py-2 rounded-xl capitalize transition
                ${
                  filter === item
                    ? "bg-violet-600"
                    : "bg-white/5 hover:bg-white/10"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#8b5cf6"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#8b5cf6"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="label"
            stroke="#888"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8b5cf6"
            strokeWidth={3}
            fill="url(#gradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}