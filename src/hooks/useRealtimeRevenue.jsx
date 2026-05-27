import { useEffect, useState } from "react";

const initialData = [
  { name: "Mon", revenue: 2400 },
  { name: "Tue", revenue: 3200 },
  { name: "Wed", revenue: 2800 },
  { name: "Thu", revenue: 4100 },
  { name: "Fri", revenue: 3800 },
  { name: "Sat", revenue: 5200 },
  { name: "Sun", revenue: 6100 },
];

export default function useRealtimeRevenue() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          revenue:
            item.revenue +
            Math.floor(
              Math.random() * 800 - 400
            ),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return data;
}