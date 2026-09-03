import Navbar from "@/components/navigation/navbar";

const capabilities = [
  {
    number: "01",
    title: "Structural Design",
    short: "Design",
    description:
      "Structural engineering solutions for residential, commercial, industrial and infrastructure projects, developed with attention to safety, performance and practicality.",
    scope: [
      "Structural analysis",
      "Building design",
      "Steel structures",
      "Concrete structures",
    ],
  },
  {
    number: "02",
    title: "Foundation Engineering",
    short: "Foundation",
    description:
      "Foundation solutions informed by site conditions, investigation and structural requirements, from conventional systems to deep foundation design.",
    scope: [
      "Foundation design",
      "Deep foundations",
      "Pile systems",
      "Foundation assessment",
    ],
  },
  {
    number: "03",
    title: "Soil Investigation",
    short: "Geotechnical",
    description:
      "Investigation of subsurface conditions to establish the information required for safe and appropriate foundation decisions.",
    scope: [
      "Soil investigation",
      "Site assessment",
      "Subsurface investigation",
      "Foundation recommendations",
    ],
  },
  {
    number: "04",
    title: "Pile Testing",
    short: "Testing",
    description:
      "Pile testing services including dynamic and integrity testing to evaluate pile performance and support foundation decisions.",
    scope: [
      "Dynamic Load Testing",
      "Pile Integrity Testing",
      "CAPWAP analysis",
      "Pile performance assessment",
    ],
  },
  {
    number: "05",
    title: "Land Survey",
    short: "Survey",
    description:
      "Surveying services providing accurate site information for planning, design and construction activities.",
    scope: [
      "Topographical survey",
      "Land survey",
      "Site measurement",
      "Survey documentation",
    ],
  },
  {
    number: "06",
    title: "Non-Destructive Testing",
    short: "NDT",
    description:
      "Investigation and testing techniques used to assess existing structural elements while minimizing disruption to the structure.",
    scope: [
      "Concrete testing",
      "Structural investigation",
      "Material assessment",
      "Existing structure evaluation",
    ],
  },
  {
    number: "07",
    title: "Structural Audit",
    short: "Audit",
    description:
      "Systematic assessment of existing structures to understand condition, structural performance and potential areas requiring intervention.",
    scope: [
      "Structural audit",
      "Building health check-up",
      "Crack analysis",
      "Stability assessment",
    ],
  },
  {
    number: "08",
    title: "Rehabilitation",
    short: "Rehabilitation",
    description:
      "Repair, retrofitting and rehabilitation strategies designed to address structural distress and extend the service life of existing structures.",
    scope: [
      "Structural repair",
      "Retrofitting",
      "Crack remediation",
      "Rehabilitation strategy",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)] text-[var(--foreground)]">

        {/* Hero */}
        <section className="min-h-screen">
          <div className="page-grid py-32 md:py-40">

            <div className="col-span-12 flex items-center gap-4">
              <span
                className="text-[10px] tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                02
              </span>

              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--muted)",
                }}
              >
                Capabilities
              </span>
            </div>

            <div className="col-span-12 mt-24 md:mt-32">
              <h1 className="max-w-6xl text-[clamp(4rem,10vw,12rem)] leading-[0.76] tracking-[-0.06em]">
                WHAT
                <br />
                WE
                <br />
                <span style={{ color: "var(--aqua)" }}>
                  ENGINEER.
                </span>
              </h1>
            </div>

            <div className="col-span-12 mt-20 md:col-span-5 md:col-start-7 md:mt-32">
              <p className="text-xl leading-relaxed md:text-2xl">
                A multidisciplinary engineering practice covering structural
                design, foundations, investigation, testing, surveying and
                rehabilitation.
              </p>
            </div>
          </div>
        </section>

        {/* Capability index */}
        <section className="border-t border-[var(--line)]">
          <div className="page-grid py-24 md:py-32">

            <div className="col-span-12 mb-16 flex items-center justify-between">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                Scope of practice
              </p>

              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--muted)",
                }}
              >
                08 / 08
              </p>
            </div>

            <div className="col-span-12">
              {capabilities.map((item) => (
                <article
                  key={item.number}
                  id={item.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="group border-t border-[var(--line)] py-10 md:py-14"
                >
                  <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">

                    {/* Number */}
                    <div className="col-span-2 md:col-span-1">
                      <span
                        className="text-[10px] tracking-[0.2em]"
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          color: "var(--aqua)",
                        }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="col-span-10 md:col-span-5">
                      <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.85] tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-3">
                        {item.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="col-span-12 md:col-span-4 md:col-start-8">
                      <p className="max-w-lg text-base leading-relaxed md:text-lg">
                        {item.description}
                      </p>

                      <p
                        className="mt-6 text-[10px] uppercase tracking-[0.16em]"
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          color: "var(--muted)",
                        }}
                      >
                        {item.short}
                      </p>
                    </div>

                    {/* Scope */}
                    <div className="col-span-12 md:col-span-5 md:col-start-2">
                      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
                        {item.scope.map((scope) => (
                          <span
                            key={scope}
                            className="text-xs uppercase tracking-[0.08em]"
                            style={{
                              fontFamily: "var(--font-dm-mono)",
                              color: "var(--muted)",
                            }}
                          >
                            {scope}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="col-span-12 flex justify-end md:col-span-1 md:col-start-12">
                      <span
                        className="text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
                        style={{
                          color: "var(--aqua)",
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom border */}
            <div className="col-span-12 border-t border-[var(--line)]" />
          </div>
        </section>

        {/* Engineering approach */}
        <section className="bg-[var(--aqua)] text-[#070909]">
          <div className="page-grid py-28 md:py-40">

            <div className="col-span-12 md:col-span-3">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                Our approach
              </p>
            </div>

            <div className="col-span-12 mt-12 md:col-span-8 md:col-start-5 md:mt-0">
              <p
                className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em]"
                style={{
                  fontFamily: "var(--font-instrument)",
                }}
              >
                Investigation before assumption.
                <br />
                Analysis before decision.
                <br />
                Engineering before compromise.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="page-grid py-32 md:py-48">

            <div className="col-span-12 md:col-span-8">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                Have a project?
              </p>

              <h2 className="mt-8 text-[clamp(3.5rem,7vw,8rem)] leading-[0.8] tracking-[-0.06em]">
                LET&apos;S
                <br />
                ENGINEER
                <br />
                IT.
              </h2>
            </div>

            <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-32">
              <p
                className="text-sm leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                Tell us about your project, site or structural requirement.
                We can discuss the appropriate engineering approach.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-4 border-b border-[var(--line)] pb-3 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-[var(--aqua)] hover:text-[var(--aqua)]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                Contact Nilima
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}