"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    number: "01",
    title: "ABOUT",
    href: "/about",
    children: [
      {
        title: "Company",
        href: "/about/company",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
      },
      {
        title: "Credentials",
        href: "/about/credentials",
      },
    ],
  },

  {
    number: "02",
    title: "CAPABILITIES",
    href: "/capabilities",
    children: [
      {
        title: "Structural Engineering",
        href: "/capabilities#structural-engineering",
      },
      {
        title: "Foundation Engineering",
        href: "/capabilities#foundation-engineering",
      },
      {
        title: "Soil Investigation",
        href: "/capabilities#soil-investigation",
      },
      {
        title: "Pile Testing",
        href: "/capabilities#pile-testing",
      },
      {
        title: "Land Survey",
        href: "/capabilities#land-survey",
      },
      {
        title: "NDT",
        href: "/capabilities#non-destructive-testing",
      },
      {
        title: "Structural Audit",
        href: "/capabilities#structural-audit",
      },
      {
        title: "Rehabilitation",
        href: "/capabilities#rehabilitation",
      },
    ],
  },

  {
    number: "03",
    title: "SERVICES",
    href: "/services",
    children: [
      {
        title: "Rebound Hammer Test",
        href: "/services#rebound-hammer-test",
      },
      {
        title: "UPV Test",
        href: "/services#upv-test",
      },
      {
        title: "Rebar Scanning",
        href: "/services#rebar-scanning",
      },
      {
        title: "Pile Integrity Test",
        href: "/services#pile-integrity-test",
      },
      {
        title: "Corrosion Assessment",
        href: "/services#corrosion-assessment",
      },
      {
        title: "Structural Health Assessment",
        href: "/services#structural-health-assessment",
      },
      {
        title: "Engineering Survey",
        href: "/services#engineering-survey",
      },
      {
        title: "Pile Testing Services",
        href: "/services#pile-testing-services",
      },
    ],
  },

  {
    number: "04",
    title: "PROJECTS",
    href: "/projects",
    children: [
      {
        title: "All Projects",
        href: "/projects",
      },
      {
        title: "Buildings",
        href: "/projects?type=Buildings",
      },
      {
        title: "Infrastructure",
        href: "/projects?type=Infrastructure",
      },
      {
        title: "Industrial",
        href: "/projects?type=Industrial",
      },
    ],
  },

  {
    number: "05",
    title: "EQUIPMENT",
    href: "/equipment",
    children: [
      {
        title: "PDA",
        href: "/equipment",
      },
      {
        title: "CAPWAP",
        href: "/equipment",
      },
      {
        title: "PIT Equipment",
        href: "/equipment",
      },
      {
        title: "UPV",
        href: "/equipment",
      },
      {
        title: "Rebound Hammer",
        href: "/equipment",
      },
      {
        title: "Rebar Scanner",
        href: "/equipment",
      },
      {
        title: "Total Station",
        href: "/equipment",
      },
      {
        title: "DGPS",
        href: "/equipment",
      },
      {
        title: "Soil Investigation",
        href: "/equipment",
      },
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
    setActiveItem((current) =>
      current === title ? null : title
    );
  };

  return (
    <>
      {/* =====================================================
          FLOATING NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          border-[var(--line)]
          bg-[var(--paper)]/95
          px-[clamp(1.25rem,3vw,4rem)]
          py-5
          backdrop-blur-sm
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            onClick={handleClose}
            aria-label="Nilima Design Associates home"
            className="
              relative
              h-20
              w-40
              shrink-0
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          >
            <Image
              src="/images/logo.png"
              alt="Nilima Design Associates"
              fill
              priority
              sizes="160px"
              className="object-contain"
            />
          </Link>

          {/* Menu Trigger */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            className="
              group
              flex
              h-12
              w-12
              shrink-0
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-full
              bg-[var(--blueprint)]
              shadow-lg
              ring-4
              ring-[var(--blueprint)]/20
              transition-all
              duration-300
              hover:scale-105
              hover:ring-8
              active:scale-95
            "
          >
            <span className="block h-[2px] w-5 bg-white transition-all duration-300" />

            <span className="block h-[2px] w-3.5 bg-white transition-all duration-300 group-hover:w-5" />

            <span className="block h-[2px] w-5 bg-white transition-all duration-300" />
          </button>
        </div>
      </header>

      {/* =====================================================
          FULLSCREEN NAVIGATION
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[100]
          flex
          flex-col
          bg-[var(--navy)]
          transition-transform
          duration-700
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            open
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none translate-x-full"
          }
        `}
        aria-hidden={!open}
      >
        {/* Aqua edge */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-full
            w-[3px]
            bg-[var(--blueprint)]
          "
        />

        {/* =================================================
            MENU HEADER
        ================================================= */}

        <div
          className="
            flex
            w-full
            items-center
            justify-between
            px-[clamp(1.25rem,3vw,4rem)]
            py-7
          "
        >
          {/* Logo */}

          <Link
            href="/"
            onClick={handleClose}
            aria-label="Nilima Design Associates home"
            className="
              relative
              h-20
              w-40
              shrink-0
            "
          >
            <Image
              src="/images/logo.png"
              alt="Nilima Design Associates"
              fill
              sizes="160px"
              className="object-contain"
            />
          </Link>

          {/* Close */}

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close navigation"
            className="group flex items-center gap-4"
          >
            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.22em]
                text-white
              "
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Close
            </span>

            <span className="relative h-6 w-7">
              <span
                className="
                  absolute
                  left-0
                  top-1/2
                  h-[2px]
                  w-7
                  rotate-45
                  bg-white
                  transition-transform
                  duration-300
                  group-hover:rotate-[35deg]
                "
              />

              <span
                className="
                  absolute
                  left-0
                  top-1/2
                  h-[2px]
                  w-7
                  -rotate-45
                  bg-[var(--blueprint)]
                  transition-transform
                  duration-300
                  group-hover:-rotate-[35deg]
                "
              />
            </span>
          </button>
        </div>

        {/* =================================================
            NAVIGATION CONTENT
        ================================================= */}

        <div
          className={`
            relative
            flex
            min-h-0
            flex-1
            flex-col
            justify-center
            overflow-y-auto
            px-[clamp(1.5rem,6vw,6rem)]
            transition-opacity
            duration-500
            ${
              open
                ? "delay-300 opacity-100"
                : "opacity-0"
            }
          `}
        >
          <div
            className="
              grid
              w-full
              max-w-[1400px]
              grid-cols-12
              gap-x-6
              py-8
            "
          >
            {/* =================================================
                MAIN NAVIGATION
            ================================================= */}

            <nav className="col-span-12 lg:col-span-7">
              {menuItems.map((item) => {
                const hasChildren =
                  Boolean(item.children?.length);

                const isActive =
                  activeItem === item.title;

                return (
                  <div key={item.title}>
                    {/* Main row */}

                    <div
                      className="
                        group
                        flex
                        w-full
                        items-end
                        justify-between
                        border-b
                        border-white/15
                      "
                      onMouseEnter={() => {
                        if (hasChildren) {
                          setActiveItem(item.title);
                        }
                      }}
                    >
                      {/* Main page link */}

                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="
                          flex
                          flex-1
                          items-end
                          gap-5
                          py-3
                          text-left
                          md:gap-8
                          md:py-4
                        "
                      >
                        {/* Number */}

                        <span
                          className="
                            mb-2
                            text-[10px]
                            tracking-[0.2em]
                          "
                          style={{
                            fontFamily:
                              "var(--font-dm-mono)",
                            color:
                              "var(--blueprint)",
                          }}
                        >
                          {item.number}
                        </span>

                        {/* Title */}

                        <span
                          className="
                            text-[clamp(1.8rem,3.8vw,4.25rem)]
                            leading-[0.9]
                            tracking-[-0.035em]
                            text-white
                            transition-transform
                            duration-500
                            group-hover:translate-x-3
                          "
                          style={{
                            fontFamily:
                              "var(--font-bricolage)",
                          }}
                        >
                          {item.title}
                        </span>
                      </Link>

                      {/* Submenu control */}

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() =>
                            toggleItem(item.title)
                          }
                          aria-label={`Toggle ${item.title} submenu`}
                          aria-expanded={isActive}
                          className="
                            flex
                            h-full
                            items-center
                            px-4
                            py-5
                            md:px-6
                          "
                        >
                          <span
                            className={`
                              text-xl
                              font-light
                              text-white
                              transition-transform
                              duration-300
                              ${
                                isActive
                                  ? "rotate-45"
                                  : ""
                              }
                            `}
                          >
                            +
                          </span>
                        </button>
                      )}
                    </div>

                    {/* =================================================
                        MOBILE SUBMENU
                    ================================================= */}

                    {hasChildren && isActive && (
                      <div
                        className="
                          border-b
                          border-white/15
                          py-4
                          lg:hidden
                        "
                      >
                        <div className="grid grid-cols-1 gap-2 pl-9">
                          {item.children?.map(
                            (child) => (
                              <Link
                                href={child.href}
                                key={child.title}
                                onClick={handleClose}
                                className="
                                  py-1
                                  text-left
                                  text-sm
                                  font-bold
                                  uppercase
                                  tracking-[0.12em]
                                  text-white/60
                                  transition-colors
                                  hover:text-[var(--blueprint)]
                                "
                                style={{
                                  fontFamily:
                                    "var(--font-dm-mono)",
                                }}
                              >
                                {child.title}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP CONTEXTUAL PANEL
            ================================================= */}

            <aside
              className="
                col-span-5
                hidden
                lg:block
                lg:pl-16
              "
            >
              <div className="sticky top-1/2 -translate-y-1/2">
                {activeItem ? (
                  <div>
                    <p
                      className="
                        mb-5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                      "
                      style={{
                        fontFamily:
                          "var(--font-dm-mono)",
                        color:
                          "var(--blueprint)",
                      }}
                    >
                      {activeItem}
                    </p>

                    <div className="space-y-3">
                      {menuItems
                        .find(
                          (item) =>
                            item.title ===
                            activeItem
                        )
                        ?.children?.map(
                          (child, index) => (
                            <Link
                              href={child.href}
                              key={child.title}
                              onClick={handleClose}
                              className="
                                group
                                flex
                                w-full
                                items-center
                                gap-4
                                text-left
                              "
                            >
                              <span
                                className="
                                  text-[10px]
                                  text-white/50
                                "
                                style={{
                                  fontFamily:
                                    "var(--font-dm-mono)",
                                }}
                              >
                                {String(
                                  index + 1
                                ).padStart(2, "0")}
                              </span>

                              <span
                                className="
                                  text-sm
                                  font-bold
                                  uppercase
                                  tracking-[0.12em]
                                  text-white/60
                                  transition-colors
                                  group-hover:text-white
                                "
                              >
                                {child.title}
                              </span>

                              <span
                                className="
                                  ml-auto
                                  translate-x-[-8px]
                                  text-[var(--blueprint)]
                                  opacity-0
                                  transition-all
                                  duration-300
                                  group-hover:translate-x-0
                                  group-hover:opacity-100
                                "
                              >
                                →
                              </span>
                            </Link>
                          )
                        )}
                    </div>

                    {/* Parent page */}

                    {menuItems.find(
                      (item) =>
                        item.title === activeItem
                    )?.href && (
                      <Link
                        href={
                          menuItems.find(
                            (item) =>
                              item.title ===
                              activeItem
                          )!.href
                        }
                        onClick={handleClose}
                        className="
                          mt-10
                          inline-flex
                          items-center
                          gap-3
                          border-b
                          border-white/20
                          pb-2
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-white
                          transition-colors
                          hover:border-[var(--blueprint)]
                          hover:text-[var(--blueprint)]
                        "
                        style={{
                          fontFamily:
                            "var(--font-dm-mono)",
                        }}
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
                      className="
                        max-w-sm
                        text-4xl
                        leading-tight
                        text-white
                      "
                      style={{
                        fontFamily:
                          "var(--font-instrument)",
                      }}
                    >
                      Engineering with
                      precision.
                    </p>

                    <p
                      className="
                        mt-6
                        max-w-xs
                        text-[10px]
                        font-bold
                        uppercase
                        leading-relaxed
                        tracking-[0.15em]
                        text-white/50
                      "
                      style={{
                        fontFamily:
                          "var(--font-dm-mono)",
                      }}
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

          {/* =================================================
              FOOTER METADATA
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-7
              left-[clamp(1.5rem,6vw,6rem)]
              right-[clamp(1.5rem,6vw,6rem)]
              hidden
              items-end
              justify-between
              sm:flex
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/50
              "
              style={{
                fontFamily:
                  "var(--font-dm-mono)",
              }}
            >
              Civil & Structural Engineering
              <br />
              Kolkata / India
            </p>

            <p
              className="
                text-[10px]
                font-bold
                tracking-[0.18em]
                text-white/50
              "
              style={{
                fontFamily:
                  "var(--font-dm-mono)",
              }}
            >
              NDA / 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}