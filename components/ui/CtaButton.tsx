import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "teal" | "navy" | "outline" | "white";

const VARIANT_CLASSES: Record<Variant, string> = {
  teal: "bg-brand-teal text-white hover:bg-brand-navy",
  navy: "bg-brand-navy text-white hover:bg-brand-navy-deep",
  outline: "border border-white/25 text-white hover:bg-white/10",
  white: "bg-white text-brand-navy hover:bg-brand-teal hover:text-white",
};

const BADGE_CLASSES: Record<Variant, string> = {
  teal: "bg-brand-navy text-white",
  navy: "bg-brand-teal text-white",
  outline: "bg-white text-brand-navy",
  white: "bg-brand-navy text-white",
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Shared pill-shaped CTA — label + a trailing circular arrow badge, in the brand's navy/teal palette. */
function Content({ variant, children }: { variant: Variant; children: ReactNode }) {
  return (
    <>
      <span className="pl-5">{children}</span>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${BADGE_CLASSES[variant]}`}
      >
        <ArrowIcon />
      </span>
    </>
  );
}

const BASE_CLASSES =
  "inline-flex items-center justify-between gap-3 rounded-full py-1.5 pr-1.5 text-sm font-semibold shadow-sm transition-colors";

export function CtaButton({
  href,
  variant = "teal",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        <Content variant={variant}>{children}</Content>
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      <Content variant={variant}>{children}</Content>
    </a>
  );
}

export function CtaSubmitButton({
  variant = "teal",
  className = "",
  children,
  ...rest
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      <Content variant={variant}>{children}</Content>
    </button>
  );
}
