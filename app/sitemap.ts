import type { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { staffMembers } from "@/lib/staff-data";
import { SITE_URL } from "@/lib/site";
import {
  AREAS_WE_SERVE_ENABLED,
  AREAS_WE_SERVE_PILOT_MODE,
  PILOT_COMBOS,
  PILOT_LOCATION_SLUGS,
  shouldNoindexArea,
} from "@/lib/areas-we-serve/config";
import { areaLocations } from "@/lib/areas-we-serve/locations";
import { areaTopics } from "@/lib/areas-we-serve/topics";

const BASE_URL = SITE_URL;

// Real, indexable pages only — mirrors the live site's nav/footer + orphan
// pages. Excludes the two "-dev" staging duplicates and the unused
// WooCommerce cart/checkout/my-account pages, which are not real site content.
const staticPaths = [
  "/",
  "/about-us/",
  "/our-team/",
  "/blog/",
  "/regenerative-medicine/",
  "/ha-gel-injections/",
  "/prp-therapy/",
  "/shockwave/",
  "/laser-therapy/",
  "/neuropathy-treatments/",
  "/anti-aging-wellness/",
  "/meal-planning/",
  "/iv-therapy/",
  "/iv-therapy-infusion-boosters/",
  "/peptide-therapy/",
  "/hormone-replacement-therapy-hrt/",
  "/chiropractic-care/",
  "/chiropractic-care/diagnostics/",
  "/chiropractic-care/pregnancy-infant-chiropractic-care/",
  "/chiropractic-care/spinal-decompression/",
  "/chiropractic-care/trigger-point-injections/",
  "/chiropractic-care/physical-therapy/",
  "/wound-care/",
  "/workers-compensation/",
  "/car-accident-injuries/",
  "/personal-injuries/",
  "/school-sports-physicals/",
  "/medical-infusion-therapy/",
  "/therapies-order-forms/",
  "/conditions-we-treat/",
  "/conditions-we-treat/back-pain/",
  "/conditions-we-treat/carpal-tunnel/",
  "/conditions-we-treat/chronic-pain/",
  "/conditions-we-treat/foot-ankle-pain/",
  "/conditions-we-treat/hip-pain/",
  "/conditions-we-treat/knee-pain/",
  "/conditions-we-treat/migraines-and-headaches/",
  "/conditions-we-treat/neck-pain/",
  "/conditions-we-treat/osteoarthritis/",
  "/conditions-we-treat/sports-injuries/",
  "/conditions-we-treat/whiplash/",
  "/accepted-insurance/",
  "/contact-us/",
  "/privacy-policy/",
  "/terms-of-use/",
  "/faq/",
  "/patient-testimonials/",
  "/medical-infusion-therapy-guide/",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const publishedPosts = await getPublishedBlogPosts().catch(() => []);
  const blogEntries: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.publishDate),
  }));

  const staffEntries: MetadataRoute.Sitemap = staffMembers.map((member) => ({
    url: `${BASE_URL}/staff/${member.slug}/`,
    lastModified: new Date(),
  }));

  // Areas We Serve is feature-flagged (see lib/areas-we-serve/config.ts) —
  // omitted from the sitemap entirely until the flag is enabled. While the
  // pilot is running, only the pilot batch's locations/combos are included;
  // home-base (noindex) combos are always excluded, since noindexed pages
  // shouldn't be submitted for indexing.
  const areasWeServeEntries: MetadataRoute.Sitemap = AREAS_WE_SERVE_ENABLED
    ? AREAS_WE_SERVE_PILOT_MODE
      ? [
          { url: `${BASE_URL}/areas-we-serve/`, lastModified: new Date() },
          ...PILOT_LOCATION_SLUGS.map((slug) => ({
            url: `${BASE_URL}/areas-we-serve/${slug}/`,
            lastModified: new Date(),
          })),
          ...PILOT_COMBOS.map(({ location, topic }) => ({
            url: `${BASE_URL}/areas-we-serve/${location}/${topic}/`,
            lastModified: new Date(),
          })),
        ]
      : [
          { url: `${BASE_URL}/areas-we-serve/`, lastModified: new Date() },
          ...areaLocations.map((location) => ({
            url: `${BASE_URL}/areas-we-serve/${location.slug}/`,
            lastModified: new Date(),
          })),
          ...areaLocations.flatMap((location) =>
            areaTopics
              .filter(() => !shouldNoindexArea(location))
              .map((topic) => ({
                url: `${BASE_URL}/areas-we-serve/${location.slug}/${topic.slug}/`,
                lastModified: new Date(),
              })),
          ),
        ]
    : [];

  return [...staticEntries, ...blogEntries, ...staffEntries, ...areasWeServeEntries];
}
