"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * Scroll-triggered fade/slide-up reveal.
 *
 * Deliberately drives visibility from a plain IntersectionObserver rather
 * than motion/react's own `whileInView` viewport tracking, which is
 * unreliable in this Next 16 + React 19 + Turbopack stack (elements can get
 * stuck permanently at their `initial` state). Framer Motion still performs
 * the actual animated transition. Reduced-motion detection is also done
 * directly via `matchMedia` rather than motion/react's `useReducedMotion`,
 * which did not reliably reflect the live media-query value in testing.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e: MediaQueryListEvent) => setShouldReduceMotion(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      // threshold near 0 (rather than e.g. 0.15) so very tall wrapped content
      // (a large fraction of whose own area may never be visible at once)
      // still reliably triggers as soon as any part enters the viewport.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
