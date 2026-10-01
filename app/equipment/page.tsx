"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

gsap.registerPlugin(ScrollTrigger);

type Equipment = {
  number: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  specifications: string[];
  image: string;
};

const equipment: Equipment[] = [
  {
    number: "01",
    category: "CONCRETE TESTING",
    name: "REBOUND HAMMER",
    subtitle: "Concrete Surface Assessment",
    description:
      "Portable non-destructive testing equipment used to assess the surface hardness of concrete and support structural condition assessment.",
    specifications: [
      "Concrete surface testing",
      "Non-destructive testing",
      "Surface hardness assessment",
      "Field inspection",
    ],
    image: "/images/equipment/rebound-hammer.jpeg",
  },

  {
    number: "02",
    category: "CONCRETE TESTING",
    name: "UPV",
    subtitle: "Ultrasonic Pulse Velocity",
    description:
      "Ultrasonic testing equipment used for evaluating concrete quality and identifying variations within structural elements through pulse velocity measurements.",
    specifications: [
      "Ultrasonic testing",
      "Concrete quality assessment",
      "Internal condition evaluation",
      "Non-destructive testing",
    ],
    image: "/images/equipment/upv.jpeg",
  },

  {
    number: "03",
    category: "SURVEY",
    name: "LEICA TOTAL STATION",
    subtitle: "Precision Surveying Equipment",
    description:
      "Precision electronic surveying equipment used for accurate measurement of angles, distances and coordinates during engineering and construction surveys.",
    specifications: [
      "Precision surveying",
      "Angle measurement",
      "Distance measurement",
      "Coordinate collection",
    ],
    image: "/images/equipment/leica-total-station.jpeg",
  },

  {
    number: "04",
    category: "STRUCTURAL TESTING",
    name: "REBAR SCANNER",
    subtitle: "Reinforcement Detection",
    description:
      "Non-destructive scanning equipment used to locate reinforcement within concrete and support assessment of reinforcement arrangement and concrete cover.",
    specifications: [
      "Rebar detection",
      "Concrete scanning",
      "Cover assessment",
      "Structural investigation",
    ],
    image: "/images/equipment/rebar-scanner.jpeg",
  },

  {
    number: "05",
    category: "MEASUREMENT",
    name: "DISTANCE METER",
    subtitle: "Digital Distance Measurement",
    description:
      "Digital distance measurement equipment used for accurate field measurements during structural, architectural and engineering surveys.",
    specifications: [
      "Distance measurement",
      "Site measurement",
      "Field surveying",
      "Dimensional verification",
    ],
    image: "/images/equipment/distancee-meter.jpeg",
  },

  {
    number: "06",
    category: "STRUCTURAL TESTING",
    name: "HALF CELL POTENTIAL",
    subtitle: "Corrosion Assessment",
    description:
      "Electrochemical testing equipment used to assess the likelihood of reinforcement corrosion in reinforced concrete structures.",
    specifications: [
      "Corrosion assessment",
      "Electrochemical testing",
      "RCC investigation",
      "Reinforcement condition",
    ],
    image: "/images/equipment/half-cell-potential.jpeg",
  },

  {
    number: "07",
    category: "SURVEY",
    name: "SOKKIA TOTAL STATION",
    subtitle: "Precision Land Survey",
    description:
      "Electronic surveying equipment used for precise field measurements, construction layout, coordinate collection and engineering surveys.",
    specifications: [
      "Land surveying",
      "Construction layout",
      "Coordinate measurement",
      "Site measurement",
    ],
    image: "/images/equipment/sokkia-total-station.jpeg",
  },

  {
    number: "08",
    category: "STRUCTURAL TESTING",
    name: "STEEL THICKNESS CHECKER",
    subtitle: "Ultrasonic Thickness Measurement",
    description:
      "Thickness measurement equipment used for assessing the thickness of steel and other suitable materials during structural inspection and condition assessment.",
    specifications: [
      "Steel thickness measurement",
      "Ultrasonic inspection",
      "Structural assessment",
      "Material condition testing",
    ],
    image: "/images/equipment/steel-thickness-checker.jpeg",
  },
];

const categories = [
  "ALL",
  "CONCRETE TESTING",
  "STRUCTURAL TESTING",
  "SURVEY",
  "MEASUREMENT",
];

export default function EquipmentPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredEquipment =
    activeCategory === "ALL"
      ? equipment
      : equipment.filter(
          (item) => item.category === activeCategory
        );

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".equipment-hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils
        .toArray<HTMLElement>(".equipment-card")
        .forEach((card) => {
          const image = card.querySelector(".equipment-image");

          gsap.fromTo(
            card,
            {
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );

          if (image) {
            gsap.fromTo(
              image,
              {
                scale: 1.08,
              },
              {
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  once: true,
                },
              }
            );
          }
        });
    }, pageRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-white text-black"
    >
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-black/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="pointer-events-none absolute bottom-0 left-[8%] top-0 hidden w-px bg-black/10 lg:block" />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-24 pt-32 sm:px-10 sm:pt-40 lg:px-16 lg:pb-32">
          <div className="equipment-hero-item mb-10 flex flex-wrap items-center gap-4">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              EQUIPMENT / TECHNICAL INVENTORY
            </span>

            <span className="hidden h-px w-16 bg-black/20 sm:block" />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--aqua)",
              }}
            >
              KOLKATA / INDIA
            </span>
          </div>

          <h1
            className="
              equipment-hero-item
              max-w-[1100px]
              text-[clamp(3.8rem,11vw,11rem)]
              font-bold
              leading-[0.78]
              tracking-[-0.065em]
            "
            style={{
              fontFamily: "var(--font-bricolage)",
            }}
          >
            TOOLS
            <br />
            THAT MEASURE.
          </h1>

          <div className="equipment-hero-item mt-14 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-start gap-4">
                <span
                  className="mt-1 text-[10px] font-bold text-black/30"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  01
                </span>

                <p
                  className="max-w-xl text-sm font-medium leading-7 text-black/65 sm:text-base"
                  style={{
                    fontFamily: "var(--font-bricolage)",
                  }}
                >
                  Precision equipment for structural testing,
                  concrete assessment, surveying, measurement
                  and engineering investigation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:flex lg:justify-end">
              <p
                className="max-w-md text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-black/40"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                FIELD INVESTIGATION
                <br />
                TESTING / MEASUREMENT
                <br />
                STRUCTURAL ENGINEERING
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER
      ===================================================== */}

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1600px] px-6 py-5 sm:px-10 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    border
                    px-4
                    py-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    ${
                      active
                        ? "border-black bg-black text-white"
                        : "border-black/15 bg-white text-black/55 hover:border-black/40 hover:text-black"
                    }
                  `}
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EQUIPMENT LIST
      ===================================================== */}

      <section>
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mb-16 flex items-end justify-between border-b border-black/10 pb-6">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                TECHNICAL INVENTORY
              </p>

              <h2
                className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-6xl"
                style={{
                  fontFamily: "var(--font-bricolage)",
                }}
              >
                FIELD EQUIPMENT.
              </h2>
            </div>

            <span
              className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-black/35 sm:block"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {String(filteredEquipment.length).padStart(2, "0")} ITEMS
            </span>
          </div>

          <div className="space-y-24">
            {filteredEquipment.map((item, index) => (
              <EquipmentCard
                key={item.name}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER STATEMENT
      ===================================================== */}

      <section className="border-t border-black/10">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              ACCURACY / FIELD / ENGINEERING
            </p>

            <h2
              className="
                mt-6
                max-w-5xl
                text-[clamp(3rem,8vw,8rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.06em]
              "
              style={{
                fontFamily: "var(--font-bricolage)",
              }}
            >
              ACCURATE DATA.
              <br />
              BETTER DECISIONS.
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--aqua)]" />

              <span
                className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                NILIMA DESIGN ASSOCIATES
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ===============================================================
   EQUIPMENT CARD
=============================================================== */

function EquipmentCard({
  item,
  index,
}: {
  item: Equipment;
  index: number;
}) {
  return (
    <article className="equipment-card grid gap-8 opacity-0 lg:grid-cols-12 lg:gap-12">
      {/* Image */}

      <div className="lg:col-span-7">
        <div className="group relative aspect-[16/10] overflow-hidden bg-[#e9eeee]">
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          <Image
            src={item.image}
            alt={`${item.name} equipment - Nilima Design Associates`}
            fill
            className="equipment-image object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          <div className="absolute left-5 top-5 z-20">
            <span
              className="bg-white px-3 py-2 text-[9px] font-bold tracking-[0.12em]"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {item.number}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 z-20">
            <span
              className="bg-black px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {item.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-col justify-between lg:col-span-5">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--aqua)]" />

            <span
              className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/40"
              style={{
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              EQUIPMENT / {item.number}
            </span>
          </div>

          <h3
            className="
              text-[clamp(2.8rem,6vw,6rem)]
              font-bold
              leading-[0.8]
              tracking-[-0.06em]
            "
            style={{
              fontFamily: "var(--font-bricolage)",
            }}
          >
            {item.name}
          </h3>

          <p
            className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-black/50"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            {item.subtitle}
          </p>

          <p
            className="mt-7 max-w-lg text-sm font-medium leading-7 text-black/60"
            style={{
              fontFamily: "var(--font-bricolage)",
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Specifications */}

        <div className="mt-10 border-t border-black/10">
          <div className="grid grid-cols-2">
            {item.specifications.map((spec, specIndex) => (
              <div
                key={spec}
                className="border-b border-r border-black/10 px-3 py-4"
              >
                <span
                  className="block text-[8px] font-bold uppercase tracking-[0.1em] text-black/35"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  {String(specIndex + 1).padStart(2, "0")}
                </span>

                <span
                  className="mt-2 block text-[9px] font-bold uppercase leading-4 text-black/70"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}