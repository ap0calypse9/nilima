"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

// Add/remove entries and swap in real filenames as scanned documents
// come in. Caption is optional — leave blank if the document speaks
// for itself once enlarged.
const documents = [
  { file: "doc-1.jpg", caption: "" },
  { file: "doc-2.jpg", caption: "" },
  { file: "doc-3.jpg", caption: "" },
  { file: "doc-4.jpg", caption: "" },
  { file: "doc-5.jpg", caption: "" },
  { file: "doc-6.jpg", caption: "" },
];

export default function CredentialsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + documents.length) % documents.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % documents.length));

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
                /{" "}
                <Link href="/about/company" className="hover:text-[var(--blueprint)]">
                  About
                </Link>{" "}
                / <span className="text-[var(--ink)]">Credentials</span>
              </p>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Certified.
                <br />
                On record.
              </h1>
            </div>

            <div className="col-span-12 mt-16 md:col-span-5 md:col-start-8 md:mt-20">
              <p className="text-lg leading-relaxed text-[var(--ink)] md:text-xl">
                Registrations, certifications and empanelments that back
                every report we sign off on.
              </p>
            </div>
          </div>
        </section>

        {/* Document gallery */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {documents.map((doc, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <button
                    key={doc.file}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative aspect-[3/4] w-full overflow-hidden border border-[var(--line)] text-left"
                  >
                    <Image
                      src={`/images/credentials/${doc.file}`}
                      alt={doc.caption || `Certificate ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {[
                      "left-2 top-2 border-l border-t",
                      "right-2 top-2 border-r border-t",
                      "left-2 bottom-2 border-l border-b",
                      "right-2 bottom-2 border-r border-b",
                    ].map((position) => (
                      <span
                        key={position}
                        className={`pointer-events-none absolute h-4 w-4 ${position}`}
                        style={{ borderColor: accentVar }}
                      />
                    ))}

                    <span
                      className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: accentVar, fontFamily: "var(--font-dm-mono)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {doc.caption && (
                      <span className="absolute inset-x-0 bottom-0 bg-[var(--paper)]/95 px-3 py-2 text-xs text-[var(--ink)]">
                        {doc.caption}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing statement */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-24">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-2xl font-medium leading-snug md:text-3xl">
                Documentation is part of the deliverable, not an
                afterthought.
              </p>

              <Link
                href="/about/leadership"
                className="shrink-0 border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                Meet leadership
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--ink)]/90 p-6"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
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
            aria-label="Previous document"
            className="absolute left-4 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:left-8"
          >
            ←
          </button>

          <div
            className="relative h-[80vh] w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/credentials/${documents[activeIndex].file}`}
              alt={documents[activeIndex].caption || `Certificate ${activeIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next document"
            className="absolute right-4 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:right-8"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}