import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Infusion Therapy Services in Westerville, OH",
  description:
    "Get Medical Infusion Therapy at Impact Health & Wellness in Westerville. Improve hydration and energy with our wellness treatments. Book your visit today!",
  alternates: { canonical: "/medical-infusion-therapy/" },
};

const faqItems = [
  {
    question: "How long does a typical infusion appointment take?",
    answer:
      "Most appointments run about 30-90 minutes, depending on the specific therapy and how it&rsquo;s administered. Some biologic infusions require a brief observation period afterward to make sure you&rsquo;re tolerating the medication well.",
  },
  {
    question: "Do I need a referral to start infusion therapy here?",
    answer:
      "Many patients are referred by their specialist or primary care provider, but you&rsquo;re also welcome to reach out directly. Our team will coordinate with your prescribing physician to confirm the right therapy, dosing, and schedule before your first visit.",
  },
  {
    question: "Is infusion therapy covered by insurance?",
    answer:
      "Coverage varies by plan and by the specific medication being infused. Our team can help verify your benefits and walk you through any prior authorization requirements before treatment begins.",
  },
  {
    question: "What should I do to prepare for an infusion?",
    answer:
      "Stay well hydrated, eat a light meal beforehand, and wear comfortable clothing with easy access to your arm. Bring a list of your current medications and let our staff know about any allergies or reactions you've had in the past.",
  },
  {
    question: "Are there side effects I should watch for after treatment?",
    answer:
      "Most patients tolerate infusions well, though mild reactions like soreness at the IV site, headache, or fatigue can occur. Our clinical staff monitors you during treatment and will go over what's normal versus what warrants a call to your provider.",
  },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/medical-infusion-therapy/",
    url: "https://impacthealthoh.com/medical-infusion-therapy/",
    name: "Medical Infusion Therapy Services in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-09-03T19:01:19+00:00",
    dateModified: "2026-04-10T11:22:09+00:00",
    description:
      "Get Medical Infusion Therapy at Impact Health & Wellness in Westerville. Improve hydration and energy with our wellness treatments. Book your visit today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/medical-infusion-therapy/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/medical-infusion-therapy/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/medical-infusion-therapy/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Medical Infusion Therapies",
      },
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

const benefits = [
  {
    title: "Faster, Fuller Absorption",
    description:
      "Delivering medication or nutrients straight into the bloodstream bypasses the digestive system entirely, so the full dose reaches your body without being broken down first.",
  },
  {
    title: "Rapid Symptom Relief",
    description:
      "Many patients notice improvements in energy, hydration, or inflammation within hours rather than the days or weeks it can take with oral medications.",
  },
  {
    title: "Individualized Dosing",
    description:
      "Infusions are dosed and scheduled around your labs, diagnosis, and treatment plan, allowing for far more precise management than pills alone.",
  },
  {
    title: "Access to Specialty Biologics",
    description:
      "Many advanced medications for autoimmune, rheumatologic, and neurologic conditions are only available as infusions or injections in the first place.",
  },
  {
    title: "Supervised, Monitored Care",
    description:
      "A clinical team is with you throughout treatment, watching for reactions and adjusting your comfort in real time.",
  },
  {
    title: "Convenient Local Access",
    description:
      "Rather than traveling to a hospital infusion suite, patients in Westerville and the greater Columbus area can receive many of these same therapies close to home.",
  },
  {
    title: "Coordinated with Your Specialists",
    description:
      "Our staff works directly with the physician who prescribed your therapy to keep dosing, labs, and follow-up on schedule.",
  },
];

const processSteps = [
  {
    title: "Consultation & Coordination",
    description:
      "We review your diagnosis, prescribed therapy, and any records from your specialist, then confirm dosing and scheduling before your first visit.",
  },
  {
    title: "Pre-Treatment Check",
    description:
      "On arrival, our clinical team checks vitals, reviews your health history, and answers any questions before starting your infusion.",
  },
  {
    title: "Monitored Infusion",
    description:
      "You'll relax in a comfortable treatment chair while your infusion is administered, with staff monitoring you throughout for comfort and safety.",
  },
  {
    title: "Aftercare & Follow-Up",
    description:
      "We go over any post-treatment guidance, schedule your next session if applicable, and stay in touch with your referring provider on your progress.",
  },
];

const conditionsTreated = [
  "Rheumatoid & psoriatic arthritis",
  "Systemic lupus erythematosus",
  "Crohn's disease & ulcerative colitis",
  "Psoriasis & other autoimmune skin conditions",
  "Multiple sclerosis",
  "Osteoporosis & low bone density",
  "Iron deficiency anemia",
  "Primary immunodeficiency disorders",
  "Migraine",
  "Thyroid eye disease",
  "Severe asthma & allergic conditions",
  "Gout",
  "General dehydration & fatigue",
];

export default function MedicalInfusionTherapyPage() {
  return (
    <PageLayout
      title="Medical Infusion Therapy"
      eyebrow="Infusions"
      intro="Physician-prescribed IV infusions and biologic therapies, administered in a comfortable, monitored setting close to home."
      breadcrumbs={[{ label: "Medical Infusion Therapies" }]}
      schema={schema}
      showTestimonials
      afterContent={
        <RelatedServices
          heading="Explore More"
          items={[
            {
              label: "Infusion Therapy Guide by Specialty",
              href: "/medical-infusion-therapy-guide/",
            },
            {
              label: "Therapies & Order Forms",
              href: "/therapies-order-forms/",
            },
            {
              label: "Hormone Replacement Therapy (HRT)",
              href: "/hormone-replacement-therapy-hrt/",
            },
            { label: "Peptide Therapy", href: "/peptide-therapy/" },
          ]}
        />
      }
    >
      <p>
        Impact Health &amp; Wellness offers medical infusion therapy for
        patients across a wide range of specialties, from rheumatology and
        gastroenterology to neurology and bone health. If your physician has
        prescribed an infusion or biologic therapy, our clinical team can
        administer it in a calm, well-equipped setting in Westerville, Ohio
        &mdash; no hospital visit required.{" "}
        <Link href="/contact-us/">Contact us</Link> to get started.
      </p>

      <h2>What Is Infusion Therapy?</h2>
      <p>
        Infusion therapy delivers medication, biologics, or nutrients
        directly into the bloodstream through an IV line, rather than by
        mouth. For many chronic and specialty conditions, this is the only
        way a medication can be given effectively &mdash; it allows for
        precise dosing and full absorption, without relying on the
        digestive system. Our nurse practitioners and clinical staff
        administer each infusion according to your prescribing physician&rsquo;s
        orders, monitoring you closely throughout.
      </p>

      <h2>Therapies We Offer</h2>
      <p>
        We support infusion and injectable therapies across a broad range
        of specialties, including rheumatology, immunology, pulmonology,
        gastroenterology, dermatology, ophthalmology, cardiology,
        neurology, hematology, endocrinology, nephrology, and bone health.
        For a full breakdown of specific medications by specialty, see our{" "}
        <Link href="/medical-infusion-therapy-guide/">infusion therapy guide</Link>
        . If your provider has already selected a therapy for you, you can
        find the matching order form on our{" "}
        <Link href="/therapies-order-forms/">therapies &amp; order forms</Link>{" "}
        page.
      </p>

      <h2>Benefits of Infusion Therapy</h2>
      <BenefitGrid items={benefits} />

      <h2>Who Infusion Therapy Is For</h2>
      <p>
        Infusion therapy is typically prescribed by a specialist for an
        ongoing condition that responds well to biologic or IV treatment.
        Conditions we commonly support include:
      </p>
      <ul className="not-prose grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {conditionsTreated.map((condition) => (
          <li
            key={condition}
            className="flex items-start gap-2 text-sm text-zinc-600"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
            />
            {condition}
          </li>
        ))}
      </ul>

      <h2>What to Expect</h2>
      <ProcessSteps items={processSteps} />

      <h2>Why Choose Impact Health &amp; Wellness</h2>
      <p>
        Our team has experience administering complex specialty infusions
        alongside routine hydration and wellness treatments. We coordinate
        closely with your prescribing physician on dosing and scheduling,
        keep a close eye on you throughout each visit, and aim to make an
        often stressful part of managing a chronic condition as
        comfortable as possible.
      </p>

      <h2>Risks &amp; Side Effects</h2>
      <p>
        As with any medical treatment, infusion therapy carries some risk
        of side effects. Common, generally mild reactions include:
      </p>
      <ul>
        <li>Soreness, bruising, or redness at the IV site</li>
        <li>Mild headache or fatigue following treatment</li>
        <li>Temporary lightheadedness</li>
      </ul>
      <p>
        Less common but more serious reactions can include allergic or
        infusion-related reactions. That&rsquo;s why every session is supervised
        by clinical staff trained to recognize and respond to these
        situations quickly.
      </p>

      <h2>Cost &amp; Insurance</h2>
      <p>
        Cost depends heavily on the specific medication and your insurance
        coverage, since specialty biologics are priced very differently
        from routine hydration or wellness infusions. Our team can help
        verify your benefits and any prior authorization requirements
        before your first visit &mdash; <Link href="/contact-us/">reach out</Link>{" "}
        and we&rsquo;ll walk you through it.
      </p>

      <h2>Refer a Patient</h2>
      <p>
        If you&rsquo;re a physician or care team looking to refer a patient for
        infusion therapy, we&rsquo;re glad to help coordinate their care. Send us
        the relevant clinical documentation and our team will follow up
        promptly to confirm therapy, dosing, and scheduling.{" "}
        <Link href="/contact-us/">Contact our office</Link> to start a referral.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}
