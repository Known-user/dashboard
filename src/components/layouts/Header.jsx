import { Bell } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-between px-6 py-4 shadow-sm">
      <div className="font-bold text-xl tracking-wide">Worcs</div>
      <div className="flex-1 mx-6 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full px-4 py-2 text-slate-700 focus:outline-none"
        />
      </div>
      <div className="flex gap-2 items-center">
        <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
          <Bell className="h-4 w-4" />
        </button>
        <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-500/80 flex items-center justify-center text-sm font-semibold">
          GK
        </div>
      </div>
    </header>
  );
}
