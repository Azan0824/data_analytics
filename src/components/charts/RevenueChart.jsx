import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";
import useRevenueData from "../../hooks/useRevenueData";


export default function RevenueChart() {
  const data = useRevenueData();
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="
      col-span-2
      bg-white/5
      border border-white/10
      rounded-3xl
      p-6
      backdrop-blur-xl
      "
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Revenue Overview
          </h2>

          <p className="text-zinc-400 text-sm mt-1">
            Weekly performance
          </p>
        </div>

        <div className="text-green-400 font-semibold">
          +18.2%
        </div>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#7c3aed"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#7c3aed"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
  dataKey="month"
  stroke="#71717a"
/>

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}