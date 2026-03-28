import { Plus, Search } from "lucide-react";

export default function KnowledgeHeader({
  query,
  handleQueryChange,
  openModal,
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl lg:text-xl font-bold text-slate-800 text-nowrap">
            Knowledge Base
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4.5 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Search..."
              className="px-10 py-2 border border-slate-300 rounded-lg w-full lg:w-60 focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder:text-gray-400 placeholder:font-semibold"
            />
          </div>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 flex items-center gap-1"
          >
            <Plus className="w-4 md:w-6" />
            <p className="text-nowrap text-sm md:text-sm font-normal">
              Create New
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
