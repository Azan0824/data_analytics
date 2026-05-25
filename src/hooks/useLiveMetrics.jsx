import { useEffect, useState } from "react";

export default function useLiveMetrics() {
  const [metrics, setMetrics] = useState({
    revenue: 48920,
    users: 18240,
    conversion: 4.8,
    bounce: 32,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        revenue: prev.revenue + Math.floor(Math.random() * 120),
        users: prev.users + Math.floor(Math.random() * 8),
        conversion: Number(
          (prev.conversion + (Math.random() * 0.08 - 0.03)).toFixed(2)
        ),
        bounce: Number(
          (prev.bounce + (Math.random() * 0.2 - 0.1)).toFixed(1)
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
}