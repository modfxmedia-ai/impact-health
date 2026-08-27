import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { Faq, faqSchema, type FaqItem } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advanced Wound Care | Specialized Treatment in Westerville",
  description:
    "Impact Health & Wellness in Westerville, OH offers expert wound care. Get specialized treatments for faster healing and infection prevention. Contact us today!",
  alternates: { canonical: "/wound-care/" },
};

const faqItems: FaqItem[] = [
  {
    question: "How does diabetes affect wound healing?",
    answer:
      "Diabetes can significantly slow down the wound healing process due to high blood sugar levels, which impair circulation, damage nerves, and weaken the immune system. These factors make it harder for the body to heal wounds efficiently and increase the risk of infections.",
  },
  {
    question:
      "What specialized treatments does Impact Health & Wellness offer for diabetic wounds?",
    answer:
      "For diabetic wounds, we offer a range of specialized treatments including hyperbaric oxygen therapy to enhance oxygen supply to the wound, advanced debridement techniques to remove dead tissue, and the use of skin substitutes and growth factors to promote tissue regeneration.",
  },
  {
    question:
      "Can hyperbaric oxygen therapy really make a difference in wound healing for diabetic patients?",
    answer:
      "Yes, hyperbaric oxygen therapy can significantly impact wound healing in diabetic patients by increasing the amount of oxygen in the blood. This process helps fight infection, reduces swelling, and promotes the formation of new blood vessels, accelerating the healing of chronic wounds.",
  },
  {
    question:
      "What preventive measures does Impact Health & Wellness recommend for avoiding diabetic foot ulcers?",
    answer:
      "We emphasize the importance of regular foot inspections, maintaining proper foot hygiene, wearing appropriate footwear, and controlling blood sugar levels as key preventive measures. Additionally, our team educates patients on proper foot care techniques to minimize the risk of ulcers.",
  },
  {
    question:
      "How does Impact Health & Wellness ensure a personalized approach to wound care?",
    answer:
      "Our approach begins with a comprehensive assessment of each patient's wound and overall health status. We then tailor a treatment plan that may include a combination of advanced wound care technologies and therapies, adjusted as needed based on the patient's progress and specific health conditions. Our partnership with United Wound Care Centers further enhances our ability to offer specialized, non-surgical solutions tailored to individual needs.",
  },
];

// Yoast schema graph captured from the live Wound Care page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/wound-care/",
    url: "https://impacthealthoh.com/wound-care/",
    name: "Advanced Wound Care | Specialized Treatment in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-11T19:32:48+00:00",
    dateModified: "2026-04-10T11:31:56+00:00",
    description:
      "Impact Health & Wellness in Westerville, OH offers expert wound care. Get specialized treatments for faster healing and infection prevention. Contact us today!",
    breadcrumb: { "@id": "https://impacthealthoh.com/wound-care/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/wound-care/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/wound-care/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Wound Care" },
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
  faqSchema(faqItems),
];

export default function WoundCarePage() {
  return (
    <PageLayout
      title="Wound Care & Diabetes"
      eyebrow="Wound Care"
      intro="Discover expert wound care solutions tailored to your needs for effective healing, innovative treatments, and dedicated patient support."
      breadcrumbs={[{ label: "Wound Care" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/wound-care.jpg",
        alt: "wound care",
      }}
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/wound-care/")} />
          <ServicesOverview />
        </>
      }
    >
      <p>
        At <a href="https://impacthealthoh.com/">Impact Health & Wellness in Westerville, Ohio</a>,
        our Wound Care program is designed to provide advanced and personalized
        treatment plans for each patient. Utilizing the latest in wound healing
        technology and techniques, we aim to accelerate your recovery process
        and enhance your overall well-being. Let our team of wound care
        specialists, and healthcare professionals guide you through your
        healing journey.
      </p>

      <h2>What is Wound Care?</h2>
      <p>
        Wound Care at Impact Health & Wellness encompasses a comprehensive
        approach to treating various types of wounds, from chronic and
        non-healing wounds to surgical wounds and diabetic foot ulcers. Our
        treatments are based on the latest medical research and practices in
        wound healing, including hyperbaric oxygen therapy, which enhances the
        body&rsquo;s natural healing process by inhaling 100% oxygen in a total
        body chamber.
      </p>

      <h3>Benefits of Wound Care</h3>
      <p>Choosing Wound Care with us offers several advantages:</p>
      <BenefitGrid
        items={[
          {
            title: "Accelerated Healing",
            description:
              "Accelerated healing of chronic and acute wounds, reducing the risk of infection and complications.",
          },
          {
            title: "Advanced Treatments",
            description:
              "Access to advanced treatments like hyperbaric oxygen therapy, promoting faster recovery.",
          },
          {
            title: "Personalized Care Plans",
            description:
              "Personalized care plans tailored to address the specific needs and health conditions of each patient.",
          },
          {
            title: "Multidisciplinary Support",
            description:
              "Support from a multidisciplinary team dedicated to improving your quality of life.",
          },
        ]}
      />

      <h2>Diabetes and Wound Care</h2>
      <p>
        Diabetes significantly impacts the body&rsquo;s ability to heal wounds
        effectively, making specialized care essential for diabetic
        individuals. Elevated blood sugar levels can lead to poor circulation,
        nerve damage, and impaired immune responses, all of which can slow
        down the wound healing process and increase the risk of infection.
      </p>
      <p>
        At our care center, we focus on preventing complications through
        comprehensive wound care strategies tailored for diabetic patients.
        This includes regular monitoring of blood glucose levels, ensuring
        proper nutrition for healing, employing advanced wound care treatments
        like hyperbaric oxygen therapy, and educating patients on proper foot
        care to prevent ulcers. Our goal is to promote swift healing, prevent
        complications such as amputation, and enhance overall quality of life
        for those living with diabetes.
      </p>

      <h2>Why Choose Impact Health & Wellness for Wound Care</h2>
      <p>
        At Impact Health & Wellness, our commitment to excellence in patient
        care is exemplified through our partnership with the esteemed United
        Wound Care Centers. This collaboration brings together the expertise
        of wound care specialists dedicated to offering non-surgical
        solutions that expedite healing and enhance mobility without the
        extended wait times often associated with emergency room visits.
      </p>
      <h3>Our Wound Care Program Features:</h3>
      <ul>
        <li>
          <strong>Expert Partnership:</strong> Teaming up with United Wound
          Care Centers allows us to provide our patients with exceptional
          care from specialists who are leaders in the field.
        </li>
        <li>
          <strong>Holistic Health Approach:</strong> We believe in treating
          the whole person, not just the wound. Our wound care program is
          seamlessly integrated with other wellness services, offering a
          comprehensive approach to your health.
        </li>
        <li>
          <strong>Advanced Healing Technologies:</strong> Our facilities are
          equipped with the latest in wound healing technology. These
          technologies support our mission to provide the best possible
          outcomes for our patients.
        </li>
        <li>
          <strong>Compassionate, Patient-Focused Care:</strong> At the heart
          of our practice is a commitment to compassionate care. We&rsquo;ve
          created a patient-focused environment that prioritizes your
          comfort and recovery.
        </li>
      </ul>

      <h2>Ideal Candidates for Wound Care</h2>
      <p>
        Our Wound Care services cater to a broad spectrum of individuals
        facing various wound-related challenges. We specialize in treating
        those with diabetic foot ulcers, pressure ulcers, and a range of
        chronic wounds that necessitate diligent, ongoing care. Additionally,
        we provide expert monitoring and management for surgical wounds to
        ensure optimal healing. Our care extends to treating bone infections
        and other conditions that demand specialized medical interventions.
      </p>
      <h3>What types of wounds can we treat?</h3>
      <ul>
        <li>Chronic Ulcers</li>
        <li>Chronic Wounds</li>
        <li>Diabetic Foot Ulcers</li>
        <li>Pressure Ulcers</li>
        <li>Severe Wounds</li>
        <li>Surgical Grafts</li>
        <li>Trauma Open Wounds</li>
        <li>Venous Leg Ulcers</li>
      </ul>

      <h2>What to Expect from Your Wound Care Session</h2>
      <p>
        Your treatment begins with a thorough assessment by our wound care
        specialists to determine the most effective treatment plan. Depending
        on your specific needs, treatment may include hyperbaric oxygen
        therapy, debridement, application of skin substitutes, or other
        advanced wound healing techniques. Our team will closely monitor your
        progress and adjust your personalized plan as needed to ensure
        optimal healing.
      </p>

      <h2>Cost of Wound Care in Ohio</h2>
      <p>
        The cost of Wound Care varies depending on the specific treatments
        required. At Impact Health & Wellness, we believe in transparent
        pricing and will provide you with all the information you need during
        your consultation. We&rsquo;re here to work with you to find a
        payment solution that ensures you receive the care you need.
      </p>

      <h2>At Home & Mobile Care</h2>
      <p>
        At Impact Health & Wellness, we understand that receiving
        comprehensive wound care shouldn&rsquo;t disrupt your daily routine
        or comfort. We are proud to offer <strong>mobile and home wound care
        services</strong> in partnership with trusted home health agencies.
        This convenient option allows you to receive{" "}
        <strong>advanced wound care therapies</strong> in the comfort and
        privacy of your own home.
      </p>
      <h3>Benefits of Home & Mobile Wound Care:</h3>
      <ProcessSteps
        items={[
          {
            title: "Convenience and Comfort",
            description:
              "Receive expert wound care without the need to travel to our facility, reducing stress and improving adherence to treatment plans.",
          },
          {
            title: "Familiar Environment",
            description:
              "Healing in a familiar and comfortable environment can promote emotional well-being and accelerate the recovery process.",
          },
          {
            title: "Continuity of Care",
            description:
              "Our team collaborates closely with home health care professionals to ensure seamless care coordination and consistent monitoring of your progress.",
          },
          {
            title: "Specialized Treatments",
            description:
              "We partner with home health agencies equipped to deliver advanced wound care therapies in your home setting.",
          },
        ]}
      />

      <h2>Other Services at Impact Health & Wellness</h2>
      <p>
        At Impact Health & Wellness, serving the Westerville area and beyond,
        we&rsquo;re dedicated to providing a wide range of health and
        wellness solutions tailored to meet the unique needs of our
        community. Our services go beyond traditional care, focusing on
        innovative treatments that promote overall well-being, recovery, and
        a healthier lifestyle.
      </p>
      <ul>
        <li>
          <strong>
            <Link href="/anti-aging-wellness/">Anti-aging & Weight-loss</Link>:
          </strong>{" "}
          Through a combination of injectable treatments and personalized
          wellness plans, we address both the aesthetic and health-related
          aspects of aging and weight management. This dual approach helps
          patients achieve a youthful appearance while improving their
          metabolic health.
        </li>
        <li>
          <strong>
            <Link href="/chiropractic-care/">Chiropractic & Rehab</Link>:
          </strong>{" "}
          Utilizing non-invasive techniques, our chiropractic and
          rehabilitation services are designed to alleviate pain, improve
          mobility, and enhance physical function. Whether recovering from an
          injury or managing chronic pain, our personalized rehab programs
          support your journey to wellness.
        </li>
        <li>
          <strong>
            <Link href="/regenerative-medicine/">Regenerative Medicine</Link>:
          </strong>{" "}
          Offering advanced treatments such as stem cell therapy and
          platelet-rich plasma (PRP) injections, regenerative medicine at our
          center focuses on harnessing the body&rsquo;s natural healing
          processes. These therapies are effective in treating a variety of
          conditions, from joint pain and sports injuries to more complex
          health issues, promoting tissue repair and reducing inflammation for
          long-lasting relief.
        </li>
      </ul>

      <h2>Book Your Wound Care Consultation in Westerville, Ohio</h2>
      <p>
        Take the first step towards healing by booking your Wound Care
        consultation at Impact Health & Wellness. Our team is ready to
        support you through your recovery and help you return to a life of
        health and wellness. <Link href="/contact-us/">Contact us</Link> today to
        schedule your appointment and learn more about how we can help you
        heal.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}
