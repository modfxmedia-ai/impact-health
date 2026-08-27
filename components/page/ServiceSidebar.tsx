"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo, getRelatedServices } from "@/lib/nav-data";
import { PhoneIcon } from "@/components/site-header/icons";
import { CtaButton } from "@/components/ui/CtaButton";

const trustPoints = [
  "Experienced medical & wellness providers",
  "Most major insurance plans accepted",
  "Same-week appointments available",
];

/** Sticky right-rail card shown alongside service page content — a single continuous panel (not stacked separate cards) so no page-background seam shows through between sections. */
export function ServiceSidebar() {
  const pathname = usePathname();
  const currentHref = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const otherServices = getRelatedServices(currentHref);

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-lg shadow-brand-navy/5">
      <div className="relative overflow-hidden bg-brand-navy p-6 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(64,144,185,0.35),transparent_65%)]" />
        <div className="relative">
          <h3 className="text-lg font-bold">Ready to get started?</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Book a consultation with our Westerville team and take the next
            step toward feeling your best.
          </p>
          <CtaButton href="/contact-us/" variant="teal" className="mt-5 w-full">
            Book an Appointment
          </CtaButton>
          <a
            href={contactInfo.phoneHref}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 text-brand-teal" />
            {contactInfo.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-200/70 p-6">
        <h3 className="text-sm font-semibold tracking-wide text-brand-navy uppercase">
          Why Impact Health &amp; Wellness
        </h3>
        <ul className="mt-4 space-y-3">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-zinc-600">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-[10px] font-bold text-white"
              >
                &#10003;
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {otherServices.length > 0 ? (
        <div className="border-t border-zinc-200/70 p-6">
          <h3 className="text-sm font-semibold tracking-wide text-brand-navy uppercase">
            Explore Other Services
          </h3>
          <ul className="mt-3 space-y-1">
            {otherServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-brand-teal/10 hover:text-brand-navy"
                >
                  {service.label}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-brand-teal opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
