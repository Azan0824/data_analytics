import DashboardLayout from "../components/layout/DashboardLayout";
import KPI from "../components/cards/KPI";
import RevenueChart from "../components/charts/RevenueChart";
import TrafficDonut from "../components/charts/TrafficDonut";
import TransactionsTable from "../components/table/TransactionsTable";

import RevenueCard from "../components/cards/RevenueCard";
import TrafficCard from "../components/cards/TrafficCard";

import useLiveMetrics from "../hooks/useLiveMetrics";
import ThemeToggle from "../components/ui/ThemeToggle";

export default function Dashboard() {
  const metrics = useLiveMetrics();

  const liveKpis = [
  {
    title: "Revenue",
    value: `$${metrics.revenue.toLocaleString()}`,
    growth: "+12.5%",
  },
  {
    title: "Users",
    value: metrics.users.toLocaleString(),
    growth: "+8.2%",
  },
  {
    title: "Conversion Rate",
    value: `${metrics.conversion}%`,
    growth: "+2.1%",
  },
  {
    title: "Bounce Rate",
    value: `${metrics.bounce}%`,
    growth: "-3.7%",
  },
];
 return (
  <DashboardLayout>
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">
            Welcome back, Azan 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Here's what's happening today.
          </p>
        </div>

        <ThemeToggle />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {liveKpis.map((item) => (
          <KPI
            key={item.title}
            title={item.title}
            value={item.value}
            growth={item.growth}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <RevenueChart />
        <TrafficDonut />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <RevenueCard />
        <TrafficCard />
      </div>

      <TransactionsTable />

    </div>
  </DashboardLayout>
);
}