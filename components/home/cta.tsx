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
  className="
    group
    inline-flex
    items-center
    gap-5
    self-start
    rounded-full
    border
    border-[#070909]
    bg-[#070909]
    px-7
    py-4
    text-sm
    font-bold
    uppercase
    tracking-[0.14em]
    text-white
    transition-all
    duration-300
    hover:bg-transparent
    hover:text-[#070909]
    md:self-end
  "
  style={{
    fontFamily: "var(--font-dm-mono)",
  }}
>
  <span>Contact Nilima</span>

  <span
    className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-[var(--aqua)]
      text-lg
      text-[#070909]
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
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