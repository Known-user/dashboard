import { MoreVertical } from "lucide-react";

export default function KnowledgeCard({ card }) {
  return (
    <>
      <div className="min-h-[220px] border border-slate-200 rounded-xl p-4 shadow-sm bg-white flex flex-col">
        <div className="w-full flex justify-between items-center">
          <h3 className="flex-1 text-lg font-semibold text-slate-800 text-ellipsis text-nowrap overflow-hidden">
            {card.title}
          </h3>
          <div className="flex items-center gap-2 justify-center">
            <MoreVertical className="h-5 cursor-pointer text-gray-500/90" />
          </div>
        </div>
        <p className="flex-1 text-gray-500/80 text-sm font-medium mt-2">{card.description}</p>
        <div className="h-px bg-slate-100 my-4" />
        <div className="text-sm text-gray-500/80 font-medium">
          Created On: <span className="font-semibold text-black/70">{card.createdAt}</span>
        </div>
      </div>
    </>
  );
}
