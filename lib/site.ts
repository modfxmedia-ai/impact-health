// Single source of truth for the production origin, used by metadataBase,
// sitemap.ts, and robots.ts. Falls back to the real production domain so
// local/preview builds without the env var still produce correct URLs.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://impacthealthoh.com";
