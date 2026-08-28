import type { FaqItem } from "@/components/page/Faq";
import type { AreaLocation } from "./locations";
import type { AreaTopic } from "./topics";
import { topicMention } from "./content";

/**
 * Location-logistics FAQ templates, shared across all topics. These never
 * make clinical claims — they only cover travel/scheduling logistics, and
 * always make explicit that Westerville is the only office (never implying
 * a satellite location in the visited city).
 */
const LOGISTIC_FAQ_TEMPLATES: Array<(location: AreaLocation, topic: AreaTopic) => FaqItem> = [
  (location) => ({
    question: `Do you have an office in ${location.name}?`,
    answer:
      location.isHomeBase
        ? `Yes — our only office is right here in Westerville at 193 W. Schrock Road.`
        : `No — our only location is at 193 W. Schrock Road in Westerville, OH. Patients from ${location.name} regularly make the roughly ${location.driveTimeMinutes}-minute drive to our Westerville office.`,
  }),
  (location) => ({
    question: `Do you accept insurance for patients coming from ${location.name}?`,
    answer:
      "Yes — we accept a range of insurance plans regardless of where you live. Visit our Accepted Insurance page or contact us to confirm your specific plan before your visit.",
  }),
  (location, topic) => ({
    question: `What should I expect at my first visit for ${topicMention(topic)}?`,
    answer: `Your first visit includes a review of your health history and goals related to ${topicMention(topic)}, followed by a personalized treatment plan — there's no need to make a separate trip from ${location.name} just for a consultation.`,
  }),
  (location) => ({
    question: `Is there parking available for patients traveling from ${location.name}?`,
    answer: `Yes — our Westerville office has on-site patient parking, so there's no added hassle after your drive in from ${location.name}.`,
  }),
  (location, topic) => ({
    question: `Can I schedule ${topicMention(topic)} appointments around a commute from ${location.name}?`,
    answer: `Yes — we offer flexible scheduling and can help you find appointment times that work with your commute from ${location.name}.`,
  }),
  (location) => ({
    question: `How do I get to your office from ${location.name}?`,
    answer: location.isHomeBase
      ? `Our office is right in Westerville at 193 W. Schrock Road — our team can share exact directions when you book.`
      : `Most patients from ${location.name} reach our Westerville office in about ${location.driveTimeMinutes} minutes via the local major roads — our team can share exact directions when you book.`,
  }),
];

/** Small deterministic string hash so the same location+topic always picks the same rotation (stable across builds), without needing randomness. */
function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Picks `count` logistics FAQs for a given location+topic pair, rotating
 * the start offset deterministically so different location/topic
 * combinations surface a different subset/order instead of always
 * showing the same three questions.
 */
export function getLogisticFaqs(
  location: AreaLocation,
  topic: AreaTopic,
  count = 3,
): FaqItem[] {
  const offset = hashString(`${location.slug}:${topic.slug}`) % LOGISTIC_FAQ_TEMPLATES.length;
  const rotated = [
    ...LOGISTIC_FAQ_TEMPLATES.slice(offset),
    ...LOGISTIC_FAQ_TEMPLATES.slice(0, offset),
  ];
  return rotated.slice(0, count).map((build) => build(location, topic));
}

/** Full FAQ set for a location+topic combo page: the topic's clinical FAQ first, then a rotating set of logistics FAQs. */
export function getAreaFaqItems(location: AreaLocation, topic: AreaTopic): FaqItem[] {
  return [topic.faq, ...getLogisticFaqs(location, topic, 3)];
}
