"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function ServiceIconCard({
  title,
  href,
  icon,
  description,
  index,
}: {
  title: string;
  href: string;
  icon: string;
  description: string;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group h-full"
    >
      <Link
        href={href}
        className="relative flex h-full flex-col items-center rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-brand-teal/40 hover:shadow-xl"
      >
        <span className="absolute top-5 right-6 font-mono text-xs text-zinc-300">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 ring-1 ring-brand-teal/20 transition-transform duration-300 group-hover:scale-110">
          <span className="absolute inset-0 rounded-2xl bg-brand-teal/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={icon}
            alt=""
            width={36}
            height={36}
            className="relative h-9 w-9"
          />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-brand-navy">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-teal uppercase">
          <span className="relative">
            Learn More
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-teal transition-all duration-300 group-hover:w-full" />
          </span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </Link>
    </motion.article>
  );
}
