import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { AREAS_WE_SERVE_ENABLED } from "@/lib/areas-we-serve/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Areas We Serve pages 404 while the feature flag is off, but disallow
      // the path too so crawlers never even attempt/queue it until reviewed.
      disallow: AREAS_WE_SERVE_ENABLED ? undefined : "/areas-we-serve/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
