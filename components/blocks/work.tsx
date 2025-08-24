"use client";

import { Timeline } from "@/components/ui/timeline";

export default function WorkTimeline() {
  return (
    <Timeline
      items={[
        {
          date: "2025-07-01",
          title: "Founder - Antarys AI",
          description:
            "Building next-gen AI compute platform solving latency and response time for enterprises worldwide.",
          href: "https://antarys.ai/",
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
