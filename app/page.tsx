import About from "@/components/blocks/about";
import BepaariSection from "@/components/blocks/bepaari";
import { Cmd, CmdTrigger } from "@/components/blocks/cmd";
import { HelloBlock } from "@/components/blocks/hello-block";
import { ProjectsShowcase } from "@/components/blocks/projects";
import PuthikaSection from "@/components/blocks/puthika";
import { Skills } from "@/components/blocks/skills";

import { Summary } from "@/components/blocks/summary";
import WorkTimeline from "@/components/blocks/work";
import { BlurFade } from "@/components/ui/blur-fade";
import { CTAButton } from "@/components/ui/cta-btn";

import { DefaultFAB } from "@/components/ui/floating-action-button";

import Stats from "@/components/ui/stats";
import { ArrowRight, StarsIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <div className="w-full py-3 border-b border-dashed absolute top-0 right-0 left-0">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <Link
            href={"https://www.linkedin.com/in/adib-mohsin/"}
            target="_blank"
          >
            <CTAButton
              containerClassName="rounded-full"
              className="bg-white text-black flex items-center space-x-2"
            >
              <StarsIcon size={14} className="text-black" />
              <span className="text-xs md:text-sm">Let's connect</span>
              <ArrowRight size={12} className="text-black" />
            </CTAButton>
          </Link>

          <div className="flex items-center gap-4">
            <CmdTrigger />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center container mx-auto border-l border-r border-dashed pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 lg:px-20 xl:px-28">
          <HelloBlock />
          <Summary />
        </div>

        <About />

        <div className="w-full border-b border-dashed my-8 md:my-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 lg:px-20 xl:px-28">
          <Skills />
          <WorkTimeline />
        </div>

        <div className="w-full border-b border-dashed my-8 md:my-16"></div>

        <div className="px-6 md:px-12 lg:px-20 xl:px-28 w-full">
          <BlurFade delay={0.15} inView>
            <ProjectsShowcase />
          </BlurFade>
        </div>

        <div className="w-full border-b border-dashed my-8 md:my-16"></div>

        <BlurFade delay={0.15} inView>
          <PuthikaSection />
        </BlurFade>

        <div className="w-full border-b border-dashed my-8 md:my-16"></div>

        <BlurFade delay={0.15} inView>
          <BepaariSection />
        </BlurFade>

        <Stats />
      </div>

      <Cmd />
      <DefaultFAB />
    </main>
  );
}
