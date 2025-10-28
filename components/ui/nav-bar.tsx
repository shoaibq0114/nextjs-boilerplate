/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// ✅ Use the lightweight wrapper (re-exports from framer-motion)
import { LazyMotion, domAnimation, motion, AnimatePresence } from "@/components/_motion";

const transition = {
  type: "spring",
  mass: 0.45,          // slightly lighter
  damping: 14,         // a touch higher for quick settle
  stiffness: 160,      // snappier feel
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  // Respect reduced motion; if true, cut animation durations to 0
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fadeTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.18 };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {/* Keep hover color as pure CSS, no JS animation needed */}
      <p className="cursor-pointer text-black hover:opacity-90 transition-opacity dark:text-white">
        {item}
      </p>

      {/* Mount dropdown only when ANY item active (AnimatePresence avoids layout thrash) */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={prefersReducedMotion ? { duration: 0 } : transition}
          >
            {active === item && (
              <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 -translate-x-1/2 pt-4">
                {/* layoutId enables the “shared” morph only for the active container */}
                <motion.div
                  layoutId="active"
                  transition={prefersReducedMotion ? { duration: 0 } : transition}
                  className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                >
                  {/* layout makes inner block resize smoothly but cheaply */}
                  <motion.div
                    layout
                    transition={fadeTransition}
                    className="w-max h-full p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    // ✅ Wrap once so Framer’s light bundle is loaded on demand for this bar only
    <LazyMotion features={domAnimation}>
      <nav
        onMouseLeave={() => setActive(null)}
        className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
      >
        {children}
      </nav>
    </LazyMotion>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        decoding="async"
        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 140px"
        // no priority here; nav items aren’t LCP
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors"
    >
      {children}
    </Link>
  );
};
