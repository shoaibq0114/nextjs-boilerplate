"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { LazyMotion, domAnimation, motion, AnimatePresence } from "@/components/_motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Gallery (perf-aware)
 * --------------------------------------------------------------
 * - Loads only when near the viewport via IntersectionObserver.
 * - Skeleton has no CSS animations → zero cost while offscreen.
 * - No local <BackgroundBeams /> (global beams live in app/page.tsx).
 * - Keeps lightbox animation; ESC/←/→ keys work only when open.
 * - Images use responsive sizes and only first 2 are priority.
 * - D) Remove backdrop blur from full-screen overlay to cut GPU cost.
 */

const images = Array.from({ length: 24 }, (_, i) => `/gallery/${i + 1}.jpg`);

export default function Gallery() {
  const gateRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Mount the heavy gallery only when near the viewport
  const [shouldMount, setShouldMount] = useState(false);

  // Lightbox state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  /* ---------- IntersectionObserver: mount when near viewport ---------- */
  useEffect(() => {
    const el = gateRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" } // start loading just before entering the viewport
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- Scroll by one card per click ---------- */
  const scroll = useCallback((dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    // Use the first snap card to estimate one-step width (includes gap)
    const card = container.querySelector<HTMLElement>("div.snap-center");
    const step = card ? card.getBoundingClientRect().width + 32 /* gap-8 */ : 320;

    container.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  }, []);

  /* ---------- Lightbox Controls ---------- */
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  const showPrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev === null ? null : prev > 0 ? prev - 1 : images.length - 1));
  }, []);
  const showNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((prev) => (prev === null ? null : prev < images.length - 1 ? prev + 1 : 0));
  }, []);

  /* ---------- Bind keys only while lightbox is open ---------- */
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  /* ---------- Slide Animation Variants for lightbox ---------- */
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 240 : -240, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -240 : 240, opacity: 0 }),
  };

  /* ---------- Placeholder while offscreen (no animations) ---------- */
  if (!shouldMount) {
    return (
      <section id="gallery" ref={gateRef} className="relative w-full py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                // Inert skeleton: no animate-pulse to keep it zero-cost
                className="h-[220px] md:h-[260px] rounded-3xl bg-white/5 dark:bg-white/10"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Mounted gallery ---------- */
  return (
    <section id="gallery" ref={gateRef} className="relative w-full py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Gallery</h2>

        {/* Wrap only the animated parts with LazyMotion (keeps initial JS small) */}
        <LazyMotion features={domAnimation}>
          {/* 🔹 Scrollable carousel */}
          <div
            ref={scrollRef}
            className="relative flex overflow-x-auto gap-8 snap-x snap-mandatory pb-10 no-scrollbar scroll-smooth"
            aria-label="Gallery carousel"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[85vw] sm:w-[50vw] md:w-[33vw] lg:w-[25vw] h-[320px] rounded-3xl shadow-2xl relative group cursor-pointer overflow-hidden
                           transition-transform duration-150 ease-out hover:scale-[1.015]"
                onClick={() => setSelectedIndex(i)}
                role="button"
                aria-label={`Open image ${i + 1}`}
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedIndex(i)}
              >
                <div className="relative w-full h-full rounded-3xl">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover select-none"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    priority={i < 2}     // only the first 2 get priority for faster first interaction
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 rounded-3xl transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>

          {/* 🔽 Carousel Arrows (no backdrop blur → cheaper) */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* 🔍 Lightbox (D: no backdrop blur on full-screen overlay) */}
          <AnimatePresence custom={direction}>
            {selectedIndex !== null && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-modal="true"
                role="dialog"
              >
                {/* Close */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-colors z-[60]"
                  aria-label="Close lightbox"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Prev / Next */}
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-4 md:left-8 p-4 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors z-[60]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-4 md:right-8 p-4 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors z-[60]"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Sliding image only */}
                <div className="relative w-[90vw] md:w-[70vw] lg:w-[50vw] h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl">
                  <AnimatePresence custom={direction} initial={false}>
                    <motion.div
                      key={selectedIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 160, damping: 22, mass: 0.8 },
                        opacity: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={images[selectedIndex]}
                        alt={`Selected image ${selectedIndex + 1}`}
                        fill
                        className="object-contain rounded-3xl select-none"
                        sizes="100vw"
                        decoding="async"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </section>
  );
}
