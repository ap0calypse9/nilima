import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

const REVIEW_URL = "https://g.page/r/CaAYKTwYM0BTEBE/review";
const MAP_DIRECTIONS_URL = "https://maps.app.goo.gl/beitXD1J4pq6HEkk8";

const contacts = [
  { name: "Er. Tapan Jana", phone: "89726 97919" },
  { name: "Er. Koushik Chatterjee", phone: "9735574908" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/nilimadesign?mibextid=ZbWKwL", icon: FaFacebook, accent: "blueprint" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nilimadesign_structuraldesign?stkn=ZW1ocDB5cTZhZzE3",
    icon: FaInstagram,
    accent: "green",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nilima-design-associates-317038271?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedin,
    accent: "blueprint",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--paper)] text-[var(--ink)]">
        {/* Big full-bleed hero photo */}
        <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
          <Image
            src="/images/contact/office-hero.jpeg"
            alt="Nilima Design Associates office"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/30 to-[var(--ink)]/10" />

          {/* Corner crop marks */}
          {[
            "left-6 top-6 border-l border-t",
            "right-6 top-6 border-r border-t",
          ].map((position) => (
            <span
              key={position}
              className={`pointer-events-none absolute z-10 h-6 w-6 ${position} border-white/50`}
            />
          ))}

          <div className="page-grid absolute inset-x-0 bottom-0 pb-14 md:pb-20">
            <div className="col-span-12">
              <p
                className="text-xs uppercase tracking-wide text-white/70"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <Link href="/" className="hover:text-[var(--blueprint)]">
                  Home
                </Link>{" "}
                / <span className="text-white">Contact</span>
              </p>

              <h1 className="mt-4 text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
                Let&apos;s talk.
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
                Reach out for structural consultancy, testing, surveys,
                or anything else your project needs.
              </p>
            </div>
          </div>
        </section>

        {/* Direct contact, given full focus now the form is gone */}
        <section className="relative py-24 md:py-32">
          <div className="page-grid">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <div className="relative border border-[var(--line)] bg-white p-8 md:p-12">
                <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden md:block hatch-blueprint" />

                <p
                  className="text-xs uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                >
                  Direct contact
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <a
                    href="mailto:ndaofficial2023@gmail.com"
                    className="group flex items-center gap-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--blueprint)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(41,171,226,0.12)] transition-all duration-300 group-hover:bg-[var(--blueprint)] group-hover:shadow-md">
                      <Mail
                        className="h-4 w-4 text-[var(--blueprint)] transition-colors duration-300 group-hover:text-white"
                        strokeWidth={1.75}
                      />
                    </span>
                    ndaofficial2023@gmail.com
                  </a>

                  {contacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="group flex items-center gap-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--blueprint)]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(41,171,226,0.12)] transition-all duration-300 group-hover:bg-[var(--blueprint)] group-hover:shadow-md">
                        <Phone
                          className="h-4 w-4 text-[var(--blueprint)] transition-colors duration-300 group-hover:text-white"
                          strokeWidth={1.75}
                        />
                      </span>
                      <span>
                        {contact.phone}{" "}
                        <span className="text-xs text-[var(--graphite)]">
                          — {contact.name}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 border-t border-[var(--line)] pt-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(141,198,63,0.15)]">
                    <MapPin className="h-4 w-4 text-[var(--green)]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                    >
                      Corporate office
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">
                      94, Chak Garia, Pancha Sayar,
                      <br />
                      Kolkata, West Bengal, 700094
                    </p>
                    <a
                      href={MAP_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                    >
                      Get directions
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-8 border-t border-[var(--line)] pt-8">
                  <p
                    className="text-xs uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
                  >
                    Follow us
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;
                      const gradient =
                        social.accent === "blueprint"
                          ? "linear-gradient(135deg, var(--blueprint), #1c7ea6)"
                          : "linear-gradient(135deg, var(--green), #4d8a1f)";
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center gap-2 border border-[var(--line)] px-3 py-5 transition-colors hover:border-[var(--ink)]"
                        >
                          <span
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-lg"
                            style={{ backgroundImage: gradient }}
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-xs font-medium text-[var(--ink)]">
                            {social.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review CTA */}
        <section className="relative mt-4 overflow-hidden bg-[var(--navy)] py-20 text-white md:py-28">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p
                  className="text-xs uppercase tracking-wide text-white/50"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  One review, real impact
                </p>
                <p className="mt-4 text-2xl font-medium leading-snug md:text-4xl">
                  A review from you helps us improve — and gives future
                  clients confidence in our work.
                </p>
              </div>

              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--blueprint)" }}
              >
                Leave a Google review
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}