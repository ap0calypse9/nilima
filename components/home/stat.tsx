"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Customers Served", accent: "blueprint" },
  { value: 5000, suffix: "+", label: "Projects Completed", accent: "green" },
  { value: 9, suffix: "+", label: "Years of Experience", accent: "blueprint" },
] as const;

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  stat,
  active,
}: {
  stat: (typeof stats)[number];
  active: boolean;
}) {
  const count = useCountUp(stat.value, active);
  const accentVar = stat.accent === "blueprint" ? "var(--blueprint)" : "var(--green)";

  return (
    <div>
      <span className="block h-[3px] w-10" style={{ backgroundColor: accentVar }} />
      <p
        className="mt-5 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.03em]"
        style={{ color: accentVar }}
      >
        {count.toLocaleString("en-IN")}
        {stat.suffix}
      </p>
      <p
        className="mt-3 text-xs uppercase tracking-wide text-[var(--graphite)]"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--paper)] py-20 md:py-28">
      <div className="page-grid">
        <div className="col-span-12">
          <div className="dimension-line" />
        </div>

        <div className="col-span-12 mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>

        <div className="col-span-12 mt-14">
          <div className="dimension-line" />
        </div>
      </div>
    </section>
  );
}