import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Skills() {
  const words = ["applications", "websites", "systems", "startups"];

  return (
    <div className="flex mb-6">
      <div className="text-2xl md:text-3xl lg:text-3xl font-normal text-neutral-400">
        I build
        <FlipWords words={words} /> <br />& doing so for the past 6 years
      </div>
    </div>
  );
}
