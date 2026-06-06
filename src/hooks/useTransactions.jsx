import { useEffect, useState } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.carts.map((cart) => ({
          id: cart.id,
          customer: `Customer ${cart.userId}`,
          plan: "Premium",
          amount: cart.total,
          status: "Completed",
        }));

        setTransactions(formatted);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch transactions");
        setLoading(false);
      });
  }, []);

  return {
    transactions,
    loading,
    error,
  };
}