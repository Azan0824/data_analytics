import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      min-h-screen
      border-r
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >
      <h1 className="text-3xl font-bold mb-12">
        DataFlow
      </h1>

      <nav className="space-y-4">
        <div className="bg-violet-600 rounded-xl p-4 flex gap-3 cursor-pointer">
          <LayoutDashboard />
          Dashboard
        </div>

        <div className="p-4 flex gap-3 hover:bg-white/5 rounded-xl cursor-pointer">
          <BarChart3 />
          Analytics
        </div>

        <div className="p-4 flex gap-3 hover:bg-white/5 rounded-xl cursor-pointer">
          <Users />
          Users
        </div>

        <div className="p-4 flex gap-3 hover:bg-white/5 rounded-xl cursor-pointer">
          <Settings />
          Settings
        </div>
      </nav>
    </aside>
  );
}