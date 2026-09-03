import Navbar from "@/components/navigation/navbar";

const areas = [
  "Structural Design",
  "Foundation Engineering",
  "Soil Investigation",
  "Pile Testing",
  "Land Survey",
  "Non-Destructive Testing",
  "Structural Audit",
  "Rehabilitation",
];

export default function CompanyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)] text-[var(--foreground)]">
        {/* Hero */}
        <section className="min-h-screen">
          <div className="page-grid py-32 md:py-40">
            <div className="col-span-12">
              <div className="flex items-center gap-4">
                <span
                  className="text-[10px] tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--aqua)",
                  }}
                >
                  ABOUT / 01
                </span>

                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--muted)",
                  }}
                >
                  Company
                </span>
              </div>
            </div>

            <div className="col-span-12 mt-24 md:col-span-10 md:mt-32">
              <h1 className="text-[clamp(4rem,10vw,12rem)] leading-[0.78] tracking-[-0.06em]">
                BUILT
                <br />
                AROUND
                <br />
                <span style={{ color: "var(--aqua)" }}>
                  PRECISION.
                </span>
              </h1>
            </div>

            <div className="col-span-12 mt-20 md:col-span-5 md:col-start-7 md:mt-32">
              <p className="text-xl leading-relaxed md:text-2xl">
                Nilima Design Associates is a multidisciplinary structural
                engineering consultancy delivering precise, safe and
                cost-effective engineering solutions across West Bengal and
                India.
              </p>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="border-t border-[var(--line)]">
          <div className="page-grid py-28 md:py-40">
            <div className="col-span-12 md:col-span-3">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                The practice
              </p>
            </div>

            <div className="col-span-12 mt-12 md:col-span-7 md:col-start-5 md:mt-0">
              <p className="text-2xl leading-tight md:text-4xl">
                From new construction to inspection, testing and
                rehabilitation, Nilima provides end-to-end engineering
                consultancy tailored to project requirements.
              </p>

              <p
                className="mt-10 text-sm leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                The practice works across residential, commercial,
                industrial and infrastructure projects, combining field
                investigation with structural analysis, design and
                engineering judgement.
              </p>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="bg-[var(--aqua)] text-[#070909]">
          <div className="page-grid py-28 md:py-40">
            <div className="col-span-12">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                Areas of practice
              </p>
            </div>

            <div className="col-span-12 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {areas.map((area, index) => (
                  <div
                    key={area}
                    className="border-b border-black/25 py-6"
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className="text-[10px]"
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-2xl tracking-[-0.03em] md:text-4xl">
                        {area}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <div className="page-grid py-28 md:py-40">
            <div className="col-span-12 md:col-span-3">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                Location
              </p>
            </div>

            <div className="col-span-12 mt-10 md:col-span-7 md:col-start-5 md:mt-0">
              <p className="text-3xl leading-tight md:text-5xl">
                Kolkata,
                <br />
                West Bengal,
                <br />
                India.
              </p>

              <p
                className="mt-10 text-sm leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                Flat No. 3A, Block 32, 3rd Floor
                <br />
                Nabadiganta, Sonai Road
                <br />
                Kolkata, West Bengal — 700094
                <br />
                India
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}