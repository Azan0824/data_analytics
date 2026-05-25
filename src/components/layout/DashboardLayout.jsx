import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />
        {children}
      </main>
    </div>
  );
}