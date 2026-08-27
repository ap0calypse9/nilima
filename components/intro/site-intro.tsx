"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const words = [
  { text: "NILIMA", font: "var(--font-bricolage)" },
  { text: "ENGINEERING", font: "var(--font-dm-mono)" },
  { text: "STRUCTURES", font: "var(--font-bricolage)" },
  { text: "DESIGN", font: "var(--font-instrument)" },
  { text: "SURVEY", font: "var(--font-dm-mono)" },
  { text: "PRECISION", font: "var(--font-bricolage)" },
  { text: "TECHNOLOGY", font: "var(--font-dm-mono)" },
  { text: "EXPERIENCE", font: "var(--font-instrument)" },
  { text: "NILIMA", font: "var(--font-bricolage)" },
];

// Module-level flag (not sessionStorage): resets on a full page reload
// (JS memory clears), but persists across client-side route navigation
// within the same session, so the intro plays once per real page load.
let hasPlayedThisLoad = false;

interface SiteIntroProps {
  /** Called once the reveal animation finishes, so the parent can e.g. unlock scroll further or fire analytics */
  onComplete?: () => void;
}

export default function SiteIntro({ onComplete }: SiteIntroProps) {
  const container = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Skip if it already played once during this page load
  const [skip] = useState(() => hasPlayedThisLoad);

  useGSAP(
    () => {
      if (!container.current || skip) {
        onComplete?.();
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      document.body.style.overflow = "hidden";

      const wordElements = gsap.utils.toArray<HTMLElement>(".intro-word");
      const counter = { value: 0 };

      const cleanup = () => {
        document.body.style.overflow = "";
        hasPlayedThisLoad = true;
        onComplete?.();
      };

      // --- Reduced motion: fast, minimal fallback ---
      if (reduceMotion) {
        const tl = gsap.timeline({ onComplete: cleanup });
        tl.set(wordElements, { opacity: 0 });
        tl.to(wordElements[wordElements.length - 1], {
          opacity: 1,
          duration: 0.3,
        });
        tl.to(container.current, {
          opacity: 0,
          duration: 0.4,
          delay: 0.3,
          onComplete: () => {
            if (container.current) container.current.style.display = "none";
          },
        });
        return;
      }

      const timeline = gsap.timeline({ onComplete: cleanup });

      gsap.set(wordElements, { yPercent: 120, opacity: 0 });

      // Coordinate-style progress counter, blueprint feel
      if (progressRef.current) {
        timeline.to(
          progressRef.current,
          { scaleX: 1, duration: words.length * 0.32 + 0.3, ease: "power1.inOut" },
          0
        );
      }
      if (counterRef.current) {
        timeline.to(
          counter,
          {
            value: 100,
            duration: words.length * 0.32 + 0.3,
            ease: "power1.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = `${Math.round(
                  counter.value
                )}%`;
              }
            },
          },
          0
        );
      }

      wordElements.forEach((word, index) => {
        const direction = index % 2 === 0 ? -1 : 1;

        if (index === 0) {
          timeline.to(word, {
            yPercent: 0,
            opacity: 1,
            duration: 0.32,
            ease: "power3.out",
          });
          return;
        }

        // Position the incoming word before it appears
        timeline.set(word, { yPercent: direction * -120 });

        // Previous word exits
        timeline.to(
          wordElements[index - 1],
          {
            yPercent: direction * 120,
            opacity: 0,
            duration: 0.22,
            ease: "power3.in",
          },
          "+=0.03"
        );

        // Current word enters — starts just as the previous one is
        // mostly (not fully) faded, so there's a soft blend without
        // both words sitting at full opacity together
        timeline.to(
          word,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.22,
            ease: "power3.out",
          },
          "-=0.06"
        );
      });

      // Final NILIMA holds
      timeline.to({}, { duration: 0.35 });

      // Reveal
      timeline.to(container.current, {
        yPercent: -100,
        duration: 0.75,
        ease: "power4.inOut",
      });
    },
    { scope: container, dependencies: [skip] }
  );

  if (skip) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[var(--aqua)] text-[#070707]"
    >
      {/* Blueprint corner marks — reinforces engineering/precision identity */}
      <div className="pointer-events-none absolute inset-6 border border-[var(--green)]/30 sm:inset-10">
        <span className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-[var(--green)]" />
        <span className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-[var(--green)]" />
        <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-[var(--green)]" />
        <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[var(--green)]" />
      </div>

      {/* Word stack */}
      <div className="relative flex h-[10rem] w-full items-center justify-center sm:h-[12rem]">
        {words.map((word, index) => (
          <div
            key={`${word.text}-${index}`}
            className="intro-word absolute text-center leading-none"
            style={{
              fontFamily: word.font,
              fontSize:
                word.font === "var(--font-dm-mono)"
                  ? "clamp(1.5rem, 5vw, 5rem)"
                  : "clamp(2.5rem, 8vw, 8rem)",
              letterSpacing:
                word.font === "var(--font-dm-mono)" ? "0.02em" : "-0.05em",
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      {/* Coordinate-style counter, monospace, engineering-report tone */}
      <div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs tracking-[0.2em] sm:bottom-14"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        <span className="text-[#070707]/60">N 26.72°, E 88.39°</span>
        <span className="text-[#070707]/30">/</span>
        <span ref={counterRef} className="text-[var(--green)]">
          0%
        </span>
      </div>

      {/* Progress rule — draws left to right like a survey line */}
      <div className="absolute bottom-6 left-0 h-[2px] w-full sm:bottom-8">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-[var(--green)]"
        />
      </div>
    </div>
  );
}