import { useState } from "react";


import useUsers from "../../hooks/useUsers";
export default function TransactionsTable() {
  const [search, setSearch] = useState("");

const {
  users,
  loading,
  error,
} = useUsers();
  const [sortField, setSortField] = useState("customer");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredUsers = users
  .filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`;
    const nameB = `${b.firstName} ${b.lastName}`;

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    }

    return nameB.localeCompare(nameA);
  });
    if (loading) {
  return (
    <div className="text-center py-20">
      Loading users...
    </div>
  );
}
if (error) {
  return (
    <div className="text-red-500 py-20">
      {error}
    </div>
  );
}

  return (
    <div
      className="
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      "
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Recent Transactions
        </h2>

        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            bg-zinc-900
            border border-zinc-700
            px-4 py-2
            rounded-xl
            outline-none
            focus:border-violet-500
          "
        />
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-zinc-400">

            <th
              className="py-4 text-left cursor-pointer"
              onClick={() => handleSort("customer")}
            >
              Customer
            </th>

            <th
              className="py-4 text-left cursor-pointer"
              onClick={() => handleSort("plan")}
            >
              Plan
            </th>

            <th
              className="py-4 text-left cursor-pointer"
              onClick={() => handleSort("amount")}
            >
              Amount
            </th>

            <th
              className="py-4 text-left cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status
            </th>

          </tr>
        </thead>

        <tbody>
  {filteredUsers.map((user) => (
    <tr
      key={user.id}
      className="
      border-b border-white/5
      hover:bg-white/5
      transition
      "
    >
      <td className="py-4">
        {user.firstName} {user.lastName}
      </td>

      <td className="py-4">
        Premium
      </td>

      <td className="py-4">
        $
        {(
          Math.random() * 500 +
          50
        ).toFixed(0)}
      </td>

      <td className="py-4">
        <span
          className="
          bg-violet-500/20
          text-violet-300
          px-3
          py-1
          rounded-full
          text-sm
          "
        >
          Active
        </span>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}