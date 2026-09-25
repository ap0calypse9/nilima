"use client";

import Image from "next/image";

const expertise = [
  {
    number: "01",
    title: "Structural Audit",
    description:
      "Assessment of existing structures to understand condition, stability, distress and safety.",
    image: "/images/expertise/structural-audit.jpeg",
    accent: "blueprint",
  },
  {
    number: "02",
    title: "Foundation Engineering",
    description:
      "Engineering solutions for foundations, soil investigation and deep foundation systems.",
    image: "/images/expertise/soil.jpeg",
    accent: "green",
  },
  {
    number: "03",
    title: "Testing & NDT",
    description:
      "Testing and investigation techniques to evaluate concrete, steel and structural elements.",
    image: "/images/expertise/testing-ndt.jpeg",
    accent: "green",
  },
  {
    number: "04",
    title: "Rehabilitation",
    description:
      "Repair, retrofitting and rehabilitation strategies for renewed structural performance.",
    image: "/images/expertise/repair.jpeg",
    accent: "blueprint",
  },
  {
    number: "05",
    title: "Vertical Load Test",
    description:
      "Field testing to evaluate the load-bearing capacity and performance of piles and foundation systems.",
    image: "/images/expertise/vertical.jpeg",
    accent: "blueprint",
  },
] as const;

export default function Expertise() {
  return (
    <section className="relative bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header — no color-split headline, punch comes from scale not color */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            Where precision
            <br />
            gets tested.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            {expertise.length} disciplines that keep existing structures
            safe, standing, and code-compliant — long after the
            ribbon-cutting.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>

        {/* Framed grid */}
        <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => {
            const accentVar =
              item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";

            return (
              <div key={item.title} className="group">
                {/* Framed image, drafting-sheet corner ticks, accent-colored */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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

                  {/* Index tag — solid accent square, not a circular badge */}
                  <span
                    className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center text-xs font-bold text-white"
                    style={{
                      backgroundColor: accentVar,
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Text lives below the frame, full ink contrast — not overlaid on the photo */}
                <div className="mt-5">
                  <span
                    className="block h-[3px] w-10"
                    style={{ backgroundColor: accentVar }}
                  />
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}