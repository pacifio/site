import { BlurFade } from "@/components/ui/blur-fade";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function HelloBlock() {
  return (
    <section id="header" className="mt-16">
      <BlurFade delay={0.25} inView>
        <div className="space-y-4">
          <Avatar className="size-18">
            <AvatarImage src={"/adib.jpg"} className="object-cover" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <h2 className="font-medium tracking-tighter text-3xl sm:text-5xl xl:text-6xl/none">
            Hey there 👋
          </h2>
        </div>
      </BlurFade>
      <div className="my-2 md:my-4 lg:my-6" />
      <BlurFade delay={0.25 * 1.5} inView>
        <span className="text-pretty tracking-tighter text-2xl sm:text-3xl xl:text-4xl/none">
          I am Adib Mohsin, 21yo software engineer based in Bangladesh
        </span>
      </BlurFade>
    </section>
  );
}
