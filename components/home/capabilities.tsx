"use client";

import { useState } from "react";
import Image from "next/image";

const capabilities = [
  {
    title: "Structural",
    subtitle: "Design & Engineering",
    description:
      "Structural design, analysis and engineering solutions for residential, commercial, industrial and infrastructure projects.",
    tags: ["ETABS", "STAAD.PRO", "REVIT"],
    image: "/images/capabilities/structural.jpg",
  },
  {
    title: "Foundation",
    subtitle: "Soil & Deep Foundations",
    description:
      "Soil investigation, foundation engineering and pile testing for safe and reliable structural systems.",
    tags: ["SOIL TESTING", "DLT", "PIT", "CAPWAP"],
    image: "/images/capabilities/foundation.jpg",
  },
  {
    title: "Survey",
    subtitle: "Land & Topography",
    description:
      "Land and topographical surveying for accurate planning, engineering and project execution.",
    tags: ["LAND SURVEY", "TOPOGRAPHY", "MAPPING"],
    image: "/images/capabilities/survey.jpg",
  },
  {
    title: "Testing",
    subtitle: "NDT & Structural Health",
    description:
      "Non-destructive testing, structural audits and building health assessments for existing structures.",
    tags: ["NDT", "AUDIT", "CRACK ANALYSIS"],
    image: "/images/capabilities/testing.jpg",
  },
  {
    title: "Rehabilitation",
    subtitle: "Repair & Retrofitting",
    description:
      "Structural rehabilitation, retrofitting and repair strategies designed to extend the service life of structures.",
    tags: ["RETROFIT", "REPAIR", "STABILITY"],
    image: "/images/capabilities/rehabilitation.jpg",
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section className="relative bg-[var(--background)] py-20 md:py-28">
      <div className="page-grid">
        {/* Section header */}
        <div className="col-span-12">
          <p
            className="text-sm font-medium uppercase tracking-wide"
            style={{ color: "var(--aqua)" }}
          >
            Our Engineering Expertise
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">
            Delivering Value Through Structural Excellence
          </h2>

          <p className="mt-4 max-w-2xl text-base text-[var(--foreground-muted)]">
            We partner with you across every stage of a structure&apos;s
            life &mdash; from design and foundation to testing and
            rehabilitation.
          </p>
        </div>

        {/* Tab selector */}
        <div className="col-span-12 mt-10 flex flex-wrap gap-2 border-b border-[var(--line)]">
          {capabilities.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className="relative px-4 py-3 text-sm font-medium transition-colors sm:px-5 sm:py-4"
                style={{
                  color: isActive ? "var(--aqua)" : "var(--foreground-muted)",
                }}
              >
                {item.title}
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-px h-[2px]"
                    style={{ backgroundColor: "var(--aqua)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Highlighted card + image */}
        <div className="col-span-12 mt-8 grid grid-cols-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-[var(--line)] md:grid-cols-12">
          <div
            className="flex flex-col justify-between p-8 md:col-span-4 md:p-10"
            style={{ backgroundColor: "var(--green)" }}
          >
            <div>
              <p className="text-sm font-medium text-[var(--background)]/70">
                {current.subtitle}
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[var(--background)]">
                Your reliable{" "}
                <span className="font-bold">Structural Design Partner</span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--background)]/85">
                {current.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--background)]/25 px-3 py-1 text-xs font-medium text-[var(--background)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--background)]"
            >
              Explore Now
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="relative min-h-[280px] md:col-span-8">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}