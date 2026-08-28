import Link from "next/link";
import { AREAS_WE_SERVE_ENABLED } from "@/lib/areas-we-serve/config";

/** Small contextual link to the Areas We Serve hub, reused on every service page + Contact Us. Renders nothing while the feature flag is off, so no dead link ever ships. */
export function AreaServedNote() {
  if (!AREAS_WE_SERVE_ENABLED) return null;

  return (
    <section className="border-t border-zinc-200/70 bg-[#f4f8fb]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center sm:py-10">
        <p className="text-sm text-zinc-600">
          Patients travel from across Central Ohio for this care.{" "}
          <Link
            href="/areas-we-serve/"
            className="font-semibold text-brand-teal transition-colors hover:text-brand-navy-deep"
          >
            See if we serve your area &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
