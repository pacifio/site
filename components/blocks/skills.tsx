import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Skills() {
  const words = ["applications", "websites", "systems", "startups"];

  return (
    <div className="flex mb-8">
      <div className="text-3xl md:text-4xl lg:text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        I build
        <FlipWords words={words} /> <br />& doing so for the past 6 years
      </div>
    </div>
  );
}
