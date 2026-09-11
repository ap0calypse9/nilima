"use client";

const MAP_QUERY =
  "Nilima design associates, 94, Chak Garia, Pancha Sayar, Kolkata, West Bengal 700094";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY
)}&output=embed`;
const MAP_DIRECTIONS_URL =
  "https://maps.app.goo.gl/rSYJCnRmrkUHSRoA6?g_st=ac";

export default function Location() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            Find us on site.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            Based in South Kolkata, working across West Bengal and
            beyond. Drop by, or get in touch before you do.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>

        {/* Map + info panel */}
        <div className="col-span-12 mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12">
          {/* Map, framed like a drawing sheet, with engineering overlays */}
          <div className="relative md:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)] bg-[var(--background-alt)]">
              <iframe
                title="Nilima Design Associates office location"
                src={MAP_EMBED_SRC}
                className="absolute inset-0 h-full w-full grayscale-[15%]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Corner crop marks */}
              {[
                "left-3 top-3 border-l border-t",
                "right-3 top-3 border-r border-t",
                "left-3 bottom-3 border-l border-b",
                "right-3 bottom-3 border-r border-b",
              ].map((position) => (
                <span
                  key={position}
                  className={`pointer-events-none absolute z-10 h-5 w-5 ${position}`}
                  style={{ borderColor: "var(--blueprint)" }}
                />
              ))}

              {/* Compass */}
              <div className="pointer-events-none absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ink)]/30 bg-[var(--paper)]/90">
                <span
                  className="text-xs font-bold text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  N
                </span>
                <span className="absolute top-1 h-3 w-px bg-[var(--blueprint)]" />
              </div>

              {/* Radar pulse marker, "service radius" feel */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <span className="radar-ring absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                <span className="radar-ring absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full [animation-delay:1s]" />
                <span
                  className="relative block h-3 w-3 rounded-full"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
              </div>

              {/* Scale bar, bottom-left */}
              <div className="pointer-events-none absolute bottom-5 left-5 z-10 flex items-center gap-2 bg-[var(--paper)]/90 px-3 py-1.5">
                <div className="relative h-2 w-20 border-l border-r border-[var(--ink)]/40">
                  <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-[var(--ink)]/40" />
                </div>
                <span
                  className="text-[10px] tracking-wide text-[var(--graphite)]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  0&nbsp;&nbsp;&nbsp;&nbsp;100m
                </span>
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="relative md:col-span-5">
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden md:block hatch-blueprint" />

            <p
              className="text-xs uppercase tracking-wide"
              style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
            >
              Registered Office
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-snug text-[var(--ink)]">
              Nilima Design Associates
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--graphite)]">
              Flat No. 3A, Block 32, 3rd Floor, Nabadiganta, Sonai Road,
              Chak Garia, Pancha Sayar, Kolkata, West Bengal, 700094
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-[var(--ink)]">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
                <a
                  href="tel:8972697919"
                  className="transition-colors hover:text-[var(--blueprint)]"
                >
                  8972697919
                </a>
              </li>
                            <li className="flex items-center gap-3 text-sm text-[var(--ink)]">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
                <a
                  href="tel:8972697919"
                  className="transition-colors hover:text-[var(--blueprint)]"
                >
                  9735574908
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--ink)]">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
                <a
                  href="mailto:ndaofficial2023@gmail.com"
                  className="transition-colors hover:text-[var(--blueprint)]"
                >
                  ndaofficial2023@gmail.com
                </a>
              </li>
            </ul>

            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes radar-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.2);
            opacity: 0;
          }
        }
        .radar-ring {
          background-color: var(--blueprint);
          animation: radar-ring 2.4s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .radar-ring {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}