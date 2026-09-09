"use client";

import { useState } from "react";
import Image from "next/image";

// Trimmed to 10 for the homepage. Full 30-client list can live on a
// dedicated /clients page later if needed.
const clientNames = [
  "Public Health Engineering, Govt. of West Bengal",
  "Indian Railways",
  "Bharat Petroleum Corporation Limited (BPCL)",
  "Irrigation & Waterways Department, Govt. of West Bengal",
  "Exide Industries Limited",
  "Rungta Mines Limited",
  "Nicco Parks & Resorts Limited",
  "Indian Airforce",
  "Kalpataru Projects International Limited",
  "Paradeep Port",
];

// Turns "Bharat Petroleum Corporation Limited (BPCL)" into
// "bharat-petroleum-corporation-limited-bpcl" — drop a matching
// file at /public/images/clients/<slug>.png for each client.
const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const clients = clientNames.map((name) => ({
  name,
  logo: `/images/clients/${slugify(name)}.png`,
}));

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Graceful fallback for clients without a logo file yet
    return (
      <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[var(--ink)] opacity-90 transition-opacity duration-300 hover:opacity-100">
        {name}
      </span>
    );
  }

  return (
    <div className="relative h-24 w-60 shrink-0">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="240px"
        className="object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function TrustedBy() {
  // duplicated once for a seamless looping marquee
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-[var(--paper)] py-20 md:py-28">
      <div className="page-grid">
        {/* Asymmetric heading */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--ink)]">
            Our prestigious clients.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-2">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            We&apos;re honored to work with government bodies, private
            corporations and individuals across industries. Their trust
            inspires us to deliver exceptional service, project after
            project.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>
      </div>

      {/* Marquee */}
      <div className="group relative mt-2 w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--paper)] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--paper)] to-transparent md:w-32" />

        <div className="marquee-track flex w-max items-center gap-16 py-10 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="logo-float flex shrink-0 items-center justify-center"
              style={{ animationDelay: `${(index % clients.length) * 0.3}s` }}
            >
              <ClientLogo name={client.name} logo={client.logo} />
            </div>
          ))}
        </div>
      </div>

      <div className="page-grid mt-2">
        <div className="col-span-12">
          <div className="dimension-line" />
        </div>

        {/* Closing statement + CTA */}
        <div className="col-span-12 mt-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xl font-medium leading-snug text-[var(--ink)] md:text-2xl">
              Join our growing list of satisfied clients.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">
              We look forward to delivering exceptional engineering and
              consulting services for your project.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block shrink-0 border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
          >
            Contact us
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee-scroll 26s linear infinite;
        }

        @keyframes logo-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .logo-float {
          animation: logo-float 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track,
          .logo-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}