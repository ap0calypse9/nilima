export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-[var(--foreground)]">
      <div className="page-grid py-28 md:py-40">

        {/* Header */}
        <div className="col-span-12 flex items-center gap-4">
          <span
            className="text-[10px] tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-dm-mono)",
              color: "var(--aqua)",
            }}
          >
            05
          </span>

          <span
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-dm-mono)",
              color: "var(--muted)",
            }}
          >
            Trust / Credentials
          </span>
        </div>

        {/* Main statement */}
        <div className="col-span-12 mt-20 md:col-span-9 md:mt-28">
          <h2 className="text-[clamp(4rem,9vw,10rem)] leading-[0.78] tracking-[-0.06em]">
            ENGINEERING
            <br />
            YOU CAN
            <br />
            <span style={{ color: "var(--aqua)" }}>
              STAND ON.
            </span>
          </h2>
        </div>

        {/* Supporting copy */}
        <div className="col-span-12 mt-16 md:col-span-5 md:col-start-8 md:mt-24">
          <p className="text-xl leading-relaxed md:text-2xl">
            Trusted by builders, developers and property owners for
            engineering solutions spanning new construction, inspection,
            testing and repair.
          </p>

          <p
            className="mt-8 text-sm leading-7"
            style={{
              color: "var(--muted)",
            }}
          >
            Our work combines experienced engineering judgement with
            field investigation, testing and modern analytical tools to
            deliver safe and practical solutions.
          </p>
        </div>

        {/* Credibility grid */}
        <div className="col-span-12 mt-28 border-t border-[var(--line)] md:mt-40">
          <div className="grid grid-cols-12">

            {/* Institutional support */}
            <div className="col-span-12 border-b border-[var(--line)] py-10 md:col-span-6 md:border-b-0 md:border-r md:py-12 md:pr-12">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                Institutional support
              </p>

              <p className="mt-8 max-w-lg text-2xl leading-tight md:text-3xl">
                Technical vetting support from reputed institutions,
                including
                <span className="text-[var(--aqua)]">
                  {" "}
                  Jadavpur University
                </span>{" "}
                and
                <span className="text-[var(--aqua)]">
                  {" "}
                  IIEST.
                </span>
              </p>
            </div>

            {/* Project sectors */}
            <div className="col-span-12 py-10 md:col-span-6 md:py-12 md:pl-12">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--aqua)",
                }}
              >
                Project sectors
              </p>

              <div className="mt-8 grid grid-cols-2">
                {[
                  "Residential",
                  "Commercial",
                  "Industrial",
                  "Infrastructure",
                ].map((sector, index) => (
                  <div
                    key={sector}
                    className="border-b border-[var(--line)] py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="text-[10px]"
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          color: "var(--muted)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg">
                        {sector}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing metrics */}
        <div className="col-span-12 mt-20 md:mt-28">
          <div className="grid grid-cols-2 border-t border-[var(--line)] md:grid-cols-4">

            {[
              "STRUCTURAL",
              "GEOTECHNICAL",
              "TESTING",
              "REHABILITATION",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
              >
                <span
                  className="text-[10px]"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--aqua)",
                  }}
                >
                  0{index + 1}
                </span>

                <p className="mt-4 text-sm uppercase tracking-[0.08em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final statement */}
        <div className="col-span-12 mt-28 md:mt-40">
          <p
            className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95]"
            style={{
              fontFamily: "var(--font-instrument)",
            }}
          >
            From ground investigation
            <br />
            to structural stability.
            <br />
            <span style={{ color: "var(--aqua)" }}>
              One engineering approach.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}