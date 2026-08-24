import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <div className="page-grid min-h-screen content-start pt-28 md:pt-32">
          {/* Technical label */}
          <div className="col-span-12">
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--aqua)",
              }}
            >
              Structural Engineering / Kolkata
            </p>
          </div>

          {/* Main identity */}
          <div className="col-span-12 mt-20 md:col-span-10 md:mt-28">
            <h1 className="text-[clamp(4rem,12vw,12rem)] leading-[0.8] tracking-[-0.04em]">
              NILIMA
            </h1>

            <p
              className="mt-10 text-4xl leading-tight md:text-6xl"
              style={{
                fontFamily: "var(--font-instrument)",
              }}
            >
              Built with precision.
            </p>
          </div>

          {/* Bottom technical information */}
          <div className="col-span-12 mt-32 flex flex-col justify-between gap-8 pb-10 md:col-span-6 md:mt-40 md:flex-row md:items-end">
            <p
              className="max-w-xs text-xs uppercase leading-relaxed tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              Civil & Structural Engineering
              <br />
              Design / Testing / Consultancy
            </p>

            <p
              className="text-xs uppercase tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              2026
            </p>
          </div>
        </div>
      </main>
    </>
  );
}