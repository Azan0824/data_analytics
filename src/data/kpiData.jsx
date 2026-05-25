import {
  DollarSign,
  Users,
  MousePointerClick,
  TrendingDown,
} from "lucide-react";

export const kpiData = [
  {
    title: "Revenue",
    value: "$48,920",
    growth: "+12.5%",
    icon: <DollarSign size={28} />,
  },
  {
    title: "Users",
    value: "18,240",
    growth: "+8.2%",
    icon: <Users size={28} />,
  },
  {
    title: "Conversion Rate",
    value: "4.8%",
    growth: "+2.1%",
    icon: <MousePointerClick size={28} />,
  },
  {
    title: "Bounce Rate",
    value: "32%",
    growth: "-3.7%",
    icon: <TrendingDown size={28} />,
  },
];