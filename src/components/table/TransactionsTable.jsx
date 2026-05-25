import { transactions } from "../../data/transactions";

export default function TransactionsTable() {
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
      <h2 className="text-xl font-semibold mb-6">
        Recent Transactions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-zinc-400 border-b border-white/10">
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
          {transactions.map((row, index) => (
            <tr
              key={index}
              className="border-b border-white/5"
            >
              <td className="py-4">
                {row.customer}
              </td>

              <td className="py-4">
                {row.plan}
              </td>

              <td className="py-4">
                {row.amount}
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