export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://impacthealthoh.com"
).replace(/\/$/, "");

export const DEFAULT_COVER = "/images/blog/default-cover.jpg";

export const DEFAULT_COVER_ALT = "Impact Health & Wellness blog article cover";

export const DEFAULT_CTA = {
<<<<<<< HEAD
  label: "Contact us",
=======
  label: "Book an appointment",
>>>>>>> fca3edc (feedback edits)
  href: "/contact-us/",
};

/** Cover prompt for Impact Health & Wellness. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  return [
<<<<<<< HEAD
    "Editorial photograph, 16:9 landscape, premium wellness-clinic brand photography.",
    "Calm modern medical spa and chiropractic wellness studio in Westerville, Ohio.",
    "Navy and teal color palette, natural light, linen, plants, clean treatment room details.",
    `Theme inspired by: ${title.slice(0, 120)}.`,
    "Cinematic lighting, sharp, no grain, no watermark.",
    "No people, no patient faces, no medical gore, no needles, no wounds.",
    "No text, no letters, no logos, no captions, no readable signage.",
=======
    "Editorial photograph, 16:9 landscape, premium wellness clinic photography.",
    `Theme inspired by: ${title.slice(0, 120)}.`,
    "Calm modern medical wellness setting, soft natural light, clean and reassuring.",
    "Cinematic lighting, sharp, no grain, no watermark.",
    "No text, no letters, no logos, no captions, no readable signage.",
    "No patient faces, no medical procedures, no gore.",
>>>>>>> fca3edc (feedback edits)
  ].join(" ");
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = [];
<<<<<<< HEAD

export function isRemoteImageSrc(src: string): boolean {
  return /^https?:\/\//i.test(src);
}

/**
 * Topic → existing committed blog photos. URL map only — do not fs.stat public/.
 * Used when Ranked has no featured image, Blob, or OpenAI cover.
 */
const TOPIC_COVERS: { test: RegExp; src: string }[] = [
  {
    test: /neuropath/i,
    src: "/images/blog/innovations-in-neuropathy-treatments.jpg",
  },
  {
    test: /shockwave|sports injur|laser/i,
    src: "/images/blog/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness.webp",
  },
  {
    test: /hip|knee|joint|arthritis|regenerative|stem cell/i,
    src: "/images/blog/umbilical-cord-stem-cell-injections.jpg",
  },
  {
    test: /neck|back|sciatica|spinal|chiropract/i,
    src: "/images/blog/innovations-in-neuropathy-treatments.jpg",
  },
  {
    test: /migraine|headache/i,
    src: "/images/blog/hormone-therapy-for-menopause.jpg",
  },
  {
    test: /physical therapy|\bpt\b/i,
    src: "/images/blog/strength-training-by-age.webp",
  },
];

export function topicCover(title: string): string {
  for (const row of TOPIC_COVERS) {
    if (row.test.test(title)) return row.src;
  }
  return DEFAULT_COVER;
}
=======
>>>>>>> fca3edc (feedback edits)
