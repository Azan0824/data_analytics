import { useState } from "react";
import useTransactions from "../../hooks/useTransactions";

export default function TransactionsTable() {
  const [search, setSearch] = useState("");

  const {
    transactions,
    loading,
    error,
  } = useTransactions();

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.customer
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div
        className="
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-6
        text-center
        "
      >
        Loading transactions...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
        bg-white/5
        border border-red-500/20
        rounded-3xl
        p-6
        text-red-400
        "
      >
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
            <th className="py-4 text-left">
              Customer
            </th>

            <th className="py-4 text-left">
              Plan
            </th>

            <th className="py-4 text-left">
              Amount
            </th>

            <th className="py-4 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((row) => (
            <tr
              key={row.id}
              className="
                border-b
                border-white/10
                hover:bg-white/5
                transition
              "
            >
              <td className="py-4">
                {row.customer}
              </td>

              <td>
                {row.plan}
              </td>

              <td>
                ${row.amount}
              </td>

              <td>
                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-violet-500/20
                  text-violet-300
                  text-sm
                  "
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}