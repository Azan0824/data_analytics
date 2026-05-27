import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Users",
    icon: Users,
    path: "/users",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

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
      sticky
      top-0
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12"
      >
        DataFlow
      </motion.h1>

      <nav className="space-y-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.name} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    x: 5,
                  }}
                  className={`
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    cursor-pointer
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20"
                        : "hover:bg-white/5 text-zinc-300"
                    }
                  `}
                >
                  <Icon size={22} />
                  <span className="font-medium">
                    {item.name}
                  </span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}