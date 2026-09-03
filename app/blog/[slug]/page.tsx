import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";
import { blogPostSchemas } from "@/lib/blog-schema";
import { getPublishedBlogPost, getPublishedBlogSlugs } from "@/lib/ranked/posts";
import { rankedPostSchema } from "@/lib/ranked/schema";
import { PageLayout } from "@/components/page/PageLayout";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { rankedArticleNodes } from "@/components/blog/RankedArticleBody";
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

export const revalidate = 3600;
export const dynamicParams = true;

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

export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs().catch(() => blogPosts.map((post) => post.slug));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const local = blogPosts.find((p) => p.slug === slug);
  if (local) {
    return {
      title: local.title,
      description: local.description,
      alternates: { canonical: `/blog/${local.slug}/` },
      openGraph: {
        title: local.title,
        description: local.description,
        type: "article",
        publishedTime: local.date,
        modifiedTime: local.dateModified,
        images: [{ url: local.image }],
      },
    };
  }

  const post = await getPublishedBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const local = blogPosts.find((p) => p.slug === slug);
  const compiled = contentBySlug[slug];

  if (local && compiled) {
    const schema = blogPostSchemas[slug];
    return (
      <PageLayout
        title={local.title}
        eyebrow="Blog"
        intro={local.description}
        image={{ src: local.image, alt: local.imageAlt }}
        breadcrumbs={[{ label: "Blog", href: "/blog/" }, { label: local.title }]}
        schema={schema}
        afterContent={<ServicesOverview />}
      >
        <p className="!mt-0 text-sm font-semibold tracking-wide text-brand-teal uppercase">
          {formatBlogDate(local.date)} &middot; Impact Health &amp; Wellness Team
        </p>
        {compiled}
      </PageLayout>
    );
  }

  const post = await getPublishedBlogPost(slug);
  if (!post || post.sections.length === 0) notFound();

  return (
    <PageLayout
      title={post.h1}
      eyebrow="Blog"
      intro={post.intro}
      image={{ src: post.coverImage, alt: post.coverAlt }}
      breadcrumbs={[{ label: "Blog", href: "/blog/" }, { label: post.title }]}
      schema={rankedPostSchema(post)}
      afterContent={<ServicesOverview />}
    >
      <p className="!mt-0 text-sm font-semibold tracking-wide text-brand-teal uppercase">
        {formatBlogDate(post.publishDate)} &middot; Impact Health &amp; Wellness Team
      </p>
      {rankedArticleNodes(post)}
    </PageLayout>
  );
}
