import React from "react";

const sections = [
  {
    title: "MY PROJECTS",
    items: ["Agents", "AI Models", "Library"],
  },
  {
    title: "ORCHESTRATOR",
    items: [
      "Published",
      "Machines",
      "Queues",
      "Triggers",
      "Jobs",
      "Executions",
      "Vault",
    ],
  },
  {
    title: "ADMIN",
    items: ["Tenant", "Integrations"],
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-white border-r border-slate-200 w-80 px-4 py-7 text-slate-700">
      <div className="mb-6 text-2xl font-bold">Worcs</div>
      {sections.map((section) => (
        <div key={section.title} className="mb-5">
          <p className="text-xs font-semibold uppercase text-slate-500 mb-2">
            {section.title}
          </p>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const active = item === "Knowledge Base";
              return (
                <li
                  key={item}
                  className={`rounded-lg px-3 py-2 cursor-pointer text-sm ${active
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="border-t border-slate-200 pt-4 text-xs text-slate-500">
        v1.0.0
      </div>
    </aside>
  );
}
