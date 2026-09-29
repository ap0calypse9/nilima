"use client";

import { useState } from "react";

const FEATURED_VIDEO_ID = "WxWOe8Epd4Y";
const CHANNEL_URL =
  "https://www.youtube.com/@Structuralconsultantnilima/videos";

const highlights = [
  "Soil Testing — Standard & Advanced",
  "Dynamic Load Test (DLT) & PIT",
  "Vertical & Lateral Pile Load Tests",
  "RCC & Steel Structural Design",
];

export default function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            See it on site.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            A look at our testing and survey work in the field, straight from
            our channel.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>

        <div className="col-span-12 mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12">
          <div className="relative md:col-span-8">
            <div className="relative aspect-video w-full overflow-hidden border border-[var(--line)] bg-[var(--ink)]">
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1`}
                  title="Nilima Design Associates — featured video"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="group absolute inset-0 h-full w-full"
                >
                  <img
                    src={`https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Featured video thumbnail"
                    className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
                  />

                  <span className="absolute inset-0 bg-[var(--ink)]/25" />

                  <span
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--blueprint)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 h-6 w-6 fill-white"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}

              {!playing &&
                [
                  "left-3 top-3 border-l border-t",
                  "right-3 top-3 border-r border-t",
                  "left-3 bottom-3 border-l border-b",
                  "right-3 bottom-3 border-r border-b",
                ].map((position) => (
                  <span
                    key={position}
                    className={`pointer-events-none absolute z-10 h-5 w-5 ${position}`}
                    style={{
                      borderColor: "var(--blueprint)",
                    }}
                  />
                ))}
            </div>
          </div>

          <div className="relative md:col-span-4">
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden md:block hatch-blueprint" />

            <p
              className="text-xs uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--blueprint)",
              }}
            >
              On our channel
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-snug text-[var(--ink)]">
              Nilima Design Associates
            </h3>

            <ul className="mt-6 space-y-2">
              {highlights.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-[var(--ink)]"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{
                      backgroundColor: "var(--green)",
                    }}
                  />
                  {line}
                </li>
              ))}
            </ul>

            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
            >
              Visit our YouTube channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}