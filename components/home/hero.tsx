"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const statement = useRef<HTMLParagraphElement>(null);
  const technical = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // --------------------------------
      // 1. Image begins to reveal
      // --------------------------------

      timeline.to(
        image.current,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1,
          ease: "none",
        },
        0
      );

      // --------------------------------
      // 2. NILIMA moves upward
      // --------------------------------

      timeline.to(
        title.current,
        {
          yPercent: -55,
          scale: 0.55,
          duration: 1,
          ease: "none",
        },
        0
      );

      // --------------------------------
      // 3. Statement moves with it
      // --------------------------------

      timeline.to(
        statement.current,
        {
          yPercent: -120,
          opacity: 0,
          duration: 0.8,
          ease: "none",
        },
        0.1
      );

      // --------------------------------
      // 4. Technical information appears
      // --------------------------------

      timeline.to(
        technical.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "none",
        },
        0.55
      );
    },
    {
      scope: container,
    }
  );

  return (
    <section
      ref={container}
      className="relative h-screen overflow-hidden bg-[var(--background)]"
    >
      {/* Placeholder image */}
      <div
  ref={image}
  className="absolute inset-[8%_var(--page-padding)_8%_30%] overflow-hidden"
  style={{
    clipPath: "inset(100% 0% 0% 0%)",
    transform: "scale(1.08)",
  }}
>
  <Image
    src="/images/hero.png"
    alt="Architectural structure"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 70vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/10" />

  <div className="absolute bottom-8 left-8">
    <p
      className="text-[10px] uppercase tracking-[0.2em]"
      style={{
        fontFamily: "var(--font-dm-mono)",
        color: "var(--aqua)",
      }}
    >
      PROJECT / 001
    </p>
  </div>
</div>

      {/* Main content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="page-grid w-full">
          <div className="col-span-12 md:col-span-10">
            <p
              className="mb-8 text-xs uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--aqua)",
              }}
            >
              Structural Engineering / Kolkata
            </p>

            <h1
              ref={title}
              className="text-[clamp(5rem,14vw,13rem)] leading-[0.78] tracking-[-0.05em]"
            >
              NILIMA
            </h1>

            <p
              ref={statement}
              className="mt-10 text-4xl md:text-6xl"
              style={{
                fontFamily: "var(--font-instrument)",
              }}
            >
              Built with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Technical information */}
      <div
        ref={technical}
        className="absolute bottom-8 left-[var(--page-padding)] z-20 translate-y-8 opacity-0"
      >
        <p
          className="text-[10px] uppercase leading-relaxed tracking-[0.18em]"
          style={{
            fontFamily: "var(--font-dm-mono)",
            color: "var(--muted)",
          }}
        >
          Civil & Structural Engineering
          <br />
          Design / Testing / Consultancy
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-[var(--page-padding)] z-20">
        <p
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-dm-mono)",
            color: "var(--muted)",
          }}
        >
          Scroll to explore ↓
        </p>
      </div>
    </section>
  );
}