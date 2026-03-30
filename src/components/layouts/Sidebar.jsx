import {
  Box,
  Zap,
  Shield,
  BookOpenCheck,
  LaptopMinimal,
  Rows3,
  MonitorPlay,
  Library,
  IdCard,
  Bot,
  FileBox,
  Columns3,
} from "lucide-react";
import { useState } from "react";


const sections = [
  {
    title: "MY PROJECTS",
    items: [
      { name: "Agents", icon: Bot },
      { name: "AI Models", icon: FileBox },
      { name: "Library", icon: Columns3 },
    ],
  },
  {
    title: "ORCHESTRATOR",
    items: [
      { name: "Published", icon: Bot },
      { name: "Machines", icon: LaptopMinimal },
      { name: "Queues", icon: Rows3 },
      { name: "Triggers", icon: Zap },
      { name: "Jobs", icon: MonitorPlay },
      { name: "Executions", icon: MonitorPlay },
      { name: "Vault", icon: Shield },
      { name: "Knowledge Base", icon: BookOpenCheck },
      { name: "Key Store", icon: Library },
    ],
  },
  {
    title: "ADMIN",
    items: [
      { name: "Tenant", icon: IdCard },
      { name: "Integrations", icon: Box },
    ],
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Knowledge Base");

  const handleClick = (name) => {
    setActive(name);
  };
  return (
    <aside className="bg-white border-r border-slate-200 w-50 lg:w-65 px-7 py-9 text-slate-700">
      <div>
        {sections.map((section) => (
          <div key={section.title} className="mb-5">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-wide text-slate-500/75 mb-2">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map(({ name, icon: Icon }) => {
                return (
                  <li
                    key={name}
                    onClick={() => handleClick(name)}
                    className={`relative flex items-center gap-2.5 rounded-lg px-4 py-2.5 cursor-pointer text-sm font-semibold ${active === name
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    {active === name && (
                      <span className="absolute left-0 top-2 bottom-2 w-0.75 rounded-md bg-indigo-500"></span>
                    )}

                    <Icon className="h-4 w-auto" />
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}           