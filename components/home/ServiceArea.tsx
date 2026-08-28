import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { AREAS_WE_SERVE_ENABLED } from "@/lib/areas-we-serve/config";
import { areaLocations } from "@/lib/areas-we-serve/locations";

/** Homepage contextual link into the Areas We Serve hub. Renders nothing while the feature flag is off. */
export function ServiceArea() {
  if (!AREAS_WE_SERVE_ENABLED) return null;

  const sample = areaLocations
    .filter((location) => !location.isHomeBase)
    .slice(0, 6)
    .map((location) => location.name)
    .join(", ");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Areas We Serve"
            title="Serving Westerville and surrounding areas"
            align="left"
            className="mb-6"
          />
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
            Patients travel to our Westerville office from across Central
            Ohio — including {sample}, and more — for the same experienced
            team every visit.
          </p>
          <Link
            href="/areas-we-serve/"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-teal transition-colors hover:text-brand-navy-deep"
          >
            See all areas we serve
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
