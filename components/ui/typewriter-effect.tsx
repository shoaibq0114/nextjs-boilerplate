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
  // Split words into characters (memoized)
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

    // Staggered reveal animation
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
                key={`char-${wIdx}-${cIdx}`}
                initial={{}}
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

      {/* Blinking caret – height tied to font size */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[3px] h-[1em] md:h-[1.1em] lg:h-[1.2em] bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};

/**
 * Smooth variant:
 * - Uses width reveal to simulate a sweeping typewriter appearance
 * - Cursor height is based on the same font size as the text,
 *   so it looks consistent on mobile and desktop.
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
    <div
      className={cn(
        // 👇 font-size is now on the outer wrapper
        "my-6 flex items-center space-x-2 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold",
        className
      )}
    >
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div style={{ whiteSpace: "nowrap" }}>
          {wordsArray.map((word, wIdx) => (
            <div key={`word-${wIdx}`} className="inline-block">
              {word.text.map((char, cIdx) => (
                <span
                  key={`char-${wIdx}-${cIdx}`}
                  className={cn(
                    "dark:text-white text-black",
                    word.className
                  )}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      </motion.div>

      {/* Blinking caret – now inherits the same font size as the text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[3px] h-[1em] md:h-[1.1em] lg:h-[1.2em] bg-red-500",
          cursorClassName
        )}
      />
    </div>
  );
};
