"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Globe2, Code2 } from "lucide-react";

const defaultCards = [
  {
    icon: <Code2 className="size-4 text-blue-300" />,
    title: "Journey Started",
    description: "From 2018 As A Web Dev",
    date: "JS",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Globe2 className="size-4 text-blue-300" />,
    title: "Previously At",
    description: "Puthika - Largest Bengali Audiobooks",
    date: "Since 2020",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Founder",
    description: "Antarys Inc - Future of AI infra",
    date: "Jul 2025",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

function Summary() {
  return (
    <div className="flex min-h-[200px] w-full overflow-x-clip items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { Summary };
