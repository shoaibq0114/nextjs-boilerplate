"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Lazy import the actual Three.js component only on the client
// NOTE: We access the named export CanvasRevealEffect from your file.
const LazyCanvasReveal = dynamic(
  () =>
    import("./canvas-reveal-effect").then((m) => m.CanvasRevealEffect),
  { ssr: false }
);

type GateProps = {
  // Pass-through props so you can keep using your current API
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;

  /** How early to start loading before it’s visible */
  rootMargin?: string; // e.g. "240px"
  /** Lightweight placeholder while loading / offscreen */
  fallback?: React.ReactNode;
  /** If true, only load after user clicks (even stricter) */
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

  useEffect(() => {
    if (loadOnClick) return; // click-driven mode, don’t pre-load on scroll

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShouldMount(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [loadOnClick, rootMargin]);

  return (
  <div ref={ref} className={cn("relative h-full w-full", containerClassName)}>
    {shouldMount || loadOnClick ? (
      loadOnClick && !shouldMount ? (
        <button
          onClick={() => setShouldMount(true)}
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
          // 🔧 pass the exact class you provide (bg-black / bg-sky-600 / bg-emerald-900)
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
