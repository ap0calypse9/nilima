import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const practiceAreas = [
  "Structural Design",
  "Foundation Engineering",
  "Soil Investigation",
  "Pile Testing",
  "Land Survey",
  "Non-Destructive Testing",
  "Structural Audit",
  "Rehabilitation",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--paper)] text-[var(--ink)]">
        {/* Hero */}
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
                / <span className="text-[var(--ink)]">About</span>
              </p>
            </div>

            <div className="col-span-12 mt-8 md:col-span-10">
              <h1 className="text-[clamp(3.5rem,9vw,10rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-[var(--ink)]">
                Engineering
                <br />
                with{" "}
                <span style={{ color: "var(--blueprint)" }}>purpose.</span>
              </h1>
            </div>

            <div className="col-span-12 mt-14 md:col-span-5 md:col-start-8 md:mt-16">
              <p className="text-xl leading-relaxed text-[var(--ink)] md:text-2xl">
                Nilima Design Associates is a multidisciplinary structural
                engineering consultancy delivering precise, safe and
                cost-effective engineering solutions across West Bengal
                and India.
              </p>
            </div>
          </div>
        </section>

        {/* The Practice */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-12">
              <div className="md:col-span-3">
                <p
                  className="text-xs uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                >
                  The practice
                </p>
              </div>

              <div className="md:col-span-7 md:col-start-5">
                <p className="text-2xl leading-tight text-[var(--ink)] md:text-4xl">
                  From new construction to inspection, testing and
                  rehabilitation, Nilima Design Associates provides
                  end-to-end engineering consultancy tailored to project
                  requirements.
                </p>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--graphite)]">
                  The practice works across residential, commercial,
                  industrial and infrastructure projects, combining field
                  investigation with structural analysis, design and
                  engineering judgement.
                </p>

                <Link
                  href="/about/company"
                  className="mt-8 inline-block border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                >
                  More about the company
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured: Koushik Chatterjee */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="relative md:col-span-6">
                <div className="relative aspect-[4/3] w-full border border-[var(--line)]">
                  <Image
                    src="/images/leadership/koushik2.jpeg"
                    alt="Koushik Chatterjee, Managing Director & Structural Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
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
                      style={{ borderColor: "var(--blueprint)" }}
                    />
                  ))}
                </div>
              </div>

              <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                <span
                  className="block h-[3px] w-10"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-[var(--ink)] md:text-4xl">
                  Koushik Chatterjee
                </h2>
                <p
                  className="mt-2 text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                >
                  Managing Director &amp; Structural Engineer
                </p>

                <Link
                  href="/about/company"
                  className="mt-8 inline-block w-fit border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                >
                  Meet the full team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of practice */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Areas of practice.
              </h2>
            </div>

            <div className="col-span-12 mt-14">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {practiceAreas.map((item, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[var(--line)] py-5"
                  >
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--graphite)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-1.5 w-1.5 shrink-0"
                      style={{ backgroundColor: accentVar }}
                    />
                    <span className="text-lg text-[var(--ink)] md:text-xl">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing + cross-links */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-28">
          <div className="page-grid">
            <p className="col-span-12 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05]">
              Safe structures begin
              <br />
              with better thinking.
            </p>

            <div className="col-span-12 mt-12 flex flex-wrap gap-8">
              <Link
                href="/about/company"
                className="border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                The company
              </Link>
              <Link
                href="/about/leadership"
                className="border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                Leadership
              </Link>
              <Link
                href="/about/credentials"
                className="border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                Credentials
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}