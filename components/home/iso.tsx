import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function IsoStripe() {
  return (
    <section className="relative border-y border-[var(--line)] bg-[var(--background-alt)]">
      <div className="page-grid">
        <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(41,171,226,0.14)" }}
            >
              <ShieldCheck className="h-4 w-4" style={{ color: "var(--blueprint)" }} strokeWidth={1.75} />
            </span>

            <p className="text-sm text-[var(--ink)]">
              <span className="font-semibold">ISO Certified</span>{" "}
              <span className="text-[var(--graphite)]">
                — quality management systems verified for structural and
                civil engineering practice.
              </span>
            </p>
          </div>

          <Link
            href="/about/credentials"
            className="shrink-0 border-b border-[var(--ink)] pb-0.5 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
          >
            View credentials
          </Link>
        </div>
      </div>
    </section>
  );
}