"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[var(--ink)]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/project3.png"
          alt="Structural engineering project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      {/* Drawing-sheet corner crop marks */}
      {[
        "left-6 top-6 border-l border-t",
        "right-6 top-6 border-r border-t",
        "left-6 bottom-6 border-l border-b",
        "right-6 bottom-6 border-r border-b",
      ].map((position) => (
        <span
          key={position}
          className={`pointer-events-none absolute z-10 h-6 w-6 ${position} border-white/40`}
        />
      ))}

      {/* Content */}
      <div className="page-grid relative z-10 flex h-full items-center">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Structural design,
            <br />
            built with precision.
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Civil and structural engineering, design, testing, and
            consultancy services that turn ambitious plans into
            resilient, code-compliant structures.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="/about"
              className="inline-flex items-center rounded-sm px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--blueprint)" }}
            >
              Discover Nilima Design Associates
            </a>
          </div>
        </div>
      </div>

      {/* Real technical annotation, bottom-left — location, not decoration */}
      <div className="absolute bottom-10 left-[var(--page-padding)] z-10 flex items-center gap-3">
        <div className="relative h-px w-14 bg-white/50">
          <span className="absolute -top-1 left-0 h-2 w-px bg-white/50" />
          <span className="absolute -top-1 right-0 h-2 w-px bg-white/50" />
        </div>
        <p className="text-xs tracking-wide text-white/70">
          22.5726° N, 88.3639° E — Kolkata, India
        </p>
      </div>
    </section>
  );
}