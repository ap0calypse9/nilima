"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[var(--background)]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
      </div>

      {/* Content */}
      <div className="page-grid relative z-10 flex h-full items-center">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Structural Design
            <br />
            Built With{" "}
            <span style={{ color: "var(--green)" }}>Precision</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
            Civil and structural engineering, design, testing, and
            consultancy services that turn ambitious plans into
            resilient, code-compliant structures.
          </p>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--aqua)" }}
            >
              Discover Nilima Design Associates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}