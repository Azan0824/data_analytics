import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrafficCard() {
  const [users, setUsers] = useState(12847);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prev) =>
        prev + Math.floor(Math.random() * 40)
      );
    }, 2500);

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
        Active Users
      </h3>

      <div className="text-5xl font-bold">
        {users.toLocaleString()}
      </div>

      <p className="text-green-400 mt-3">
        +14% from last week
      </p>
    </motion.div>
  );
}