import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const values = [
  {
    title: "Technical Accuracy",
    description:
      "Every recommendation is grounded in proper investigation and code-based engineering practice, not assumption.",
    accent: "blueprint",
  },
  {
    title: "Clear Reporting",
    description:
      "Findings are documented so clients, architects and contractors can act on them without needing a translator.",
    accent: "green",
  },
  {
    title: "Site-Specific Engineering",
    description:
      "Each project is approached according to its own structural, geotechnical and site requirements — not a template.",
    accent: "blueprint",
  },
  {
    title: "Dependable Support",
    description:
      "We help clients make informed decisions on structural safety, construction quality and existing conditions.",
    accent: "green",
  },
] as const;

const services = [
  "Structural Consultancy and Design",
  "Structural Health Check-up and Assessment",
  "Structural Audit and Condition Assessment",
  "Land and Building Surveys",
  "Topographic Survey",
  "Soil Investigation and Soil Testing",
  "Pile Integrity Test (PIT)",
  "Dynamic Load Test (DLT)",
  "Vertical and Lateral Load Testing",
  "Non-Destructive Testing (NDT)",
  "Concrete Testing and Assessment",
  "Steel Testing",
  "Concrete Mix Design",
  "Structural Drawing Review and Vetting",
  "Engineering Measurement and Quantity Assessment",
  "Technical Inspection and Engineering Consultancy",
];

const projectTypes = [
  "Residential Buildings",
  "Apartment and Housing Projects",
  "Commercial Buildings",
  "Industrial Structures",
  "Government Projects",
  "Institutional Buildings",
  "Infrastructure Projects",
  "Existing Building Assessment and Repair Projects",
];

const contacts = [
  { name: "Er. Koushik Chatterjee", phone: "+91 97355 74908" },
  { name: "Er. Tapan Jana", phone: "+91 89726 97919" },
];

// Add/remove entries as more team photos come in. Drop the actual
// files at /public/images/about/ using these names, or update the
// filenames here to match whatever you save.
const teamImages = [
  "team-1.jpeg",
  "team-2.jpeg",
  "team-3.jpeg",
  "team-4.jpeg",
  "team-5.jpeg",
  "team6.jpeg",
];

export default function CompanyPage() {
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
                / <span className="text-[var(--ink)]">About / Company</span>
              </p>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Who we are.
              </h1>

              <p
                className="mt-4 text-sm uppercase tracking-wide"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
              >
                Civil Engineering &amp; Structural Consultancy
              </p>
            </div>
          </div>
        </section>

        {/* Overview: text + image */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="text-xl leading-relaxed text-[var(--ink)] md:text-2xl">
                  Nilima Design Associates is a professional civil
                  engineering and structural consultancy providing reliable
                  and technically focused engineering services for
                  residential, commercial, industrial, government and
                  infrastructure projects.
                </p>
                <p className="mt-6 text-sm leading-7 text-[var(--graphite)]">
                  We support clients, architects, contractors, developers
                  and project stakeholders with practical engineering
                  solutions from investigation and assessment through
                  design, testing, verification and technical consultancy.
                </p>
              </div>

              <div className="relative md:col-span-6">
                <div className="relative aspect-[4/3] w-full border border-[var(--line)]">
                  <Image
                    src="/images/about/company-overview.jpeg"
                    alt="Nilima Design Associates team on site"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
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
                      style={{ borderColor: "var(--blueprint)" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Engineering Services */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Key engineering services.
              </h2>
            </div>

            <div className="col-span-12 mt-14">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {services.map((service, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <div
                    key={service}
                    className="flex items-center gap-4 border-b border-[var(--line)] py-4"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0"
                      style={{ backgroundColor: accentVar }}
                    />
                    <span className="text-sm text-[var(--ink)] md:text-base">
                      {service}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Our approach.
              </h2>
            </div>

            <div className="col-span-12 mt-8 md:col-span-5 md:mt-3">
              <p className="text-base leading-relaxed text-[var(--graphite)]">
                We focus on technical accuracy, proper investigation,
                code-based engineering practice and clear reporting. Each
                project is approached according to its specific structural,
                geotechnical and site requirements.
              </p>
            </div>

            {/* Vision + Mission */}
            <div className="col-span-12 mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
              <div className="border border-[var(--line)] bg-white p-8">
                <span
                  className="block h-[3px] w-10"
                  style={{ backgroundColor: "var(--blueprint)" }}
                />
                <p
                  className="mt-5 text-xs uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                >
                  Vision
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[var(--ink)]">
                  To be the design engineering partner developers and
                  public agencies trust first — because our numbers hold
                  up on site, not just on paper.
                </p>
              </div>

              <div className="border border-[var(--line)] bg-white p-8">
                <span
                  className="block h-[3px] w-10"
                  style={{ backgroundColor: "var(--green)" }}
                />
                <p
                  className="mt-5 text-xs uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--green)" }}
                >
                  Mission
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[var(--ink)]">
                  Provide dependable engineering support that helps clients
                  make informed decisions about structural safety,
                  construction quality and existing building conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Core values.
              </h2>
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const accentVar =
                  value.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";
                return (
                  <div key={value.title}>
                    <span
                      className="block h-[3px] w-10"
                      style={{ backgroundColor: accentVar }}
                    />
                    <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Our team.
              </h2>
            </div>

            <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
              <p className="text-base leading-relaxed text-[var(--graphite)]">
                On site, in the field, and back at the drawing board —
                the people who make each project happen.
              </p>
            </div>

            <div className="col-span-12 mt-14">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {teamImages.map((file, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <div
                    key={file}
                    className="group relative aspect-square w-full overflow-hidden border border-[var(--line)]"
                  >
                    <Image
                      src={`/images/about/${file}`}
                      alt="Nilima Design Associates team"
                      fill
                      sizes="(max-width: 768px) 33vw, 16vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {[
                      "left-2 top-2 border-l border-t",
                      "right-2 top-2 border-r border-t",
                      "left-2 bottom-2 border-l border-b",
                      "right-2 bottom-2 border-r border-b",
                    ].map((position) => (
                      <span
                        key={position}
                        className={`pointer-events-none absolute h-3.5 w-3.5 ${position}`}
                        style={{ borderColor: accentVar }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects We Serve */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Projects we serve.
              </h2>
            </div>

            <div className="col-span-12 mt-14">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 flex flex-wrap gap-3">
              {projectTypes.map((type, index) => {
                const accentVar =
                  index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                return (
                  <span
                    key={type}
                    className="border px-4 py-2 text-sm text-[var(--ink)]"
                    style={{ borderColor: accentVar }}
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact + cross-links */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-24">
          <div className="page-grid">
            <div className="col-span-12 grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <p
                  className="text-xs uppercase tracking-wide text-white/50"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Get in touch
                </p>
                <p className="mt-3 max-w-md text-2xl font-medium leading-snug md:text-3xl">
                  For structural consultancy, testing, surveys and other
                  engineering requirements.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:ndaofficial2023@gmail.com"
                    className="block text-sm text-white/70 transition-colors hover:text-[var(--blueprint)]"
                  >
                    ndaofficial2023@gmail.com
                  </a>
                  {contacts.map((contact) => (
                    <div key={contact.name} className="flex items-baseline gap-3">
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="text-sm text-white/70 transition-colors hover:text-[var(--blueprint)]"
                      >
                        {contact.phone}
                      </a>
                      <span className="text-xs text-white/40">
                        {contact.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start justify-end gap-4 md:col-span-6 md:items-end">
                <Link
                  href="/about/leadership"
                  className="border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                >
                  Meet leadership
                </Link>
                <Link
                  href="/about/credentials"
                  className="border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                >
                  See credentials
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}