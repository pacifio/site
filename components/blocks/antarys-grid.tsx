import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Globe, Database, Settings, StarsIcon } from "lucide-react";
import { Badge } from "../ui/badge";

const itemsSample: BentoItem[] = [
  {
    title: "Vector Database",
    meta: "v0.1.3",
    description:
      "1.5-2x faster query time, less than 15mb build size, backed by AHNSW algorithm",
    icon: <Database className="w-4 h-4 text-blue-500" />,
    status: "Beta",
    tags: ["Database", "Vector", "Search", "AI"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Vectorisation",
    description: "Turn raw data into vector embeddings with native pipeline",
    icon: <Settings className="w-4 h-4 text-emerald-500" />,
    status: "Development",
    tags: ["Embedding", "Data"],
  },
  {
    title: "LLM Manager",
    description:
      "Manage large and small language models in one place and access them with API",
    icon: <StarsIcon className="w-4 h-4 text-purple-500" />,
    status: "Development",
    tags: ["LLM", "SLM", "AI", "Agents", "Native"],
    colSpan: 2,
  },
  {
    title: "API",
    meta: "Universal",
    description: "Access every feature from one API",
    icon: <Globe className="w-4 h-4 text-sky-500" />,
    status: "Beta",
    tags: ["Infrastructure", "Edge", "API"],
  },
];

function AntarysGrid() {
  return (
    <div className="">
      <Badge className="mb-4">
        <StarsIcon /> Focusing on
      </Badge>
      <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-900 dark:text-white mb-16 w-3/4">
        I am now committed to building Antarys.{" "}
        <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl lg:text-3xl">
          To power the next generaiton of AI apps and agents to run on system
          level.
        </span>
      </h3>
      <BentoGrid items={itemsSample} />
    </div>
  );
}

export { AntarysGrid };
