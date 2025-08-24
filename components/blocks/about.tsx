"use client";

import RichPopover from "@/components/ui/rich-popover";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function About() {
  return (
    <div className="text-left px-8 md:px-16 lg:px-24 xl:px-32 mt-14">
      <h3 className="text-2xl mb-3">My Misson?</h3>
      <div className="flex items-center justify-center">
        <div className="space-y-4 text-xl leading-relaxed">
          <p className="text-muted-foreground">
            The future of Human Computer Interaction is changing and this is my
            effort with{" "}
            <span className="font-bold dark:text-white text-black">
              Antarys
            </span>{" "}
            <RichPopover
              trigger={
                <span className="mx-1 inline-flex cursor-pointer align-sub">
                  <Avatar className="size-6">
                    <AvatarImage src={"/logo-circle.png"}></AvatarImage>
                  </Avatar>
                </span>
              }
              title="Antarys Inc"
              description={`Antarys is an unified portable AI infra tool that combines data vectorisation, vectro database stack and LLM manager all in all platform, building the future of developing AI apps/agents at scale.`}
              href="https://www.antarys.ai"
              actionLabel="Get Started"
              actionHref="https://www.antarys.ai/#get-started"
              meta="July 2025"
            />
            <br />I strongly believe in a future where AI will be accessible by
            everyone, and I do not mean just Chatbots, I am talking about truly
            intelligent machines with redefined HCI, where natural language is
            the only barrier between man and machines.
          </p>
        </div>
      </div>
    </div>
  );
}
