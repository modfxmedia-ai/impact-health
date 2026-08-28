import { SITE_URL } from "@/lib/site";
import { contactInfo } from "@/lib/nav-data";
import { faqSchema } from "@/components/page/Faq";
import type { FaqItem } from "@/components/page/Faq";
import type { AreaLocation } from "./locations";
import type { AreaTopic } from "./topics";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

/**
 * Builds the JSON-LD graph for one `/areas-we-serve/[location]/[topic]/`
 * page. Uses the single real Westerville address for `LocalBusiness` on
 * every page (via `areaServed`/`Service.areaServed`) — never a fabricated
 * per-city address, since there is no satellite office.
 */
export function buildAreaSchema({
  location,
  topic,
  faqItems,
  title,
  description,
}: {
  location: AreaLocation;
  topic: AreaTopic;
  faqItems: FaqItem[];
  title: string;
  description: string;
}) {
  const url = `${SITE_URL}/areas-we-serve/${location.slug}/${topic.slug}/`;

  return [
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      isPartOf: { "@id": WEBSITE_ID },
      description,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Areas We Serve",
          item: `${SITE_URL}/areas-we-serve/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.name,
          item: `${SITE_URL}/areas-we-serve/${location.slug}/`,
        },
        { "@type": "ListItem", position: 4, name: topic.name },
      ],
    },
    {
      "@type": "MedicalBusiness",
      "@id": LOCAL_BUSINESS_ID,
      name: "Impact Health & Wellness",
      url: `${SITE_URL}/`,
      telephone: contactInfo.phoneDisplay,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "193 W. Schrock Road",
        addressLocality: "Westerville",
        addressRegion: "OH",
        postalCode: "43081",
        addressCountry: "US",
      },
      areaServed: { "@type": "City", name: location.name },
    },
    {
      "@type": "MedicalProcedure",
      name: topic.name,
      description: topic.tagline,
      url: `${SITE_URL}${topic.href}`,
      provider: { "@id": LOCAL_BUSINESS_ID },
      areaServed: { "@type": "City", name: location.name },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Impact Health & Wellness",
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Impact Health & Wellness",
      url: `${SITE_URL}/`,
    },
    faqSchema(faqItems),
  ];
}
