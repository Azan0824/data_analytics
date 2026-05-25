import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { revenueData } from "../../data/revenueData";

export default function RevenueChart() {
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
      <h2 className="text-xl font-semibold mb-6">
        Revenue Overview
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient
              id="revenueGradient"
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
            dataKey="month"
            stroke="#888"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8b5cf6"
            fill="url(#revenueGradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}