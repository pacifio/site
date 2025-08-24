"use client";

import type * as React from "react";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { Clock, ExternalLink, Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export interface RichTooltipProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
  meta?: string;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export default function RichTooltip({
  trigger,
  title,
  description,
  icon,
  href,
  actionLabel,
  actionHref,
  onActionClick,
  meta,
  className = "",
  side = "top",
  align = "center",
}: RichTooltipProps) {
  const Title = (
    <div className="flex items-center gap-2 text-sm font-medium">
      {href ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          <span>{title}</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
        </Link>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );

  const Action = actionLabel ? (
    actionHref ? (
      <Link
        href={actionHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90"
      >
        <Play className="h-3.5 w-3.5" /> {actionLabel}
      </Link>
    ) : (
      <button
        onClick={onActionClick}
        className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90"
        type="button"
      >
        <Play className="h-3.5 w-3.5" /> {actionLabel}
      </button>
    )
  ) : null;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={side}
          align={align}
          sideOffset={8}
          className={`z-50 ${className}`}
          asChild
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: 5, filter: "blur(8px)" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.2,
            }}
            className="relative rounded-2xl border border-white/10 bg-black px-4 py-3 text-white shadow-xl"
          >
            {Title}
            {description && (
              <p className="mt-3 max-w-xs text-base leading-relaxed text-balance text-white/90">
                {description}
              </p>
            )}
            {(meta || Action) && (
              <div className="mt-4 flex items-center justify-between gap-3">
                {meta ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    <Clock className="h-3.5 w-3.5" /> {meta}
                  </span>
                ) : (
                  <span />
                )}
                {Action}
              </div>
            )}

            {/* Tail */}
            <Popover.Arrow className="fill-black" />
          </motion.div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
