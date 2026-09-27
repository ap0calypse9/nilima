"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does Nilima Design Associates provide?",
    answer:
      "Nilima Design Associates provides professional Structural Consultancy, Structural Design, Structural Audit, Structural Health Assessment, Non-Destructive Testing (NDT), Pile Testing, Soil Investigation, Land Survey, Retrofitting and related engineering services.",
  },
  {
    question: "Do you provide structural consultancy services in Kolkata?",
    answer:
      "Yes. We provide structural consultancy and engineering testing services in Kolkata, across West Bengal and at project locations throughout India.",
  },
  {
    question: "What NDT services do you provide?",
    answer:
      "We provide Rebound Hammer Test, Ultrasonic Pulse Velocity (UPV) Test, Rebar Scanning, Ultrasonic Thickness Measurement and other applicable Non-Destructive Testing services.",
  },
  {
    question: "Do you provide structural audit services for existing buildings?",
    answer:
      "Yes. We conduct structural inspections, condition assessments, NDT investigations and structural audits to evaluate the condition and performance of existing buildings.",
  },
  {
    question: "What types of pile testing do you provide?",
    answer:
      "Our pile-testing services include Pile Integrity Test (PIT), Pile Dynamic Load Test/PDA, CAPWAP Analysis, Vertical Load Test, Lateral Load Test and other applicable pile-testing services.",
  },
  {
    question: "Do you provide soil investigation services?",
    answer:
      "Yes. We provide geotechnical investigation services including borehole investigation, Standard Penetration Test (SPT), soil testing and other relevant investigations required for foundation design.",
  },
  {
    question: "Do you undertake RCC and steel structural design?",
    answer:
      "Yes. We undertake RCC and structural steel design for residential, commercial, industrial and other types of structures based on project requirements.",
  },
  {
    question: "Can you inspect cracks, settlement or building tilting?",
    answer:
      "Yes. Our team can investigate structural cracks, settlement, building tilting and other visible signs of distress through site inspection, measurements and appropriate testing.",
  },
  {
    question: "Do you provide structural retrofitting and strengthening services?",
    answer:
      "Yes. Based on structural investigation and assessment, we can recommend suitable repair, strengthening and retrofitting solutions.",
  },
  {
    question: "Which standards do you follow for testing and engineering work?",
    answer:
      "We follow applicable Indian Standards and relevant international standards depending on the nature and scope of the project and testing requirements.",
  },
  {
    question: "Do you provide technical reports after testing?",
    answer:
      "Yes. We provide technical reports containing test results, observations and relevant engineering interpretation according to the agreed scope of work.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "You can contact us through our website enquiry form, phone, WhatsApp or email. Please provide the project location, type of structure, required service and approximate quantity so our team can review the requirement and prepare a quotation.",
  },
  {
    question: "Do you provide services outside Kolkata?",
    answer:
      "Yes. Nilima Design Associates undertakes engineering consultancy, testing and investigation projects across West Bengal and other parts of India, subject to project requirements.",
  },
  {
    question: "How long does a structural audit or testing project take?",
    answer:
      "The duration depends on the size and type of structure, accessibility, number of test locations and scope of work. The expected timeline can be confirmed after reviewing the project requirements.",
  },
  {
    question: "How can I contact Nilima Design Associates?",
    answer:
      "You can contact Nilima Design Associates through our website, phone, WhatsApp or email to discuss your structural consultancy, testing or investigation requirements.",
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="relative bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            Frequently asked
            <br />
            questions.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            Common questions about our services, coverage area, and how
            to get started.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>

        {/* Accordion list */}
        <div className="col-span-12 mt-2 md:col-span-10">
          {faqs.map((item, index) => {
            const isOpen = openIndexes.has(index);
            const accentVar = index % 2 === 0 ? "var(--blueprint)" : "var(--green)";

            return (
              <div key={item.question} className="border-b border-[var(--line)]">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-5 py-6 text-left"
                >
                  <span
                    className="mt-1 shrink-0 text-xs tracking-wide"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: isOpen ? accentVar : "var(--graphite)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="flex-1 text-lg font-medium leading-snug transition-colors md:text-xl"
                    style={{ color: isOpen ? accentVar : "var(--ink)" }}
                  >
                    {item.question}
                  </span>

                  <span
                    className="mt-1 shrink-0 text-xl font-light text-[var(--graphite)] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-6 pl-[2.75rem] text-sm leading-relaxed text-[var(--graphite)] md:pl-[3rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}