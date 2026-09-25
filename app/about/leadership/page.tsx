import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

type TeamMember = {
  name: string;
  role: string;
  qualifications?: string[];
  description?: string;
};

const leadership: TeamMember[] = [
  {
    name: "Koushik Chatterjee",
    role: "Founder & CEO",
    qualifications: [
      "B.Tech. in Civil Engineering",
      "PGDM",
      "MIGS",
      "MIE",
      "MICI",
      "Chartered Engineer – India",
      "LBS – KMC",
      "ESE – KMC",
      "GT – KMC",
      "Structural Consultant",
      "BMC Enlisted – LBS & ESE",
      "Geotechnical Engineer",
    ],
    description:
      "Professional experience with Bridge and Roof Company (India) Limited and EMCONS Business Academy as an Assistant Professor, with extensive exposure to Oil & Gas projects, industrial site works, structural engineering, civil engineering, geotechnical engineering and structural consultancy.",
  },
  {
    name: "Er. Tapan Jana",
    role: "Technical Advisor & Managing Director",
    qualifications: ["B.Tech. in Civil Engineering"],
  },
  {
    name: "Er. Supratik Manna",
    role: "Technical Advisor & Senior Manager",
    qualifications: [
      "Diploma in Civil Engineering (DCE)",
      "B.Tech. in Civil Engineering",
    ],
  },
  {
    name: "Mr. Koushik Ghatak",
    role: "Accountant",
  },
  {
    name: "Adv. Arpita Chatterjee",
    role: "Legal Advisor",
  },
];

const engineeringTeam: TeamMember[] = [
  {
    name: "Er. Sreejit Seal",
    role: "Structural Engineer",
  },
  {
    name: "Er. Protik Mondal",
    role: "Structural Engineer",
  },
  {
    name: "Er. M. Adhikari",
    role: "Technical Advisor",
  },
  {
    name: "Er. Sourav Paul",
    role: "Technical Advisor",
    qualifications: ["BE", "ME", "PhD Pursuing"],
  },
  {
    name: "Nabina Shyam",
    role: "Technical Advisor",
    qualifications: ["BE", "ME", "PhD Pursuing"],
  },
  {
    name: "Mr. S. Yadav",
    role: "Structural Engineer",
  },
  {
    name: "Mr. B. Banerjee",
    role: "Senior Technical Advisor",
  },
  {
    name: "Mr. D. Chandra",
    role: "Associate Senior Drafter",
    qualifications: ["Diploma in Civil Engineering"],
  },
  {
    name: "Mr. A. Chaulia",
    role: "Associate Interior Designer",
    qualifications: ["Diploma", "B.Tech.", "PGDM"],
  },
  {
    name: "Mr. S. Naskar",
    role: "Junior Structural Drafter & Pile Test Engineer",
    qualifications: ["Diploma"],
  },
  {
    name: "Mr. Anup Biswas",
    role: "Junior Structural Engineer",
    qualifications: ["B.Tech."],
  },
];

const surveyTeam: TeamMember[] = [
  {
    name: "Sr. Surveyor Jyoti",
    role: "Senior Surveyor",
  },
  {
    name: "Subhrajyoti Sikder",
    role: "Senior Surveyor",
  },
  {
    name: "Rakesh Banerjee",
    role: "Senior Surveyor",
  },
  {
    name: "Chayan Roy",
    role: "Senior Surveyor",
  },
  {
    name: "Jit Roy",
    role: "Survey Assistant",
  },
  {
    name: "Santanu Bhowmick",
    role: "Survey Assistant",
  },
];

const siteTeam: TeamMember[] = [
  {
    name: "Saurav Dandapat",
    role: "Senior Site Engineer",
    qualifications: [
      "Diploma in Civil Engineering",
      "B.Tech. in Civil Engineering",
    ],
  },
  {
    name: "Biswajit Bag",
    role: "Site Technician",
  },
  {
    name: "Subhajit Goswami",
    role: "Site Technician",
  },
];

const geographicExposure = [
  "Saudi Arabia",
  "Dubai, UAE",
  "Qatar",
  "Oman",
  "Chennai",
  "Bangalore",
  "Odisha",
  "West Bengal",
  "Other locations across India and overseas",
];

const professionalCapabilities = [
  "Structural Engineering",
  "Civil Engineering",
  "Geotechnical Engineering",
  "Pile Testing & Foundation Investigation",
  "Structural Consultancy",
  "Surveying & Site Investigation",
  "Structural Drafting",
  "Interior Design",
  "Site Engineering",
  "Non-Destructive Testing (NDT)",
  "Technical Consultancy",
  "Project Support",
  "Oil & Gas Industrial Projects",
  "Infrastructure & Industrial Engineering",
  "Technical Inspection & Testing",
  "Project Planning & Execution Support",
];

function QualificationList({
  qualifications,
}: {
  qualifications?: string[];
}) {
  if (!qualifications?.length) return null;

  return (
    <div className="mt-5">
      <p
        className="mb-3 text-[10px] uppercase tracking-[0.16em] text-[var(--graphite)]"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        Qualifications
      </p>

      <ul className="space-y-1.5">
        {qualifications.map((qualification) => (
          <li
            key={qualification}
            className="flex items-start gap-2 text-xs leading-relaxed text-[var(--graphite)]"
          >
            <span
              className="mt-[6px] h-1 w-1 shrink-0"
              style={{ backgroundColor: "var(--green)" }}
            />
            <span>{qualification}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamGroup({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  return (
    <div className="col-span-12 md:col-span-6">
      <p
        className="mb-6 text-xs uppercase tracking-wide"
        style={{
          fontFamily: "var(--font-dm-mono)",
          color: "var(--blueprint)",
        }}
      >
        {title}
      </p>

      <div className="space-y-0">
        {members.map((member, index) => {
          const accentVar =
            index % 2 === 0 ? "var(--blueprint)" : "var(--green)";

          return (
            <div
              key={member.name}
              className="border-b border-[var(--line)] py-5"
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0"
                  style={{ backgroundColor: accentVar }}
                />

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[var(--ink)]">
                    {member.name}
                  </p>

                  <p className="mt-1 text-xs text-[var(--graphite)]">
                    {member.role}
                  </p>

                  <QualificationList
                    qualifications={member.qualifications}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LeadershipCard({
  leader,
  image,
}: {
  leader: TeamMember;
  image: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-start">
      {/* Portrait */}
      <div className="relative sm:col-span-5">
        <div className="relative aspect-[3/4] w-full border border-[var(--line)]">
          <Image
            src={image}
            alt={leader.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
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

      {/* Information */}
      <div className="sm:col-span-7">
        <span
          className="block h-[3px] w-10"
          style={{ backgroundColor: "var(--blueprint)" }}
        />

        <h2 className="mt-4 text-2xl font-semibold leading-tight text-[var(--ink)] md:text-3xl">
          {leader.name}
        </h2>

        <p
          className="mt-2 text-sm uppercase tracking-wide"
          style={{
            fontFamily: "var(--font-dm-mono)",
            color: "var(--blueprint)",
          }}
        >
          {leader.role}
        </p>

        {leader.description && (
          <p className="mt-6 text-sm leading-7 text-[var(--graphite)]">
            {leader.description}
          </p>
        )}

        <QualificationList qualifications={leader.qualifications} />
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  const featuredLeaders = [
    {
      leader: leadership[0],
      image: "/images/leadership/koushik.jpeg",
    },
    {
      leader: leadership[1],
      image: "/images/leadership/tapan.jpeg",
    },
  ];

  const restOfLeadership = leadership.slice(2);

  return (
    <>
      <Navbar />

      <main className="bg-[var(--paper)] text-[var(--ink)]">
        {/* =========================================================
            PAGE HEADER
        ========================================================= */}
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
                <Link
                  href="/about/company"
                  className="hover:text-[var(--blueprint)]"
                >
                  About
                </Link>{" "}
                / <span className="text-[var(--ink)]">Leadership</span>
              </p>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                The people behind
                <br />
                the calculations.
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--graphite)] md:text-base">
                A multidisciplinary team of engineers, technical specialists,
                surveyors, site professionals and management experts supporting
                structural, civil, geotechnical, infrastructure and industrial
                projects.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURED LEADERS
        ========================================================= */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-16 grid grid-cols-1 gap-x-8 gap-y-20 md:mt-20 md:grid-cols-2">
              {featuredLeaders.map(({ leader, image }) => (
                <LeadershipCard
                  key={leader.name}
                  leader={leader}
                  image={image}
                />
              ))}
            </div>

            {/* =====================================================
                LEADERSHIP & MANAGEMENT
            ===================================================== */}
            <div className="col-span-12 mt-20 md:mt-24">
              <p
                className="mb-5 text-xs uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--graphite)",
                }}
              >
                Leadership &amp; Management
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {restOfLeadership.map((person, index) => {
                  const accentVar =
                    index % 2 === 0
                      ? "var(--blueprint)"
                      : "var(--green)";

                  return (
                    <div
                      key={person.name}
                      className="border-b border-[var(--line)] py-5 md:pr-8"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0"
                          style={{ backgroundColor: accentVar }}
                        />

                        <div>
                          <p className="text-sm font-medium text-[var(--ink)]">
                            {person.name}
                          </p>

                          <p className="mt-1 text-xs text-[var(--graphite)]">
                            {person.role}
                          </p>

                          <QualificationList
                            qualifications={person.qualifications}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                Koushik PROFESSIONAL EXPOSURE
            ===================================================== */}
            <div className="col-span-12 mt-20 md:mt-28">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p
                    className="text-xs uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: "var(--blueprint)",
                    }}
                  >
                    Professional Exposure
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
                    Experience beyond
                    <br />
                    the drawing board.
                  </h2>
                </div>

                <div className="md:col-span-8">
                  <div className="border-t border-[var(--line)]">
                    <div className="grid grid-cols-1 border-b border-[var(--line)] py-6 md:grid-cols-2 md:gap-10">
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-[0.16em] text-[var(--graphite)]"
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                          }}
                        >
                          Professional Experience
                        </p>
                      </div>

                      <div className="mt-4 md:mt-0">
                        <ul className="space-y-3 text-sm leading-6 text-[var(--graphite)]">
                          <li>
                            Professional experience with Bridge and Roof
                            Company (India) Limited
                          </li>
                          <li>
                            Experience with EMCONS Business Academy as an
                            Assistant Professor
                          </li>
                          <li>
                            Extensive experience in Oil &amp; Gas projects
                            and industrial site works
                          </li>
                          <li>
                            Experience across international and national
                            project locations
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 py-6 md:grid-cols-2 md:gap-10">
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-[0.16em] text-[var(--graphite)]"
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                          }}
                        >
                          Project &amp; Geographic Exposure
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-0">
                        {geographicExposure.map((location, index) => (
                          <div
                            key={location}
                            className="flex items-start gap-2 text-sm text-[var(--graphite)]"
                          >
                            <span
                              className="mt-[7px] h-1.5 w-1.5 shrink-0"
                              style={{
                                backgroundColor:
                                  index % 2 === 0
                                    ? "var(--blueprint)"
                                    : "var(--green)",
                              }}
                            />
                            {location}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENGINEERING & SITE TEAMS
        ========================================================= */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <p
                className="mb-4 text-xs uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--blueprint)",
                }}
              >
                Our Professional Team
              </p>

              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Engineering &amp;
                <br />
                site team.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--graphite)]">
                Nilima Design Associates brings together engineering,
                technical, management, survey and site professionals with
                complementary expertise across the project lifecycle.
              </p>
            </div>

            <div className="col-span-12 mt-14 md:mt-20">
              <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
                <TeamGroup
                  title="Engineering & Technical Experts"
                  members={engineeringTeam}
                />

                <TeamGroup
                  title="Survey & Site Team"
                  members={surveyTeam}
                />
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
                <TeamGroup
                  title="Site Engineers & Technicians"
                  members={siteTeam}
                />
              </div>
            </div>

            {/* =====================================================
                MULTIDISCIPLINARY CAPABILITIES
            ===================================================== */}
            <div className="col-span-12 mt-24 md:mt-32">
              <div className="dimension-line" />

              <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p
                    className="text-xs uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: "var(--blueprint)",
                    }}
                  >
                    25+ Professionals
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
                    Multidisciplinary
                    <br />
                    capability.
                  </h3>
                </div>

                <div className="md:col-span-8">
                  <p className="max-w-2xl text-sm leading-7 text-[var(--graphite)]">
                    Our multidisciplinary team combines engineering expertise,
                    field experience, technical consultancy and project
                    execution capabilities to support clients across
                    structural, civil, geotechnical, testing and
                    infrastructure-related projects.
                  </p>

                  <div className="mt-10 grid grid-cols-1 border-t border-[var(--line)] sm:grid-cols-2">
                    {professionalCapabilities.map((capability, index) => (
                      <div
                        key={capability}
                        className="flex items-start gap-3 border-b border-[var(--line)] py-4 sm:pr-6"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0"
                          style={{
                            backgroundColor:
                              index % 2 === 0
                                ? "var(--blueprint)"
                                : "var(--green)",
                          }}
                        />

                        <span className="text-sm leading-6 text-[var(--ink)]">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================= */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-24">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p
                  className="mb-5 text-xs uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: "var(--blueprint)",
                  }}
                >
                  Nilima Design Associates
                </p>

                <p className="max-w-2xl text-2xl font-medium leading-snug md:text-3xl">
                  Together, we bring engineering expertise, field experience
                  and technical precision to every project.
                </p>
              </div>

              <Link
                href="/about/credentials"
                className="shrink-0 border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                See credentials
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}