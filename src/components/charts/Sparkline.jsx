import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function Sparkline({ data }) {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8b5cf6"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}