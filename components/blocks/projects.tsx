"use client";

import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  highlight?: string;
  href: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Libembedding",
    description:
      "C/C++ header-only library for text embeddings, sparse embeddings, image embeddings, and document reranking via ONNX Runtime.",
    highlight: "8.6x faster",
    href: "https://github.com/pacifio/libembedding",
    tags: ["C/C++", "Embeddings", "ONNX"],
  },
  {
    name: "Chyral AI",
    description:
      "AI-native browser designed for the new era of computing. Secure browsing to protect privacy.",
    href: "https://www.chyral.ai/",
    tags: ["Browser", "AI", "Privacy"],
  },
  {
    name: "UNC",
    description:
      "HuggingFace transformer compiler for optimised native inference binaries.",
    highlight: "1.35x faster",
    href: "https://github.com/pacifio/unc",
    tags: ["Compiler", "ML", "Native"],
  },
  {
    name: "Untoken",
    description:
      "Token compression for LLM prompts via a learned token selector. Beats LLMLingua-2 by 4-5pp ROUGE-L.",
    highlight: "SOTA",
    href: "https://github.com/imperativelabs/untoken",
    tags: ["LLM", "Compression"],
  },
  {
    name: "Fraction",
    description:
      "Persistent memory layer for LLM agents. Zero API costs, sub-100ms ingestion, fully offline.",
    highlight: "$0 cost",
    href: "https://github.com/pacifio/fraction",
    tags: ["Memory", "Agents", "Offline"],
  },
  {
    name: "Sinclair",
    description:
      "Synthetic LiDAR simulation platform for autonomous vehicle research.",
    href: "https://github.com/pacifio/sinclair",
    tags: ["Simulation", "LiDAR", "AV"],
  },
  {
    name: "Open Wiki",
    description:
      "Open-source alternative to Google Code Wiki — with MCP. Index codebases with tree-sitter, generate docs with LLMs.",
    href: "https://github.com/pacifio/open-wiki",
    tags: ["Docs", "MCP", "Tree-sitter"],
  },
  {
    name: "Noni",
    description:
      "Minimal tensor library with autograd for building deep learning models.",
    href: "https://github.com/pacifio/noni",
    tags: ["Deep Learning", "Autograd"],
  },
  {
    name: "Orkestra",
    description:
      "Stop overpaying for LLM calls. Automatically routes every prompt to the cheapest capable model.",
    href: "https://github.com/imperativelabs/orkestra",
    tags: ["LLM", "Routing", "Cost"],
  },
  {
    name: "Antarys",
    description:
      "Unified portable AI infra combining vectorisation, vector database, and LLM manager. Now open sourced.",
    href: "https://github.com/pacifio",
    tags: ["AI Infra", "Open Source"],
  },
  {
    name: "USearch",
    description:
      "Contributed to build the Zig library for building capable embedding indexings. High-performance vector search engine.",
    highlight: "4k+ stars",
    href: "https://github.com/unum-cloud/USearch",
    tags: ["Zig", "Vector Search", "Contrib"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="list-none">
      <div className="relative rounded-xl border border-border/50 p-px h-full">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="radial"
        />
        <Link
          href={project.href}
          target="_blank"
          className="group relative flex flex-col justify-between rounded-[11px] bg-card p-4 h-full shadow-[0px_0px_27px_0px_#0d0d0d]"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm text-foreground">
                {project.name}
              </h4>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {project.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.highlight && (
              <span className="text-[10px] font-medium text-emerald-400/80 whitespace-nowrap">
                {project.highlight}
              </span>
            )}
          </div>
        </Link>
      </div>
    </li>
  );
}

/*
  Staggered bento grid layout (md+), 3 items per row:
  Row 1: [Libembedding]  [Chyral]    [UNC]
  Row 2: [Untoken]       [Fraction]  [Sinclair]
  Row 3: [Open Wiki]     [Noni]      [Orkestra]
  Row 4: [Antarys]       [USearch]   [--]
*/
export function ProjectsShowcase() {
  return (
    <div>
      <Badge className="mb-3">
        <Code2 className="w-3 h-3" /> Projects
      </Badge>
      <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-foreground mb-8 w-3/4">
        Recent work and open source.{" "}
        <span className="text-muted-foreground">
          Systems, tools, and infrastructure I have built.
        </span>
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </div>
  );
}
