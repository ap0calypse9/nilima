import Navbar from "@/components/navigation/navbar";

export default function AboutPage() {
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
                  01
                </span>

                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--muted)",
                  }}
                >
                  About Nilima
                </span>
              </div>
            </div>

            <div className="col-span-12 mt-24 md:col-span-10 md:mt-32">
              <h1 className="text-[clamp(4rem,10vw,12rem)] leading-[0.78] tracking-[-0.06em]">
                ENGINEERING
                <br />
                WITH
                <br />
                <span style={{ color: "var(--aqua)" }}>
                  PURPOSE.
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

        {/* Company */}
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
                rehabilitation, Nilima Design Associates provides end-to-end
                engineering consultancy tailored to project requirements.
              </p>

              <p
                className="mt-10 max-w-2xl text-sm leading-7"
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
                {[
                  "Structural Design",
                  "Foundation Engineering",
                  "Soil Investigation",
                  "Pile Testing",
                  "Land Survey",
                  "Non-Destructive Testing",
                  "Structural Audit",
                  "Rehabilitation",
                ].map((item, index) => (
                  <div
                    key={item}
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
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section>
          <div className="page-grid py-32 md:py-48">
            <div className="col-span-12">
              <p
                className="max-w-5xl text-[clamp(3rem,6vw,7rem)] leading-[0.9]"
                style={{
                  fontFamily: "var(--font-instrument)",
                }}
              >
                Safe structures begin
                <br />
                with better thinking.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}