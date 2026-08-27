"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Identity() {
  const container = useRef<HTMLElement>(null);
  const statement = useRef<HTMLHeadingElement>(null);
  const description = useRef<HTMLDivElement>(null);
  const capabilities = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      timeline
        .fromTo(
          statement.current,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          description.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          capabilities.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    {
      scope: container,
    }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden py-32 md:py-48"
      style={{
        backgroundColor: "#f4efe6",
        color: "#171717",
      }}
    >
      <div className="page-grid">
        {/* Section label */}
        <div className="col-span-12 mb-20 md:mb-28">
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "#2f4a3c",
              }}
            >
              01
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "#6f6a5f",
              }}
            >
              Who We Are
            </span>
          </div>
        </div>

        {/* Main statement */}
        <div className="col-span-12 md:col-span-9">
          <h2
            ref={statement}
            className="text-[clamp(3.5rem,8vw,9rem)] leading-[0.82] tracking-[-0.05em]"
            style={{ color: "#171717" }}
          >
            MULTIDISCIPLINARY
            <br />
            STRUCTURAL
            <br />
            ENGINEERING.
          </h2>
        </div>

        {/* Description */}
        <div
          ref={description}
          className="col-span-12 mt-20 md:col-span-5 md:col-start-7 md:mt-32"
        >
          <p
            className="text-xl leading-relaxed md:text-2xl"
            style={{ color: "#171717" }}
          >
            Nilima Design Associates is a multidisciplinary structural
            engineering consultancy delivering precise, safe and
            cost-effective engineering solutions across West Bengal and
            India.
          </p>

          <p
            className="mt-8 text-sm leading-7"
            style={{
              color: "#6f6a5f",
            }}
          >
            From new construction to inspection, testing and rehabilitation,
            we provide end-to-end consultancy tailored to the requirements of
            residential, commercial, industrial and infrastructure projects.
          </p>
        </div>

        {/* Capabilities */}
        <div
          ref={capabilities}
          className="col-span-12 mt-32 border-t pt-8 md:mt-48"
          style={{ borderColor: "rgba(23,23,23,0.12)" }}
        >
          <div className="grid grid-cols-12 gap-y-10">
            <div className="col-span-12 md:col-span-3">
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "#2f4a3c",
                }}
              >
                Core capabilities
              </p>
            </div>

            <div className="col-span-12 md:col-span-9">
              <div
                className="grid grid-cols-1 border-t md:grid-cols-2"
                style={{ borderColor: "rgba(23,23,23,0.12)" }}
              >
                {[
                  "Structural Design",
                  "Foundation Engineering",
                  "Soil Investigation",
                  "Pile Testing",
                  "Land Survey",
                  "Non-Destructive Testing",
                  "Structural Audit",
                  "Rehabilitation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between border-b py-5"
                    style={{ borderColor: "rgba(23,23,23,0.12)" }}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className="text-[10px]"
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          color: "#6f6a5f",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="text-lg tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2 md:text-xl"
                        style={{ color: "#171717" }}
                      >
                        {item}
                      </span>
                    </div>

                    <span
                      className="text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        color: "#2f4a3c",
                      }}
                    >
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="col-span-12 mt-32 md:mt-48">
          <p
            className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95]"
            style={{
              fontFamily: "var(--font-instrument)",
              color: "#171717",
            }}
          >
            Precision is not an outcome.
            <br />
            <span style={{ color: "#2f4a3c" }}>It is the foundation.</span>
          </p>
        </div>
      </div>
    </section>
  );
}