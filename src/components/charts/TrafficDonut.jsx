import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { name: "Direct", value: 45 },
  { name: "Social", value: 25 },
  { name: "Ads", value: 20 },
  { name: "Referral", value: 10 },
];

const COLORS = [
  "#8b5cf6",
  "#06b6d4",
  "#22c55e",
  "#f59e0b",
];

export default function TrafficDonut() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
      bg-white/5
      border border-white/10
      rounded-3xl
      p-6
      backdrop-blur-xl
      "
    >
      <h2 className="text-xl font-semibold mb-6">
        Traffic Sources
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={110}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-4">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex justify-between text-sm"
          >
            <span>{item.name}</span>
            <span style={{ color: COLORS[index] }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}