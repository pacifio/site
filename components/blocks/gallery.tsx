import { CameraIcon, MoreVertical } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Gallery() {
  const images = Array.from({ length: 9 }, (_, i) => `/gallery/${i + 1}.JPG`);

  return (
    <section>
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        <Badge className="mb-4">
          <CameraIcon /> Clicks
        </Badge>
        <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-900 dark:text-white mb-16 w-3/4">
          I like to click and edit photos on my free time{" "}
          <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl lg:text-3xl">
            To pause and reflect back on moments I otherwise would not have
            noticed.
          </span>
        </h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, i) => (
            <div key={i} className="relative group">
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="aspect-[9/18] w-full rounded-[4px] object-cover cursor-pointer select-none"
                draggable={false}
              />
              {/* Dropdown Menu */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/80 dark:bg-black/60"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <a href={src} download>
                        Download image
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={src} target="_blank" rel="noopener noreferrer">
                        Open in new tab
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <a
                        href="https://instagram.com/mohsin.root"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Follow me on Instagram
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
