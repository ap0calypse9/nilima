"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  {
    number: "01",
    title: "ABOUT",
    href: "/about",
    children: [
      { title: "Company", href: "/about/company" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Credentials", href: "/about/credentials" },
    ],
  },
  {
    number: "02",
    title: "CAPABILITIES",
    href: "/capabilities",
    children: [
      { title: "Structural Engineering", href: "/capabilities#structural-engineering" },
      { title: "Foundation Engineering", href: "/capabilities#foundation-engineering" },
      { title: "Soil Investigation", href: "/capabilities#soil-investigation" },
      { title: "Pile Testing", href: "/capabilities#pile-testing" },
      { title: "Land Survey", href: "/capabilities#land-survey" },
      { title: "NDT", href: "/capabilities#non-destructive-testing" },
      { title: "Structural Audit", href: "/capabilities#structural-audit" },
      { title: "Rehabilitation", href: "/capabilities#rehabilitation" },
    ],
  },
  {
    number: "03",
    title: "SERVICES",
    href: "/services",
    children: [
      { title: "Rebound Hammer Test", href: "/services#rebound-hammer-test" },
      { title: "UPV Test", href: "/services#upv-test" },
      { title: "Rebar Scanning", href: "/services#rebar-scanning" },
      { title: "Pile Integrity Test", href: "/services#pile-integrity-test" },
      { title: "Corrosion Assessment", href: "/services#corrosion-assessment" },
      { title: "Structural Health Assessment", href: "/services#structural-health-assessment" },
      { title: "Engineering Survey", href: "/services#engineering-survey" },
      { title: "Pile Testing Services", href: "/services#pile-testing-services" },
    ],
  },
  {
    number: "04",
    title: "PROJECTS",
    href: "/projects",
    children: [
      { title: "All Projects", href: "/projects" },
      { title: "Buildings", href: "/projects?type=Buildings" },
      { title: "Infrastructure", href: "/projects?type=Infrastructure" },
      { title: "Industrial", href: "/projects?type=Industrial" },
    ],
  },
  {
    number: "05",
    title: "EQUIPMENT",
    href: "/equipment",
    children: [
      { title: "PDA", href: "/equipment" },
      { title: "CAPWAP", href: "/equipment" },
      { title: "PIT Equipment", href: "/equipment" },
      { title: "UPV", href: "/equipment" },
      { title: "Rebound Hammer", href: "/equipment" },
      { title: "Rebar Scanner", href: "/equipment" },
      { title: "Total Station", href: "/equipment" },
      { title: "DGPS", href: "/equipment" },
      { title: "Soil Investigation", href: "/equipment" },
    ],
  },
  {
    number: "06",
    title: "INSIGHTS",
    href: "/insights",
  },
  {
    number: "07",
    title: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClose = () => {
    setOpen(false);
    setActiveItem(null);
  };

  const toggleItem = (title: string) => {
    setActiveItem((current) => (current === title ? null : title));
  };

  // Prevent background scrolling while the fullscreen menu is open.
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* FLOATING NAVBAR */}
      <header
        className="
          fixed left-0 top-0 z-50 w-full
          border-b border-[var(--line)]
          bg-[var(--paper)]/95
          px-4 py-4
          backdrop-blur-sm
          sm:px-6 sm:py-5
          md:px-8 md:py-5
          lg:px-[clamp(1.5rem,3vw,4rem)] lg:py-6
        "
      >
        <div className="flex items-center justify-between">
          {/* Enlarged Logo */}
          <Link
            href="/"
            onClick={handleClose}
            aria-label="Nilima Design Associates home"
            className="
              relative
              h-20 w-48
              shrink-0
              transition-transform duration-300
              hover:scale-[1.02]
              sm:h-24 sm:w-56
              md:h-28 md:w-64
              lg:h-28 lg:w-72
            "
          >
            <Image
              src="/images/nda.png"
              alt="Nilima Design Associates"
              fill
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 288px"
              className="object-contain object-left"
            />
          </Link>

          {/* Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            className="
              group flex h-11 w-11 shrink-0
              flex-col items-center justify-center gap-[5px]
              rounded-full bg-[var(--blueprint)]
              shadow-lg ring-4 ring-[var(--blueprint)]/20
              transition-all duration-300
              hover:scale-105 hover:ring-8 active:scale-95
              sm:h-12 sm:w-12
            "
          >
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-3.5 bg-white transition-all duration-300 group-hover:w-5" />
            <span className="block h-[2px] w-5 bg-white" />
          </button>
        </div>
      </header>

      {/* FULLSCREEN NAVIGATION */}
      <div
        className={`
          fixed inset-0 z-[100]
          flex h-[100dvh] flex-col overflow-hidden
          bg-[var(--navy)]
          transition-transform duration-700
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            open
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full"
          }
        `}
        aria-hidden={!open}
      >
        {/* Aqua Edge */}
        <div
          className="
            pointer-events-none absolute right-0 top-0
            h-full w-[2px] bg-[var(--blueprint)]
            sm:w-[3px]
          "
        />

        {/* MENU HEADER */}
        <div
          className="
            flex w-full shrink-0 items-center justify-between
            px-4 py-4
            sm:px-6 sm:py-5
            md:px-8 md:py-6
            lg:px-[clamp(1.5rem,3vw,4rem)] lg:py-7
          "
        >
          {/* Enlarged Fullscreen Logo */}
          <Link
            href="/"
            onClick={handleClose}
            aria-label="Nilima Design Associates home"
            className="
              relative
              h-20 w-48
              shrink-0
              sm:h-24 sm:w-56
              md:h-28 md:w-64
              lg:h-28 lg:w-72
            "
          >
            <Image
              src="/images/nda.png"
              alt="Nilima Design Associates"
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 288px"
              className="object-contain object-left"
            />
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close navigation"
            className="group flex min-h-11 items-center gap-3 px-1 sm:gap-4"
          >
            <span
              className="
                text-[11px] font-bold uppercase tracking-[0.18em]
                text-white sm:text-sm sm:tracking-[0.22em]
              "
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Close
            </span>

            <span className="relative h-6 w-6 sm:w-7">
              <span
                className="
                  absolute left-0 top-1/2
                  h-[2px] w-6 rotate-45 bg-white
                  transition-transform duration-300
                  group-hover:rotate-[35deg] sm:w-7
                "
              />
              <span
                className="
                  absolute left-0 top-1/2
                  h-[2px] w-6 -rotate-45
                  bg-[var(--blueprint)]
                  transition-transform duration-300
                  group-hover:-rotate-[35deg] sm:w-7
                "
              />
            </span>
          </button>
        </div>

        {/* NAVIGATION CONTENT */}
        <div
          className={`
            relative min-h-0 flex-1
            overflow-y-auto overscroll-contain
            px-4 pb-8 pt-2
            sm:px-6 sm:pb-10 sm:pt-4
            md:px-8
            lg:px-[clamp(1.5rem,6vw,6rem)]
            ${
              open ? "delay-300 opacity-100" : "opacity-0"
            }
            transition-opacity duration-500
          `}
        >
          <div
            className="
              mx-auto grid w-full max-w-[1400px]
              grid-cols-12 gap-x-6 py-2
              sm:py-4 lg:min-h-full lg:items-center
            "
          >
            {/* MAIN NAVIGATION */}
            <nav className="col-span-12 lg:col-span-7">
              {menuItems.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isActive = activeItem === item.title;

                return (
                  <div key={item.title}>
                    <div
                      className="group flex w-full items-center border-b border-white/15"
                      onMouseEnter={() => {
                        if (hasChildren) {
                          setActiveItem(item.title);
                        }
                      }}
                    >
                      {/* Main Page Link */}
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="
                          flex min-w-0 flex-1 items-center
                          gap-3 py-3
                          sm:gap-5 sm:py-4
                          md:gap-7 md:py-4
                        "
                      >
                        <span
                          className="
                            w-5 shrink-0 text-[9px]
                            tracking-[0.16em]
                            sm:w-6 sm:text-[10px] sm:tracking-[0.2em]
                          "
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            color: "var(--blueprint)",
                          }}
                        >
                          {item.number}
                        </span>

                        <span
                          className="
                            min-w-0 truncate
                            text-[clamp(1.65rem,8vw,3rem)]
                            leading-[0.9] tracking-[-0.04em]
                            text-white transition-transform duration-500
                            group-hover:translate-x-1
                            sm:text-[clamp(2rem,6vw,3.5rem)]
                            sm:group-hover:translate-x-2
                            lg:text-[clamp(1.8rem,3.8vw,4.25rem)]
                            lg:group-hover:translate-x-3
                          "
                          style={{ fontFamily: "var(--font-bricolage)" }}
                        >
                          {item.title}
                        </span>
                      </Link>

                      {/* Submenu Control */}
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggleItem(item.title)}
                          aria-label={`Toggle ${item.title} submenu`}
                          aria-expanded={isActive}
                          className="
                            flex min-h-11 min-w-11 shrink-0
                            items-center justify-center rounded-full
                            sm:min-h-12 sm:min-w-12
                          "
                        >
                          <span
                            className={`
                              text-xl font-light text-white
                              transition-transform duration-300 sm:text-2xl
                              ${isActive ? "rotate-45" : ""}
                            `}
                          >
                            +
                          </span>
                        </button>
                      )}
                    </div>

                    {/* MOBILE SUBMENU */}
                    {hasChildren && isActive && (
                      <div className="border-b border-white/15 py-3 sm:py-4 lg:hidden">
                        <div className="grid grid-cols-1 gap-1 pl-8 sm:pl-11">
                          {item.children?.map((child, index) => (
                            <Link
                              href={child.href}
                              key={child.title}
                              onClick={handleClose}
                              className="
                                flex min-h-9 items-center gap-3
                                py-1.5 text-left text-[10px]
                                font-bold uppercase tracking-[0.1em]
                                text-white/55 transition-colors
                                hover:text-[var(--blueprint)]
                                sm:text-xs sm:tracking-[0.12em]
                              "
                              style={{ fontFamily: "var(--font-dm-mono)" }}
                            >
                              <span className="text-[9px] text-white/25">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span>{child.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* DESKTOP CONTEXTUAL PANEL */}
            <aside className="col-span-5 hidden lg:block lg:pl-16">
              <div className="sticky top-1/2 -translate-y-1/2">
                {activeItem ? (
                  <div>
                    <p
                      className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em]"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: "var(--blueprint)",
                      }}
                    >
                      {activeItem}
                    </p>

                    <div className="space-y-3">
                      {menuItems
                        .find((item) => item.title === activeItem)
                        ?.children?.map((child, index) => (
                          <Link
                            href={child.href}
                            key={child.title}
                            onClick={handleClose}
                            className="group flex w-full items-center gap-4 text-left"
                          >
                            <span
                              className="text-[10px] text-white/50"
                              style={{ fontFamily: "var(--font-dm-mono)" }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              className="
                                text-sm font-bold uppercase tracking-[0.12em]
                                text-white/60 transition-colors
                                group-hover:text-white
                              "
                            >
                              {child.title}
                            </span>

                            <span
                              className="
                                ml-auto translate-x-[-8px]
                                text-[var(--blueprint)] opacity-0
                                transition-all duration-300
                                group-hover:translate-x-0 group-hover:opacity-100
                              "
                            >
                              →
                            </span>
                          </Link>
                        ))}
                    </div>

                    {menuItems.find((item) => item.title === activeItem)?.href && (
                      <Link
                        href={
                          menuItems.find((item) => item.title === activeItem)!.href
                        }
                        onClick={handleClose}
                        className="
                          mt-10 inline-flex items-center gap-3
                          border-b border-white/20 pb-2
                          text-[10px] font-bold uppercase tracking-[0.18em]
                          text-white transition-colors
                          hover:border-[var(--blueprint)]
                          hover:text-[var(--blueprint)]
                        "
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        Explore {activeItem}
                        <span>↗</span>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="mb-6 h-px w-full bg-white/15" />

                    <p
                      className="max-w-sm text-4xl leading-tight text-white"
                      style={{ fontFamily: "var(--font-instrument)" }}
                    >
                      Engineering with precision.
                    </p>

                    <p
                      className="
                        mt-6 max-w-xs text-[10px] font-bold
                        uppercase leading-relaxed tracking-[0.15em]
                        text-white/50
                      "
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Civil & Structural
                      Engineering
                      <br />
                      Kolkata, India
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* FOOTER METADATA */}
          <div
            className="
              pointer-events-none mt-10 flex items-end justify-between
              border-t border-white/10 pt-5
              sm:mt-12 sm:pt-6
              lg:absolute lg:bottom-7
              lg:left-[clamp(1.5rem,6vw,6rem)]
              lg:right-[clamp(1.5rem,6vw,6rem)]
              lg:mt-0 lg:border-t-0 lg:pt-0
            "
          >
            <p
              className="
                text-[8px] font-bold uppercase leading-relaxed
                tracking-[0.14em] text-white/40
                sm:text-[10px] sm:tracking-[0.18em]
              "
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Civil & Structural Engineering
              <br />
              Kolkata / India
            </p>

            <p
              className="
                text-[8px] font-bold tracking-[0.14em]
                text-white/40 sm:text-[10px] sm:tracking-[0.18em]
              "
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              NDA / 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
