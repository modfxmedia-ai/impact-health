import { SITE_ORIGIN } from "./config";

export type RankedSiteTarget = {
  projectId: string;
  name: string;
  origin: string;
};

/** Impact Health only. Never add another client's Ranked project here. */
export const RANKED_SITES: RankedSiteTarget[] = [
  {
    projectId: process.env.RANKED_PROJECT_ID || "",
    name: "Impact Health & Wellness",
    origin: SITE_ORIGIN,
  },
].filter((s) => s.projectId);

export function getRankedSiteTargets(): RankedSiteTarget[] {
  return RANKED_SITES;
}

export function isLocalOrigin(origin: string): boolean {
  try {
    return (
      new URL(origin).host.replace(/^www\./, "") ===
      new URL(SITE_ORIGIN).host.replace(/^www\./, "")
    );
  } catch {
    return origin.replace(/\/$/, "") === SITE_ORIGIN;
  }
}
