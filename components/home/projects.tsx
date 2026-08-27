"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "RESIDENTIAL STRUCTURE",
    category: "Structural Design",
    location: "Kolkata / West Bengal",
    image: "/images/projects/project-01.jpg",
  },
  {
    number: "02",
    title: "COMMERCIAL COMPLEX",
    category: "Structural Consultancy",
    location: "New Garia / Kolkata",
    image: "/images/projects/project-02.jpg",
  },
  {
    number: "03",
    title: "INDUSTRIAL FACILITY",
    category: "Foundation Engineering",
    location: "West Bengal / India",
    image: "/images/projects/project-03.jpg",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  const current = projects[active];

  return (
    <section className="relative bg-[#0a0a0a] text-[var(--foreground)]">
      <div className="page-grid min-h-screen py-24 md:py-32">

        {/* Header */}
        <div className="col-span-12 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--aqua)",
              }}
            >
              03
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              Selected Projects
            </span>
          </div>

          <span
            className="hidden text-[10px] uppercase tracking-[0.2em] md:block"
            style={{
              fontFamily: "var(--font-dm-mono)",
              color: "var(--muted)",
            }}
          >
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Heading */}
        <div className="col-span-12 mt-20 md:col-span-7 md:mt-28">
          <h2 className="text-[clamp(4rem,9vw,10rem)] leading-[0.78] tracking-[-0.06em]">
            SELECTED
            <br />
            WORK.
          </h2>
        </div>

        {/* Project Stage */}
        <div className="col-span-12 mt-20 md:col-span-10 md:col-start-2 md:mt-28">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">

            {/* Project Image */}
            <div className="col-span-12 md:col-span-9">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">

                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Project number */}
                <div className="absolute left-6 top-6 md:left-8 md:top-8">
                  <span
                    className="text-xs tracking-[0.2em]"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: "var(--aqua)",
                    }}
                  >
                    PROJECT / {current.number}
                  </span>
                </div>

                {/* Image bottom information */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-8 md:left-8 md:right-8">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] text-white/60"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    {current.location}
                  </span>

                  <span
                    className="text-[10px] uppercase tracking-[0.18em] text-white/60"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    NDA / 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="col-span-12 flex flex-col justify-between md:col-span-3">
              <div>
                <p
                  className="mb-4 text-[10px] uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--aqua)",
                  }}
                >
                  {current.category}
                </p>

                <h3 className="text-3xl leading-[0.9] tracking-[-0.04em] md:text-4xl">
                  {current.title}
                </h3>

                <p
                  className="mt-5 text-xs uppercase leading-relaxed tracking-[0.12em]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--muted)",
                  }}
                >
                  {current.location}
                </p>
              </div>

              <button
                type="button"
                className="mt-10 flex items-center gap-3 self-start border-b border-[var(--line)] pb-3 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-[var(--aqua)] hover:text-[var(--aqua)]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                View Project
                <span className="text-sm">↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Project Index */}
        <div className="col-span-12 mt-20 md:mt-24">
          <div className="border-t border-[var(--line)]">

            {projects.map((project, index) => {
              const isActive = active === index;

              return (
                <div
                  key={project.number}
                  className="grid w-full grid-cols-12 items-center border-b border-[var(--line)]"
                >
                  {/* Number */}
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="col-span-2 py-5 text-left md:col-span-1 md:py-6"
                    aria-label={`Select ${project.title}`}
                  >
                    <span
                      className="text-[10px] tracking-[0.2em]"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: isActive
                          ? "var(--aqua)"
                          : "var(--muted)",
                      }}
                    >
                      {project.number}
                    </span>
                  </button>

                  {/* Title */}
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="group col-span-8 py-5 text-left md:col-span-7 md:py-6"
                  >
                    <span
                      className={`block text-xl tracking-[-0.025em] transition-transform duration-300 md:text-2xl ${
                        isActive
                          ? "translate-x-3"
                          : "group-hover:translate-x-3"
                      }`}
                    >
                      {project.title}
                    </span>
                  </button>

                  {/* Category */}
                  <div className="col-span-2 hidden md:block">
                    <span
                      className="text-[10px] uppercase tracking-[0.15em]"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: "var(--muted)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Active indicator */}
                  <div className="col-span-2 text-right">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Select ${project.title}`}
                      className={`px-1 text-lg transition-all duration-300 ${
                        isActive
                          ? "text-[var(--aqua)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {isActive ? "●" : "○"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore all projects */}
        <div className="col-span-12 mt-12 flex justify-end">
          <button
            type="button"
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            <span>Explore all projects</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}