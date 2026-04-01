"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  blur?: number;
  variant?: "default" | "white" | "radial";
  movementDuration?: number;
  borderWidth?: number;
  className?: string;
}

const GlowingEffect = memo(function GlowingEffect({
  spread = 20,
  glow = false,
  disabled = true,
  proximity = 0,
  inactiveZone = 0.7,
  blur = 0,
  variant = "default",
  movementDuration = 2,
  borderWidth = 1,
  className,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastAngleRef = useRef(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current || disabled) return;

      const el = containerRef.current;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceFromCenter = Math.hypot(
        clientX - centerX,
        clientY - centerY
      );
      const inactiveRadius =
        0.5 * Math.min(rect.width, rect.height) * inactiveZone;

      if (distanceFromCenter < inactiveRadius) {
        el.style.setProperty("--active", "0");
        return;
      }

      const isWithinProximity =
        clientX >= rect.left - proximity &&
        clientX <= rect.left + rect.width + proximity &&
        clientY >= rect.top - proximity &&
        clientY <= rect.top + rect.height + proximity;

      if (isWithinProximity) {
        el.style.setProperty("--active", "1");
      } else {
        el.style.setProperty("--active", "0");
        return;
      }

      const targetAngle =
        Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) +
        90;

      let angleDiff =
        ((targetAngle - lastAngleRef.current + 180) % 360) - 180;
      if (angleDiff < -180) angleDiff += 360;
      const newAngle = lastAngleRef.current + angleDiff;

      if (animationRef.current) {
        animationRef.current.stop();
      }

      animationRef.current = animate(lastAngleRef.current, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          if (containerRef.current) {
            containerRef.current.style.setProperty("--start", String(value));
          }
        },
      });

      lastAngleRef.current = newAngle;
    },
    [disabled, proximity, inactiveZone, movementDuration]
  );

  useEffect(() => {
    if (disabled) return;

    const onPointerMove = (e: PointerEvent) => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        handleMove(e.clientX, e.clientY);
        rafRef.current = null;
      });
    };

    const onScroll = () => {
      // Recalculate on scroll — element position may have changed
    };

    document.body.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.body.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [disabled, handleMove]);

  const gradients: Record<string, string> = {
    default: `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
         radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
         radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
         radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
         repeating-conic-gradient(
           from 236.84deg at 50% 50%,
           #dd7bbb 0%,
           #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
           #5a922c calc(50% / var(--repeating-conic-gradient-times)),
           #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
           #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
         )`,
    white: `repeating-conic-gradient(from 236.84deg at 50% 50%, #fff 0%, #fff calc(25% / var(--repeating-conic-gradient-times)), #fff calc(50% / var(--repeating-conic-gradient-times)), #fff calc(75% / var(--repeating-conic-gradient-times)), #fff calc(100% / var(--repeating-conic-gradient-times)))`,
    radial: `radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%),
         radial-gradient(circle at 30% 50%, rgba(168,162,158,0.5) 0%, rgba(168,162,158,0) 35%),
         radial-gradient(circle at 70% 50%, rgba(168,162,158,0.5) 0%, rgba(168,162,158,0) 35%),
         repeating-conic-gradient(
           from 236.84deg at 50% 50%,
           rgba(255,255,255,0.7) 0%,
           rgba(214,211,209,0.5) calc(25% / var(--repeating-conic-gradient-times)),
           rgba(168,162,158,0.4) calc(50% / var(--repeating-conic-gradient-times)),
           rgba(214,211,209,0.5) calc(75% / var(--repeating-conic-gradient-times)),
           rgba(255,255,255,0.7) calc(100% / var(--repeating-conic-gradient-times))
         )`,
  };

  const gradient = gradients[variant] || gradients.default;

  return (
    <>
      {/* Fallback static border */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] border border-border/50 transition-opacity duration-300",
          disabled ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Glow container */}
      <div
        ref={containerRef}
        style={
          {
            "--spread": spread,
            "--blur": `${blur}px`,
            "--active": glow ? 1 : 0,
            "--start": 0,
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": 5,
            "--gradient": gradient,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",
          disabled && "!hidden",
          className
        )}
      >
        <div
          className="glow absolute inset-0 rounded-[inherit]"
          style={{
            filter: `blur(var(--blur))`,
          }}
        >
          <div
            className="absolute rounded-[inherit] transition-opacity duration-300"
            style={{
              inset: `calc(-1 * var(--glowingeffect-border-width))`,
              border: `var(--glowingeffect-border-width) solid transparent`,
              background: `var(--gradient)`,
              backgroundAttachment: "fixed",
              maskImage: `linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - var(--spread)) * 1deg), #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg))`,
              WebkitMaskImage: `linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - var(--spread)) * 1deg), #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg))`,
              maskClip: "padding-box, border-box",
              WebkitMaskClip: "padding-box, border-box",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
              opacity: `var(--active)`,
            }}
          />
        </div>
      </div>
    </>
  );
});

export { GlowingEffect };
