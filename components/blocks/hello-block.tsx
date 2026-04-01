"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function getAge() {
  const birthday = new Date("2004-04-04");
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }
  return age;
}

export function HelloBlock() {
  const age = getAge();

  return (
    <section id="header" className="mt-12">
      <BlurFade delay={0.25} inView>
        <div className="space-y-3">
          <Avatar className="size-14">
            <AvatarImage src={"/adib.jpg"} className="object-cover" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <h2 className="font-medium tracking-tight text-2xl sm:text-4xl xl:text-5xl/none">
            Hey there 👋
          </h2>
        </div>
      </BlurFade>
      <div className="my-1.5 md:my-3 lg:my-4" />
      <BlurFade delay={0.25 * 1.5} inView>
        <span className="text-pretty tracking-tight text-xl sm:text-2xl xl:text-3xl/none text-muted-foreground">
          I am Adib Mohsin, {age}yo software engineer based in Bangladesh
        </span>
      </BlurFade>
    </section>
  );
}
