"use client";

import { useEffect, useState } from "react";

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
    accent: "blueprint",
  },
  {
    quote:
      "We brought them in for a retrofit that three other consultants had turned down. They found a workable solution within a week.",
    name: "Suman Ghosh",
    role: "Site Manager, Industrial Facility",
    accent: "blueprint",
  },
  {
    quote:
      "Pile integrity testing was scheduled around our pour dates without any delay to the contractor. Reporting turnaround was faster than we budgeted for.",
    name: "Debjani Roy",
    role: "Site Engineer, Commercial Complex",
    accent: "blueprint",
  },
  {
    quote:
      "We needed a structural vetting done quickly before a CPWD submission deadline. They turned it around accurately and on time.",
    name: "Amitava Dutta",
    role: "Contractor, CPWD Project",
    accent: "green",
  },
  {
    quote:
      "Their soil investigation report caught a foundation issue our first consultant had missed entirely. Saved us a costly redesign later.",
    name: "Priya Mukherjee",
    role: "Developer, Housing Project",
    accent: "blueprint",
  },
] as const;

type Comment = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export default function Testimonials() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loadComments = async () => {
    try {
      const res = await fetch("/api/comments");
      if (!res.ok) return;
      const data = await res.json();
      setComments(data.comments ?? []);
    } catch {
      // Silently ignore — keeps showing whatever was last loaded
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
    // Poll every 15s so other visitors' comments show up without
    // a manual refresh — not true realtime, but close enough for
    // a low-traffic comments section without adding websockets.
    const interval = setInterval(loadComments, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        const data = await res.json();
        setComments((prev) => [data.comment, ...prev]);
        setName("");
        setMessage("");
      }
    } catch {
      // Could add a visible error state here if you want
    } finally {
      setSubmitting(false);
    }
  };

  const formatTimestamp = (iso: string) =>
    new Date(iso).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

  // duplicated once for a seamless looping marquee
  const marqueeItems = [...testimonials, ...testimonials];

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
      </div>

      {/* Sliding testimonial marquee */}
      <div className="group relative mt-14 w-full overflow-hidden md:mt-16">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--paper)] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--paper)] to-transparent md:w-28" />

        <div className="marquee-track flex w-max items-stretch gap-6 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => {
            const accentVar =
              item.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";

            return (
              <div
                key={`${item.name}-${index}`}
                className="relative w-[320px] shrink-0 md:w-[380px]"
              >
                <div
                  className="relative h-full border border-[var(--line)] border-t-[3px] bg-white p-7"
                  style={{ borderTopColor: accentVar }}
                >
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

                  <p className="mt-2 text-base leading-relaxed text-[var(--ink)]">
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
      </div>

      {/* Live comment section */}
      <div className="page-grid mt-24 md:mt-32">
        <div className="col-span-12">
          <div className="dimension-line" />
        </div>

        <div className="col-span-12 mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
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
                disabled={submitting}
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "var(--blueprint)" }}
              >
                {submitting ? "Posting…" : "Post comment"}
              </button>
            </form>
          </div>

          {/* Live comment list */}
          <div className="md:col-span-7">
            {loading ? (
              <p className="text-sm text-[var(--graphite)]">Loading comments…</p>
            ) : comments.length === 0 ? (
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
                        {formatTimestamp(comment.created_at)}
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
          animation: marquee-scroll 45s linear infinite;
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
          .marquee-track,
          .comment-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}