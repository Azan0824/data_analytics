import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RevenueCard() {
  const [growth, setGrowth] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowth((prev) => {
        const next = prev + (Math.random() * 4 - 2);

        if (next > 100) return 100;
        if (next < 40) return 40;

        return Number(next.toFixed(1));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <h3 className="text-lg font-semibold mb-4">
        Revenue Growth
      </h3>

      <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
        <motion.div
          animate={{
            width: `${growth}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="
          h-4
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-fuchsia-500
          "
        />
      </div>

      <p className="mt-4 text-zinc-400">
        Growth this month: {growth}%
      </p>
    </motion.div>
  );
}