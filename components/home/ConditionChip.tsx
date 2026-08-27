"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function ConditionChip({ label, href }: { label: string; href: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group flex h-full items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-teal/15"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal transition-colors duration-300 group-hover:bg-brand-teal group-hover:text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 12h4l2.5-7 4 14 2.5-7H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="flex-1 text-base font-bold text-brand-navy">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="-translate-x-1 text-brand-teal opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
