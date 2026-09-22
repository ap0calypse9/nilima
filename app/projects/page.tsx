"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

type Category = "Buildings" | "Infrastructure" | "Industrial";

type Project = {
  slug: string;
  title: string;
  category: Category;
  location: string;
  images: string[];
};

// Replace with real projects/photos. Each project can hold as many
// images as you have — the gallery/lightbox handles any count.
const projects: Project[] = [
  {
    slug: "minto-park-syndicate",
    title: "Minto Park Syndicate",
    category: "Buildings",
    location: "Kolkata, West Bengal",
    images: ["/images/projects/minto-park-syndicate/1.jpeg",
      "/images/projects/minto-park-syndicate/2.jpeg",
      "/images/projects/minto-park-syndicate/3.jpeg",
    ],
  },
  {
    slug: "offshore-pile-work-saudi-arabia",
    title: "Offshore Pile Work",
    category: "Infrastructure",
    location: "Saudi Arabia",
    images: [
      "/images/projects/offshore-pile-work-saudi-arabia/1.jpeg",
      "/images/projects/offshore-pile-work-saudi-arabia/2.jpeg",
      "/images/projects/offshore-pile-work-saudi-arabia/3.jpeg",
      "/images/projects/offshore-pile-work-saudi-arabia/4.jpeg",
      "/images/projects/offshore-pile-work-saudi-arabia/5.jpeg",
    ],
  },
  {
    slug: "survey-of-andaman",
    title: "Survey of Andaman",
    category: "Infrastructure",
    location: "Andaman & Nicobar Islands",
    images: ["/images/projects/survey-of-andaman/1.jpeg"],
  },
  {
    slug: "upohar-building-inspection",
    title: "Structural Inspection — Upohar Building",
    category: "Buildings",
    location: "West Bengal",
    images: ["/images/projects/upohar-building-inspection/1.jpeg"],
  },
  {
    slug: "pcbl-structural-audit-durgapur",
    title: "PCBL Structural Audit",
    category: "Industrial",
    location: "Durgapur, West Bengal",
    images: ["/images/projects/pcbl-structural-audit-durgapur/1.jpeg",
      "/images/projects/pcbl-structural-audit-durgapur/2.jpeg",
      "/images/projects/pcbl-structural-audit-durgapur/3.jpeg",
      "/images/projects/pcbl-structural-audit-durgapur/4.jpeg",
    ],


  },
  {
    slug: "structural-audit-daman-diu",
    title: "Structural Audit",
    category: "Buildings",
    location: "Daman and Diu",
    images: ["/images/projects/structural-audit-daman-diu/1.jpeg",
      "/images/projects/structural-audit-daman-diu/2.jpeg",
    ],
  },
  {
    slug: "sreebhumi-sporting-club-survey",
    title: "Survey Work — Sreebhumi Sporting Club",
    category: "Infrastructure",
    location: "Kolkata, West Bengal",
    images: ["/images/projects/sreebhumi-sporting-club-survey/1.jpeg",
      "/images/projects/sreebhumi-sporting-club-survey/2.jpeg",
      "/images/projects/sreebhumi-sporting-club-survey/3.jpeg",
    ],
  },
    {
    slug: "bsf-indira-point-dynamic-load-test",
    title: "Dynamic Load Test — Border Security Force",
    category: "Infrastructure",
    location: "Indira Point, Andaman & Nicobar Islands",
    images: [
      "/images/projects/bsf-indira-point-dynamic-load-test/1.jpeg",
      "/images/projects/bsf-indira-point-dynamic-load-test/2.jpeg",
      "/images/projects/bsf-indira-point-dynamic-load-test/3.jpeg",
      "/images/projects/bsf-indira-point-dynamic-load-test/4.jpeg",
    ],
  },
{
    slug: "shopping-mall",
    title: "Shopping mall site inspection with Senior Technical Consultant Mr Biman Mukherjee",
    category: "Buildings",
    location: "Mumbai",
    images: [
      "/images/projects/shopping-mall/1.jpeg",
      "/images/projects/shopping-mall/2.jpeg",
      "/images/projects/shopping-mall/3.jpeg",
    ],
  },
];

const filters: { label: string; value: Category | "All" }[] = [
  { label: "All Projects", value: "All" },
  { label: "Buildings", value: "Buildings" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "Industrial", value: "Industrial" },
];

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeType = (searchParams.get("type") as Category | null) ?? "All";

  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  const filtered =
    activeType === "All" ? projects : projects.filter((p) => p.category === activeType);

  const setFilter = (value: Category | "All") => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "All") {
      params.delete("type");
    } else {
      params.set("type", value);
    }
    const query = params.toString();
    router.push(`/projects${query ? `?${query}` : ""}`);
  };

  const closeLightbox = () => setLightbox(null);
  const showPrev = () =>
    setLightbox((current) =>
      current
        ? { ...current, index: (current.index - 1 + current.project.images.length) % current.project.images.length }
        : null
    );
  const showNext = () =>
    setLightbox((current) =>
      current
        ? { ...current, index: (current.index + 1) % current.project.images.length }
        : null
    );

  return (
    <>
      <Navbar />

      <main className="bg-[var(--paper)] text-[var(--ink)]">
        {/* Page header */}
        <section className="relative pb-16 pt-40 md:pb-20 md:pt-48">
          <div className="page-grid">
            <div className="col-span-12">
              <p
                className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <Link href="/" className="hover:text-[var(--blueprint)]">
                  Home
                </Link>{" "}
                / <span className="text-[var(--ink)]">Projects</span>
              </p>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Selected work.
              </h1>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="relative">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
              <div className="flex flex-wrap">
                {filters.map((filter) => {
                  const isActive = activeType === filter.value;
                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setFilter(filter.value)}
                      className="relative px-4 py-4 text-sm font-medium transition-colors sm:px-5"
                      style={{
                        color: isActive ? "var(--blueprint)" : "var(--graphite)",
                      }}
                    >
                      {filter.label}
                      {isActive && (
                        <span
                          className="absolute inset-x-0 -bottom-px h-[2px]"
                          style={{ backgroundColor: "var(--blueprint)" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="dimension-line" />
            </div>
          </div>
        </section>

        {/* Project grid */}
        <section className="relative py-16 md:py-20">
          <div className="page-grid">
            <div className="col-span-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => setLightbox({ project, index: 0 })}
                    className="group text-left"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)]">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {[
                        "left-3 top-3 border-l border-t",
                        "right-3 top-3 border-r border-t",
                        "left-3 bottom-3 border-l border-b",
                        "right-3 bottom-3 border-r border-b",
                      ].map((position) => (
                        <span
                          key={position}
                          className={`pointer-events-none absolute h-4 w-4 ${position}`}
                          style={{ borderColor: accentVar }}
                        />
                      ))}

                      {/* Photo count badge */}
                      <span
                        className="absolute bottom-3 right-3 flex items-center gap-1 bg-[var(--ink)]/80 px-2.5 py-1 text-[10px] font-medium text-white"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {project.images.length} photos
                      </span>
                    </div>

                    <p
                      className="mt-4 text-xs uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
                    >
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--ink)]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--graphite)]">
                      {project.location}
                    </p>
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <p className="col-span-12 py-16 text-center text-sm text-[var(--graphite)]">
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox with per-project gallery navigation */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--ink)]/90 p-6"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/30 text-white"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:left-8"
          >
            ←
          </button>

          <div className="flex max-w-3xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-[90vw] max-w-3xl">
              <Image
                src={lightbox.project.images[lightbox.index]}
                alt={lightbox.project.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-white">{lightbox.project.title}</p>
              <p
                className="mt-1 text-xs text-white/50"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {lightbox.index + 1} / {lightbox.project.images.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-4 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:right-8"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  );
}