import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Conditions } from "@/components/home/Conditions";
import { Testimonials } from "@/components/home/Testimonials";
import { MapOfficeHours } from "@/components/home/MapOfficeHours";

export const metadata: Metadata = {
  title: "Care Clinic | Health & Wellness Services in Westerville, OH",
  description:
    "Experience full-spectrum pain management at our medically-integrated care facility. We provide treatments based on Physical, Traditional, & Functional Medicine.",
  alternates: { canonical: "/" },
};

// Yoast schema graph captured from the live homepage, preserved as-is.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://impacthealthoh.com/",
      url: "https://impacthealthoh.com/",
      name: "Care Clinic | Health & Wellness Services in Westerville, OH",
      isPartOf: { "@id": "https://impacthealthoh.com/#website" },
      about: { "@id": "https://impacthealthoh.com/#organization" },
      datePublished: "2024-10-03T18:15:25+00:00",
      dateModified: "2024-10-03T18:15:26+00:00",
      description:
        "Experience full-spectrum pain management at our medically-integrated care facility. We provide treatments based on Physical, Traditional, & Functional Medicine.",
      breadcrumb: { "@id": "https://impacthealthoh.com/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [
        { "@type": "ReadAction", target: ["https://impacthealthoh.com/"] },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://impacthealthoh.com/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
    },
    {
      "@type": "WebSite",
      "@id": "https://impacthealthoh.com/#website",
      url: "https://impacthealthoh.com/",
      name: "Impact Health & Wellness",
      description: "",
      publisher: { "@id": "https://impacthealthoh.com/#organization" },
      alternateName: "Impact Health",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://impacthealthoh.com/#organization",
      name: "Impact Health & Wellness",
      alternateName: "Impact Health",
      url: "https://impacthealthoh.com/",
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://impacthealthoh.com/#/schema/logo/image/",
        url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        contentUrl:
          "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
        width: 620,
        height: 199,
        caption: "Impact Health & Wellness",
      },
      image: { "@id": "https://impacthealthoh.com/#/schema/logo/image/" },
      sameAs: [
        "https://www.facebook.com/impacthealthandwellness/",
        "https://www.instagram.com/impacthealthandwellness/",
        "https://www.linkedin.com/company/impacthealthandwellness",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <IntroSection />
        <ServicesGrid />
        <ServicesOverview />
        <Conditions />
        <Testimonials />
        <BlogPreview />
        <MapOfficeHours />
      </main>
    </>
  );
}


