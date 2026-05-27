import DashboardLayout from "../components/layout/DashboardLayout";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import { motion } from "framer-motion";

const lineData = [
  { day: "Mon", users: 1200 },
  { day: "Tue", users: 1800 },
  { day: "Wed", users: 1400 },
  { day: "Thu", users: 2400 },
  { day: "Fri", users: 2200 },
  { day: "Sat", users: 3100 },
  { day: "Sun", users: 4000 },
];

const barData = [
  { name: "Desktop", value: 68 },
  { name: "Mobile", value: 24 },
  { name: "Tablet", value: 8 },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold">
              Analytics
            </h1>

            <p className="text-zinc-400 mt-2">
              Track user engagement and growth.
            </p>
          </div>

          <button
            className="
            bg-violet-600
            hover:bg-violet-500
            transition
            px-5
            py-3
            rounded-2xl
            font-semibold
            "
          >
            Export Report
          </button>
        </div>

        {/* TOP CARDS */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            {
              title: "Active Users",
              value: "24,892",
            },
            {
              title: "Session Duration",
              value: "4m 12s",
            },
            {
              title: "Conversion Rate",
              value: "18.2%",
            },
            {
              title: "Bounce Rate",
              value: "32%",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                backdrop-blur-xl
              "
            >
              <p className="text-zinc-400 text-sm">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-4">
                {card.value}
              </h2>
            </motion.div>
          ))}

        </div>

        {/* CHARTS */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* USER GROWTH */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
              xl:col-span-2
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-xl
            "
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                User Growth
              </h2>

              <p className="text-zinc-400 text-sm mt-1">
                Weekly active users
              </p>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart data={lineData}>
                  <XAxis
                    dataKey="day"
                    stroke="#71717a"
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#8b5cf6"
                    strokeWidth={4}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* DEVICE ANALYTICS */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              backdrop-blur-xl
            "
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Devices
              </h2>

              <p className="text-zinc-400 text-sm mt-1">
                Traffic by platform
              </p>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <BarChart data={barData}>
                  <XAxis
                    dataKey="name"
                    stroke="#71717a"
                  />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#8b5cf6"
                    radius={[12, 12, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

      </div>
    </DashboardLayout>
  );
}