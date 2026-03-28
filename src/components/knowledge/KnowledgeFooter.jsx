import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function KnowledgeFooter({ filtered }) {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <p className="text-base text-slate-600 font-bold">
          {filtered.length} rows
        </p>
        <div className="flex items-center gap-2">
          <span className="text-base text-slate-600 font-bold">
            Rows per page
          </span>
          <div className="relative w-16">
            <select className="w-full appearance-none border border-slate-300 focus:outline-none rounded-md px-2 py-1 text-sm hover:cursor-pointer">
              <option value={10} className="bg-gray-900 text-white">
                10
              </option>
              <option value={20} className="bg-gray-900 text-white">
                20
              </option>
              <option value={50} className="bg-gray-900 text-white">
                50
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <ChevronDown className="w-4 h-4 text-gray-400/85" />
            </div>
          </div>
          <span className="h-6 w-px bg-gray-400/55 mx-4"></span>
          <span className="text-base text-slate-600 font-bold">
            page 1 of 1
          </span>
          <button className="px-2 py-1 border border-slate-300 rounded-md">
            <ChevronsLeft className="w-5 text-gray-500/85" />
          </button>
          <button className="px-2 py-1 border border-slate-300 rounded-md">
            <ChevronLeft className="w-5 text-gray-500/85" />
          </button>
          <button className="px-2 py-1 border border-slate-300 rounded-md">
            <ChevronRight className="w-5 text-gray-500/85" />
          </button>
          <button className="px-2 py-1 border border-slate-300 rounded-md">
            <ChevronsRight className="w-5 text-gray-500/85" />
          </button>
        </div>
      </div>
    </>
  );
}
