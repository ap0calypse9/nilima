import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--aqua)] text-[#070909]">
      <div className="page-grid min-h-[80vh] py-24 md:min-h-screen md:py-32">

        {/* Section label */}
        <div className="col-span-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              06
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Start a Project
            </span>
          </div>

          <span
            className="hidden text-[10px] uppercase tracking-[0.2em] md:block"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            Kolkata / India
          </span>
        </div>

        {/* Main statement */}
        <div className="col-span-12 mt-24 md:mt-32">
          <h2 className="max-w-6xl text-[clamp(4.5rem,11vw,13rem)] leading-[0.76] tracking-[-0.065em]">
            HAVE A
            <br />
            STRUCTURE
            <br />
            IN MIND?
          </h2>
        </div>

        {/* Bottom area */}
        <div className="col-span-12 mt-20 flex flex-col justify-between gap-12 md:mt-28 md:flex-row md:items-end">
          <div className="max-w-md">
            <p
              className="text-xl leading-relaxed md:text-2xl"
              style={{
                fontFamily: "var(--font-instrument)",
              }}
            >
              Let's build it properly.
            </p>

            <p
              className="mt-5 text-[10px] uppercase leading-relaxed tracking-[0.16em] opacity-60"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Structural engineering
              <br />
              Design / Testing / Consultancy
            </p>
          </div>

          {/* Contact button */}
          <Link
            href="/contact"
            className="group flex items-center gap-6 self-start border-b-2 border-[#070909] pb-4 text-sm uppercase tracking-[0.16em] transition-opacity hover:opacity-60 md:self-end"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            <span>Contact Nilima</span>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>

        {/* Decorative mark */}
        <div className="pointer-events-none absolute -bottom-24 -right-20 text-[18rem] font-bold leading-none tracking-[-0.1em] opacity-[0.06] md:text-[28rem]">
          NDA
        </div>
      </div>
    </section>
  );
}