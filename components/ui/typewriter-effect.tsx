"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "@/components/_motion";
import React, { useEffect, useMemo } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split words into characters (memoized so we don't redo work on re-renders)
  const wordsArray = useMemo(
    () =>
      words.map((w) => ({
        ...w,
        text: w.text.split(""),
      })),
    [words]
  );

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (!isInView) return;
    // Keep the original reveal: set spans to inline-block + visible with a stagger
    animate(
      "span",
      {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      },
      {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      }
    );
  }, [isInView, animate]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, wIdx) => (
          <div key={`word-${wIdx}`} className="inline-block">
            {word.text.map((char, cIdx) => (
              <motion.span
                // same starting state as original
                initial={{}}
                key={`char-${wIdx}-${cIdx}`}
                className={cn(
                  "dark:text-white text-black opacity-0 hidden",
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>

      {/* Blinking caret (same as original) */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};

/**
 * Smooth variant (same look/feel as original):
 * - Uses width reveal to simulate a sweeping typewriter appearance
 * - Cursor blinks
 * - NOTE: Fixed Tailwind typo `lg:text:3xl` -> `lg:text-3xl`
 */
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = useMemo(
    () =>
      words.map((w) => ({
        ...w,
        text: w.text.split(""),
      })),
    [words]
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          <div>
            {wordsArray.map((word, wIdx) => (
              <div key={`word-${wIdx}`} className="inline-block">
                {word.text.map((char, cIdx) => (
                  <span
                    key={`char-${wIdx}-${cIdx}`}
                    className={cn("dark:text-white text-black", word.className)}
                  >
                    {char}
                  </span>
                ))}
                &nbsp;
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blinking caret (same as original) */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-red-500",
          cursorClassName
        )}
      />
    </div>
  );
};
