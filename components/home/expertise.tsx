"use client";

import { useState } from "react";

const expertise = [
  {
    number: "01",
    title: "STRUCTURAL AUDIT",
    description:
      "Assessment of existing structures to understand structural condition, stability, distress and safety.",
    detail: "AUDIT / HEALTH CHECK / STABILITY",
  },
  {
    number: "02",
    title: "FOUNDATION ENGINEERING",
    description:
      "Engineering solutions for foundations, soil investigation and deep foundation systems.",
    detail: "SOIL / PILES / FOUNDATIONS",
  },
  {
    number: "03",
    title: "TESTING & NDT",
    description:
      "Testing and investigation techniques to evaluate concrete, steel and existing structural elements.",
    detail: "DLT / PIT / NDT / CONCRETE",
  },
  {
    number: "04",
    title: "REHABILITATION",
    description:
      "Repair, retrofitting and rehabilitation strategies for structures requiring renewed performance.",
    detail: "REPAIR / RETROFIT / REHABILITATION",
  },
];

const tools = [
  "AUTOCAD",
  "ETABS",
  "STAAD.PRO",
  "REVIT",
  "CAPWAP",
];

export default function Expertise() {
  const [active, setActive] = useState(0);

  const current = expertise[active];

  return (
    <section className="relative overflow-hidden bg-[#efede7] text-[#080909]">
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
              04
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Expertise
            </span>
          </div>

          <span
            className="hidden text-[10px] uppercase tracking-[0.2em] md:block"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            Engineering / Technical
          </span>
        </div>

        {/* Main heading */}
        <div className="col-span-12 mt-20 md:col-span-8 md:mt-28">
          <h2 className="text-[clamp(4rem,9vw,10rem)] leading-[0.78] tracking-[-0.06em]">
            ENGINEERING
            <br />
            THAT GOES
            <br />
            <span style={{ color: "var(--aqua)" }}>DEEP.</span>
          </h2>
        </div>

        {/* Intro */}
        <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-32">
          <p className="text-lg leading-relaxed md:text-xl">
            From investigation to analysis, design and rehabilitation, our
            engineering approach combines field knowledge with advanced
            technical tools.
          </p>
        </div>

        {/* Expertise list + active detail */}
        <div className="col-span-12 mt-24 md:mt-40">
          <div className="grid grid-cols-12 border-t border-black/20">

            {/* List */}
            <div className="col-span-12 md:col-span-7">
              {expertise.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="group grid w-full grid-cols-12 items-center border-b border-black/20 py-7 text-left md:py-9"
                  >
                    <span
                      className="col-span-2 text-[10px] tracking-[0.2em]"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: isActive
                          ? "var(--aqua)"
                          : "#777",
                      }}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`col-span-8 text-2xl tracking-[-0.035em] transition-transform duration-300 md:text-4xl ${
                        isActive
                          ? "translate-x-3"
                          : "group-hover:translate-x-3"
                      }`}
                    >
                      {item.title}
                    </span>

                    <span
                      className={`col-span-2 text-right text-lg transition-all duration-300 ${
                        isActive
                          ? "text-[var(--aqua)]"
                          : "text-black/30"
                      }`}
                    >
                      ↗
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="col-span-12 border-l-0 md:col-span-5 md:border-l md:border-black/20">
              <div className="flex h-full min-h-[360px] flex-col justify-between p-8 md:p-12">

                {/* Technical marker */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    Area / {current.number}
                  </span>

                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: "var(--aqua)",
                    }}
                  />
                </div>

                {/* Description */}
                <div>
                  <p
                    className="mb-5 text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: "#777",
                    }}
                  >
                    {current.detail}
                  </p>

                  <p className="max-w-md text-2xl leading-tight tracking-[-0.025em] md:text-3xl">
                    {current.description}
                  </p>
                </div>

                {/* Placeholder technical graphic */}
                <div className="relative mt-12 h-24 overflow-hidden border border-black/20">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-1/4 top-0 h-full w-px bg-black" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-black" />
                    <div className="absolute left-3/4 top-0 h-full w-px bg-black" />

                    <div className="absolute left-0 top-1/2 h-px w-full bg-black" />
                  </div>

                  <div
                    className="absolute left-0 top-1/2 h-px w-1/2"
                    style={{
                      backgroundColor: "var(--aqua)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="col-span-12 mt-28 border-t border-black/20 pt-8 md:mt-40">
          <div className="grid grid-cols-12 gap-y-8">
            <div className="col-span-12 md:col-span-3">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                Technical toolkit
              </p>
            </div>

            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-2xl tracking-[-0.03em] md:text-4xl"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="col-span-12 mt-32 md:mt-48">
          <p
            className="max-w-4xl text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95]"
            style={{
              fontFamily: "var(--font-instrument)",
            }}
          >
            Accurate analysis.
            <br />
            <span style={{ color: "var(--aqua)" }}>
              Better decisions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}