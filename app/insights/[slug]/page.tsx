import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

// Keep this array in sync with app/insights/page.tsx — add the same
// entry to both files when you add a new case study.
const insights = [
  {
    slug: "garden-reach-rebound-hammer-assessment",
    title: "Structural Condition Assessment Using Rebound Hammer Test",
    subtitle: "G+2 Residential Building — Garden Reach, Kolkata",
    category: "Case Study — NDT",
    standard: "IS 516 (Part 5/Sec 4):2020",
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "Nilima Design Associates was engaged to carry out a structural condition assessment and Non-Destructive Testing (NDT) of a G+2 residential building at Garden Reach, Kolkata.",
          "The assessment focused on accessible columns, beams and lift wall, with the objective of evaluating the surface hardness, relative uniformity and indicative concrete strength characteristics without damaging the structural members.",
        ],
      },
      {
        heading: "Testing Method",
        paragraphs: [
          "A Rebound Hammer Test was conducted on selected structural members. The investigation was performed using a LANGRY HT225-N Rebound Hammer, Instrument ID 240708013, with calibration recorded on 14 November 2025.",
          "The testing procedure followed the requirements of IS 516 (Part 5/Sec 4):2020 — Non-destructive Testing of Concrete — Method of Test Rebound Hammer.",
        ],
        list: [
          "Ground-floor columns and beams",
          "First-floor columns and beams",
          "Second-floor columns and beams",
          "Lift wall",
        ],
      },
      {
        heading: "Key Findings",
        paragraphs: [
          "The tested locations showed estimated compressive-strength values ranging approximately from 21 N/mm² to 39 N/mm². The results demonstrated variation in surface hardness between individual structural members, while the overall rebound response did not indicate a generalized abnormality in the tested areas.",
          "The assessment indicated generally acceptable surface-hardness characteristics at the investigated locations. The report also notes that Rebound Hammer results are indicative and can be influenced by factors such as surface condition, moisture, concrete age, carbonation and aggregate characteristics.",
        ],
      },
      {
        heading: "Professional Assessment",
        paragraphs: [
          "Based on the accessible areas investigated, the tested concrete members exhibited generally acceptable surface-hardness characteristics. No generalized indication of significantly poor concrete surface quality was identified from the Rebound Hammer results alone.",
          "For areas requiring further structural evaluation, the report recommends supplementary investigation such as UPV testing and/or core testing, together with verification of structural drawings, reinforcement details, member dimensions and loading conditions.",
        ],
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "Nilima Design Associates combines field inspection, calibrated NDT equipment and engineering assessment to provide practical information for structural condition evaluation.",
        ],
        list: [
          "Structural condition assessment",
          "Rebound Hammer Testing",
          "Non-Destructive Testing of RCC members",
          "Concrete surface-hardness assessment",
          "Technical reporting",
          "Recommendations for further investigation where required",
        ],
      },
      {
        heading: "Project Outcome",
        paragraphs: [
          "The investigation provided the client with a documented assessment of the tested structural members and indicative concrete-strength characteristics, helping establish a technical basis for deciding whether additional investigation was required.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

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
                /{" "}
                <Link href="/insights" className="hover:text-[var(--blueprint)]">
                  Insights
                </Link>{" "}
                / <span className="text-[var(--ink)]">{insight.title}</span>
              </p>

              <p
                className="mt-6 text-xs uppercase tracking-wide"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
              >
                {insight.category}
              </p>

              <h1 className="mt-3 max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--ink)]">
                {insight.title}
              </h1>

              <p className="mt-4 text-lg text-[var(--graphite)]">
                {insight.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
              {/* Sidebar */}
              <aside className="md:col-span-3">
                <div className="sticky top-28 space-y-6">
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Standard Referenced
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink)]">
                      {insight.standard}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Testing Agency
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink)]">
                      Nilima Design Associates
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                  >
                    Discuss a similar project
                  </Link>
                </div>
              </aside>

              {/* Content */}
              <div className="md:col-span-9">
                {insight.sections.map((section, index) => {
                  const accentVar =
                    index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                  return (
                    <div key={section.heading} className={index > 0 ? "mt-14" : ""}>
                      <span
                        className="block h-[3px] w-10"
                        style={{ backgroundColor: accentVar }}
                      />
                      <h2 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
                        {section.heading}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="mt-4 text-base leading-relaxed text-[var(--graphite)]"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.list && (
                        <ul className="mt-4 space-y-2">
                          {section.list.map((line) => (
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
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Back to insights */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-16 text-white md:py-20">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-xl font-medium leading-snug md:text-2xl">
                More field notes and case studies are on the way.
              </p>

              <Link
                href="/insights"
                className="shrink-0 border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                Back to Insights
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}