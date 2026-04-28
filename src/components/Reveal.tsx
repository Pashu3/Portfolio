"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already on screen at mount, reveal now (don't wait for IO).
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyInView) {
      const t = window.setTimeout(() => el.classList.add("in"), delay);
      return () => window.clearTimeout(t);
    }

    // If IntersectionObserver is unavailable, just show.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("in"), delay);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
