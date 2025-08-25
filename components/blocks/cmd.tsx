"use client";

import * as React from "react";
import { Moon, Sun, Download, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function Cmd() {
  const [open, setOpen] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
    setOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Adib Mohsin CV.pdf";
    link.click();
    setOpen(false);
  };

  const handleContact = () => {
    window.open("https://calendly.com/admin-antarys/30min", "_blank");
    setOpen(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Actions">
          <CommandItem onSelect={handleThemeToggle}>
            {isDark ? <Sun /> : <Moon />}
            <span>Switch Theme</span>
          </CommandItem>
          <CommandItem onSelect={handleDownloadCV}>
            <Download />
            <span>Download CV</span>
          </CommandItem>
          <CommandItem onSelect={handleContact}>
            <MessageCircle />
            <span>Contact with Me</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function CmdTrigger() {
  return (
    <p className="text-muted-foreground text-sm hidden sm:block">
      Press{" "}
      <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
        <span className="text-xs">⌘</span>J
      </kbd>
    </p>
  );
}
