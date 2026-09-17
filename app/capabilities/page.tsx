import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

type Capability = {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string[];
  tools?: string[];
  accent: "blueprint" | "green";
  image: string;
};

const capabilities: Capability[] = [
  {
    id: "structural-engineering",
    number: "01",
    title: "Structural Engineering",
    description:
      "Structural design, analysis and engineering solutions for residential, commercial, industrial and infrastructure projects — grounded in code-based engineering practice, not assumption.",
    scope: [
      "Concept to detailed structural design",
      "Seismic & wind load analysis",
      "IS 456 / IS 1893 code compliance",
    ],
    tools: ["ETABS", "STAAD.PRO", "REVIT"],
    accent: "blueprint",
    image: "/images/capabilities/structural.jpeg",
  },
  {
    id: "foundation-engineering",
    number: "02",
    title: "Foundation Engineering",
    description:
      "Foundation systems designed around what the soil investigation actually shows for the site — not a generic template applied regardless of ground conditions.",
    scope: [
      "Shallow & deep foundation design",
      "Raft, pile and combined footing systems",
      "Foundation review for existing structures",
    ],
    accent: "green",
    image: "/images/capabilities/foundation.jpeg",
  },
  {
    id: "soil-investigation",
    number: "03",
    title: "Soil Investigation",
    description:
      "Soil investigation and testing to establish safe bearing capacity, settlement behaviour and subsurface conditions before design decisions are locked in.",
    scope: [
      "Bore hole investigation & SPT",
      "Laboratory soil testing",
      "Geotechnical reporting",
    ],
    accent: "blueprint",
    image: "/images/capabilities/soil.png",
  },
  {
    id: "pile-testing",
    number: "04",
    title: "Pile Testing",
    description:
      "Pile Integrity Testing, Dynamic Load Testing, and vertical & lateral load testing to verify pile capacity and integrity before and after construction.",
    scope: [
      "Pile Integrity Test (PIT)",
      "Dynamic Load Test (DLT)",
      "Vertical & lateral pile load testing",
    ],
    tools: ["PIT", "DLT", "CAPWAP"],
    accent: "green",
    image: "/images/capabilities/pile-testing.jpeg",
  },
  {
    id: "land-survey",
    number: "05",
    title: "Land Survey",
    description:
      "Land and topographical surveying for accurate planning, engineering and project execution — from boundary verification to full-site contour mapping.",
    scope: [
      "Land & building surveys",
      "Topographic survey",
      "DGPS & layout measurement",
    ],
    accent: "blueprint",
    image: "/images/capabilities/survey.jpeg",
  },
  {
    id: "non-destructive-testing",
    number: "06",
    title: "Non-Destructive Testing",
    description:
      "NDT and material testing to evaluate concrete and steel elements in existing structures without compromising them — critical input for audits and rehabilitation decisions.",
    scope: [
      "Rebound hammer & UPV testing",
      "Concrete & steel bar testing",
      "Crack & distress analysis",
    ],
    tools: ["NDT", "UPV", "Rebound Hammer"],
    accent: "green",
    image: "/images/capabilities/test.jpeg",
  },
  {
    id: "structural-audit",
    number: "07",
    title: "Structural Audit",
    description:
      "Assessment of existing structures to understand condition, stability, distress and safety — the technical basis for repair, retrofit or reassurance.",
    scope: [
      "Structural health check-up",
      "Condition assessment & distress mapping",
      "Safety and stability evaluation",
    ],
    accent: "blueprint",
    image: "/images/capabilities/structural-audit.jpeg",
  },
  {
    id: "rehabilitation",
    number: "08",
    title: "Rehabilitation",
    description:
      "Repair, retrofitting and rehabilitation strategies designed to extend the service life of structures, built on what the audit and testing actually found.",
    scope: [
      "Structural strengthening & jacketing",
      "Crack injection & repair",
      "Seismic retrofit design",
    ],
    accent: "green",
    image: "/images/capabilities/rehab.jpeg",
  },
];

export default function CapabilitiesPage() {
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
                / <span className="text-[var(--ink)]">Capabilities</span>
              </p>

              <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                What we engineer.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--graphite)]">
                Eight disciplines, one continuous practice — from ground
                investigation through design, testing and rehabilitation.
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
                {capabilities.map((item) => (
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

        {/* Capability sections */}
        {capabilities.map((item, index) => {
          const accentVar =
            item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";
          const isEven = index % 2 === 0;
          const bgClass = index % 2 === 0 ? "" : "bg-[var(--background-alt)]";

          return (
            <section
              key={item.id}
              id={item.id}
              className={`relative scroll-mt-24 py-20 md:py-28 ${bgClass}`}
            >
              <div className="page-grid">
                <div
                  className={`col-span-12 grid grid-cols-1 gap-12 md:grid-cols-12 ${
                    isEven ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image, framed */}
                  <div className="relative md:col-span-6">
                    <div className="relative aspect-[4/3] w-full border border-[var(--line)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      {[
                        "left-3 top-3 border-l border-t",
                        "right-3 top-3 border-r border-t",
                        "left-3 bottom-3 border-l border-b",
                        "right-3 bottom-3 border-r border-b",
                      ].map((position) => (
                        <span
                          key={position}
                          className={`pointer-events-none absolute h-5 w-5 ${position}`}
                          style={{ borderColor: accentVar }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6">
                    <p
                      className="text-xs tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: accentVar }}
                    >
                      {item.number} / 08
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--ink)] md:text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-[var(--graphite)]">
                      {item.description}
                    </p>

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

                    {item.tools && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className="border px-2.5 py-1 text-[11px] tracking-wide text-[var(--graphite)]"
                            style={{ fontFamily: "var(--font-dm-mono)", borderColor: accentVar }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-28">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-2xl font-medium leading-snug md:text-4xl">
                Not sure which discipline your project needs? Tell us
                what you&apos;re working on.
              </p>

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