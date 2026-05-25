import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-4 text-zinc-400"
        />

        <input
          type="text"
          placeholder="Search analytics..."
          className="
          w-96
          bg-white/5
          border
          border-white/10
          rounded-xl
          py-3
          pl-12
          pr-4
          outline-none
          "
        />
      </div>

      <Bell className="cursor-pointer" />
    </div>
  );
}