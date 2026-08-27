import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { NavLink } from "@/lib/nav-data";

/** Compact pill-tag row of related service links (not a big card grid). */
export function RelatedServices({
  items,
  heading = "Related Services",
}: {
  items: NavLink[];
  heading?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-14 sm:pb-20">
        <Reveal>
          <h2 className="text-sm font-semibold tracking-wide text-brand-navy uppercase">
            {heading}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-brand-teal/25 bg-brand-teal/5 px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:border-brand-teal hover:bg-brand-teal/10"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
                />
                {item.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
