"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * 🧠 CanvasRevealGate (final optimized)
 * ---------------------------------------------
 * - Uses IntersectionObserver to lazy-load the effect only when needed.
 * - Uses requestIdleCallback to preload module after main thread idle.
 * - Keeps optional click-to-activate mode.
 * - Adds smooth fade-in when appearing.
 */

const LazyCanvasReveal = dynamic(
  () => import("./canvas-reveal-effect").then((m) => m.CanvasRevealEffect),
  { ssr: false }
);

type GateProps = {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
  rootMargin?: string;
  fallback?: React.ReactNode;
  loadOnClick?: boolean;
};

export default function CanvasRevealGate({
  animationSpeed,
  opacities,
  colors,
  containerClassName,
  dotSize,
  showGradient,
  rootMargin = "240px",
  fallback = <div className="h-full w-full rounded-2xl bg-zinc-900/60" />,
  loadOnClick = false,
}: GateProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  /* 🕒 Preload shader module after idle (doesn't affect page load) */
  useEffect(() => {
    const idle =
      requestIdleCallback?.(() => import("./canvas-reveal-effect")) ??
      setTimeout(() => import("./canvas-reveal-effect"), 1500);
    return () => {
      if (typeof idle === "number") clearTimeout(idle);
      else cancelIdleCallback?.(idle);
    };
  }, []);

  /* 👀 Observe element entry into viewport */
  useEffect(() => {
    if (loadOnClick) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          io.disconnect();
          // small fade-in for smoother appearance
          setTimeout(() => setFadeIn(true), 50);
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loadOnClick, rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-full w-full transition-opacity duration-300",
        fadeIn ? "opacity-100" : "opacity-0"
      )}
    >
      {shouldMount || loadOnClick ? (
        loadOnClick && !shouldMount ? (
          <button
            onClick={() => {
              setShouldMount(true);
              setTimeout(() => setFadeIn(true), 50);
            }}
            className="h-48 w-full rounded-2xl bg-zinc-900/60 grid place-items-center"
            aria-label="Activate background effect"
          >
            <span className="text-sm text-zinc-300">Click to activate effect</span>
          </button>
        ) : (
          <LazyCanvasReveal
            animationSpeed={animationSpeed}
            opacities={opacities}
            colors={colors}
            containerClassName={containerClassName}
            dotSize={dotSize}
            showGradient={showGradient}
          />
        )
      ) : (
        fallback
      )}
    </div>
  );
}
