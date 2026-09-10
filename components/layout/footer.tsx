"use client";

const navItems = ["About", "Capabilities", "Projects", "Insights", "Contact"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--navy)] text-white">
      {/* Corner crop marks, same drafting-sheet language as the rest of the site */}
      {[
        "left-6 top-6 border-l border-t",
        "right-6 top-6 border-r border-t",
      ].map((position) => (
        <span
          key={position}
          className={`pointer-events-none absolute z-10 h-6 w-6 ${position} border-white/20`}
        />
      ))}

      <div className="page-grid relative py-16 md:py-24">
        {/* Top */}
        <div className="col-span-12 grid grid-cols-12 gap-y-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-5">
            <p
              className="text-3xl tracking-[-0.04em] md:text-4xl"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              NILIMA
            </p>

            <p
              className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/50"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Design Associates
            </p>

            <span
              className="mt-6 block h-[3px] w-10"
              style={{ backgroundColor: "var(--blueprint)" }}
            />
          </div>

          {/* Office + contact */}
          <div className="col-span-12 md:col-span-4">
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
            >
              Office
            </p>

            <address className="not-italic text-sm leading-7 text-white/60">
              Flat No. 3A, Block 32, 3rd Floor
              <br />
              Nabadiganta, Sonai Road
              <br />
              Kolkata, West Bengal — 700094
              <br />
              India
            </address>

            <div className="mt-5 space-y-2">
              <a
                href="tel:8972697919"
                className="block text-sm text-white/60 transition-colors hover:text-[var(--blueprint)]"
              >
                8972697919
              </a>
              <a
                href="mailto:ndaofficial2023@gmail.com"
                className="block text-sm text-white/60 transition-colors hover:text-[var(--blueprint)]"
              >
                ndaofficial2023@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-12 md:col-span-3">
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
            >
              Navigate
            </p>

            <nav className="flex flex-col items-start gap-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="text-sm text-white/80 transition-colors hover:text-[var(--blueprint)]"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-12 mt-20 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p
              className="text-[9px] uppercase tracking-[0.16em] text-white/40"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              © 2026 Nilima Design Associates
            </p>

            <p
              className="text-[9px] uppercase tracking-[0.16em] text-white/40"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Civil &amp; Structural Engineering
            </p>
          </div>
        </div>

        {/* Large brand mark, with a faint blueprint grid behind it for texture */}
        <div className="relative col-span-12 mt-16 overflow-hidden">
          <div className="footer-grid pointer-events-none absolute inset-0" />
          <p
            className="relative whitespace-nowrap text-[clamp(5rem,17vw,18rem)] leading-[0.7] tracking-[-0.08em] text-white/95"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            NILIMA
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          background-image: linear-gradient(
              rgba(41, 171, 226, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(41, 171, 226, 0.08) 1px,
              transparent 1px
            );
          background-size: 32px 32px;
        }
      `}</style>
    </footer>
  );
}