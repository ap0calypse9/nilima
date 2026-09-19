import fs from "fs";
import path from "path";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";
import CredentialsGallery, { type Doc } from "@/components/about/credentials-gallery";

// Manually curated images — keep adding entries here the same way.
const imageDocuments: Doc[] = [
  { type: "image", file: "doc-1.jpg", src: "/images/credentials/doc-1.jpg", caption: "" },
  { type: "image", file: "doc-2.jpg", src: "/images/credentials/doc-2.jpg", caption: "" },
];

// Everything in /public/documents/credentials shows up automatically,
// whatever it's named — no code edits needed per PDF. Optionally give
// a specific ugly filename a real label here, keyed by exact filename.
const CAPTIONS: Record<string, string> = {
  // "scan0043829.pdf": "ISO 9001:2015 Certificate",
};

function getPdfDocuments(): Doc[] {
  const dir = path.join(process.cwd(), "public", "documents", "credentials");

  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((file) => file.toLowerCase().endsWith(".pdf"))
      .sort();
  } catch {
    // Folder doesn't exist yet — fine, just skip until it does.
    files = [];
  }

  return files.map((file, index) => ({
    type: "pdf",
    file,
    src: `/documents/credentials/${file}`,
    caption: CAPTIONS[file] || `Document ${String(index + 1).padStart(2, "0")}`,
  }));
}

export default function CredentialsPage() {
  const documents: Doc[] = [...imageDocuments, ...getPdfDocuments()];

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

        {/* Document gallery — client component handles the grid + lightbox */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14">
              {documents.length === 0 ? (
                <p className="text-sm italic text-[var(--graphite)]">
                  No documents yet — add images above or drop PDFs into
                  /public/documents/credentials.
                </p>
              ) : (
                <CredentialsGallery documents={documents} />
              )}
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
    </>
  );
}