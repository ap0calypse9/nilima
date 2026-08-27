export default function Footer() {
  return (
    <footer className="relative bg-[#080909] text-[var(--foreground)]">
      <div className="page-grid py-16 md:py-24">

        {/* Top */}
        <div className="col-span-12 grid grid-cols-12 gap-y-12">

          {/* Brand */}
          <div className="col-span-12 md:col-span-5">
            <p
              className="text-3xl tracking-[-0.04em] md:text-4xl"
              style={{
                fontFamily: "var(--font-bricolage)",
              }}
            >
              NILIMA
            </p>

            <p
              className="mt-3 text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              Design Associates
            </p>
          </div>

          {/* Address */}
          <div className="col-span-12 md:col-span-4">
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--aqua)",
              }}
            >
              Office
            </p>

            <address
              className="not-italic text-sm leading-7"
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
            </address>
          </div>

          {/* Navigation */}
          <div className="col-span-12 md:col-span-3">
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--aqua)",
              }}
            >
              Navigate
            </p>

            <nav className="flex flex-col items-start gap-3">
              {[
                "About",
                "Capabilities",
                "Projects",
                "Expertise",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="text-sm transition-colors hover:text-[var(--aqua)]"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-12 mt-20 border-t border-[var(--line)] pt-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p
              className="text-[9px] uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              © 2026 Nilima Design Associates
            </p>

            <p
              className="text-[9px] uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              Civil & Structural Engineering
            </p>
          </div>
        </div>

        {/* Large brand mark */}
        <div className="col-span-12 mt-16 overflow-hidden">
          <p
            className="whitespace-nowrap text-[clamp(5rem,17vw,18rem)] leading-[0.7] tracking-[-0.08em]"
            style={{
              fontFamily: "var(--font-bricolage)",
            }}
          >
            NILIMA
          </p>
        </div>
      </div>
    </footer>
  );
}