"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* ---------------- Types ---------------- */
type Review = {
  name: string;
  date: string;
  body: string;
  img: string;
};

/* ---------------- Data ---------------- */
const reviews: Review[] = [
  { name: "Roshni Krishna", date: "12 Apr, 2025", body: "I had an amazing experience in the online cybersecurity course with Mr. Shoaib. He is one of the best teachers I’ve ever had,  knowledgeable, patient and explains concepts clearly from the basics. His one-on-one guidance and quick responses made learning so smooth and effective. Overall, a truly excellent instructor and a highly recommended course!", img: "https://avatar.vercel.sh/jack" },
  { name: "N. Likhit", date: "29 May, 2025", body: "The classes were excellent! The lessons were clear, descriptive, and easy to follow. Mr. Shoaib made complex topics simple and engaging, making the learning experience highly effective. Highly recommended!", img: "https://avatar.vercel.sh/jill" },
  { name: "Maruthi", date: "21 May, 2022", body: "Superb training provided. CEHv11,concepts clear and all topics covered which are mentioned in the syllabus. Thank you so much sir.", img: "https://avatar.vercel.sh/john" },
  { name: "Dheerendra S", date: "20 May, 2024", body: "If anyone wants to learn ethical hacking i would highly recommend this course as sir explains everything in detail in an easy to understand manner! ", img: "https://avatar.vercel.sh/jane" },
  { name: "Harshvardhan Dattatray", date: "20 June, 2022", body: "Overall teaching is good and and the ability to teaching the particular topic is very nice also he cleared the all the doubts and clear my concepts about each and every point.", img: "https://avatar.vercel.sh/jenny" },
  { name: "Lakshmikanth Reddy", date: "27 Sep, 2021", body: "Very good training. Good knowledge of the subject. I really like this course, overall experience was good. Thank you so much for your support. Highly recommended to all.", img: "https://avatar.vercel.sh/james" },
  { name: "Brajendra Singh", date: "8 Sep, 2021", body: "It was a awesome experience. You are having complete knowledge and it will be nice to meet you. Thank you so much for your support. Highly recommended to all.", img: "https://avatar.vercel.sh/jack" },
  { name: "Ronit Singh", date: "11 May, 2021", body: "The class is awesome and very nice. Thank you so much for your support. Highly recommended to all. Has good grip in the concept.", img: "https://avatar.vercel.sh/jill" },
  { name: "Ravi K", date: "21 May, 2021", body: "Explanation is super. Loved the class. Thank you sir. I think he is the best cyber trainer. Sir your explanation is super.", img: "https://avatar.vercel.sh/john" },
  { name: "Prasanna J.", date: "30 Apr, 2021", body: "Excellent explaining very patience in teaching good teaching we have to chance learn more. It was a nice and I really want to appreciate and thank you for being such a wonderful trainer. The way you were interacting with students, way of teaching, making learning so interesting and explaining everything was outstanding. I wanted to thank you for being such an amazing person shoaib sir.", img: "https://avatar.vercel.sh/james" },
  { name: "Sebin Cyriac", date: "25 June, 2021", body: "He explains very clearly everything. His style is very interesting. I thoroughly enjoyed sessions. Come to know about a lot of things in very short time.", img: "https://avatar.vercel.sh/jenny" },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

/* ---------------- Avatar with fallback ---------------- */
function Avatar({ src, name }: { src: string; name: string }) {
  const [broken, setBroken] = useState(false);
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .map((p) => p[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase(),
    [name]
  );
  if (broken || !src) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-400 text-sm font-semibold text-white">
        {initials}
      </div>
    );
  }
  return (
    <Image
      className="rounded-full"
      width={48}
      height={48}
      alt={name}
      src={src}
      onError={() => setBroken(true)}
    />
  );
}

/* ---------------- True inline clamp (5 lines) ---------------- */
function InlineClamp({
  text,
  maxLines = 5,
  onExpand,
}: {
  text: string;
  maxLines?: number;
  onExpand: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mirrorRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [clampedIdx, setClampedIdx] = useState<number | null>(null);
  const [tick, setTick] = useState(0); // resize tick

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const mirror = mirrorRef.current;
    if (!wrap || !mirror) return;

    const cs = getComputedStyle(wrap);
    Object.assign(mirror.style, {
      position: "absolute",
      visibility: "hidden",
      zIndex: "-1",
      pointerEvents: "none",
      whiteSpace: "normal",
      font: cs.font,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      wordSpacing: cs.wordSpacing,
      width: `${wrap.clientWidth}px`,
      padding: cs.padding,
    } as CSSStyleDeclaration);

    const lineHeightPx =
      cs.lineHeight === "normal"
        ? parseFloat(cs.fontSize) * 1.2
        : parseFloat(cs.lineHeight);
    const maxHeight = lineHeightPx * maxLines;

    mirror.textContent = text;
    const fullH = mirror.scrollHeight;
    const overflow = fullH > maxHeight + 0.5;
    setIsOverflowing(overflow);

    if (!overflow) {
      setClampedIdx(null);
      return;
    }

    const glue = " … Read more ›";
    let lo = 0,
      hi = text.length,
      best = 0;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      mirror.textContent = text.slice(0, mid) + glue;
      if (mirror.scrollHeight <= maxHeight + 0.5) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    setClampedIdx(best);
  }, [text, maxLines, tick]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => setTick((t) => t + 1));
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative">
      <div ref={mirrorRef} />
      {isOverflowing && clampedIdx !== null ? (
        <div ref={wrapRef} className="text-base leading-relaxed text-white/90">
          {text.slice(0, clampedIdx)}
          <span> … </span>
          <button
            type="button"
            onClick={onExpand}
            className={cn(
              "align-baseline text-[13px] font-semibold tracking-wide text-white underline decoration-white/60 underline-offset-[3px]",
              "[text-shadow:0_0_6px_rgba(255,255,255,0.45),0_0_1px_rgba(255,255,255,0.70)]",
              "hover:[text-shadow:0_0_14px_rgba(255,255,255,0.9),0_0_3px_rgba(255,255,255,1)]"
            )}
            aria-label="Read full testimonial"
          >
            Read more&nbsp;›
          </button>
        </div>
      ) : (
        <div ref={wrapRef} className="text-base leading-relaxed text-white/90">
          {text}
        </div>
      )}
    </div>
  );
}

/* ---------------- Card with in-card overlay (auto-close on hover out) ---------------- */
function ReviewCard({ img, name, date, body }: Review) {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowFull(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <figure
      onMouseLeave={() => setShowFull(false)}     // auto-reset when pointer leaves
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-950 dark:hover:bg-gray-800"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <Avatar src={img} name={name} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium text-white dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-white/60 dark:text-white/40">
            {date}
          </p>
        </div>
      </div>

      {/* clamped preview (hidden while overlay open) */}
      <div className={cn("mt-4", showFull && "invisible")} aria-hidden={showFull}>
        <InlineClamp text={body} maxLines={5} onExpand={() => setShowFull(true)} />
      </div>

      {/* in-card full overlay (scrollable) */}
      {showFull && (
        <div
          className="absolute inset-0 z-20 rounded-xl bg-zinc-950 p-6"
          onMouseLeave={() => setShowFull(false)}
        >
          <div className="flex flex-row items-center gap-4">
            <Avatar src={img} name={name} />
            <div className="flex flex-col">
              <figcaption className="text-lg font-semibold text-white">
                {name}
              </figcaption>
              <p className="text-sm font-medium text-white/60">{date}</p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setShowFull(false)}
                className="text-sm font-medium text-white/80 underline decoration-white/40 underline-offset-[3px] hover:text-white hover:decoration-white/80"
              >
                Close
              </button>
            </div>
          </div>

          {/* Sleek minimal scrollbar just for this scroll area */}
          <div className="mt-4 h-[calc(100%-72px)] overflow-y-auto pr-1 text-base leading-relaxed text-white/90 sleek-scroll overscroll-contain [scrollbar-gutter:stable]">
            {body}
          </div>

          {/* Scoped scrollbar styles */}
          <style jsx>{`
            /* Firefox */
            .sleek-scroll {
              scrollbar-width: thin;
              scrollbar-color: rgba(255,255,255,0.28) transparent;
            }

            /* WebKit (Chrome/Edge/Safari) */
            .sleek-scroll::-webkit-scrollbar {
              width: 10px;
            }
            .sleek-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .sleek-scroll::-webkit-scrollbar-thumb {
              border-radius: 9999px;
              border: 2px solid transparent;           /* creates a subtle inset gap */
              background-clip: padding-box;
              background: linear-gradient(
                180deg,
                rgba(255,255,255,0.38),
                rgba(255,255,255,0.22)
              );
            }
            .sleek-scroll:hover::-webkit-scrollbar-thumb {
              background: linear-gradient(
                180deg,
                rgba(255,255,255,0.55),
                rgba(255,255,255,0.35)
              );
            }
            .sleek-scroll::-webkit-scrollbar-thumb:active {
              background: linear-gradient(
                180deg,
                rgba(255,255,255,0.75),
                rgba(255,255,255,0.5)
              );
            }

            /* Optional: adjust for light theme */
            @media (prefers-color-scheme: light) {
              .sleek-scroll {
                scrollbar-color: rgba(0,0,0,0.35) transparent;
              }
              .sleek-scroll::-webkit-scrollbar-thumb {
                background: linear-gradient(
                  180deg,
                  rgba(0,0,0,0.35),
                  rgba(0,0,0,0.2)
                );
              }
              .sleek-scroll:hover::-webkit-scrollbar-thumb {
                background: linear-gradient(
                  180deg,
                  rgba(0,0,0,0.55),
                  rgba(0,0,0,0.35)
                );
              }
              .sleek-scroll::-webkit-scrollbar-thumb:active {
                background: linear-gradient(
                  180deg,
                  rgba(0,0,0,0.7),
                  rgba(0,0,0,0.45)
                );
              }
            }
          `}</style>
        </div>
      )}
    </figure>
  );
}

/* ---------------- Section (original shell + gradients) ---------------- */
export function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Testimonials
      </h2>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((r) => (
            <ReviewCard key={`${r.name}-${r.date}`} {...r} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((r) => (
            <ReviewCard key={`${r.name}-${r.date}`} {...r} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
      </div>
    </div>
  );
}

export default Testimonials;
