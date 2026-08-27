import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";
import { blogPostSchemas } from "@/lib/blog-schema";
import { PageLayout } from "@/components/page/PageLayout";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { PeptidesForMuscleBuildingContent } from "@/components/blog/content/peptides-for-muscle-building";
import { HowToImproveProstateHealthContent } from "@/components/blog/content/how-to-improve-prostate-health";
import { HealthyBloodGlucoseLevelsContent } from "@/components/blog/content/healthy-blood-glucose-levels";
import { HormoneTherapyForMenopauseContent } from "@/components/blog/content/hormone-therapy-for-menopause";
import { UmbilicalCordStemCellInjectionsContent } from "@/components/blog/content/umbilical-cord-stem-cell-injections";
import { HiddenDangersOfAmazonSupplementsContent } from "@/components/blog/content/hidden-dangers-of-amazon-supplements";
import { HrtMythsContent } from "@/components/blog/content/hrt-myths";
import { InnovationsInNeuropathyTreatmentsContent } from "@/components/blog/content/innovations-in-neuropathy-treatments";
import { MealPlanningMadeEasyContent } from "@/components/blog/content/meal-planning-made-easy";
import { ExploringTheFundamentalsOfAHealthyDietContent } from "@/components/blog/content/exploring-the-fundamentals-of-a-healthy-diet";
import { UnveilingTheWondersOfLaserTherapyAtImpactHealthWellnessContent } from "@/components/blog/content/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness";
import { TheHarmonyWithinAGuideToAchievingMindBodyBalanceContent } from "@/components/blog/content/the-harmony-within-a-guide-to-achieving-mind-body-balance";
import { UnderstandingTheRoleOfSocialConnectionsContent } from "@/components/blog/content/understanding-the-role-of-social-connections";
import { TheBasicsOfMindfulEatingContent } from "@/components/blog/content/the-basics-of-mindful-eating";
import { StrengthTrainingByAgeContent } from "@/components/blog/content/strength-training-by-age";
import { DiscoverTheTransformativePowerOfIvVitaminTherapyContent } from "@/components/blog/content/discover-the-transformative-power-of-iv-vitamin-therapy";

const contentBySlug: Record<string, ReactNode[]> = {
  "peptides-for-muscle-building": PeptidesForMuscleBuildingContent,
  "how-to-improve-prostate-health": HowToImproveProstateHealthContent,
  "healthy-blood-glucose-levels": HealthyBloodGlucoseLevelsContent,
  "hormone-therapy-for-menopause": HormoneTherapyForMenopauseContent,
  "umbilical-cord-stem-cell-injections": UmbilicalCordStemCellInjectionsContent,
  "hidden-dangers-of-amazon-supplements": HiddenDangersOfAmazonSupplementsContent,
  "hrt-myths": HrtMythsContent,
  "innovations-in-neuropathy-treatments": InnovationsInNeuropathyTreatmentsContent,
  "meal-planning-made-easy": MealPlanningMadeEasyContent,
  "exploring-the-fundamentals-of-a-healthy-diet": ExploringTheFundamentalsOfAHealthyDietContent,
  "unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness": UnveilingTheWondersOfLaserTherapyAtImpactHealthWellnessContent,
  "the-harmony-within-a-guide-to-achieving-mind-body-balance": TheHarmonyWithinAGuideToAchievingMindBodyBalanceContent,
  "understanding-the-role-of-social-connections": UnderstandingTheRoleOfSocialConnectionsContent,
  "the-basics-of-mindful-eating": TheBasicsOfMindfulEatingContent,
  "strength-training-by-age": StrengthTrainingByAgeContent,
  "discover-the-transformative-power-of-iv-vitamin-therapy": DiscoverTheTransformativePowerOfIvVitaminTherapyContent,
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = contentBySlug[slug];
  const schema = blogPostSchemas[slug];

  return (
    <PageLayout
      title={post.title}
      eyebrow="Blog"
      intro={post.description}
      image={{ src: post.image, alt: post.imageAlt }}
      breadcrumbs={[{ label: "Blog", href: "/blog/" }, { label: post.title }]}
      schema={schema}
      afterContent={<ServicesOverview />}
    >
      <p className="!mt-0 text-sm font-semibold tracking-wide text-brand-teal uppercase">
        {formatBlogDate(post.date)} &middot; Impact Health &amp; Wellness Team
      </p>
      {content}
    </PageLayout>
  );
}
