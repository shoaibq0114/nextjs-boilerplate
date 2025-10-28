"use client";

import { useEffect, useRef, useState } from "react";

/** Local, minimal shape for the idle deadline (avoid global merges) */
type IdleDeadlineLike = {
  readonly didTimeout: boolean;
  timeRemaining(): number;
};

/** Local view of window with optional idle APIs (no global merging) */
type IdleWindow = Window & {
  requestIdleCallback?: (
    cb: (deadline: IdleDeadlineLike) => void,
    opts?: { timeout: number }
  ) => number;
  cancelIdleCallback?: (id: number) => void;
};

type Props = {
  children: React.ReactNode;
  /** Start mounting when component is near viewport (e.g. "200px") */
  rootMargin?: string;
  /** Optional skeleton while waiting */
  fallback?: React.ReactNode;
  /** Max wait in ms before we give up and render anyway (idle fallback) */
  idleTimeoutMs?: number;
};

/** Cross-browser idle scheduling with timeout fallback. Returns a cancel function. */
function scheduleOnIdle(cb: () => void, timeout: number): () => void {
  if (typeof window !== "undefined") {
    const w = window as IdleWindow;
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => cb(), { timeout });
      return () => w.cancelIdleCallback?.(id);
    }
  }
  // Fallback: run after a short timeout (bounded by `timeout`, but not huge)
  const id = window.setTimeout(cb, Math.min(timeout, 1000));
  return () => clearTimeout(id);
}

export default function ClientDeferred({
  children,
  rootMargin = "200px",
  fallback = null,
  idleTimeoutMs = 5000,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;

    const el = ref.current;

    // Schedule reveal during an idle period (or fallback timer)
    const cancelIdle = scheduleOnIdle(() => setShow(true), idleTimeoutMs);

    // Also reveal when the element approaches the viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
          cancelIdle();
        }
      },
      { rootMargin }
    );

    if (el) io.observe(el);

    return () => {
      io.disconnect();
      cancelIdle();
    };
  }, [show, rootMargin, idleTimeoutMs]);

  return <div ref={ref}>{show ? children : fallback}</div>;
}