import { Bell, Search, ChevronDown, Command } from "lucide-react";

export default function Header() {
  return (
    <header className="mx-4 mt-3">
      <div className="w-full bg-linear-to-r from-[#0f172a] via-[#312e81] to-[#0f172a] text-white flex items-center justify-between px-5 py-3 shadow-lg rounded-xl">
        <div className="flex items-center gap-4">

          <h1 className="text-2xl font-medium tracking-wide">Worcspace</h1>
          <div className="relative w-36">
            <select
              name="workspaces"
              id="workspaces"
              className="inline-flex w-full appearance-none items-center gap-1 rounded-full  bg-primary/35 px-4 py-1 text-sm text-white focus:outline-0 hover:bg-primary/15 hover:cursor-pointer"
            >
              <option value="workspace1">Workspace 1</option>
              <option value="workspace2">Workspace 2</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className="w-4 h-4 " />
            </div>
          </div>
        </div>

        <div className="relative max-w-md w-full mx-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl bg-white/10 px-10 py-2 text-white placeholder:text-white/70 focus:border-white/50 focus:outline-none"
          />
          <div className="flex items-center absolute right-3 top-1/2 -translate-y-1/2  text-white/70">
            <Command className="h-3 w-3" />
            <span className="text-sm">
              K
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/15">
            <Bell className="h-5 w-5" />
          </button>
          <div className="w-9 h-9 rounded-full bg-purple-400/60 border border-white/20 flex items-center justify-center text-xs font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition">
            GK
          </div>
        </div>
      </div>
    </header>
  );
}             