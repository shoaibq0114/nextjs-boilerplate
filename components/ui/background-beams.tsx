"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * BackgroundBeams (stable + perf-aware)
 * --------------------------------------------------------------
 * - Exact visual feel of Aceternity beams using per-path gradients.
 * - No runtime randomness (hydration-safe). Deterministic staggering.
 * - Uses pure SVG <animate> in <defs> so animations are reliable across browsers.
 * - Modes:
 *    - "auto" (default): picks "lite" on small/low-DPR screens, "off" if user prefers reduced motion, else "high".
 *    - "high": full beams.
 *    - "lite": fewer beams + slightly lower opacity (mobile-friendly).
 *    - "off": renders nothing.
 * - Drop this once per page (global background). Keep page content stacked above with z-10.
 */

/* ====================== TUNING KNOBS ====================== */
// Visibility / weight
const BEAM_OPACITY_HIGH = 0.5;     // animated beam brightness on high
const BEAM_OPACITY_LITE = 0.4;     // animated beam brightness on lite
const BEAM_STROKE_WIDTH = 0.6;     // beam thickness (0.4 – 0.8 looks good)

// Speed (lower = faster). Applies to ALL modes.
const DURATION_MIN = 5;            // seconds
const DURATION_MAX = 10;           // seconds

// Stagger / desync (more negative delay range => more organic offsets)
const DELAY_MAX = 10;              // seconds

// “Travel distance” of vertical gradient (how far the fall looks)
const Y2_END_MIN = 93;             // percentage
const Y2_END_MAX = 101;            // percentage

// Underlay wash (faint background “glow” to anchor the effect)
const UNDERLAY_OPACITY = 0.05;     // 0.03 – 0.08 subtle range
const UNDERLAY_WIDTH = 0.5;

/* =================== RUNTIME BEHAVIOR ===================== */
// When to switch to lite automatically (used by mode="auto")
const isLowPowerScreen = () =>
  (typeof window !== "undefined") &&
  (window.devicePixelRatio <= 1 || window.innerWidth < 768);

/* ===================== UTIL / PRNG ======================== */
// Deterministic PRNG (hydration-safe)
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function prand(seed: number, min: number, max: number) {
  const r = mulberry32(seed)();
  return min + r * (max - min);
}

/* ===================== PATHS DATA ========================= */
// These are the original Aceternity polylines the gradients run along.
const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
  "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
  "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
  "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
  "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
  "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
  "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
  "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
  "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
  "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
  "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
  "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
  "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
  "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
  "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
  "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
  "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
  "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
  "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
  "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
  "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
  "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
  "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
  "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
  "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
  "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
  "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
  "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
  "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
  "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
  "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
  "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
  "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
  "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
  "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
  "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
  "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
  "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
  "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
  "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
];

const FULL_COUNT = paths.length;
const LITE_COUNT = 14; // number of beams in "lite" mode

/** Pick evenly across the full set (keeps the overall “shape”). */
function pickPaths(count: number) {
  if (count >= FULL_COUNT) return paths;
  const step = FULL_COUNT / count;
  const out: string[] = [];
  for (let i = 0; i < count; i++) out.push(paths[Math.floor(i * step)]);
  return out;
}

type Mode = "auto" | "high" | "lite" | "off";
export interface BackgroundBeamsProps {
  className?: string;
  mode?: Mode; // default "auto"
}

export const BackgroundBeams = React.memo(function BackgroundBeams({
  className,
  mode = "auto",
}: BackgroundBeamsProps) {
  // Resolve effective mode once on mount (no flicker between SSR/CSR).
  const [effective, setEffective] = React.useState<Exclude<Mode, "auto">>("high");

  React.useEffect(() => {
    if (mode !== "auto") {
      setEffective(mode === "off" ? "off" : mode);
      return;
    }
    const prefersReduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lowPower = isLowPowerScreen();

    setEffective(prefersReduced ? "off" : lowPower ? "lite" : "high");
  }, [mode]);

  // Pause animation when tab is hidden (saves battery/CPU).
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (effective === "off" || !visible) return null;

  const selected = effective === "lite" ? pickPaths(LITE_COUNT) : paths;
  const strokeOpacity = effective === "lite" ? BEAM_OPACITY_LITE : BEAM_OPACITY_HIGH;

  return (
    <div
      className={cn(
        // z-0: above page background; your page content should be z-10.
        "fixed inset-0 z-0 h-full w-full [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
      aria-hidden="true"
      role="presentation"
      data-beams-mode={effective}
      data-beams-count={selected.length}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft radial wash used by the original component */}
          <radialGradient
            id="paint0_radial_beams"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)" />
            <stop offset="0.243243" stopColor="var(--neutral-300)" />
            <stop offset="0.43594" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* One animated linearGradient per path (deterministic staggering) */}
          {paths.map((_, index) => {
            const duration = prand(1000 + index, DURATION_MIN, DURATION_MAX); // seconds
            const delay = -prand(2000 + index, 0, DELAY_MAX);                 // negative begin offsets (stagger)
            const y2End = prand(3000 + index, Y2_END_MIN, Y2_END_MAX);        // %

            return (
              <linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                // Baseline so gradients are visible even before animation starts.
                x1="0%"
                x2="95%"
                y1="0%"
                y2="100%"
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop offset="20%" stopColor="#18CCFC" />
                <stop offset="65%" stopColor="#6344F5" />
                <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />

                {/* One-way (downwards) — loops back to start each cycle */}
                <animate
                  attributeName="x1"
                  values="0%;100%"
                  dur={`${duration}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
                <animate
                  attributeName="x2"
                  values="0%;95%"
                  dur={`${duration}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
                <animate
                  attributeName="y1"
                  values="0%;100%"
                  dur={`${duration}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
                <animate
                  attributeName="y2"
                  values={`0%;${y2End}%`}
                  dur={`${duration}s`}
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </linearGradient>
            );
          })}
        </defs>

        {/* Underlay wash (subtle base lines like the original demo) */}
        <path
          d={[
            "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
            "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
            "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
            "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
            "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
          ].join("")}
          stroke="url(#paint0_radial_beams)"
          strokeOpacity={UNDERLAY_OPACITY}
          strokeWidth={UNDERLAY_WIDTH}
          strokeLinecap="round"
        />

        {/* Animated beams */}
        {selected.map((d) => {
          const index = paths.indexOf(d);
          return (
            <path
              key={`beam-${index}`}
              d={d}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity={strokeOpacity}
              strokeWidth={BEAM_STROKE_WIDTH}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
