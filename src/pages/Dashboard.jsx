import DashboardLayout from "../components/layout/DashboardLayout";
import KPI from "../components/cards/KPI";
import RevenueChart from "../components/charts/RevenueChart";
import TrafficDonut from "../components/charts/TrafficDonut";
import TransactionsTable from "../components/table/TransactionsTable";

import { kpiData } from "../data/kpiData";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-5xl font-bold">
            Welcome back, Azan 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Here's what's happening today.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {kpiData.map((item) => (
            <KPI key={item.title} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          <RevenueChart />
          <TrafficDonut />
        </div>

        <TransactionsTable />
      </div>
    </DashboardLayout>
  );
}