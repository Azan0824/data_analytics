import { useEffect, useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://dummyjson.com/users"
        );

        const data = await response.json();

        setUsers(data.users);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
  };
}