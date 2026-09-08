"use client";

import {
  GraduationCap,
  Building2,
  Factory,
  Home as HomeIcon,
  Landmark,
  Hammer,
  Layers,
  FlaskConical,
  Wrench,
} from "lucide-react";

const sectors = [
  { label: "Residential", icon: HomeIcon },
  { label: "Commercial", icon: Building2 },
  { label: "Industrial", icon: Factory },
  { label: "Infrastructure", icon: Landmark },
];

const disciplines = [
  { label: "Structural", icon: Layers, accent: "var(--aqua)" },
  { label: "Geotechnical", icon: Hammer, accent: "var(--green)" },
  { label: "Testing", icon: FlaskConical, accent: "var(--aqua)" },
  { label: "Rehabilitation", icon: Wrench, accent: "var(--green)" },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="page-grid py-28 md:py-40">
        {/* Header */}
        <div className="col-span-12 flex items-center gap-4">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
            style={{
              background: "linear-gradient(135deg, var(--aqua), var(--green))",
            }}
          >
            5
          </span>

          <span
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}
          >
            Trust / Credentials
          </span>
        </div>

        {/* Main statement */}
        <div className="col-span-12 mt-16 md:col-span-9 md:mt-20">
          <h2 className="text-[clamp(3.5rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-[-0.05em]">
            <span
              style={{
                background: "linear-gradient(90deg, var(--aqua), var(--green))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ENGINEERING
            </span>
            <br />
            YOU CAN STAND ON.
          </h2>
        </div>

        {/* Supporting copy */}
        <div className="col-span-12 mt-8 md:col-span-6 md:mt-10">
          <p className="text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            Trusted by builders, developers and property owners for
            engineering solutions spanning new construction, inspection,
            testing and repair &mdash; backed by field investigation and
            modern analytical tools.
          </p>
        </div>

        {/* Institutional support + sectors, gradient cards with icons */}
        <div className="col-span-12 mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
          <div
            className="group relative overflow-hidden rounded-3xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 md:p-10"
            style={{
              background: "linear-gradient(135deg, var(--aqua), #1c7ea6)",
            }}
          >
            <GraduationCap
              className="absolute -right-4 -top-4 h-32 w-32 text-white/10 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1}
            />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
              <GraduationCap className="h-5 w-5 text-white" strokeWidth={1.75} />
            </div>

            <p className="relative mt-6 text-sm font-semibold uppercase tracking-wide text-white/70">
              Institutional Support
            </p>
            <p className="relative mt-3 max-w-md text-xl font-semibold leading-snug text-white md:text-2xl">
              Technical vetting support from reputed institutions,
              including Jadavpur University and IIEST.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 shadow-lg md:p-10"
            style={{
              background: "linear-gradient(135deg, var(--green), #4d8a1f)",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Project Sectors
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {sectors.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-5 w-5 shrink-0 text-white" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discipline cards with icons and lift-on-hover */}
        <div className="col-span-12 mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {disciplines.map(({ label, icon: Icon, accent }) => (
            <div
              key={label}
              className="group rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-[var(--line)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${accent}1a` }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} strokeWidth={1.75} />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement banner with subtle gradient + pattern */}
        <div
          className="relative col-span-12 mt-16 overflow-hidden rounded-3xl px-8 py-16 shadow-xl md:mt-24 md:px-16"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(41,171,226,0.25), transparent 55%), var(--navy)",
          }}
        >
          <p
            className="relative max-w-4xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-instrument)" }}
          >
            From ground investigation to structural stability.{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--aqua), var(--green))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              One engineering approach.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}