import { motion } from "framer-motion";

export default function KPI({
  title,
  value,
  growth,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      "
    >
      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

      <span className="text-green-400">
        {growth}
      </span>
    </motion.div>
  );
}