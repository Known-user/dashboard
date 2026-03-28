import { useMemo, useState } from "react";
import KnowledgeCard from "../components/knowledge/KnowledgeCard";
import KnowledgeMondal from "../components/knowledge/KnowledgeMondal";
import KnowledgeHeader from "../components/knowledge/KnowledgeHeader";
import KnowledgeFooter from "../components/knowledge/KnowledgeFooter";
import { createPortal } from "react-dom";
import { Files, ShieldHalf } from "lucide-react";


const cards = [
  {
    id: 1,
    title: "User Onboarding Guide",
    description:
      "Step-by-step instructions to help new users get started quickly with the platform.",
    createdAt: "02/01/2025",
  },
  {
    id: 2,
    title: "API Authentication",
    description:
      "Detailed explanation of API key usage, token generation, and secure authentication flow.",
    createdAt: "15/01/2025",
  },
  {
    id: 3,
    title: "Payment Integration",
    description:
      "Guide for integrating payment gateways including Razorpay and Stripe.",
    createdAt: "28/01/2025",
  },
  {
    id: 4,
    title: "Error Handling Docs",
    description:
      "Common error codes, debugging tips, and how to handle failures gracefully.",
    createdAt: "10/02/2025",
  },
  {
    id: 5,
    title: "AI Model Setup",
    description:
      "Instructions to configure and deploy AI models within your workspace.",
    createdAt: "22/02/2025",
  },
  {
    id: 6,
    title: "Deployment Guide",
    description:
      "Steps to deploy your application using Docker, CI/CD pipelines, and cloud providers.",
    createdAt: "05/03/2025",
  },
];
export default function Home() {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(cards);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    );
  }, [items, query]);

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const submit = (draft) => {
    setItems((prev) => [
      {
        id: prev.length + 1,
        title: draft.name,
        description: draft.description || "No description",
        createdAt: new Date().toLocaleDateString("en-GB"),
      },
      ...prev,
    ]);
    setIsModalOpen(false);
  };

  return (
    <div className="h-full space-y-6 flex flex-col">
      <KnowledgeHeader
        query={query}
        handleQueryChange={handleQueryChange}
        openModal={openModal}
      />

      <section className="flex-1 overflow-auto">
        <div className="border border-slate-200 rounded-xl p-4 shadow-sm bg-white">
          {filtered.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((card) => (
              <KnowledgeCard key={card.id} card={card} />
            ))
            }
          </div>)
            :
            (<div className="h-[50vh] flex flex-col items-center justify-center">

              <Files className="w-24 h-auto text-gray-400" />
              <h2 className="text-base font-medium text-gray-400 mt-2">NO Knowledge Bases Found</h2>

            </div>)
          }
        </div>
      </section>

      <KnowledgeFooter filtered={filtered} />

      {isModalOpen &&
        createPortal(
          <KnowledgeMondal onClose={closeModal} onSubmit={submit} />,
          document.getElementById("modal-root"),
        )}
    </div>
  );
}


