"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 40,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // When to start typing (immediately or on view)
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Typing effect: increase visible character count
  useEffect(() => {
    if (!started) return;

    setVisibleCount(0);
    let i = 0;
    const chars = Array.from(children);

    const typingEffect = setInterval(() => {
      if (i < chars.length) {
        setVisibleCount(i + 1);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  const characters = Array.from(children);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        // Smaller + tighter on mobile, same big impact on desktop
        "text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug md:leading-[3.5rem] lg:leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          style={{
            visibility: index < visibleCount ? "visible" : "hidden",
          }}
        >
          {char}
        </span>
      ))}
    </MotionComponent>
  );
}
