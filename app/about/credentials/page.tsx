import Navbar from "@/components/navigation/navbar";

export default function LeadershipPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)] text-[var(--foreground)]">
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
                  ABOUT / 02
                </span>

                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--muted)",
                  }}
                >
                  Leadership
                </span>
              </div>
            </div>

            <div className="col-span-12 mt-24 md:mt-32">
              <h1 className="max-w-6xl text-[clamp(4rem,10vw,12rem)] leading-[0.78] tracking-[-0.06em]">
                PEOPLE
                <br />
                BEHIND THE
                <br />
                <span style={{ color: "var(--aqua)" }}>
                  WORK.
                </span>
              </h1>
            </div>

            <div className="col-span-12 mt-20 md:col-span-5 md:col-start-7 md:mt-32">
              <p className="text-xl leading-relaxed md:text-2xl">
                Engineering is ultimately shaped by the people behind every
                decision, calculation and site investigation.
              </p>

              <p
                className="mt-8 text-sm leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                Leadership profiles, qualifications and professional
                backgrounds will be presented here once the corresponding
                information and approved photographs are provided.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership profiles placeholder */}
        <section className="border-t border-[var(--line)]">
          <div className="page-grid py-28 md:py-40">
            <div className="col-span-12">
              <div className="border-t border-[var(--line)]">
                <div className="grid grid-cols-12 border-b border-[var(--line)] py-8">
                  <span
                    className="col-span-2 text-[10px] tracking-[0.2em]"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: "var(--aqua)",
                    }}
                  >
                    01
                  </span>

                  <span className="col-span-10 text-2xl md:text-4xl">
                    Leadership profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}