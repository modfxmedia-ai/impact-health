"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AreaLocation } from "@/lib/areas-we-serve/locations";

/** Client-side search/filter over the region-grouped location list — the only interactive piece of the Areas We Serve hub, everything else stays server-rendered. */
export function AreaLocationsDirectory({
  locations,
  regions,
}: {
  locations: AreaLocation[];
  regions: string[];
}) {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? locations.filter(
          (location) =>
            location.name.toLowerCase().includes(q) ||
            location.region.toLowerCase().includes(q),
        )
      : locations;

    return regions
      .map((region) => ({
        region,
        items: filtered.filter((location) => location.region === region),
      }))
      .filter((group) => group.items.length > 0);
  }, [locations, regions, query]);

  return (
    <div className="not-prose">
      <div className="relative max-w-sm">
        <label htmlFor="area-search" className="sr-only">
          Search for your city
        </label>
        <input
          id="area-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search your city or area…"
          className="w-full rounded-full border border-zinc-200/70 bg-white px-5 py-3 text-sm text-brand-navy shadow-sm outline-none placeholder:text-zinc-400 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
        />
      </div>

      {groups.length === 0 ? (
        <p className="mt-8 text-sm text-zinc-500">
          No areas match &ldquo;{query}&rdquo;. Try another city, or{" "}
          <Link href="/contact-us/" className="font-semibold text-brand-teal">
            contact us
          </Link>{" "}
          to ask if we serve your area.
        </p>
      ) : (
        <div className="mt-8 space-y-10">
          {groups.map((group) => (
            <div key={group.region}>
              <h3 className="text-sm font-semibold tracking-wide text-brand-navy uppercase">
                {group.region}
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/areas-we-serve/${location.slug}/`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-white px-4 py-3 text-sm font-medium text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-md"
                    >
                      <span>
                        {location.name}
                        {location.isHomeBase ? (
                          <span className="ml-2 text-xs font-normal text-brand-teal">
                            (Home Office)
                          </span>
                        ) : (
                          <span className="ml-2 text-xs font-normal text-zinc-400">
                            ~{location.driveTimeMinutes} min
                          </span>
                        )}
                      </span>
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
          ))}
        </div>
      )}
    </div>
  );
}
