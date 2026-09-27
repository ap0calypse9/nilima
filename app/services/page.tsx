import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";
import { services, whyChooseUs, keyServiceGroups } from "@/lib/services-data";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--paper)] text-[var(--ink)]">
        {/* Page header */}
        <section className="relative pb-16 pt-40 md:pb-20 md:pt-48">
          <div className="page-grid">
            <div className="col-span-12">
              <p
                className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <Link href="/" className="hover:text-[var(--blueprint)]">
                  Home
                </Link>{" "}
                / <span className="text-[var(--ink)]">Services</span>
              </p>

              <p
                className="mt-6 text-xs uppercase tracking-wide"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
              >
                ISO 9001:2015 Certified
              </p>

              <h1 className="mt-3 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Testing, survey &amp;
                <br />
                structural consultancy.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--graphite)]">
                Non-Destructive Testing, structural assessment, pile
                testing, corrosion investigation, and engineering survey
                services — assessing the condition, strength, integrity,
                durability and performance of existing and newly
                constructed structures without unnecessary damage to
                structural elements.
              </p>
            </div>
          </div>
        </section>

        {/* Quick jump index */}
        <section className="relative">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
              <div className="flex flex-wrap">
                {services.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="px-4 py-4 text-sm font-medium text-[var(--graphite)] transition-colors hover:text-[var(--blueprint)] sm:px-5"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="dimension-line" />
            </div>
          </div>
        </section>

        {/* Service sections */}
        {services.map((item, index) => {
          const accentVar =
            item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";
          const bgClass = index % 2 === 0 ? "" : "bg-[var(--background-alt)]";

          return (
            <section
              key={item.id}
              id={item.id}
              className={`relative scroll-mt-24 py-16 md:py-20 ${bgClass}`}
            >
              <div className="page-grid">
                <div className="col-span-12 grid grid-cols-1 gap-10 md:grid-cols-12">
                  {/* Number + title */}
                  <div className="md:col-span-4">
                    <p
                      className="text-xs tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
                    >
                      {item.number} / 08
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-[var(--ink)] md:text-3xl">
                      {item.title}
                    </h2>
                    <p
                      className="mt-2 text-sm uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--graphite)" }}
                    >
                      {item.subtitle}
                    </p>

                    {item.standard && (
                      <span
                        className="mt-5 inline-block border px-2.5 py-1 text-[11px] tracking-wide text-[var(--graphite)]"
                        style={{ fontFamily: "var(--font-dm-mono)", borderColor: accentVar }}
                      >
                        {item.standard}
                      </span>
                    )}
                  </div>

                  {/* Description + scope */}
                  <div className="md:col-span-8">
                    <p className="text-base leading-relaxed text-[var(--graphite)]">
                      {item.description}
                    </p>

                    {item.applications && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.applications.map((app) => (
                          <span
                            key={app}
                            className="border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--ink)]"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="mt-6 space-y-2">
                      {item.scope.map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-2 text-sm text-[var(--ink)]"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: accentVar }}
                          />
                          {line}
                        </li>
                      ))}
                    </ul>

                    {item.note && (
                      <p className="mt-6 border-l-2 pl-4 text-sm italic leading-relaxed text-[var(--graphite)]" style={{ borderColor: accentVar }}>
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Why choose us */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Why choose Nilima Design Associates?
              </h2>
            </div>

            <div className="col-span-12 mt-14">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => {
                const accentVar = index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <div key={item.title}>
                    <span className="block h-[3px] w-10" style={{ backgroundColor: accentVar }} />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key services summary */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Our key services.
              </h2>
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {keyServiceGroups.map((group, index) => {
                const accentVar = index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <div key={group.title} className="border border-[var(--line)] bg-white p-8">
                    <p
                      className="text-xs uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
                    >
                      {group.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--ink)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-28">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-2xl font-medium leading-snug md:text-4xl">
                  Professional engineering solutions. Accurate testing.
                  Reliable technical documentation.
                </p>
                <p className="mt-3 text-sm text-white/60">
                  ISO 9001:2015 Certified — serving projects Pan-India.
                </p>
              </div>

              <Link
                href="/contact"
                className="shrink-0 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--blueprint)" }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}