import About from "@/components/blocks/about";
import { AntarysGrid } from "@/components/blocks/antarys-grid";
import BepaariSection from "@/components/blocks/bepaari";
import { Cmd, CmdTrigger } from "@/components/blocks/cmd";
import { HelloBlock } from "@/components/blocks/hello-block";
import PuthikaSection from "@/components/blocks/puthika";
import { Skills } from "@/components/blocks/skills";

import { Summary } from "@/components/blocks/summary";
import WorkTimeline from "@/components/blocks/work";
import { BlurFade } from "@/components/ui/blur-fade";
import { CTAButton } from "@/components/ui/cta-btn";

import { DefaultFAB } from "@/components/ui/floating-action-button";
import { Marquee } from "@/components/ui/marquee";

import Stats from "@/components/ui/stats";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowRight, StarsIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <div className="w-full py-4 border-b border-dashed absolute top-0 right-0 left-0">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <Link
            href={"https://calendly.com/admin-antarys/30min"}
            target="_blank"
          >
            <CTAButton
              containerClassName="rounded-full"
              className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2"
            >
              <StarsIcon size={14} className="dark:text-black text-white" />
              <span className="text-xs md:text-sm">Let's connect</span>
              <ArrowRight size={12} className="dark:text-black text-white" />
            </CTAButton>
          </Link>

          <div className="flex items-center gap-4">
            <CmdTrigger />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center container mx-auto border-l border-r border-dashed pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-32">
          <HelloBlock />
          <Summary />
        </div>

        <About />

        <div className="w-full border-b border-dashed my-12 md:my-24"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 lg:px-24 xl:px-32">
          <Skills />
          <WorkTimeline />
        </div>

        <div className="w-full border-b border-dashed my-12 md:my-24"></div>

        <div className="px-8 md:px-16 lg:px-24 xl:px-32">
          <BlurFade delay={0.15} inView>
            <AntarysGrid />
          </BlurFade>
        </div>

        <div className="w-full border-b border-dashed my-12 md:my-24"></div>

        <BlurFade delay={0.15} inView>
          <PuthikaSection />
        </BlurFade>

        <div className="w-full border-b border-dashed my-12 md:my-24"></div>

        <BlurFade delay={0.15} inView>
          <BepaariSection />
        </BlurFade>

        <div className="w-full border-b border-dashed mb-12 md:mb-24"></div>

        <Stats />

        <Marquee text="Building In Scale" />
      </div>

      <Cmd />
      <DefaultFAB />
    </main>
  );
}
