import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export default function KnowledgeModal({ onClose, onSubmit }) {
  const [draft, setDraft] = useState({ name: "", description: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!draft.name.trim()) return;
    onSubmit(draft);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <div className="absolute rounded-l-xl right-0 top-0 h-full w-[460px] bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Create New Knowledge Base
            </h2>
            <p className="text-sm text-slate-500 tracking-tight">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-slate-700"
          >
            <X className="w-5.5" />
          </button>
        </div>

        <form
          onSubmit={submit}
          className="flex-1 overflow-y-auto p-5 space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-slate-700">
              Name (Cannot be edited later){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              value={draft.name}
              onChange={(e) =>
                setDraft((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Name"
              className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              value={draft.description}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Description"
              rows={4}
              className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mt-1">
              <select className="w-full appearance-none border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:cursor-pointer">
                <option>Qdrant</option>
                <option>Pinecone</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown className="w-4 h-4 text-gray-500/85" />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full mt-1">
              <select className="w-full appearance-none border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:cursor-pointer">
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown className="w-4 h-4 text-gray-500/85" />
              </div>
            </div>
          </div>
        </form>

        <div className="p-5 flex justify-end">
          <button
            type="submit"
            onClick={submit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
