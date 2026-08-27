"use client";

import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "STRUCTURAL",
    subtitle: "Design & Engineering",
    description:
      "Structural design, analysis and engineering solutions for residential, commercial, industrial and infrastructure projects.",
    tags: ["ETABS", "STAAD.PRO", "REVIT"],
    accent: "#071515",
  },
  {
    number: "02",
    title: "FOUNDATION",
    subtitle: "Soil & Deep Foundations",
    description:
      "Soil investigation, foundation engineering and pile testing for safe and reliable structural systems.",
    tags: ["SOIL TESTING", "DLT", "PIT", "CAPWAP"],
    accent: "#102b2b",
  },
  {
    number: "03",
    title: "SURVEY",
    subtitle: "Land & Topography",
    description:
      "Land and topographical surveying for accurate planning, engineering and project execution.",
    tags: ["LAND SURVEY", "TOPOGRAPHY", "MAPPING"],
    accent: "#123b46",
  },
  {
    number: "04",
    title: "TESTING",
    subtitle: "NDT & Structural Health",
    description:
      "Non-destructive testing, structural audits and building health assessments for existing structures.",
    tags: ["NDT", "AUDIT", "CRACK ANALYSIS"],
    accent: "#164d57",
  },
  {
    number: "05",
    title: "REHABILITATION",
    subtitle: "Repair & Retrofitting",
    description:
      "Structural rehabilitation, retrofitting and repair strategies designed to extend the service life of structures.",
    tags: ["RETROFIT", "REPAIR", "STABILITY"],
    accent: "#176d70",
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);

  const current = capabilities[active];

  return (
    <section className="relative bg-[var(--aqua)] text-[#071010]">
      <div className="page-grid min-h-screen py-24 md:py-32">

        {/* Section Header */}
        <div className="col-span-12 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              02
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Capabilities
            </span>
          </div>

          <span
            className="hidden text-[10px] uppercase tracking-[0.2em] md:block"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Kolkata / India
          </span>
        </div>

        {/* Heading */}
        <div className="col-span-12 mt-20 md:col-span-6">
          <h2 className="text-[clamp(4rem,8vw,9rem)] leading-[0.78] tracking-[-0.055em]">
            WHAT
            <br />
            WE
            <br />
            ENGINEER.
          </h2>
        </div>

        {/* Interactive Visual */}
        <div className="col-span-12 mt-16 md:col-span-6 md:mt-20">
          <div
            className="relative min-h-[430px] overflow-hidden p-8 transition-colors duration-700 md:min-h-[520px] md:p-10"
            style={{
              backgroundColor: current.accent,
              color: "#f2f0eb",
            }}
          >
            {/* Technical grid */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute left-1/3 top-0 h-full w-px bg-[var(--aqua)]" />
              <div className="absolute left-2/3 top-0 h-full w-px bg-[var(--aqua)]" />

              <div className="absolute left-0 top-1/3 h-px w-full bg-[var(--aqua)]" />
              <div className="absolute left-0 top-2/3 h-px w-full bg-[var(--aqua)]" />
            </div>

            {/* Number */}
            <p
              className="relative text-xs tracking-[0.2em] text-[var(--aqua)]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {current.number} / 05
            </p>

            {/* Current capability */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
              <p
                className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--aqua)]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {current.subtitle}
              </p>

              <h3 className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.85] tracking-[-0.045em]">
                {current.title}
              </h3>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/65">
                {current.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/20 px-3 py-2 text-[9px] uppercase tracking-[0.16em]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capability selector */}
        <div className="col-span-12 mt-24 border-t border-black/30">
          {capabilities.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group grid w-full grid-cols-12 items-center border-b border-black/30 py-5 text-left md:py-6"
              >
                <span
                  className="col-span-2 text-[10px] tracking-[0.2em] md:col-span-1"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {item.number}
                </span>

                <span
                  className={`col-span-8 text-xl tracking-[-0.02em] transition-transform duration-300 md:col-span-7 md:text-3xl ${
                    isActive ? "translate-x-3" : "group-hover:translate-x-3"
                  }`}
                >
                  {item.title}
                </span>

                <span
                  className="col-span-2 hidden text-[10px] uppercase tracking-[0.15em] md:block"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {item.subtitle}
                </span>

                <span className="col-span-2 text-right text-xl">
                  {isActive ? "●" : "○"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dedicated page hint */}
        <div className="col-span-12 mt-16 flex justify-end">
          <p
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Explore all capabilities ↗
          </p>
        </div>
      </div>
    </section>
  );
}