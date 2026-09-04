import type { FaqItem } from "@/components/page/Faq";

/**
 * The 28 real services/conditions in the "Areas We Serve" matrix. Every
 * `href`, `name`, and `tagline` maps to a real, existing page on the site —
 * `tagline` is the real marketing intro already used on that page (short,
 * client-approved copy), reused here as a factual anchor for each combo
 * page rather than invented from scratch.
 */
export interface AreaTopic {
  slug: string;
  name: string;
  category: "service" | "condition" | "other";
  /** Real href of the source service/condition page this topic maps to. */
  href: string;
  /** Real intro copy from the source page. */
  tagline: string;
  /** One real, clinically-safe FAQ about the topic itself (not location-specific). */
  faq: FaqItem;
  /** Slug of a complementary topic (service ↔ condition) for cross-linking. */
  relatedSlug: string;
  /** Mid-sentence mention form for topics whose `name` contains an acronym (e.g. "PRP", "HA", "IV") that shouldn't be lowercased. Defaults to `name.toLowerCase()`. */
  mentionName?: string;
}

export const areaTopics: AreaTopic[] = [
  {
    slug: "regenerative-medicine",
    name: "Regenerative Medicine",
    category: "service",
    href: "/regenerative-medicine/",
    tagline:
      "Unlock your body's natural healing potential with innovative regenerative medicine approaches that promote tissue repair and support long-term well-being.",
    faq: {
      question: "Is regenerative medicine right for me?",
      answer:
        "Our team evaluates your health history and goals during a consultation to determine whether regenerative options like PRP, HA gel injections, or shockwave therapy are a good fit before recommending a treatment plan.",
    },
    relatedSlug: "chronic-pain",
  },
  {
    slug: "ha-gel-injections",
    name: "HA Gel Injections",
    mentionName: "HA gel injections",
    category: "service",
    href: "/ha-gel-injections/",
    tagline:
      "Experience lasting relief with HA Gel Injections, a targeted treatment for joint pain that lubricates and cushions the joint to restore movement and comfort.",
    faq: {
      question: "How many HA gel injections will I need?",
      answer:
        "Most patients receive a short series of injections into the affected joint, with many noticing improved comfort and mobility within a few weeks of completing the series.",
    },
    relatedSlug: "knee-pain",
  },
  {
    slug: "prp-therapy",
    name: "PRP Therapy",
    mentionName: "PRP therapy",
    category: "service",
    href: "/prp-therapy/",
    tagline:
      "Platelet-rich plasma therapy is an innovative regenerative medicine treatment that harnesses the healing power of your own blood to rejuvenate the body and promote healing.",
    faq: {
      question: "Is PRP therapy safe?",
      answer:
        "Yes, PRP uses a concentration of platelets drawn from your own blood, so there is no risk of an allergic reaction to a foreign substance.",
    },
    relatedSlug: "sports-injuries",
  },
  {
    slug: "shockwave",
    name: "Shockwave Therapy",
    category: "service",
    href: "/shockwave/",
    tagline:
      "Embrace the future of healing with Shockwave Therapy, a non-surgical treatment that accelerates recovery, reduces pain, and improves mobility.",
    faq: {
      question: "Does shockwave therapy hurt?",
      answer:
        "Most patients feel a tapping or pulsing sensation rather than sharp pain, and sessions are typically well tolerated with no downtime afterward.",
    },
    relatedSlug: "foot-ankle-pain",
  },
  {
    slug: "laser-therapy",
    name: "Laser Therapy",
    category: "service",
    href: "/laser-therapy/",
    tagline:
      "Laser therapy at Impact Health & Wellness offers a non-invasive treatment option for pain relief and healing.",
    faq: {
      question: "How many laser therapy sessions are typically needed?",
      answer:
        "Treatment plans vary by condition, but many patients notice reduced pain and inflammation within a handful of sessions.",
    },
    relatedSlug: "neck-pain",
  },
  {
    slug: "neuropathy-treatments",
    name: "Neuropathy Treatments",
    category: "service",
    href: "/neuropathy-treatments/",
    tagline:
      "Understand the symptoms, types, and management approaches for neuropathy, and get treatment designed to improve nerve function and reduce pain.",
    faq: {
      question: "Can neuropathy treatments help with diabetic neuropathy?",
      answer:
        "Yes, our neuropathy treatments are designed to improve blood flow and nerve function, which can help ease symptoms tied to diabetic neuropathy and other nerve conditions.",
    },
    relatedSlug: "foot-ankle-pain",
  },
  {
    slug: "anti-aging-wellness",
    name: "Anti-Aging & Weight Loss",
    category: "service",
    href: "/anti-aging-wellness/",
    tagline:
      "Transform your life with our Anti-Aging & Weight Loss programs, tailored strategies to rejuvenate your body and achieve lasting wellness.",
    faq: {
      question: "What does an anti-aging and weight loss program include?",
      answer:
        "Programs are built around your goals and may combine nutrition guidance, peptide or hormone support, and IV therapy to help you look and feel your best.",
    },
    relatedSlug: "hormone-replacement-therapy-hrt",
  },
  {
    slug: "hormone-replacement-therapy-hrt",
    name: "Hormone Replacement Therapy",
    category: "service",
    href: "/hormone-replacement-therapy-hrt/",
    tagline:
      "Hormone Replacement Therapy (HRT) offers a promising solution for men and women experiencing the adverse effects of hormonal imbalances, such as mood swings, weight gain, and decreased energy levels.",
    faq: {
      question: "Who is a good candidate for HRT?",
      answer:
        "Men and women experiencing symptoms of hormonal imbalance, like low energy, mood changes, or weight gain, may benefit from a hormone evaluation to see if HRT is appropriate.",
    },
    relatedSlug: "anti-aging-wellness",
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    mentionName: "IV therapy",
    category: "service",
    href: "/iv-therapy/",
    tagline:
      "IV Therapy at Impact Health & Wellness offers an optimal solution to rejuvenate, hydrate, and boost your overall health efficiently.",
    faq: {
      question: "What can IV therapy help with?",
      answer:
        "Our IV blends are formulated to support hydration, energy, immune function, and recovery, using vitamins like B-complex and glutathione.",
    },
    relatedSlug: "anti-aging-wellness",
  },
  {
    slug: "peptide-therapy",
    name: "Peptide Therapy",
    category: "service",
    href: "/peptide-therapy/",
    tagline:
      "At Impact Health & Wellness, we're at the forefront of innovative health solutions with our new-age Peptide Therapy.",
    faq: {
      question: "What is peptide therapy used for?",
      answer:
        "Peptide therapy is used to support goals like muscle recovery, weight management, energy, and healthy aging as part of a personalized wellness plan.",
    },
    relatedSlug: "anti-aging-wellness",
  },
  {
    slug: "chiropractic-care",
    name: "Chiropractic Care",
    category: "service",
    href: "/chiropractic-care/",
    tagline:
      "Our holistic chiropractic care combines adjustments, therapy, and non-surgical treatments to address the root cause of pain, not just the symptoms.",
    faq: {
      question: "What conditions does chiropractic care treat?",
      answer:
        "Our chiropractors commonly treat back pain, neck pain, and joint issues using a multidisciplinary approach that includes adjustments, therapy, and non-surgical treatments.",
    },
    relatedSlug: "back-pain",
  },
  {
    slug: "spinal-decompression",
    name: "Spinal Decompression",
    category: "service",
    href: "/chiropractic-care/spinal-decompression/",
    tagline:
      "Rediscover comfort and mobility through our state-of-the-art Spinal Decompression therapy, a gentle, non-surgical path back to wellness.",
    faq: {
      question: "Is spinal decompression therapy painful?",
      answer:
        "No, spinal decompression is a gentle, non-surgical stretching therapy designed to relieve pressure on the spine, and most patients find it comfortable and relaxing.",
    },
    relatedSlug: "back-pain",
  },
  {
    slug: "back-pain",
    name: "Back Pain",
    category: "condition",
    href: "/conditions-we-treat/back-pain/",
    tagline:
      "Experience lasting relief from back pain with a multidisciplinary approach, including chiropractic care, therapy, and non-surgical treatments.",
    faq: {
      question: "When should I see someone about back pain?",
      answer:
        "If back pain lasts more than a few days, limits your daily activities, or comes with numbness or tingling, it's worth having it evaluated to find the root cause.",
    },
    relatedSlug: "chiropractic-care",
  },
  {
    slug: "carpal-tunnel",
    name: "Carpal Tunnel",
    category: "condition",
    href: "/conditions-we-treat/carpal-tunnel/",
    tagline:
      "Understand Carpal Tunnel Syndrome, the causes, symptoms, and discomfort associated with this common condition affecting the hands.",
    faq: {
      question: "Can carpal tunnel be treated without surgery?",
      answer:
        "Many patients find relief through non-invasive approaches like activity modification, bracing, and targeted therapy before surgery is ever considered.",
    },
    relatedSlug: "laser-therapy",
  },
  {
    slug: "chronic-pain",
    name: "Chronic Pain",
    category: "condition",
    href: "/conditions-we-treat/chronic-pain/",
    tagline:
      "Discover personalized care for chronic pain conditions like fibromyalgia and sciatica, relief is possible.",
    faq: {
      question: "What causes chronic pain?",
      answer:
        "Chronic pain can stem from conditions like fibromyalgia, past injuries, or nerve dysfunction; our team looks for the underlying cause rather than just masking symptoms.",
    },
    relatedSlug: "regenerative-medicine",
  },
  {
    slug: "foot-ankle-pain",
    name: "Foot & Ankle Pain",
    category: "condition",
    href: "/conditions-we-treat/foot-ankle-pain/",
    tagline:
      "Understand foot anatomy, pain types, and treatment options to alleviate discomfort and know when to seek professional help.",
    faq: {
      question: "What are common causes of foot and ankle pain?",
      answer:
        "Foot and ankle pain is often linked to overuse, prior injury, or nerve issues like neuropathy; treatment starts with identifying the specific cause.",
    },
    relatedSlug: "shockwave",
  },
  {
    slug: "hip-pain",
    name: "Hip Pain",
    category: "condition",
    href: "/conditions-we-treat/hip-pain/",
    tagline:
      "Discover insights into hip pain, including causes like arthritis, and strategies for relief and improving hip health effectively.",
    faq: {
      question: "Is hip pain always related to arthritis?",
      answer:
        "Not always: hip pain can also stem from muscle imbalances, prior injury, or joint irritation, so an evaluation helps determine the right treatment path.",
    },
    relatedSlug: "ha-gel-injections",
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    category: "condition",
    href: "/conditions-we-treat/knee-pain/",
    tagline: "Personalized treatment to relieve knee pain and get you moving freely again.",
    faq: {
      question: "Do I need surgery for knee pain?",
      answer:
        "Many patients improve with non-surgical options such as regenerative injections, shockwave therapy, and physical therapy before surgery is considered.",
    },
    relatedSlug: "ha-gel-injections",
  },
  {
    slug: "migraines-and-headaches",
    name: "Migraines and Headaches",
    category: "condition",
    href: "/conditions-we-treat/migraines-and-headaches/",
    tagline: "Find natural, holistic relief from migraines and headaches.",
    faq: {
      question: "Can chiropractic care help with migraines?",
      answer:
        "For some patients, migraines and tension headaches are linked to neck and upper spine tension, so chiropractic care and related therapies may help reduce frequency and severity.",
    },
    relatedSlug: "chiropractic-care",
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    category: "condition",
    href: "/conditions-we-treat/neck-pain/",
    tagline:
      "Uncover the complexity of neck pain, its origins, treatments, and long-term management strategies for improved quality of life.",
    faq: {
      question: "What typically causes neck pain?",
      answer:
        "Neck pain is often related to posture, prior injury (including whiplash), or joint irritation in the cervical spine.",
    },
    relatedSlug: "chiropractic-care",
  },
  {
    slug: "osteoarthritis",
    name: "Osteoarthritis",
    category: "condition",
    href: "/conditions-we-treat/osteoarthritis/",
    tagline:
      "Explore comprehensive insights into osteoarthritis, from its origins and symptoms to innovative treatments aimed at addressing its root causes.",
    faq: {
      question: "What treatment options are available for osteoarthritis?",
      answer:
        "Options range from HA gel injections and regenerative therapies to physical therapy, aimed at reducing joint pain and improving function without surgery.",
    },
    relatedSlug: "regenerative-medicine",
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    category: "condition",
    href: "/conditions-we-treat/sports-injuries/",
    tagline: "Expert sports injury treatment and rehab to get you back in the game.",
    faq: {
      question: "How soon can I return to sports after an injury?",
      answer:
        "Recovery timelines vary by injury and treatment plan, but many patients return to activity faster with a targeted rehab and recovery program.",
    },
    relatedSlug: "prp-therapy",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    category: "condition",
    href: "/conditions-we-treat/shoulder-pain/",
    tagline:
      "Understand the common causes of shoulder pain and explore non-surgical treatment options designed to restore movement and relieve discomfort.",
    faq: {
      question: "Do I need surgery for shoulder pain?",
      answer:
        "Many patients improve with non-surgical options such as chiropractic care, physical therapy, and regenerative medicine before surgery is considered.",
    },
    relatedSlug: "shockwave",
  },
  {
    slug: "whiplash",
    name: "Whiplash",
    category: "condition",
    href: "/conditions-we-treat/whiplash/",
    tagline:
      "Discover the diverse causes and effective treatments for whiplash, emphasizing non-opioid, non-surgical solutions.",
    faq: {
      question: "How long does whiplash take to heal?",
      answer:
        "Recovery varies by severity, but most whiplash cases improve within a few weeks to a couple of months with the right combination of chiropractic care and therapy.",
    },
    relatedSlug: "chiropractic-care",
  },
  {
    slug: "personal-injuries",
    name: "Personal Injuries",
    category: "other",
    href: "/personal-injuries/",
    tagline:
      "Navigate your recovery from personal injuries with dedicated support to regain your strength and wellness with tailored care.",
    faq: {
      question: "Do you work directly with personal injury attorneys?",
      answer:
        "Yes, our team is experienced in coordinating care and documentation for patients working with a personal injury attorney.",
    },
    relatedSlug: "chiropractic-care",
  },
  {
    slug: "car-accident-injuries",
    name: "Car Accident Injuries",
    category: "other",
    href: "/car-accident-injuries/",
    tagline:
      "Heal from car accident trauma with gentle, personalized care that helps you safely return to optimal vitality.",
    faq: {
      question: "What should I do after a car accident even if I feel fine?",
      answer:
        "Some injuries, like whiplash or soft tissue damage, don't show symptoms right away; an evaluation soon after the accident helps catch issues early.",
    },
    relatedSlug: "whiplash",
  },
  {
    slug: "workers-compensation",
    name: "Workers' Compensation",
    category: "other",
    href: "/workers-compensation/",
    tagline:
      "Secure your rights and benefits with comprehensive Workers' Compensation assistance and dedicated support for your recovery.",
    faq: {
      question: "Do you accept workers' compensation claims?",
      answer:
        "Yes, our team works with workers' compensation cases to help you get the treatment and documentation you need for your claim.",
    },
    relatedSlug: "back-pain",
  },
  {
    slug: "school-sports-physicals",
    name: "School & Sports Physicals",
    category: "other",
    href: "/school-sports-physicals/",
    tagline:
      "Fast, convenient school and sports physicals at Impact Health & Wellness, without the long waits typical of many primary care offices.",
    faq: {
      question: "How fast can I get a school or sports physical scheduled?",
      answer:
        "We can usually accommodate a same-day or next-day appointment, so you're not stuck waiting weeks like with many primary care offices.",
    },
    relatedSlug: "sports-injuries",
  },
];

export function getTopicBySlug(slug: string): AreaTopic | undefined {
  return areaTopics.find((topic) => topic.slug === slug);
}
