
"use client";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-[9990] flex flex-col gap-5">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919735574908"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-contact whatsapp-glow group flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-110 hover:shadow-2xl"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.59 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.87 9.87 0 0 1-1.51-5.27c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

      {/* Call */}
      <a
        href="tel:+918972697919"
        aria-label="Call Nilima Design Associates"
        className="floating-contact call-glow group flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[var(--aqua)] text-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-110 hover:shadow-2xl"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-9 w-9 transition-transform duration-500 group-hover:-rotate-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      </a>

      <style jsx>{`
        .floating-contact {
          animation: float 3.5s ease-in-out infinite;
        }

        .whatsapp-glow {
          box-shadow:
            0 0 0 0 rgba(37, 211, 102, 0.55),
            0 8px 30px rgba(37, 211, 102, 0.35);
          animation:
            float 3.5s ease-in-out infinite,
            whatsappPulse 2.5s ease-in-out infinite;
        }

        .call-glow {
          box-shadow:
            0 0 0 0 rgba(41, 171, 226, 0.55),
            0 8px 30px rgba(41, 171, 226, 0.35);
          animation:
            float 3.5s ease-in-out infinite 0.7s,
            callPulse 2.5s ease-in-out infinite 0.7s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes whatsappPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(37, 211, 102, 0.45),
              0 8px 30px rgba(37, 211, 102, 0.3);
          }

          50% {
            box-shadow:
              0 0 0 9px rgba(37, 211, 102, 0),
              0 12px 40px rgba(37, 211, 102, 0.55);
          }
        }

        @keyframes callPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(41, 171, 226, 0.45),
              0 8px 30px rgba(41, 171, 226, 0.3);
          }

          50% {
            box-shadow:
              0 0 0 9px rgba(41, 171, 226, 0),
              0 12px 40px rgba(41, 171, 226, 0.55);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-contact,
          .whatsapp-glow,
          .call-glow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
