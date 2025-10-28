// Input component extends from shadcn/ui - https://ui.shadcn.com/docs/components/input
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
// ✅ Use your light wrapper so Framer’s feature bundle loads only when needed
import { motion, useMotionTemplate, useMotionValue } from "@/components/_motion";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [active, setActive] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Accessibility: respect reduced motion (disable effect)
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    return (
      <motion.div
        // The glow background follows the pointer; disabled if reduced-motion
        style={{
          background: prefersReducedMotion
            ? undefined
            : useMotionTemplate`
              radial-gradient(
                ${active ? radius + "px" : "0px"} circle
                at ${mouseX}px ${mouseY}px,
                var(--blue-500),
                transparent 80%
              )
            `,
        }}
        onPointerMove={prefersReducedMotion ? undefined : handlePointerMove}
        onPointerEnter={() => !prefersReducedMotion && setActive(true)}
        onPointerLeave={() => !prefersReducedMotion && setActive(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          ref={ref}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white
             shadow-input rounded-md px-3 py-2 text-sm
             file:border-0 file:bg-transparent file:text-sm file:font-medium
             placeholder:text-neutral-400 dark:placeholder-text-neutral-600
             focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400`,
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";
export { Input };
