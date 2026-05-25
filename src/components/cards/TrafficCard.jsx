import Sparkline from "../charts/Sparkline";

const trafficSpark = [
  { value: 10 },
  { value: 18 },
  { value: 12 },
  { value: 25 },
  { value: 40 },
  { value: 55 },
];

export default function TrafficCard() {
  return (
    <div
      className="
      bg-white/5
      border border-white/10
      rounded-3xl
      p-6
      backdrop-blur-xl
      "
    >
      <p className="text-zinc-400">
        Traffic Growth
      </p>

      <h2 className="text-4xl font-bold mt-2">
        82.4K
      </h2>

      <p className="text-green-400 mt-1">
        +18.2%
      </p>

      <div className="mt-4">
        <Sparkline data={trafficSpark} />
      </div>
    </div>
  );
}