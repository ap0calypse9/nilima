"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Download } from "lucide-react";

export type Doc = {
  type: "image" | "pdf";
  file: string;
  src: string;
  caption: string;
};

export default function CredentialsGallery({ documents }: { documents: Doc[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + documents.length) % documents.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % documents.length));

  const active = activeIndex !== null ? documents[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {documents.map((doc, index) => {
          const accentVar = index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
          return (
            <button
              key={doc.file}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[3/4] w-full overflow-hidden border border-[var(--line)] bg-[var(--background-alt)] text-left transition-colors hover:border-[var(--ink)]"
            >
              {doc.type === "image" ? (
                <Image
                  src={doc.src}
                  alt={doc.caption || `Certificate ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <FileText
                    className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: accentVar }}
                    strokeWidth={1.25}
                  />
                </div>
              )}

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
                <span className="absolute inset-x-0 bottom-0 bg-[var(--paper)]/95 px-3 py-2 text-center text-xs text-[var(--ink)]">
                  {doc.caption}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox — images render as <Image>, PDFs render inline via iframe */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--ink)]/90 p-4 md:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:right-6 md:top-6"
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
            className="absolute left-2 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:left-8"
          >
            ←
          </button>

          <div
            className="flex h-full w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "image" ? (
              <div className="relative h-[75vh] w-full">
                <Image
                  src={active.src}
                  alt={active.caption || "Certificate"}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full flex-1 bg-white">
                <iframe
                  src={active.src}
                  title={active.caption}
                  className="h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            )}

            <div className="mt-4 flex items-center gap-6">
              <p className="text-sm font-medium text-white">
                {active.caption || "Certificate"}
                <span
                  className="ml-2 text-xs text-white/50"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {activeIndex! + 1} / {documents.length}
                </span>
              </p>

              <a
                href={active.src}
                download
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-white/70 transition-colors hover:text-[var(--blueprint)]"
              >
                <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
                Download
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next document"
            className="absolute right-2 flex h-10 w-10 items-center justify-center border border-white/30 text-white md:right-8"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}