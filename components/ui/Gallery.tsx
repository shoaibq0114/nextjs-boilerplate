"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { BackgroundBeams } from "./background-beams";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = Array.from({ length: 24 }, (_, i) => `/gallery/${i + 1}.jpg`);

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1); // slide direction

  /* ---------- Scroll by one card per click ---------- */
  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector("div.snap-center") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 32 /* gap-8 */ : 0;
    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }, []);

  /* ---------- Lightbox Controls (memoized) ---------- */
  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : images.length - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev < images.length - 1 ? prev + 1 : 0;
    });
  }, []);

  /* ---------- Keyboard / Scroll Close ---------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    const handleScroll = () => selectedIndex !== null && closeLightbox();

    window.addEventListener("keydown", handleKey);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeLightbox, showNext, showPrev, selectedIndex]);

  /* ---------- Slide Animation Variants ---------- */
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.05 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  /* ---------- Component ---------- */
  return (
    <section id="gallery" className="relative w-full py-20 overflow-hidden">
      <BackgroundBeams />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Gallery
        </h2>

        {/* 🔹 Scrollable carousel */}
        <div
          ref={scrollRef}
          className="relative flex overflow-x-auto gap-8 snap-x snap-mandatory pb-10 no-scrollbar scroll-smooth"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="snap-center shrink-0 w-[85vw] sm:w-[50vw] md:w-[33vw] lg:w-[25vw] h-[320px] rounded-3xl shadow-2xl relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => setSelectedIndex(i)}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  style={{ originX: 0.5, originY: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 33vw, 25vw"
                    priority={i < 3}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 rounded-3xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔽 Carousel Arrows */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* 🔍 Lightbox (ultra-smooth sliding images, static larger controls) */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* --- Static Arrows & Close Button --- */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all z-[60]"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 p-4 bg-black/40 hover:bg-black/70 text-white rounded-full transition-all z-[60]"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 p-4 bg-black/40 hover:bg-black/70 text-white rounded-full transition-all z-[60]"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* --- Sliding Image Only --- */}
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
                    x: { type: "spring", stiffness: 120, damping: 26, mass: 0.9 },
                    opacity: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={images[selectedIndex]}
                    alt={`Selected image ${selectedIndex + 1}`}
                    fill
                    className="object-contain rounded-3xl"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}