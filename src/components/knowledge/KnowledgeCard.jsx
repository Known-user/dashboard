import { MoreVertical } from "lucide-react";

export default function KnowledgeCard({ card }) {
  return (
    <>
      <div className="border border-slate-200 rounded-xl p-4 shadow-sm bg-white flex flex-col">
        <div className="w-full flex justify-between items-center">
          <h3 className="flex-1 text-lg font-bold text-slate-800 text-ellipsis text-nowrap overflow-hidden">
            {card.title}
          </h3>
          <div className="flex items-center gap-2 justify-center">
            <MoreVertical className="h-5 cursor-pointer" />
          </div>
        </div>
        <p className="flex-1 text-slate-600 text-sm mt-2">{card.description}</p>
        <div className="h-px bg-slate-100 my-4" />
        <div className="text-xs text-slate-500">
          Created On: <span className="font-semibold">{card.createdAt}</span>
        </div>
      </div>
    </>
  );
}
