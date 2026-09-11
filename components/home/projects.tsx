"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Residential Structure",
    category: "Banglow Design",
    location: "Kolkata, West Bengal",
    scope: ["G+4, G+6, G+8 residential structure", "RCC framed construction", "Completed 2024"],
    image: "/images/projects/project4.jpeg",
    accent: "blueprint",
  },
  {
    number: "02",
    title: "Commercial Complex",
    category: "Structural Consultancy",
    location: "New Garia, Kolkata",
    scope: ["Agartala Govt R&D building G+7","Structural Shed 200000sqft" ,"Steel Structure foundation design", "2026 Complete"],
    image: "/images/projects/project2.jpeg",
    accent: "green",
  },
  {
    number: "03",
    title: "Industrial Facility",
    category: "Foundation Engineering",
    location: "West Bengal, India",
    scope: ["Deep foundation design", "Soil investigation & piling", "Completed 2023"],
    image: "/images/projects/project1.jpeg",
    accent: "blueprint",
  },
] as const;

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const accentVar =
    current.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";

  const goPrev = () =>
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  const goNext = () => setActive((prev) => (prev + 1) % projects.length);

  return (
    <section className="relative bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header */}
        <div className="col-span-12 flex flex-wrap items-end justify-between gap-6 md:col-span-12">
          <div className="md:max-w-xl">
            <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
              Selected work.
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              style={{ borderColor: "var(--line)" }}
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              →
            </button>
          </div>
        </div>

        {/* Project index — dimension-line separated, mirrors Capabilities */}
        <div className="col-span-12 mt-16 md:mt-20">
          <div className="dimension-line" />
          <div className="flex flex-wrap">
            {projects.map((project, index) => {
              const isActive = active === index;
              const itemAccent =
                project.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";
              return (
                <button
                  key={project.number}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group relative py-5 pr-8 text-left"
                >
                  <span
                    className="block text-xs tracking-wide"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: isActive ? itemAccent : "var(--graphite)",
                    }}
                  >
                    {project.number} / 03
                  </span>
                  <span
                    className="mt-1 flex items-center gap-2 text-lg font-medium transition-colors"
                    style={{ color: isActive ? "var(--ink)" : "var(--graphite)" }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-opacity"
                      style={{ backgroundColor: itemAccent, opacity: isActive ? 1 : 0 }}
                    />
                    {project.title}
                  </span>
                  {isActive && (
                    <span
                      className="absolute -bottom-px left-0 h-[2px] w-full"
                      style={{ backgroundColor: itemAccent }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="dimension-line" />
        </div>

        {/* Spec-sheet layout: framed image + detail panel */}
        <div className="col-span-12 mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12">
          <div className="relative md:col-span-7">
            <div className="relative aspect-[4/3] w-full border border-[var(--line)]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover transition-opacity duration-500"
              />
              {[
                "left-3 top-3 border-l border-t",
                "right-3 top-3 border-r border-t",
                "left-3 bottom-3 border-l border-b",
                "right-3 bottom-3 border-r border-b",
              ].map((position) => (
                <span
                  key={position}
                  className={`pointer-events-none absolute h-5 w-5 ${position}`}
                  style={{ borderColor: accentVar }}
                />
              ))}
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div
              className={`pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden md:block ${
                current.accent === "blueprint" ? "hatch-blueprint" : "hatch-green"
              }`}
            />

            <p
              className="text-xs uppercase tracking-wide"
              style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
            >
              {current.category}
            </p>

            <h3 className="mt-3 text-3xl font-semibold leading-tight text-[var(--ink)]">
              {current.title}
            </h3>

            <p className="mt-3 text-sm text-[var(--graphite)]">
              {current.location}
            </p>

            <ul className="mt-6 space-y-2">
              {current.scope.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-[var(--ink)]"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: accentVar }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}