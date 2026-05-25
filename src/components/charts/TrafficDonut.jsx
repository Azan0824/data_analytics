import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { trafficData } from "../../data/trafficData";

const COLORS = [
  "#8b5cf6",
  "#3b82f6",
  "#14b8a6",
  "#f97316",
];

export default function TrafficDonut() {
  return (
    <div
      className="
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-xl font-semibold mb-6">
        Traffic Sources
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <PieChart>
          <Pie
            data={trafficData}
            dataKey="value"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
          >
            {trafficData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}