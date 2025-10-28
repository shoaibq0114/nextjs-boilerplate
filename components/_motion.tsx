// components/_motion.tsx
"use client";

import React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  useInView,
  useAnimate,
  stagger,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

// Re-export everything you use across the app
export {
  LazyMotion,
  domAnimation,
  AnimatePresence,
  useInView,
  useAnimate,
  stagger,
  useMotionValue,
  useMotionTemplate,
  // Alias `m` to `motion` so you can write `import { motion } ...`
  m as motion,
};

/** Optional convenience wrapper */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
