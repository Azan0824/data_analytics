import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useTheme } from "../../context/ThemeContext";

export default function DashboardLayout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? "flex min-h-screen bg-[#09090b] text-white"
          : "flex min-h-screen bg-white text-black"
      }
    >
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Topbar />
        {children}
      </main>
    </div>
  );
}