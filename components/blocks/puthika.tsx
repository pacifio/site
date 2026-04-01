import {
  Activity,
  BadgeIcon,
  Download,
  DraftingCompass,
  Globe2,
  Languages,
  Mail,
  Newspaper,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <Badge className="mb-4">
              <BadgeIcon /> Previously
            </Badge>

            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl lg:text-5xl">Co-Founded Puthika</h2>
              <p className="mt-6">
                And built the app and the frontend and shipped it to 100k
                consumers with 10k active MAU
              </p>
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              <li>
                <Download className="size-5" />
                100k+ Downloads on Mobile
              </li>
              <li>
                <Languages className="size-5" />
                Multilingual Content
              </li>
              <li>
                <Globe2 className="size-5" />
                Users from 24+ Countries
              </li>

              <li>
                <Newspaper className="size-5" />
                Featured On National News
              </li>
            </ul>
          </div>
          <Link
            href={"https://puthika.com.bd/"}
            target="_blank"
            className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3"
          >
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-700 to-transparent p-px">
              <Image
                src="/puthika-dark.png"
                className="rounded-[15px]"
                alt="puthika app"
                width={1207}
                height={929}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
