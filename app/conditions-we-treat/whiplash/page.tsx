import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

export const metadata: Metadata = {
  title: "Whiplash Chiropractic Treatment & Recovery in Westerville",
  description:
    "Whiplash relief is here! Impact Health & Wellness offers expert chiropractic care for whiplash symptoms in Westerville, OH. Get treated today and feel better!",
  alternates: { canonical: "/conditions-we-treat/whiplash/" },
};

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Spinal Decompression", href: "/chiropractic-care/spinal-decompression/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Car Accident Injuries", href: "/car-accident-injuries/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/whiplash/",
    url: "https://impacthealthoh.com/conditions-we-treat/whiplash/",
    name: "Whiplash Chiropractic Treatment & Recovery in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:13:58+00:00",
    dateModified: "2026-04-10T11:15:45+00:00",
    description:
      "Whiplash relief is here! Impact Health & Wellness offers expert chiropractic care for whiplash symptoms in Westerville, OH. Get treated today and feel better!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/whiplash/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/whiplash/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/whiplash/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Whiplash" },
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

export default function WhiplashPage() {
  return (
    <PageLayout
      title="Whiplash"
      intro="Discover the diverse causes and effective treatments for whiplash, emphasizing non-opioid, non-surgical solutions to alleviate symptoms and prevent long-term complications."
      image={{ src: "/images/conditions/whiplash.jpg", alt: "Provider assessing a patient's neck for whiplash injury after a car accident" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Whiplash" },
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
        Most people associate Whiplash with motor vehicle accidents, but
        there are many causes including bungee jumping, falls, and even
        headbanging. It is one of the most frequently claimed injuries on
        vehicle insurance policies in certain countries. While there is broad
        consensus that acute whiplash is not uncommon, the topic of chronic
        whiplash is controversial, however, Impact recognizes whiplash to be
        a serious condition that is treatable with non-opioid non-surgical
        solutions. Whiplash injuries are almost always the beginning of neck
        problems that lead to osteoarthritis if not properly managed.
      </p>
    </PageLayout>
  );
}
