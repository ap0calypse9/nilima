"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Structural",
    subtitle: "Design & Engineering",
    href: "/capabilities#structural-engineering",
    description:
      "Structural design, analysis and engineering solutions for residential, commercial, industrial and infrastructure projects.",
    tags: ["ETABS", "STAAD.PRO", "REVIT"],
    scope: [
      "Concept to detailed design",
      "Seismic & wind analysis",
      "IS 456 / IS 1893 compliance",
    ],
    image: "/images/capabilities/structural.jpeg",
    accent: "blueprint",
  },
  {
    title: "Foundation",
    subtitle: "Soil & Deep Foundations",
    href: "/capabilities#foundation-engineering",
    description:
      "Soil investigation, foundation engineering and pile testing for safe and reliable structural systems.",
    tags: ["SOIL TESTING", "DLT", "PIT", "CAPWAP"],
    scope: [
      "Geotechnical investigation",
      "Pile & raft design",
      "Load & integrity testing",
    ],
    image: "/images/capabilities/foundation.jpeg",
    accent: "green",
  },
  {
    title: "Survey",
    subtitle: "Land & Topography",
    href: "/capabilities#land-survey",
    description:
      "Land and topographical surveying for accurate planning, engineering and project execution.",
    tags: ["LAND SURVEY", "TOPOGRAPHY", "MAPPING"],
    scope: [
      "Total station survey",
      "Contour & topo mapping",
      "Boundary verification",
    ],
    image: "/images/capabilities/survey.jpeg",
    accent: "blueprint",
  },
  {
    title: "Testing",
    subtitle: "NDT & Structural Health",
    href: "/capabilities#non-destructive-testing",
    description:
      "Non-destructive testing, structural audits and building health assessments for existing structures.",
    tags: ["NDT", "AUDIT", "CRACK ANALYSIS"],
    scope: [
      "Rebound hammer & UPV testing",
      "Distress & crack mapping",
      "Condition assessment reports",
    ],
    image: "/images/capabilities/test.jpeg",
    accent: "green",
  },
  {
    title: "Rehabilitation",
    subtitle: "Repair & Retrofitting",
    href: "/capabilities#rehabilitation",
    description:
      "Structural rehabilitation, retrofitting and repair strategies designed to extend the service life of structures.",
    tags: ["RETROFIT", "REPAIR", "STABILITY"],
    scope: [
      "Jacketing & strengthening",
      "Crack injection & repair",
      "Seismic retrofit design",
    ],
    image: "/images/capabilities/reha.jpeg",
    accent: "blueprint",
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % capabilities.length);
    }, 4500);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (index: number) => {
    setActive(index);
    startAutoplay();
  };

  const current = capabilities[active];
  const accentVar =
    current.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";

  return (
    <section className="relative bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            What we engineer.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
        
        </div>

        {/* Discipline index */}
        <div className="col-span-12 mt-16 md:mt-20">
          <div className="dimension-line" />
          <div className="flex flex-wrap">
            {capabilities.map((item, index) => {
              const isActive = active === index;
              const itemAccent =
                item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className="group relative py-5 pr-8 text-left"
                >
                  <span
                    className="block text-xs tracking-wide"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: isActive ? itemAccent : "var(--graphite)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")} / 05
                  </span>
                  <span
                    className="mt-1 flex items-center gap-2 text-lg font-medium transition-colors"
                    style={{ color: isActive ? "var(--ink)" : "var(--graphite)" }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-opacity"
                      style={{
                        backgroundColor: itemAccent,
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    {item.title}
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

        {/* Spec-sheet layout */}
        <div className="col-span-12 mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12">
          {/* Image, framed like a drawing sheet, accent-colored corner ticks */}
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

          {/* Technical spec panel with a hatch accent band behind it */}
          <div className="relative md:col-span-5">
            <div
              className={`pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden md:block ${current.accent === "blueprint" ? "hatch-blueprint" : "hatch-green"
                }`}
            />

            <p
              className="text-xs uppercase tracking-wide"
              style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
            >
              {current.subtitle}
            </p>

            <h3 className="mt-3 text-3xl font-semibold leading-tight text-[var(--ink)]">
              {current.title}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--graphite)]">
              {current.description}
            </p>

            {/* Scope of work — real added detail */}
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

            {/* Tool tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href={current.href}
                className="mt-8 inline-flex items-center gap-3 border-b-2 pb-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:gap-5"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: accentVar,
                  borderColor: accentVar,
                }}
              >
                Explore {current.title}
                <span aria-hidden="true">→</span>
              </Link>
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="border px-2.5 py-1 text-[11px] tracking-wide text-[var(--graphite)]"
                  style={{ fontFamily: "var(--font-dm-mono)", borderColor: accentVar }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}