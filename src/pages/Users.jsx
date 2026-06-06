import DashboardLayout from "../components/layout/DashboardLayout";
import TransactionsTable from "../components/table/TransactionsTable";

export default function Users() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-5xl font-bold">
          Users
        </h1>

        <TransactionsTable />

      </div>
    </DashboardLayout>
  );
}