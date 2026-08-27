import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

export const metadata: Metadata = {
  title: "Regenerative Medicine in Westerville | Non-Surgical Healing",
  description:
    "Impact Health & Wellness in Westerville, OH offers regenerative medicine for pain relief and improved mobility. Learn about our non-surgical treatment options.",
  alternates: { canonical: "/regenerative-medicine/" },
};

const faqItems = [
  {
    question: "Can regenerative medicine help with osteoarthritis?",
    answer:
      "Yes, regenerative medicine treatments can provide relief for osteoarthritis by regenerating damaged cartilage, reducing inflammation and alleviating pain, potentially delaying or eliminating the need for joint replacement surgery.",
  },
  {
    question: "Is regenerative medicine covered by insurance?",
    answer:
      "Coverage for regenerative medicine treatments varies by the type of treatment, insurance provider and plan. We recommend contacting your insurance company to inquire about coverage specifics. Our clinic also offers various payment options to accommodate different budgets and needs.",
  },
  {
    question:
      "Are there any lifestyle changes I should consider alongside regenerative medicine treatments?",
    answer:
      "Healthy lifestyle choices such as a balanced diet, regular exercise and adequate rest can enhance the effectiveness of regenerative medicine treatments. We may also recommend complementary treatments based on your specific condition.",
  },
];

const benefitItems = [
  {
    title: "Pain Reduction",
    description:
      "Significantly reduce pain from chronic conditions and acute injuries.",
  },
  {
    title: "Improved Functionality",
    description:
      "Restore function to damaged tissues and joints, improving mobility and quality of life.",
  },
  {
    title: "Non-Surgical",
    description:
      "A non-invasive alternative to surgery, reducing risks and recovery time.",
  },
  {
    title: "Natural Healing",
    description:
      "Uses the body's own healing mechanisms to support and accelerate natural tissue repair.",
  },
  {
    title: "Long-Term Relief",
    description:
      "Addresses the underlying causes of pain and dysfunction, offering more durable outcomes.",
  },
];

const processItems = [
  {
    title: "Consultation",
    description:
      "As a new patient at Impact Health & Wellness, you begin your journey with a personalized consultation with one of our regenerative medicine specialists. During this session, we'll discuss your medical history, current health concerns and treatment goals to create a tailored plan that addresses your specific needs.",
  },
  {
    title: "Procedure",
    description:
      "Our regenerative medicine treatments, including tissue allografts, structural tissue products and platelet-rich plasma (PRP) injections, are performed in our comfortable and accessible Westerville clinic. These procedures are minimally invasive and typically take just a few hours, allowing you to return to your daily activities with minimal downtime.",
  },
  {
    title: "Recovery",
    description:
      "Recovery times vary depending on the specific treatment and individual patient factors. Our team will provide detailed aftercare instructions and support to ensure a smooth recovery process. Most patients experience noticeable improvements in their symptoms within weeks to months following the procedure.",
  },
  {
    title: "Follow-ups",
    description:
      "We believe in a collaborative approach to healthcare, which is why follow-up appointments are a crucial part of our treatment protocol. These sessions allow us to monitor your progress, make any necessary adjustments to your treatment plan and ensure optimal results.",
  },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/regenerative-medicine/",
    url: "https://impacthealthoh.com/regenerative-medicine/",
    name: "Regenerative Medicine in Westerville | Non-Surgical Healing",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T18:10:57+00:00",
    dateModified: "2026-04-10T11:26:28+00:00",
    description:
      "Impact Health & Wellness in Westerville, OH offers regenerative medicine for pain relief and improved mobility. Learn about our non-surgical treatment options.",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/regenerative-medicine/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/regenerative-medicine/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/regenerative-medicine/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Regenerative Medicine" },
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

export default function RegenerativeMedicinePage() {
  return (
    <PageLayout
      title="Regenerative Medicine"
      intro="Unlock your body's natural healing potential with innovative regenerative medicine approaches. Discover treatments that promote tissue repair and support long-term well-being."
      breadcrumbs={[{ label: "Regenerative Medicine" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/regenerative-medicine.jpg",
        alt: "Regenerative Medicine",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/regenerative-medicine/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        The fast-growing field of regenerative medicine offers new
        possibilities for patients with a range of issues related to healing
        and overall wellness. By transplanting healthy donated cells into the
        affected area, these treatments can significantly enhance the body’s
        natural healing process, leading to improved function and reduced
        pain.
      </p>
      <p>
        <a href="https://impacthealthoh.com/">Impact Health & Wellness</a> is
        at the forefront of providing these advanced treatment options to our
        clients in Westerville, Columbus, Dublin, Gahanna and all of Central
        Ohio. <a href="/contact-us/">Contact us</a> to schedule a consultation
        and discover how regenerative medicine treatments can benefit you.
      </p>

      <h2>What is Regenerative Medicine?</h2>
      <p>
        Regenerative medicine is a groundbreaking field of medical science
        that focuses on repairing, replacing, regenerating or enhancing the
        function of tissues. This innovative approach aims to restore the
        structure and function of damaged tissues, offering new hope for
        patients with conditions that are currently difficult or impossible
        to cure.
      </p>
      <p>
        At its core, regenerative medicine involves using a combination of
        several key techniques, including tissue engineering and the use of
        biologically active molecules such as growth factors.
      </p>
      <p>
        Regenerative medicine holds great promise for treating a wide range
        of medical conditions, from injuries and chronic diseases to
        age-related issues. It aims not just to treat the symptoms of these
        conditions but to address the underlying causes, potentially offering
        more durable and comprehensive solutions than traditional treatments.
      </p>

      <h3>Benefits</h3>
      <BenefitGrid items={benefitItems} />

      <h2>Why Choose Impact Health & Wellness?</h2>
      <p>
        At Impact Health & Wellness in Westerville, our dedicated team of
        medical professionals specializes in the latest regenerative medicine
        techniques. We pride ourselves on our holistic approach to
        healthcare, ensuring each patient receives a personalized treatment
        plan tailored to their specific needs.
      </p>
      <p>
        By choosing our clinic, you benefit from our expertise,
        state-of-the-art facilities, and our commitment to your health and
        recovery.
      </p>

      <h2>Ideal Candidates for Regenerative Medicine Treatments</h2>
      <p>
        Regenerative medicine can be suitable for individuals of all ages,
        particularly those seeking non-surgical treatment options for various
        conditions. Ideal candidates typically are looking to address
        concerns such as:
      </p>
      <ul>
        <li>Acute injuries</li>
        <li>Burns</li>
        <li>Chronic pain</li>
        <li>Diabetic ulcers and non-healing wounds</li>
        <li>Osteoarthritis</li>
        <li>Sports-related injuries</li>
        <li>Tendonitis</li>
      </ul>
      <p>
        Contraindications may include certain medical conditions, pregnancy
        and active infections. It’s essential to consult with your healthcare
        provider to determine if this treatment is right for you.
      </p>

      <h2>What to Expect from Your Treatment</h2>
      <ProcessSteps items={processItems} />

      <h2>Cost of Regenerative Medicine Treatments in Ohio</h2>
      <p>
        The cost of our regenerative medicine treatments is based on the type
        of therapy, the complexity of the procedure, individual patient needs
        and in some cases, your insurance plan. At Impact Health & Wellness,
        we strive to provide transparent pricing and will discuss all options
        and costs during your consultation. <a href="/contact-us/">
          Contact us
        </a>{" "}
        for more detailed information.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health & Wellness in Westerville, Ohio, we offer a
        comprehensive suite of treatments that complement our regenerative
        medicine services. Each of these treatments is designed to promote
        overall health and wellness, addressing a wide range of concerns from
        chronic pain to weight management. Here’s a closer look at some of
        the related services we provide:
      </p>
      <ul>
        <li>
          <a href="/prp-therapy/">PRP Therapy</a>: Utilizing the healing
          properties of your own blood, PRP (Platelet-Rich Plasma) Therapy
          stimulates tissue repair and regeneration. It’s a
          minimally-invasive, gentle solution for pain management and
          improved tissue function.
        </li>
        <li>
          <a href="/chiropractic-care/">Chiropractic Care</a>: Chiropractic
          care involves adjusting the spine and other parts of the body to
          alleviate pain and support the body’s natural ability to heal
          itself. This form of functional medicine can help you achieve
          relief from back pain, neck pain, headaches and other
          musculoskeletal issues without surgery or medication.
        </li>
        <li>
          <a href="/wound-care/">Advanced Wound Care</a>: Our advanced wound
          care services utilize the latest techniques and technologies to
          promote healing in chronic and complex wounds such as diabetic
          ulcers, venous stasis ulcers or wounds that have not responded to
          traditional treatments. We offer both in-clinic and at-home
          services for your convenience.
        </li>
        <li>
          <a href="/anti-aging-wellness/">Medical Weight Loss Programs</a>: We
          combine nutrition counseling, fitness recommendations and, when
          appropriate, medication management to help you achieve and
          maintain a healthy weight. This holistic approach is perfect for
          those who have struggled with weight loss in the past and are
          looking for a sustainable, health-focused solution.
        </li>
        <li>
          <a href="/shockwave/">Shockwave Therapy</a>: This non-invasive
          treatment uses acoustic waves to stimulate healing in injured
          tissues. It’s particularly effective for treating conditions like
          plantar fasciitis, tendonitis, ligament injuries and other soft
          tissue disorders.
        </li>
      </ul>

      <h2>Book Your Regenerative Medicine Consultation in Westerville, Ohio</h2>
      <p>
        Located in the heart of Westerville and easily accessible to
        residents of Columbus, Dublin, Gahanna and the wider Central Ohio
        area, our facility offers leading-edge treatments in a comfortable
        and welcoming environment.
      </p>
      <p>
        Take the first step towards a healthier, pain-free life.{" "}
        <a href="/contact-us/">Schedule</a> your regenerative medicine
        consultation today and let us show you how our advanced treatments
        can improve your quality of life and help you heal faster.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}
