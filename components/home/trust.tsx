"use client";

import { useState } from "react";

// Replace with real client quotes when available.
const testimonials = [
  {
    quote:
      "Nilima Design Associates delivered our structural drawings on time, every time. Their site coordination made a difficult foundation problem straightforward.",
    name: "Rajesh Banerjee",
    role: "Project Director, Residential Development",
    accent: "blueprint",
  },
  {
    quote:
      "Their NDT and structural audit report was thorough and easy for our procurement team to act on. Exactly the kind of clarity a government tender needs.",
    name: "Anita Sengupta",
    role: "Executive Engineer, Public Works",
    accent: "green",
  },
  {
    quote:
      "We brought them in for a retrofit that three other consultants had turned down. They found a workable solution within a week.",
    name: "Suman Ghosh",
    role: "Site Manager, Industrial Facility",
    accent: "blueprint",
  },
] as const;

type Comment = {
  id: string;
  name: string;
  message: string;
  timestamp: string;
};

export default function Testimonials() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setComments((prev) => [newComment, ...prev]);
    setName("");
    setMessage("");
  };

  return (
    <section className="relative overflow-hidden bg-[var(--paper)] py-24 md:py-32">
      <div className="page-grid">
        {/* Asymmetric header */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
            What clients say.
          </h2>
        </div>

        <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-3">
          <p className="text-base leading-relaxed text-[var(--graphite)]">
            Feedback from the people who&apos;ve worked with us on site,
            not just in the boardroom.
          </p>
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>

        {/* Floating testimonial cards */}
        <div className="col-span-12 mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
          {testimonials.map((item, index) => {
            const accentVar =
              item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";

            return (
              <div
                key={item.name}
                className="testimonial-float relative"
                style={{ animationDelay: `${index * 0.6}s` }}
              >
                <div className="relative border border-[var(--line)] bg-white p-7">
                  {[
                    "left-3 top-3 border-l border-t",
                    "right-3 top-3 border-r border-t",
                    "left-3 bottom-3 border-l border-b",
                    "right-3 bottom-3 border-r border-b",
                  ].map((position) => (
                    <span
                      key={position}
                      className={`pointer-events-none absolute h-4 w-4 ${position}`}
                      style={{ borderColor: accentVar }}
                    />
                  ))}

                  <span
                    className="block h-[3px] w-10"
                    style={{ backgroundColor: accentVar }}
                  />

                  <p className="mt-5 text-base leading-relaxed text-[var(--ink)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-[var(--line)] pt-4">
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--graphite)]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live comment section */}
        <div className="col-span-12 mt-24 md:mt-32">
          <div className="dimension-line" />

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">
                Leave a note for our team.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--graphite)]">
                Worked with us on a project? Share a quick comment below —
                it appears instantly for anyone viewing this page right
                now.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label
                    htmlFor="comment-name"
                    className="block text-xs uppercase tracking-wide text-[var(--graphite)]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Name
                  </label>
                  <input
                    id="comment-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full border border-[var(--line)] bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--blueprint)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="comment-message"
                    className="block text-xs uppercase tracking-wide text-[var(--graphite)]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border border-[var(--line)] bg-white px-3 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--blueprint)]"
                    placeholder="Share your experience working with us"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--blueprint)" }}
                >
                  Post comment
                </button>
              </form>
            </div>

            {/* Live comment list */}
            <div className="md:col-span-7">
              {comments.length === 0 ? (
                <p className="text-sm italic text-[var(--graphite)]">
                  No comments yet — be the first to share your experience.
                </p>
              ) : (
                <ul className="space-y-6">
                  {comments.map((comment) => (
                    <li
                      key={comment.id}
                      className="comment-in border-b border-[var(--line)] pb-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-[var(--ink)]">
                          {comment.name}
                        </p>
                        <p
                          className="text-[11px] text-[var(--graphite)]"
                          style={{ fontFamily: "var(--font-dm-mono)" }}
                        >
                          {comment.timestamp}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">
                        {comment.message}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonial-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .testimonial-float {
          animation: testimonial-float 6s ease-in-out infinite;
        }

        @keyframes comment-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .comment-in {
          animation: comment-in 0.4s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-float,
          .comment-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}