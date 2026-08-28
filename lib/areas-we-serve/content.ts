import type { NavLink } from "@/lib/nav-data";
import type { AreaLocation } from "./locations";
import { getNearbyLocations } from "./locations";
import type { AreaTopic } from "./topics";
import { getTopicBySlug } from "./topics";

/** Deterministic string hash — same inputs always pick the same content variant (stable across builds/ISR), no randomness needed. */
function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickVariant<T>(seedKey: string, variants: T[]): T {
  return variants[hashString(seedKey) % variants.length];
}

/** Mid-sentence mention form of a topic's name (respects `mentionName` for acronym-containing names like "PRP Therapy"). */
export function topicMention(topic: AreaTopic): string {
  return topic.mentionName ?? topic.name.toLowerCase();
}

/** Hero intro paragraph (used in `PageLayout`'s `intro` prop). */
export function getAreaIntro(location: AreaLocation, topic: AreaTopic): string {
  if (location.isHomeBase) {
    return `${topic.tagline} Our Westerville office is right here in ${location.name}, so ${topicMention(topic)} care is as convenient as it gets.`;
  }
  return `Patients travel to our Westerville office from ${location.name} for ${topicMention(topic)} — about a ${location.driveTimeMinutes}-minute drive. ${topic.tagline}`;
}

/**
 * "Why patients travel" paragraph — several structurally different templates
 * (not just the city name swapped into one fixed sentence) selected
 * deterministically per location+topic so combo pages read as genuinely
 * distinct rather than a find-and-replace.
 */
export function getTravelParagraph(location: AreaLocation, topic: AreaTopic): string {
  const mention = topicMention(topic);

  if (location.isHomeBase) {
    return `${location.blurb} Being right in town means no long commute for your ${mention} appointments — just the same experienced team, every visit.`;
  }

  const templates = [
    `Patients travel to our Westerville office from ${location.name} for ${mention} care — about a ${location.driveTimeMinutes}-minute drive. ${location.blurb} We don't have a satellite office in ${location.name}; everyone is seen at our single Westerville location so you get the same experienced team every visit.`,
    `If you live in ${location.name}, you're not alone in making the trip to Westerville for ${mention}. ${location.blurb} The drive is typically around ${location.driveTimeMinutes} minutes, and it's worth it for continuity of care with the same clinical team each time.`,
    `${location.blurb} Many of our ${mention} patients commute from ${location.name}, a drive of roughly ${location.driveTimeMinutes} minutes to our Westerville office. We intentionally keep all care under one roof — no rotating locations — so your treatment plan stays consistent.`,
    `From ${location.name}, our Westerville office is about a ${location.driveTimeMinutes}-minute drive, and it's a trip many patients make specifically for ${mention}. ${location.blurb} Because we operate from a single location, you always see the same providers who know your history.`,
  ];

  return pickVariant(`travel:${location.slug}:${topic.slug}`, templates);
}

/** Topic-specific clinical paragraph, cross-referencing the complementary service/condition. */
export function getTopicDetailParagraph(topic: AreaTopic): string {
  const related = getTopicBySlug(topic.relatedSlug);
  const relatedName = related?.name ?? "our other services";
  const relatedMention = related ? topicMention(related) : "our other services";

  if (topic.category === "condition") {
    return `Treatment for ${topicMention(topic)} often draws on our ${relatedName}, tailored to your specific symptoms, activity level, and goals — not a one-size-fits-all protocol.`;
  }
  if (topic.category === "service") {
    return `Our ${topic.name} program is one of the ways we help patients manage ${relatedMention} and related pain without unnecessary surgery.`;
  }
  return `Our team coordinates closely with our ${relatedName} program so your care plan addresses the full picture, not just a single symptom.`;
}

/** Unique per-page <title>/meta description. */
export function getAreaMeta(location: AreaLocation, topic: AreaTopic) {
  const title = location.isHomeBase
    ? `${topic.name} in ${location.name}, OH | Impact Health & Wellness`
    : `${topic.name} for ${location.name}, OH Patients | Impact Health & Wellness`;

  const description = location.isHomeBase
    ? `${topic.name} at Impact Health & Wellness in Westerville, OH. ${topic.tagline}`
    : `Impact Health & Wellness in Westerville, OH welcomes ${topicMention(topic)} patients from ${location.name} — about a ${location.driveTimeMinutes}-minute drive. ${topic.tagline}`;

  return { title, description };
}

/** Cross-links for the combo page: the topic's own real page, its complementary service/condition page, Contact Us, and 2-3 nearby-location combo pages for the same topic. */
export function getAreaRelatedLinks(location: AreaLocation, topic: AreaTopic): NavLink[] {
  const related = getTopicBySlug(topic.relatedSlug);
  const nearby = getNearbyLocations(location, 3);

  const links: NavLink[] = [{ label: topic.name, href: topic.href }];
  if (related) links.push({ label: related.name, href: related.href });
  links.push({ label: "Contact Us", href: "/contact-us/" });
  for (const nearbyLocation of nearby) {
    links.push({
      label: `${topic.name} in ${nearbyLocation.name}`,
      href: `/areas-we-serve/${nearbyLocation.slug}/${topic.slug}/`,
    });
  }
  return links;
}
