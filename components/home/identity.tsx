"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Identity() {
  const container = useRef<HTMLElement>(null);
  const statement = useRef<HTMLHeadingElement>(null);
  const description = useRef<HTMLDivElement>(null);
  const capabilities = useRef<HTMLDivElement>(null);
  const modelImage = useRef<HTMLDivElement>(null);

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
          modelImage.current,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.5"
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

        {/* Structural model image — floating in the left gap below the headline */}
        <div
          ref={modelImage}
          className="relative col-span-12 mt-20 flex items-center justify-center md:col-span-5 md:mt-32 md:justify-start"
        >
          {/* Blueprint grid backdrop, gives the transparent model something to sit on */}
          <div className="grid-backdrop pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 md:left-[45%]" />

          {/* Soft ambient glow behind the model */}
          <div className="glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />

          <div className="model-float relative aspect-square w-full max-w-md">
            <Image
              src="/images/st.png"
              alt="Structural analysis model, ETABS finite element rendering"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain"
            />

            {/* Scanning line sweep, constrained to the model itself */}
            <div className="scan-line pointer-events-none absolute inset-x-[8%] h-px" />
          </div>
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

      <style jsx>{`
        @keyframes model-float {
          0% {
            transform: translateY(0px) rotate(-1.2deg);
          }
          50% {
            transform: translateY(-18px) rotate(1.2deg);
          }
          100% {
            transform: translateY(0px) rotate(-1.2deg);
          }
        }
        .model-float {
          animation: model-float 7s ease-in-out infinite;
          filter: drop-shadow(0 18px 22px rgba(23, 23, 23, 0.18));
          animation-name: model-float, model-shadow;
          animation-duration: 7s, 7s;
          animation-timing-function: ease-in-out, ease-in-out;
          animation-iteration-count: infinite, infinite;
        }
        @keyframes model-shadow {
          0% {
            filter: drop-shadow(0 14px 16px rgba(23, 23, 23, 0.16));
          }
          50% {
            filter: drop-shadow(0 32px 28px rgba(23, 23, 23, 0.1));
          }
          100% {
            filter: drop-shadow(0 14px 16px rgba(23, 23, 23, 0.16));
          }
        }

        .grid-backdrop {
          background-image: linear-gradient(
              rgba(41, 171, 226, 0.14) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(41, 171, 226, 0.14) 1px,
              transparent 1px
            );
          background-size: 28px 28px;
          mask-image: radial-gradient(
            circle at center,
            black 0%,
            transparent 72%
          );
          -webkit-mask-image: radial-gradient(
            circle at center,
            black 0%,
            transparent 72%
          );
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(0.94);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }
        .glow-pulse {
          background: radial-gradient(
            circle,
            rgba(141, 198, 63, 0.35),
            transparent 70%
          );
          animation: glow-pulse 7s ease-in-out infinite;
        }

        @keyframes scan {
          0% {
            top: 4%;
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          88% {
            opacity: 1;
          }
          100% {
            top: 96%;
            opacity: 0;
          }
        }
        .scan-line {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(41, 171, 226, 0.9),
            transparent
          );
          box-shadow: 0 0 10px rgba(41, 171, 226, 0.7);
          animation: scan 3.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}