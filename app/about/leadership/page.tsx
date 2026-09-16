import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const leadership = [
  { name: "Koushik Chatterjee", role: "Managing Director & Structural Engineer", image: "/images/leadership/koushik.jpeg", featured: true },
  { name: "Er. Tapan Jana", role: "Managing Director", image: "/images/leadership/tapan.jpeg", featured: true },
  { name: "Mr. Koushik Ghatak", role: "Accountant" },
  { name: "Adv. Arpita Chatterjee", role: "Legal Advisor" },
  { name: "Mr. Supratik Manna", role: "Technical Advisor & Senior Manager" },
];

const engineeringTeam = [
  { name: "Er. Supratik Manna", role: "Senior Engineer" },
  { name: "Er. Sreejit Seal", role: "Structural Engineer" },
  { name: "Er. Protik Mondal", role: "Structural Engineer" },
  { name: "Er. M. Adhikari", role: "Technical Advisor" },
  { name: "Er. Sourav Paul", role: "Technical Advisor" },
  { name: "Er. Asim Biswas", role: "Technical Advisor & Manager" },
  { name: "Nabina Shyam", role: "Technical Advisor" },
];

const surveyTeam = [
  { name: "Sr. Surveyor Jyoti", role: "Senior Surveyor" },
  { name: "Subhrajyoti Sikder", role: "Senior Surveyor" },
  { name: "Rakesh Banerjee", role: "Senior Surveyor" },
  { name: "Chayan Roy", role: "Senior Surveyor" },
  { name: "Jit Roy", role: "Survey Assistant" },
  { name: "Santanu Bhowmick", role: "Survey Assistant" },
];

const siteTeam = [
  { name: "Saurav Dandapat", role: "Site Engineer" },
  { name: "Dipto Malik", role: "Site Engineer" },
  { name: "Biswajit Bag", role: "Site Engineer" },
  { name: "Rajrup Das", role: "Site Engineer" },
  { name: "Radheshyam Acharyya", role: "Site Technician" },
  { name: "Subhajit Goswami", role: "Site Technician" },
];

function TeamGroup({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string }[];
}) {
  return (
    <div className="col-span-12 md:col-span-6">
      <p
        className="mb-6 text-xs uppercase tracking-wide"
        style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
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
              className="flex items-center gap-4 border-b border-[var(--line)] py-4"
            >
              <span
                className="h-1.5 w-1.5 shrink-0"
                style={{ backgroundColor: accentVar }}
              />
              <div>
                <p className="text-sm font-medium text-[var(--ink)]">
                  {member.name}
                </p>
                <p className="text-xs text-[var(--graphite)]">{member.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  const featuredLeaders = leadership.filter((person) => person.featured);
  const restOfLeadership = leadership.filter((person) => !person.featured);

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
                <Link href="/about/company" className="hover:text-[var(--blueprint)]">
                  About
                </Link>{" "}
                / <span className="text-[var(--ink)]">Leadership</span>
              </p>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                The people behind
                <br />
                the calculations.
              </h1>
            </div>
          </div>
        </section>

        {/* Featured: Koushik Chatterjee + Tapan Jana, portraits side by side */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-20 md:grid-cols-2">
              {featuredLeaders.map((leader) => (
                <div
                  key={leader.name}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-end"
                >
                  {/* Portrait, framed */}
                  <div className="relative sm:col-span-5">
                    <div className="relative aspect-[3/4] w-full border border-[var(--line)]">
                      <Image
                        src={leader.image!}
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

                  {/* Name + role */}
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
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                    >
                      {leader.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rest of leadership */}
            <div className="col-span-12 mt-20 md:mt-24">
              <p
                className="mb-5 text-xs uppercase tracking-wide"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--graphite)" }}
              >
                Leadership &amp; Management
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {restOfLeadership.map((person, index) => {
                  const accentVar =
                    index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                  return (
                    <div
                      key={person.name}
                      className="flex items-center gap-4 border-b border-[var(--line)] py-4"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: accentVar }}
                      />
                      <div>
                        <p className="text-sm font-medium text-[var(--ink)]">
                          {person.name}
                        </p>
                        <p className="text-xs text-[var(--graphite)]">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Engineering & Site teams */}
        <section className="relative bg-[var(--background-alt)] py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
                Engineering &amp; site team.
              </h2>
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-20">
              <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
                <TeamGroup title="Engineering & Technical Experts" members={engineeringTeam} />
                <TeamGroup title="Survey & Site Team" members={surveyTeam} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <TeamGroup title="Site Engineers & Technicians" members={siteTeam} />
              </div>
            </div>
          </div>
        </section>

        {/* Closing statement */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-24">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-2xl font-medium leading-snug md:text-3xl">
                Together, we bring expertise and precision to every project.
              </p>

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