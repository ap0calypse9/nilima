"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Residential Structure",
    category: "Structural Design",
    location: "Kolkata, West Bengal",
    image: "/images/projects/project4.jpeg",
    accent: "aqua",
  },
  {
    number: "02",
    title: "Commercial Complex",
    category: "Structural Consultancy",
    location: "New Garia, Kolkata",
    image: "/images/projects/project2.jpeg",
    accent: "green",
  },
  {
    number: "03",
    title: "Industrial Facility",
    category: "Foundation Engineering",
    location: "West Bengal, India",
    image: "/images/projects/project1.jpeg",
    accent: "aqua",
  },
] as const;

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const accentVar = current.accent === "aqua" ? "var(--aqua)" : "var(--green)";

  const goPrev = () =>
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  const goNext = () => setActive((prev) => (prev + 1) % projects.length);

  return (
    <section className="relative bg-[var(--background)] py-20 md:py-28">
      <div className="page-grid">
        {/* Header */}
        <div className="col-span-12 flex items-end justify-between">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--aqua)" }}
            >
              Our Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--foreground)] md:text-4xl">
              See Our Work in Action
            </h2>
          </div>

          {/* Prev / next controls */}
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)] transition-colors hover:border-[var(--aqua)] hover:text-[var(--aqua)]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)] transition-colors hover:border-[var(--aqua)] hover:text-[var(--aqua)]"
            >
              →
            </button>
          </div>
        </div>

        {/* Featured project card: image left, info right */}
        <div className="col-span-12 mt-10 grid grid-cols-1 overflow-hidden rounded-xl shadow-md ring-1 ring-[var(--line)] md:grid-cols-12">
          <div className="relative h-72 md:col-span-7 md:h-auto">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <span
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: accentVar }}
            >
              {current.number}
            </span>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 md:col-span-5 md:p-10">
            <p
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: accentVar }}
            >
              {current.category}
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--foreground)] md:text-3xl">
              {current.title}
            </h3>

            <p className="mt-3 text-sm text-[var(--foreground-muted)]">
              {current.location}
            </p>

            <button
              type="button"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold"
              style={{ color: accentVar }}
            >
              View Project
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Mobile prev/next */}
        <div className="col-span-12 mt-6 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)]"
          >
            →
          </button>
        </div>

        {/* Project list / thumbnails */}
        <div className="col-span-12 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((project, index) => {
            const isActive = active === index;
            const itemAccent =
              project.accent === "aqua" ? "var(--aqua)" : "var(--green)";

            return (
              <button
                key={project.number}
                type="button"
                onClick={() => setActive(index)}
                className="flex items-center gap-4 rounded-lg border p-4 text-left transition-colors"
                style={{
                  borderColor: isActive ? itemAccent : "var(--line)",
                  backgroundColor: isActive
                    ? "var(--background-alt)"
                    : "transparent",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: itemAccent }}
                >
                  {project.number}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {project.title}
                  </p>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    {project.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}