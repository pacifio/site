import { Button } from "@/components/ui/button";
import { ChevronRight, FactoryIcon, StarsIcon, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function BepaariSection() {
  return (
    <section className="max-w-screen overflow-x-hidden">
      <div className="pb-24">
        <div className="px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <Badge className="mb-4">
                <FactoryIcon /> Scaled
              </Badge>
              <h2 className="text-foreground text-balance text-4xl lg:text-5xl">
                Co-Founded Bepaari
              </h2>
              <Button className="mt-8 pr-2" variant="outline" asChild>
                <Link href="https://bepaari.com/" target="_blank">
                  Learn more
                  <ChevronRight className="size-4 opacity-50" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6 md:col-span-3 md:space-y-10">
              <div>
                <div className="flex items-center gap-2">
                  <Target className="size-5" />
                  <h3 className="text-foreground text-lg font-semibold">
                    Order Tracking
                  </h3>
                </div>
                <p className="text-muted-foreground mt-3 text-balance">
                  Bepaari was more than just an inventory management tool, it
                  tracked your orders with live location for admins, shared OTP
                  for stock transfer security and kept digital invoicing, all
                  secure and in one platform.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <StarsIcon className="size-5" />
                  <h3 className="text-foreground text-lg font-semibold">
                    AI Insights
                  </h3>
                </div>
                <p className="text-muted-foreground mt-3 text-balance">
                  You could get AI driven insights about how your product is
                  being delivered, sold and returning profits with detailed
                  route maps and employee performance overviews.
                </p>
              </div>
            </div>
          </div>

          <div className="relative -mx-12 mt-16 px-12">
            <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
              <Image
                src="/bepaari.png"
                alt="app screen"
                width="2880"
                height="1842"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
