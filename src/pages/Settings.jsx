import DashboardLayout from "../components/layout/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-5xl font-bold">
          Settings
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <p className="text-zinc-400">
            Dashboard settings will appear here.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}