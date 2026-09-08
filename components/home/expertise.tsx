"use client";

import Image from "next/image";

const expertise = [
  {
    number: "01",
    title: "Structural Audit",
    description:
      "Assessment of existing structures to understand condition, stability, distress and safety.",
    image: "/images/expertise/structural-audit.jpg",
    accent: "aqua",
  },
  {
    number: "02",
    title: "Foundation Engineering",
    description:
      "Engineering solutions for foundations, soil investigation and deep foundation systems.",
    image: "/images/expertise/foundation-engineering.jpg",
    accent: "green",
  },
  {
    number: "03",
    title: "Testing & NDT",
    description:
      "Testing and investigation techniques to evaluate concrete, steel and structural elements.",
    image: "/images/expertise/testing-ndt.jpg",
    accent: "green",
  },
  {
    number: "04",
    title: "Rehabilitation",
    description:
      "Repair, retrofitting and rehabilitation strategies for renewed structural performance.",
    image: "/images/expertise/rehabilitation.jpg",
    accent: "aqua",
  },
] as const;

export default function Expertise() {
  return (
    <section className="relative bg-[var(--background-alt)] py-20 md:py-28">
      <div className="page-grid">
        {/* Section header */}
        <div className="col-span-12 md:col-span-8">
          <p
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: "var(--aqua)" }}
          >
            Our Technical Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--foreground)] md:text-4xl">
            Solving Structural Challenges,{" "}
            <span style={{ color: "var(--green)" }}>With Precision</span>
          </h2>

          <p className="mt-4 max-w-xl text-base text-[var(--foreground-muted)]">
            From investigation to rehabilitation, we combine field
            experience with advanced technical tools to keep structures
            safe, compliant, and built to last.
          </p>
        </div>

        {/* Card grid */}
        <div className="col-span-12 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => {
            const accentVar =
              item.accent === "aqua" ? "var(--aqua)" : "var(--green)";

            return (
              <div
                key={item.title}
                className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Fallback color wash so text always stays readable even if image fails to load */}
                  <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{ backgroundColor: accentVar, opacity: 0.25 }}
                  />
                  {/* Dark gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0" />
                </div>

                {/* Number badge */}
                <span
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
                  style={{ backgroundColor: accentVar }}
                >
                  {item.number}
                </span>

                {/* Text content, explicitly white for guaranteed contrast on the image */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {item.description}
                  </p>

                  <span
                    className="mt-4 inline-block h-1 w-10 rounded-full"
                    style={{ backgroundColor: accentVar }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}