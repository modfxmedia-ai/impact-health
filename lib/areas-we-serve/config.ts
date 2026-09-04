/**
 * Feature flag gating the entire "Areas We Serve" programmatic location
 * section (`/areas-we-serve/**`). While disabled, every route under
 * `app/areas-we-serve/` calls `notFound()` and is excluded from
 * `sitemap.ts` / allowed in `robots.ts`, so nothing is reachable or
 * indexable in production.
 *
 * To preview locally, set `AREAS_WE_SERVE_ENABLED=true` in `.env.local`
 * (never commit that value to a real deployment env until the sample
 * pages have been reviewed and approved).
 */
export const AREAS_WE_SERVE_ENABLED = process.env.AREAS_WE_SERVE_ENABLED === "true";

/**
 * Staged-launch control. While true (the default whenever the feature is
 * on), only `PILOT_COMBOS` below — and the locations they belong to — are
 * generated, linked from the hub, and included in the sitemap. The
 * remaining ~500 pages in the full matrix stay unreachable (real 404s)
 * even with `AREAS_WE_SERVE_ENABLED` on, until the pilot's Search Console
 * indexation is confirmed healthy. Set `AREAS_WE_SERVE_PILOT_MODE=false`
 * to launch the full 19×28 matrix.
 */
export const AREAS_WE_SERVE_PILOT_MODE = process.env.AREAS_WE_SERVE_PILOT_MODE !== "false";

/**
 * Pilot batch: 28 real location+topic combos, chosen from actual historical
 * Search Console demand (`gsc-report/Pages.csv` — these exact slug pairs
 * previously received real impressions/clicks on the old WordPress site)
 * and restricted to the 7 closest non-home-base locations (14-24 min drive)
 * to minimize duplicate-content risk before the pilot is reviewed. See
 * `/memories/repo/impact-health-notes.md` for the full selection rationale.
 */
export const PILOT_COMBOS: { location: string; topic: string }[] = [
  { location: "dublin", topic: "neuropathy-treatments" },
  { location: "columbus", topic: "knee-pain" },
  { location: "dublin", topic: "spinal-decompression" },
  { location: "worthington", topic: "back-pain" },
  { location: "lewis-center", topic: "neuropathy-treatments" },
  { location: "dublin", topic: "chronic-pain" },
  { location: "lewis-center", topic: "spinal-decompression" },
  { location: "new-albany", topic: "back-pain" },
  { location: "gahanna", topic: "anti-aging-wellness" },
  { location: "dublin", topic: "back-pain" },
  { location: "columbus", topic: "neuropathy-treatments" },
  { location: "blacklick", topic: "spinal-decompression" },
  { location: "worthington", topic: "knee-pain" },
  { location: "worthington", topic: "neuropathy-treatments" },
  { location: "columbus", topic: "hip-pain" },
  { location: "columbus", topic: "spinal-decompression" },
  { location: "columbus", topic: "peptide-therapy" },
  { location: "new-albany", topic: "peptide-therapy" },
  { location: "blacklick", topic: "peptide-therapy" },
  { location: "dublin", topic: "anti-aging-wellness" },
  { location: "dublin", topic: "knee-pain" },
  { location: "worthington", topic: "chronic-pain" },
  { location: "worthington", topic: "anti-aging-wellness" },
  { location: "new-albany", topic: "anti-aging-wellness" },
];

export const PILOT_LOCATION_SLUGS: string[] = Array.from(
  new Set(PILOT_COMBOS.map((combo) => combo.location)),
);

export function isPilotCombo(locationSlug: string, topicSlug: string): boolean {
  return PILOT_COMBOS.some(
    (combo) => combo.location === locationSlug && combo.topic === topicSlug,
  );
}

export function isPilotLocation(locationSlug: string): boolean {
  return PILOT_LOCATION_SLUGS.includes(locationSlug);
}

/**
 * Combos to keep live but out of the index because they read as thin or
 * too similar to a sibling page, rather than deleting them. Today that's
 * every home-base (Westerville) combo — there's no "patients travel here"
 * narrative for the office's own city, so those pages mirror the canonical
 * `/topic/` page more closely than any other location. Add more explicit
 * `{location, topic}` pairs here if editorial review flags additional
 * thin/duplicate pages later.
 */
export function shouldNoindexArea(location: { isHomeBase?: boolean }): boolean {
  return Boolean(location.isHomeBase);
}

