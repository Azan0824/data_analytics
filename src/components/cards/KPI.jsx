import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function KPI({
  title,
  value,
  growth,
}) {
  const numericValue = parseFloat(
    String(value).replace(/[^0-9.]/g, "")
  );

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-6
        shadow-lg
      "
    >
      <div className="space-y-3">
        <p className="text-zinc-400 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold">
  {value}
</h2>
        <span
          className={
            growth.startsWith("+")
              ? "text-green-400"
              : "text-red-400"
          }
        >
          {growth}
        </span>
      </div>
    </motion.div>
  );
}