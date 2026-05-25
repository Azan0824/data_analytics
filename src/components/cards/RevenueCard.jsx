import Sparkline from "../charts/Sparkline";

const revenueSpark = [
  { value: 20 },
  { value: 30 },
  { value: 25 },
  { value: 45 },
  { value: 50 },
  { value: 70 },
];

export default function RevenueCard() {
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
        Monthly Revenue
      </p>

      <h2 className="text-4xl font-bold mt-2">
        $48,920
      </h2>

      <p className="text-green-400 mt-1">
        +12.5%
      </p>

      <div className="mt-4">
        <Sparkline data={revenueSpark} />
      </div>
    </div>
  );
}