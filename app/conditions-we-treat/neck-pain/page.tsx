import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

export const metadata: Metadata = {
  title: "Neck Pain Relief & Chiropractic Treatment in Westerville",
  description:
    "Find neck pain relief at Impact Health & Wellness in Westerville. Our personalized treatments ease discomfort and restore mobility. Start your recovery journey!",
  alternates: { canonical: "/conditions-we-treat/neck-pain/" },
};

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Spinal Decompression", href: "/chiropractic-care/spinal-decompression/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Trigger Point Injections", href: "/chiropractic-care/trigger-point-injections/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/neck-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/neck-pain/",
    name: "Neck Pain Relief & Chiropractic Treatment in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:01:10+00:00",
    dateModified: "2026-04-10T11:10:24+00:00",
    description:
      "Find neck pain relief at Impact Health & Wellness in Westerville. Our personalized treatments ease discomfort and restore mobility. Start your recovery journey!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/neck-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/neck-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/neck-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Neck Pain" },
    ],
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
];

export default function NeckPainPage() {
  return (
    <PageLayout
      title="Neck Pain"
      intro="Uncover the complexity of neck pain. Explore its origins, treatments, and long-term management strategies for improved quality of life."
      image={{ src: "/images/conditions/neck-pain.jpg", alt: "Provider assessing a patient's neck pain" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Neck Pain" },
      ]}
      schema={schema}
      afterContent={
        <>
          <RelatedServices items={relatedTreatments} heading="Related Treatments" />
          <ServicesOverview className="bg-[#f4f8fb]" />
        </>
      }
    >
      <p>
        Neck Pain, although felt in the neck, can be caused by problems
        related to the spinal cord. This means Neck Pain can be caused by
        tight muscles in the upper back as well as in the neck. Joints in the
        neck and upper back can stiffen and cause neck pain as well. The most
        common long-term cause for neck pain is osteoarthritis, and this
        results in the neck being the most common area for spinal surgery.
      </p>
    </PageLayout>
  );
}
