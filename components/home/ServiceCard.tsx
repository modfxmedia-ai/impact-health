"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function ServiceCard({
  label,
  href,
  image,
  alt,
  description,
  featured = false,
  className = "",
}: {
  label: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group h-full ${className}`}
    >
      <Link
        href={href}
        className="relative block h-full overflow-hidden rounded-2xl ring-1 ring-white/10"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 1024px) 50vw, 25vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/10" />

        {featured ? (
          <span className="absolute top-5 left-5 rounded-full bg-brand-teal px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
            Featured
          </span>
        ) : null}

        <span className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-brand-navy">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3
            className={`font-bold text-white ${
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {label}
          </h3>
          <p
            className={`mt-2 leading-relaxed text-white/75 ${
              featured ? "max-w-md text-sm" : "text-xs"
            }`}
          >
            {description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
