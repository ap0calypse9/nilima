import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";
import { insights } from "@/lib/insights-data";

export default function InsightsPage() {
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
                / <span className="text-[var(--ink)]">Insights</span>
              </p>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Field notes &amp;
                <br />
                case studies.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--graphite)]">
                Real assessments, real findings — a record of how we
                actually work, not just what we say we do.
              </p>
            </div>
          </div>
        </section>

        {/* Insights grid */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <Link
                    key={insight.slug}
                    href={`/insights/${insight.slug}`}
                    className="group block border border-[var(--line)] p-6 transition-colors hover:border-[var(--ink)]"
                  >
                    <p
                      className="text-xs uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
                    >
                      {insight.category}
                    </p>

                    <h2 className="mt-3 text-xl font-semibold leading-snug text-[var(--ink)] transition-colors group-hover:text-[var(--blueprint)]">
                      {insight.title}
                    </h2>

                    <p className="mt-2 text-sm text-[var(--graphite)]">
                      {insight.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-[var(--graphite)]">
                      {insight.excerpt}
                    </p>

                    <span
                      className="mt-5 inline-block border-b border-[var(--ink)] pb-0.5 text-sm font-medium text-[var(--ink)] transition-colors group-hover:border-[var(--blueprint)] group-hover:text-[var(--blueprint)]"
                    >
                      Read case study
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}