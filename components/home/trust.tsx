
"use client";

const testimonials = [
  {
    quote:
      "Nilima Design Associates delivered our structural drawings on time, every time. Their site coordination made a difficult foundation problem straightforward.",
    name: "Rajesh Banerjee",
    role: "Project Director, Residential Development",
    accent: "blueprint",
  },
  {
    quote:
      "Their NDT and structural audit report was thorough and easy for our procurement team to act on. Exactly the kind of clarity a government tender needs.",
    name: "Anita Sengupta",
    role: "Executive Engineer, Public Works",
    accent: "blueprint",
  },
  {
    quote:
      "We brought them in for a retrofit that three other consultants had turned down. They found a workable solution within a week.",
    name: "Suman Ghosh",
    role: "Site Manager, Industrial Facility",
    accent: "blueprint",
  },
  {
    quote:
      "Pile integrity testing was scheduled around our pour dates without any delay to the contractor. Reporting turnaround was faster than we budgeted for.",
    name: "Debjani Roy",
    role: "Site Engineer, Commercial Complex",
    accent: "blueprint",
  },
  {
    quote:
      "We needed a structural vetting done quickly before a CPWD submission deadline. They turned it around accurately and on time.",
    name: "Amitava Dutta",
    role: "Contractor, CPWD Project",
    accent: "green",
  },
  {
    quote:
      "Their soil investigation report caught a foundation issue our first consultant had missed entirely. Saved us a costly redesign later.",
    name: "Priya Mukherjee",
    role: "Developer, Housing Project",
    accent: "blueprint",
  },
] as const;

export default function Testimonials() {
  // Duplicated once for a seamless looping marquee.
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            What clients say.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            Feedback from the people who&apos;ve worked with us on site,
            not just in the boardroom.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>
      </div>

      {/* Sliding testimonial marquee */}
      <div className="group relative mt-14 w-full overflow-hidden md:mt-16">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--paper)] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--paper)] to-transparent md:w-28" />

        <div className="marquee-track flex w-max items-stretch gap-6 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => {
            const accentVar =
              item.accent === "blueprint"
                ? "var(--blueprint)"
                : "var(--green)";

            return (
              <div
                key={`${item.name}-${index}`}
                className="relative w-[320px] shrink-0 md:w-[380px]"
              >
                <div
                  className="relative h-full border border-[var(--line)] border-t-[3px] bg-white p-7"
                  style={{ borderTopColor: accentVar }}
                >
                  {[
                    "left-3 top-3 border-l border-t",
                    "right-3 top-3 border-r border-t",
                    "left-3 bottom-3 border-l border-b",
                    "right-3 bottom-3 border-r border-b",
                  ].map((position) => (
                    <span
                      key={position}
                      className={`pointer-events-none absolute h-4 w-4 ${position}`}
                      style={{ borderColor: accentVar }}
                    />
                  ))}

                  <p className="mt-2 text-base leading-relaxed text-[var(--ink)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-[var(--line)] pt-4">
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--graphite)]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee-scroll 45s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
