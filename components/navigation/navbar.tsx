"use client";

import Image from "next/image";
import { useState } from "react";

const menuItems = [
  {
    number: "01",
    title: "ABOUT",
    children: ["Company", "Leadership", "Credentials"],
  },
  {
    number: "02",
    title: "CAPABILITIES",
    children: [
      "Structural Engineering",
      "Soil & Foundation",
      "Survey & Mapping",
      "Testing & Investigation",
      "Infrastructure",
    ],
  },
  {
    number: "03",
    title: "PROJECTS",
    children: ["All Projects", "Buildings", "Infrastructure", "Industrial"],
  },
  {
    number: "04",
    title: "EXPERTISE",
    children: ["Engineering", "Testing", "Technology"],
  },
  {
    number: "05",
    title: "INSIGHTS",
  },
  {
    number: "06",
    title: "CONTACT",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClose = () => {
    setOpen(false);
    setActiveItem(null);
  };

  return (
    <>
      {/* Floating Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full px-[clamp(1.25rem,3vw,4rem)] py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Nilima Design Associates home"
            className="group relative h-12 w-16 overflow-hidden"
          >
            <Image
              src="/images/logo.jpg"
              alt="Nilima Design Associates"
              fill
              priority
              sizes="64px"
              className="scale-[2.4] object-contain transition-transform duration-500 group-hover:scale-[2.55]"
            />
          </button>

          {/* Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            className="group flex items-center gap-4"
          >
            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Menu
            </span>

            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-8 bg-[var(--foreground)] transition-all duration-300 group-hover:w-10" />
              <span className="ml-auto block h-px w-5 bg-[var(--aqua)] transition-all duration-300 group-hover:w-8" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation — single flat panel, no overlapping siblings */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col bg-[#070707] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Aqua edge */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[3px] bg-[var(--aqua)]" />

        {/* Menu Header */}
        <div className="flex w-full items-center justify-between px-[clamp(1.25rem,3vw,4rem)] py-7">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close navigation"
            className="relative h-12 w-16 overflow-hidden"
          >
            <Image
              src="/images/logo.jpeg"
              alt=""
              fill
              sizes="64px"
              className="scale-[2.4] object-contain"
            />
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="group flex items-center gap-4"
          >
            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Close
            </span>

            <span className="relative h-6 w-7">
              <span className="absolute left-0 top-1/2 h-px w-7 rotate-45 bg-[var(--foreground)] transition-transform duration-300 group-hover:rotate-[35deg]" />
              <span className="absolute left-0 top-1/2 h-px w-7 -rotate-45 bg-[var(--aqua)] transition-transform duration-300 group-hover:-rotate-[35deg]" />
            </span>
          </button>
        </div>

        {/* Navigation Content */}
        <div
          className={`relative flex flex-1 flex-col justify-center px-[clamp(1.5rem,6vw,6rem)] transition-opacity duration-500 ${
            open ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          <div className="grid w-full max-w-[1400px] grid-cols-12 gap-x-6">
            {/* Main navigation */}
            <nav className="col-span-12 lg:col-span-7">
              {menuItems.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isActive = activeItem === item.title;

                return (
                  <div key={item.title}>
                    <button
                      type="button"
                      onMouseEnter={() =>
                        hasChildren && setActiveItem(item.title)
                      }
                      onFocus={() =>
                        hasChildren && setActiveItem(item.title)
                      }
                      onClick={() =>
                        hasChildren
                          ? setActiveItem(isActive ? null : item.title)
                          : handleClose()
                      }
                      className="group flex w-full items-end justify-between border-b border-[var(--line)] py-3 text-left md:py-4"
                    >
                      <div className="flex items-end gap-5 md:gap-8">
                        <span
                          className="mb-2 text-[10px] tracking-[0.2em]"
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            color: "var(--aqua)",
                          }}
                        >
                          {item.number}
                        </span>

                        <span className="text-[clamp(1.8rem,3.8vw,4.25rem)] leading-[0.9] tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-3">
                          {item.title}
                        </span>
                      </div>

                      {hasChildren && (
                        <span
                          className={`mb-2 text-xl font-light transition-transform duration-300 ${
                            isActive ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      )}
                    </button>

                    {/* Mobile / narrow-screen children */}
                    {hasChildren && isActive && (
                      <div className="border-b border-[var(--line)] py-4 lg:hidden">
                        <div className="grid grid-cols-1 gap-2 pl-9">
                          {item.children?.map((child) => (
                            <button
                              type="button"
                              key={child}
                              onClick={handleClose}
                              className="py-1 text-left text-sm uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--aqua)]"
                              style={{
                                fontFamily: "var(--font-dm-mono)",
                              }}
                            >
                              {child}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop contextual panel */}
            <aside className="col-span-5 hidden lg:block lg:pl-16">
              <div className="sticky top-1/2 -translate-y-1/2">
                {activeItem ? (
                  <div>
                    <p
                      className="mb-5 text-[10px] uppercase tracking-[0.25em]"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: "var(--aqua)",
                      }}
                    >
                      {activeItem}
                    </p>

                    <div className="space-y-3">
                      {menuItems
                        .find((item) => item.title === activeItem)
                        ?.children?.map((child, index) => (
                          <button
                            type="button"
                            key={child}
                            onClick={handleClose}
                            className="group flex w-full items-center gap-4 text-left"
                          >
                            <span
                              className="text-[10px]"
                              style={{
                                fontFamily: "var(--font-dm-mono)",
                                color: "var(--muted)",
                              }}
                            >
                              0{index + 1}
                            </span>

                            <span className="text-sm uppercase tracking-[0.12em] text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
                              {child}
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6 h-px w-full bg-[var(--line)]" />

                    <p
                      className="max-w-sm text-4xl leading-tight"
                      style={{
                        fontFamily: "var(--font-instrument)",
                      }}
                    >
                      Engineering with precision.
                    </p>

                    <p
                      className="mt-6 max-w-xs text-[10px] uppercase leading-relaxed tracking-[0.15em]"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: "var(--muted)",
                      }}
                    >
                      Civil & Structural Engineering
                      <br />
                      Kolkata, India
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* Footer metadata */}
          <div className="absolute bottom-7 left-[clamp(1.5rem,6vw,6rem)] right-[clamp(1.5rem,6vw,6rem)] flex items-end justify-between">
            <p
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
              }}
            >
              Civil & Structural Engineering
              <br />
              Kolkata / India
            </p>

            <p
              className="text-[10px] tracking-[0.18em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--muted)",
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