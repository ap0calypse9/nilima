"use client";

import { useEffect, useState } from "react";

const services = [
  "Structural Design",
  "Structural Audit",
  "Soil Testing",
  "Pile Testing",
  "Pile Integrity Test",
  "Dynamic Load Test / PDA",
  "NDT Testing",
  "Land Survey",
  "Structural Health Check-Up",
  "Retrofitting",
  "Other",
];

const serviceShortNames: Record<string, string> = {
  "Structural Design": "Structural Design",
  "Structural Audit": "Structural Audit",
  "Soil Testing": "Soil / Geotechnical",
  "Pile Testing": "Pile Testing",
  "Pile Integrity Test": "PIT",
  "Dynamic Load Test / PDA": "DLT / PDA",
  "NDT Testing": "NDT Testing",
  "Land Survey": "Land Survey",
  "Structural Health Check-Up": "Health Check",
  Retrofitting: "Retrofitting",
  Other: "Other",
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

export default function SurveyButton() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>(initialForm);

  /*
   * Lock page scrolling while modal is open.
   */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  /*
   * Input changes.
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  /*
   * Service selection.
   */
  const selectService = (service: string) => {
    setForm((current) => ({
      ...current,
      service,
    }));
  };

  /*
   * Close modal.
   */
  const close = () => {
    if (!submitted) {
      setOpen(false);
    }
  };

  /*
   * Submit enquiry to WhatsApp.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.service) {
      return;
    }

    const message = `
*NEW CLIENT ENQUIRY*
━━━━━━━━━━━━━━━━━━

*Name*
${form.name}

*Contact*
${form.phone}

*Email*
${form.email || "Not provided"}

*Service*
${form.service}

*Project Location*
${form.location}

*Requirement*
${form.message || "Not provided"}

━━━━━━━━━━━━━━━━━━
Website enquiry — Nilima Design Associates
    `.trim();

    const whatsappUrl = `https://wa.me/919735574908?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setForm(initialForm);
    }, 1400);
  };

  return (
    <>
      {/* Floating enquiry button */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open project enquiry form"
        className="
          fixed
          bottom-[13.5rem]
          right-6
          z-[9000]
          flex
          h-[60px]
          items-center
          gap-3
          rounded-full
          bg-[var(--aqua)]
          px-5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-black
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
          active:scale-95
        "
        style={{
          fontFamily: "var(--font-dm-mono)",
        }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-30" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black" />
        </span>

        Enquiry
      </button>

      {/* Modal */}

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-black/60
            p-3
            backdrop-blur-[3px]
            sm:p-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              close();
            }
          }}
        >
          {/* Popup */}

          <div
            className="
              relative
              flex
              h-[92dvh]
              max-h-[760px]
              w-[calc(100%-8px)]
              max-w-[520px]
              flex-col
              overflow-hidden
              bg-white
              text-black
              shadow-2xl
              sm:h-[88dvh]
            "
            onMouseDown={(event) => event.stopPropagation()}
          >
            {/* Header */}

            <header
              className="
                relative
                shrink-0
                border-b
                border-black/10
                bg-white
                px-6
                pb-5
                pt-6
                sm:px-8
                sm:pt-7
              "
            >
              {/* Technical grid */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.035]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000 1px, transparent 1px),
                    linear-gradient(to bottom, #000 1px, transparent 1px)
                  `,
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                      "
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: "var(--aqua)",
                      }}
                    >
                      NDA / 001
                    </p>

                    <h2
                      className="
                        mt-2
                        text-3xl
                        font-bold
                        leading-[0.95]
                        tracking-[-0.04em]
                        sm:text-[2.6rem]
                      "
                      style={{
                        fontFamily: "var(--font-bricolage)",
                      }}
                    >
                      Start a project.
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close enquiry"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-black/[0.05]
                      text-xl
                      font-light
                      transition-all
                      hover:rotate-90
                      hover:bg-black/10
                    "
                  >
                    ×
                  </button>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[var(--aqua)]" />

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-black/55
                    "
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    Structural Engineering / Kolkata
                  </p>
                </div>
              </div>
            </header>

            {/* Scrollable content */}

            <div
              className="
                min-h-0
                flex-1
                overflow-y-auto
                overscroll-contain
              "
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {submitted ? (
                /* Success */

                <div className="flex min-h-full items-center justify-center px-7">
                  <div className="w-full max-w-sm">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--aqua)]
                        text-xl
                        font-bold
                      "
                    >
                      ✓
                    </div>

                    <p
                      className="
                        mt-6
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                      "
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        color: "var(--aqua)",
                      }}
                    >
                      Enquiry prepared
                    </p>

                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-bold
                        leading-tight
                        tracking-[-0.04em]
                      "
                      style={{
                        fontFamily: "var(--font-bricolage)",
                      }}
                    >
                      Opening WhatsApp.
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-6 text-black/60">
                      Your project details have been prepared. WhatsApp should
                      now be open with the enquiry message ready to send.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  id="survey-form"
                  onSubmit={handleSubmit}
                  className="px-6 py-6 sm:px-8 sm:py-7"
                >
                  {/* Section 01 */}

                  <section>
                    <SectionLabel number="01" title="Your details" />

                    <div className="mt-5 space-y-4">
                      <Field
                        label="Name"
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field
                          label="Contact number"
                          required
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                        />

                        <Field
                          label="Email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Section 02 */}

                  <section className="mt-7">
                    <SectionLabel number="02" title="What do you need?" />

                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {services.map((service) => {
                        const selected = form.service === service;

                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => selectService(service)}
                            className={`
                              min-h-[52px]
                              border
                              px-3
                              py-3
                              text-left
                              text-[10px]
                              font-bold
                              leading-tight
                              transition-all
                              ${
                                selected
                                  ? "border-black bg-black text-white"
                                  : "border-black/12 bg-black/[0.02] text-black/70 hover:border-black/30 hover:bg-black/[0.04]"
                              }
                            `}
                          >
                            <span
                              className="block"
                              style={{
                                fontFamily: "var(--font-dm-mono)",
                              }}
                            >
                              {serviceShortNames[service]}
                            </span>

                            {selected && (
                              <span className="mt-1 block text-[8px] font-bold uppercase tracking-wider text-[var(--aqua)]">
                                Selected
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {!form.service && (
                      <p
                        className="
                          mt-3
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.08em]
                          text-black/40
                        "
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                        }}
                      >
                        Select one service
                      </p>
                    )}
                  </section>

                  {/* Section 03 */}

                  <section className="mt-7">
                    <SectionLabel number="03" title="Project details" />

                    <div className="mt-5 space-y-4">
                      <Field
                        label="Project location"
                        required
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Kolkata / Hooghly / New Garia..."
                      />

                      <div>
                        <label
                          htmlFor="survey-message"
                          className="
                            mb-2
                            block
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.1em]
                            text-black/70
                          "
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                          }}
                        >
                          Message / requirement
                        </label>

                        <textarea
                          id="survey-message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your project or requirement..."
                          className="
                            w-full
                            resize-none
                            border
                            border-black/15
                            bg-black/[0.015]
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            leading-6
                            outline-none
                            transition-all
                            placeholder:text-black/35
                            focus:border-black
                            focus:bg-white
                          "
                        />
                      </div>
                    </div>
                  </section>

                  <div className="h-5" />
                </form>
              )}
            </div>

            {/* Sticky submit bar */}

            {!submitted && (
              <div
                className="
                  shrink-0
                  border-t
                  border-black/10
                  bg-white
                  px-6
                  py-4
                  sm:px-8
                "
              >
                <button
                  type="submit"
                  form="survey-form"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    bg-black
                    px-5
                    py-4
                    text-left
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-white
                    transition-all
                    hover:bg-[var(--aqua)]
                    hover:text-black
                  "
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  <span>Send enquiry via WhatsApp</span>

                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <div className="mt-2 flex items-center justify-between">
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      text-black/35
                    "
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    Direct WhatsApp enquiry
                  </p>

                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-black/45
                      "
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                      }}
                    >
                      9735574908
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/*
 * Section label
 */

function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="
          text-[9px]
          font-bold
          tracking-[0.12em]
          text-black/35
        "
        style={{
          fontFamily: "var(--font-dm-mono)",
        }}
      >
        {number}
      </span>

      <span className="h-[2px] flex-1 bg-black/10" />

      <h3
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.1em]
          text-black
        "
        style={{
          fontFamily: "var(--font-dm-mono)",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

/*
 * Text field
 */

function Field({
  label,
  required = false,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={`survey-${name}`}
        className="
          mb-2
          block
          text-[10px]
          font-bold
          uppercase
          tracking-[0.1em]
          text-black/70
        "
        style={{
          fontFamily: "var(--font-dm-mono)",
        }}
      >
        {label} {required && "*"}
      </label>

      <input
        id={`survey-${name}`}
        name={name}
        type={type}
        required={required}
        autoComplete={
          name === "name"
            ? "name"
            : name === "phone"
              ? "tel"
              : name === "email"
                ? "email"
                : undefined
        }
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          border
          border-black/15
          bg-black/[0.015]
          px-4
          py-3.5
          text-sm
          font-medium
          outline-none
          transition-all
          placeholder:text-black/35
          focus:border-black
          focus:bg-white
        "
      />
    </div>
  );
}