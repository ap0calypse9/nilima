import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const whatWeDo = [
  "Structural Design & Analysis",
  "Building Planning & Civil Engineering Consultancy",
  "Structural Health Assessment & Stability Evaluation",
  "Non-Destructive Testing (NDT) of Concrete & Structures",
  "Soil Investigation & Geotechnical Investigation",
  "Pile Testing & Foundation Investigation",
  "Land & Topographical Survey",
  "Quantity Estimation & Technical Documentation",
  "Existing Building Assessment",
  "Repair, Rehabilitation & Strengthening Consultancy",
  "Construction Quality Inspection & Technical Consultancy",
];

const approachSteps = [
  "Investigation",
  "Analysis",
  "Design",
  "Testing",
  "Technical Evaluation",
  "Practical Solution",
];

const whyChooseUs = [
  {
    title: "Professional Engineering Expertise",
    description:
      "Technically focused engineering consultancy backed by practical understanding of construction and site conditions.",
    accent: "blueprint",
  },
  {
    title: "Accurate Investigation & Testing",
    description:
      "Systematic field investigation, appropriate testing procedures, and reliable interpretation of results.",
    accent: "green",
  },
  {
    title: "Practical & Economical Solutions",
    description:
      "Recommendations that consider structural safety alongside constructability, durability and project practicality.",
    accent: "blueprint",
  },
  {
    title: "Clear Technical Documentation",
    description:
      "Organized reports, drawings, calculations, observations and recommendations that are easy to act on.",
    accent: "green",
  },
  {
    title: "Client-Focused Service",
    description:
      "We work closely with clients and project teams to provide solutions suited to the specific project.",
    accent: "blueprint",
  },
] as const;

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

            <div className="col-span-12 mt-8 md:col-span-11">
              <p
                className="text-sm uppercase tracking-wide"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
              >
                About Us
              </p>
              <h1 className="mt-4 text-[clamp(2.75rem,6.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                Engineering solutions built on
                <br />
                knowledge, precision &amp; trust.
              </h1>
            </div>

            <div className="col-span-12 mt-14 md:col-span-6 md:mt-16">
              <p className="text-xl leading-relaxed text-[var(--ink)] md:text-2xl">
                Nilima Design Associates is a professional engineering
                consultancy providing reliable structural engineering,
                civil engineering, geotechnical investigation, land
                surveying, non-destructive testing (NDT), structural
                assessment, and building design services.
              </p>
            </div>
          </div>
        </section>

        {/* Approach + who we work with */}
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
                  How we work
                </p>
              </div>

              <div className="md:col-span-7 md:col-start-5">
                <p className="text-lg leading-relaxed text-[var(--ink)] md:text-xl">
                  Our approach combines engineering knowledge, practical
                  site experience, modern testing techniques, and careful
                  technical analysis to deliver solutions that are safe,
                  practical, economical, and compliant with applicable
                  codes and standards.
                </p>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--graphite)]">
                  We work with property owners, developers, contractors,
                  architects, institutions, and other professionals to
                  support projects from initial investigation and
                  planning through design, construction, testing, and
                  structural assessment.
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

      {/* =========================================================
    COMPANY OFFICE
========================================================= */}
<section className="relative pb-24 md:pb-32">
  <div className="page-grid">
    <div className="col-span-12">
      <div className="dimension-line" />
    </div>

    <div className="col-span-12 mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:items-end">
      {/* Section heading */}
      <div className="md:col-span-4">
        <p
          className="text-xs uppercase tracking-wide"
          style={{
            fontFamily: "var(--font-dm-mono)",
            color: "var(--blueprint)",
          }}
        >
          Our Office
        </p>

        <h2 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
          Where ideas
          <br />
          become structures.
        </h2>

        <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--graphite)]">
          Our office brings together the people, technical knowledge and
          collaborative thinking behind every project we undertake.
        </p>
      </div>

      {/* Office photograph */}
      <div className="md:col-span-8">
        <div className="relative aspect-[3/4] w-full border border-[var(--line)]">
          <Image
            src="/images/company/office.jpeg"
            alt="Nilima Design Associates office"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />

          {/* Blueprint corner details */}
          {[
            "left-4 top-4 border-l border-t",
            "right-4 top-4 border-r border-t",
            "left-4 bottom-4 border-l border-b",
            "right-4 bottom-4 border-r border-b",
          ].map((position) => (
            <span
              key={position}
              className={`pointer-events-none absolute h-6 w-6 ${position}`}
              style={{ borderColor: "var(--blueprint)" }}
            />
          ))}

          {/* Technical image label */}
          <div className="absolute bottom-4 left-4 border border-white/30 bg-[var(--navy)]/80 px-3 py-2 backdrop-blur-sm">
            <p
              className="text-[10px] uppercase tracking-[0.16em] text-white/80"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Nilima Design Associates
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* What We Do */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                What we do.
              </h2>
            </div>

            <div className="col-span-12 mt-14">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {whatWeDo.map((item, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[var(--line)] py-4"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0"
                      style={{ backgroundColor: accentVar }}
                    />
                    <span className="text-sm text-[var(--ink)] md:text-base">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Engineering Approach — process flow */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Our engineering approach.
              </h2>
            </div>

            <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
              <p className="text-base leading-relaxed text-[var(--graphite)]">
                Good engineering begins with understanding the site,
                structure, materials, loads, soil conditions, and actual
                project requirements.
              </p>
            </div>

            {/* Process flow */}
            <div className="col-span-12 mt-16 md:mt-20">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-6">
                {approachSteps.map((step, index) => {
                  const accentVar =
                    index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                  const isLast = index === approachSteps.length - 1;
                  return (
                    <div key={step} className="flex items-center gap-2">
                      <div className="border px-4 py-3" style={{ borderColor: accentVar }}>
                        <span
                          className="text-xs uppercase tracking-wide"
                          style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1 text-sm font-medium text-[var(--ink)] md:text-base">
                          {step}
                        </p>
                      </div>
                      {!isLast && (
                        <span className="text-[var(--graphite)]" aria-hidden>
                          →
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-12 mt-16 md:col-span-8 md:mt-20">
              <p className="text-base leading-relaxed text-[var(--graphite)]">
                Every project is approached with attention to technical
                accuracy, documentation, constructability, safety, and
                long-term performance.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-28">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-8">
              <p
                className="text-xs uppercase tracking-wide text-white/50"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Commitment to Quality
              </p>
              <p className="mt-4 text-2xl font-medium leading-snug md:text-3xl">
                Engineering decisions directly affect the safety,
                durability, and value of a building or infrastructure
                project.
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70">
                That is why we emphasize proper investigation, engineering
                calculations, appropriate testing, site observations, and
                clear technical reporting. Our objective is not simply to
                provide a report or drawing, but to provide engineering
                information that helps our clients make confident and
                informed decisions.
              </p>
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
                  href="/about/leadership"
                  className="mt-8 inline-block w-fit border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                >
                  Meet the full team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Nilima Design Associates */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Why choose Nilima
                <br />
                Design Associates?
              </h2>
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-20 md:grid-cols-2">
              {whyChooseUs.map((item) => {
                const accentVar =
                  item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";
                return (
                  <div key={item.title}>
                    <span
                      className="block h-[3px] w-10"
                      style={{ backgroundColor: accentVar }}
                    />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision + Mission */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="border border-[var(--line)] bg-white p-8">
                <span
                  className="block h-[3px] w-10"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
                <p
                  className="mt-5 text-xs uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                >
                  Our Vision
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[var(--ink)]">
                  To become a trusted engineering consultancy known for
                  technical excellence, integrity, accuracy, and practical
                  engineering solutions.
                </p>
              </div>

              <div className="border border-[var(--line)] bg-white p-8">
                <span
                  className="block h-[3px] w-10"
                  style={{ backgroundColor: "var(--green)" }}
                />
                <p
                  className="mt-5 text-xs uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--green)" }}
                >
                  Our Mission
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[var(--ink)]">
                  To provide dependable engineering and technical
                  consultancy that contributes to safe structures, better
                  construction practices, informed decision-making, and
                  long-term value for our clients.
                </p>
              </div>
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