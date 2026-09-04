export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  dateModified: string;
}

/** Formats an ISO `YYYY-MM-DD` date string as e.g. "December 16, 2024". */
export function formatBlogDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Mirrors the 16 published posts on the live site (discovered via the WP REST API,
// since the live /blog/ archive index returns 404 and sitemap.xml is spam-polluted).
export const blogPosts: BlogPost[] = [
  {
    slug: "peptides-for-muscle-building",
    title:
      "Muscle Building with Peptides: Impact Health's Guide",
    description:
      "Maximize muscle growth, speed up recovery, and accelerate fat loss with peptide therapy at Impact Health & Wellness in Westerville, OH. Book your consult!",
    image: "/images/blog/peptides-for-muscle-building.webp",
    imageAlt:
      "Image of a man lifting weights at the gym, emphasizing muscle building and strength gains, representing the benefits of peptide treatments for muscle growth and performance.",
    date: "2024-12-16",
    dateModified: "2024-12-16",
  },
  {
    slug: "how-to-improve-prostate-health",
    title:
      "Improve Prostate Health: Tips for Bloodwork & Balance (2025)",
    description:
      "Prioritize your prostate health! Get expert advice on bloodwork, hormone balance, and lifestyle changes at Impact Health & Wellness. Schedule an exam today!",
    image: "/images/blog/how-to-improve-prostate-health.webp",
    imageAlt:
      "The image shows an elderly man engaging in a serious conversation with a healthcare professional, who is seated across from him. The man is wearing a blue plaid shirt and appears to be explaining or discussing something with a focused expression. His hands are gesturing as he speaks, conveying engagement and sincerity. The healthcare professional, seen from behind, is listening attentively, dressed in a white coat, indicating a clinical or consultative setting. The interaction suggests a discussion about health-related topics, potentially emphasizing the importance of issues like prostate health for older men. The setting is professional and caring, reflecting a supportive environment for open conversation about personal health concerns.",
    date: "2024-11-08",
    dateModified: "2026-04-10",
  },
  {
    slug: "healthy-blood-glucose-levels",
    title:
      "Healthy Blood Glucose: Tips from Impact Health & Wellness",
    description:
      "Take control of your blood glucose levels with Impact Health & Wellness. Learn how to reverse insulin resistance and protect your health. Book an exam today!",
    image: "/images/blog/healthy-blood-glucose-levels.jpg",
    imageAlt:
      "A woman seated at a table holding a fork with a vegetable skewer while someone offers her a plate of colorful donuts. The woman appears to be making a healthy choice, looking at the vegetables instead of the donuts.",
    date: "2024-10-09",
    dateModified: "2024-10-09",
  },
  {
    slug: "hormone-therapy-for-menopause",
    title:
      "Hormone Therapy for Menopause: Impact Health's Guide",
    description:
      "Reclaim your comfort with expert Hormone Therapy for menopause at Impact Health & Wellness in Westerville, OH. Improve your quality of life. Schedule now!",
    image: "/images/blog/hormone-therapy-for-menopause.jpg",
    imageAlt:
      "Hormone therapy for menopause",
    date: "2024-09-11",
    dateModified: "2026-04-10",
  },
  {
    slug: "umbilical-cord-stem-cell-injections",
    title:
      "Joint Pain Relief: Impact Health's Stem Cell Injections",
    description:
      "Stop letting joint pain hold you back. Discover the healing power of umbilical cord stem cell injections at Impact Health & Wellness. Call us to learn more!",
    image: "/images/blog/umbilical-cord-stem-cell-injections.jpg",
    imageAlt:
      "Umbilical Cord Stem Cell Injections: A Revolutionary Approach to Joint Pain and Soft Tissue Injuries",
    date: "2024-07-24",
    dateModified: "2024-07-24",
  },
  {
    slug: "hidden-dangers-of-amazon-supplements",
    title:
      "Are Amazon Supplements Safe? The Hidden Dangers Revealed",
    description:
      "Stop guessing with online supplements. Impact Health & Wellness in Westerville, OH offers safe, medical-grade alternatives you can trust. Shop with us today!",
    image: "/images/blog/hidden-dangers-of-amazon-supplements.jpg",
    imageAlt:
      "Dangers of amazon supplements",
    date: "2024-05-24",
    dateModified: "2024-05-24",
  },
  {
    slug: "hrt-myths",
    title:
      "HRT Myths Debunked: The Real Facts About Your Health",
    description:
      "Stop letting myths hold you back from relief. Discover the real facts about Hormone Replacement Therapy for menopause at Impact Health & Wellness. Call today!",
    image: "/images/blog/hrt-myths.jpg",
    imageAlt:
      "HRT Myths",
    date: "2024-05-17",
    dateModified: "2026-04-10",
  },
  {
    slug: "innovations-in-neuropathy-treatments",
    title:
      "Neuropathy Relief: How Laser & Shockwave Therapy Works",
    description:
      "Westerville, OH: Discover drug-free neuropathy treatments with laser & shockwave therapy at Impact Health & Wellness. Relieve tingling & numbness now.",
    image: "/images/blog/innovations-in-neuropathy-treatments.jpg",
    imageAlt:
      "Neuropathy Treatment",
    date: "2024-04-03",
    dateModified: "2025-03-19",
  },
  {
    slug: "meal-planning-made-easy",
    title:
      "Healthy Eating: Save Time, Stress & Money with Meal Planning",
    description:
      "Meal planning isn't just about deciding what's for dinner, it's a tool that saves money, reduces stress, avoids wasting food, and helps you eat more healthfully.",
    image: "/images/blog/meal-planning-made-easy.webp",
    imageAlt:
      "meal-planning-made-easy",
    date: "2024-01-17",
    dateModified: "2024-02-12",
  },
  {
    slug: "exploring-the-fundamentals-of-a-healthy-diet",
    title:
      "Healthy Diet Essentials: Impact Health's Guide to Wellness",
    description:
      "Fuel your body right with expert nutrition guidance from Impact Health & Wellness. Discover custom plans packed with nutrient-rich foods. Get started today!",
    image: "/images/blog/exploring-the-fundamentals-of-a-healthy-diet.webp",
    imageAlt:
      "meal-planning-made-easy",
    date: "2024-01-04",
    dateModified: "2026-04-10",
  },
  {
    slug: "unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness",
    title:
      "Laser Therapy at Impact Health: Pain Relief & Healing",
    description:
      "Find pain relief with laser therapy at Impact Health & Wellness in Westerville, OH. Non-invasive treatment for accelerated healing and minimal side effects.",
    image: "/images/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness.webp",
    imageAlt:
      "laser-therapy-at-impact-2",
    date: "2023-12-12",
    dateModified: "2024-02-12",
  },
  {
    slug: "the-harmony-within-a-guide-to-achieving-mind-body-balance",
    title:
      "Mind-Body Balance Guide: Impact Health & Wellness Tips",
    description:
      "Achieve true mind-body balance with Impact Health & Wellness. Elevate your daily well-being through expert meditation, exercise, and nutrition. Start today!",
    image: "/images/blog/the-harmony-within-a-guide-to-achieving-mind-body-balance.webp",
    imageAlt:
      "the-harmony-within",
    date: "2023-12-09",
    dateModified: "2024-02-12",
  },
  {
    slug: "understanding-the-role-of-social-connections",
    title:
      "Social Connections: Boost Your Health & Well-being",
    description:
      "Did you know strong social connections improve your physical health? Discover how Impact Health & Wellness can boost your happiness. Start your journey today!",
    image: "/images/blog/understanding-the-role-of-social-connections.webp",
    imageAlt:
      "understanding-the-role-of-social-connections",
    date: "2023-12-05",
    dateModified: "2024-02-12",
  },
  {
    slug: "the-basics-of-mindful-eating",
    title:
      "The Basics of Mindful Eating: Learn Awareness of Triggers That Lead to Mindless Eating",
    description:
      "It has become increasingly common to multitask while eating. Learn the awareness of triggers that lead to mindless eating and how to build healthier habits.",
    image: "/images/blog/the-basics-of-mindful-eating.webp",
    imageAlt:
      "mindful-eating",
    date: "2023-11-15",
    dateModified: "2024-02-12",
  },
  {
    slug: "strength-training-by-age",
    title:
      "Strength Training by Age: Your Health at Impact Health",
    description:
      "Unlock lifelong vitality with customized strength training at Impact Health & Wellness. Ready to boost your health at any age? Schedule your session today!",
    image: "/images/blog/strength-training-by-age.webp",
    imageAlt:
      "strength-training-by-age",
    date: "2023-11-08",
    dateModified: "2026-04-10",
  },
  {
    slug: "discover-the-transformative-power-of-iv-vitamin-therapy",
    title:
      "Transformative IV Therapy Benefits: How to Boost Your Health",
    description:
      "Instantly boost your energy and immunity! Discover the powerful benefits of custom IV vitamin therapy at Impact Health & Wellness in Westerville. Book today!",
    image: "/images/blog/discover-the-transformative-power-of-iv-vitamin-therapy.jpeg",
    imageAlt:
      "iv-infusion-therapy-at-impact",
    date: "2023-11-04",
    dateModified: "2025-04-21",
  },
];
