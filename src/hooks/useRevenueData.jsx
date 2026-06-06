import { useEffect, useState } from "react";

export default function useRevenueData() {
  const [data, setData] = useState([
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 25000 },
    { month: "May", revenue: 22000 },
    { month: "Jun", revenue: 30000 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          revenue:
            item.revenue +
            Math.floor(Math.random() * 2000 - 1000),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return data;
}