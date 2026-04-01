"use client";

import { Timeline } from "@/components/ui/timeline";

export default function WorkTimeline() {
  return (
    <Timeline
      items={[
        {
          date: "2026-01-01",
          title: "IdeaBox AI",
          description:
            "I help teams with AI implementation design into their product as well as overlook architecture design for various applications managed by IdeaBox AI and partners.",
          href: "https://ideabox.ai/",
        },
        {
          date: "2025-06-01",
          title: "Founder - Antarys AI",
          description:
            "Founded and maintained next-gen AI compute platform. Jun 2025 - Aug 2025 · 3 mos. Now open sourced.",
          href: "https://github.com/pacifio",
        },
        {
          date: "2023-09-01",
          title: "Software Engineer - WithU Ventures",
          description:
            "Shipped features to 500k+ users globally, worked on flagship features and refactored codebase for efficiency.",
          href: "https://www.withuapp.com/",
        },
        {
          date: "2023-06-01",
          title: "Software Engineer - Layopay",
          description:
            "Developed Saturn 1000 POS machine with custom Java libraries and Flutter interface for real-time payments.",
          href: "https://www.layopay.com/",
        },
        {
          date: "2020-06-01",
          title: "Co-founder - Puthika Ltd",
          description:
            "Built book reading and audiobook app with Flutter, serving 100k+ concurrent users with clean architecture.",
          href: "https://puthika.com.bd/",
        },
        {
          date: "2020-01-01",
          title: "Frontend Developer - Bepaari",
          description:
            "Led frontend team building business automation platform for large-scale distribution companies.",
          href: "https://bepaari.com/",
        },
      ]}
      initialCount={3}
      showMoreText="Load More"
      showLessText="Show Less"
      dotClassName="bg-gradient-to-b from-background to-muted ring-1 ring-border"
      lineClassName="border-l border-border"
    />
  );
}
