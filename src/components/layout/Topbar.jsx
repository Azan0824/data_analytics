import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h2 className="text-2xl font-bold">
          Analytics Overview
        </h2>

        <p className="text-zinc-400">
          Monitor your business performance
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              pl-10
              pr-4
              py-2
              rounded-xl
              bg-white/5
              border
              border-white/10
              outline-none
            "
          />
        </div>

        <div
          className="
            relative
            p-3
            rounded-xl
            bg-white/5
            cursor-pointer
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              -top-1
              -right-1
              w-5
              h-5
              rounded-full
              bg-red-500
              text-xs
              flex
              items-center
              justify-center
            "
          >
            3
          </span>
        </div>

      </div>

    </div>
  );
}