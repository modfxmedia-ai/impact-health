import { blogPosts } from "@/lib/blog-posts";
import { DEFAULT_CTA } from "./config";
import type { BlogPostData } from "./types";

/**
 * Existing compiled/MDX posts win on slug collision so a Ranked import
 * cannot overwrite a hand-written Impact Health article.
 */
export function getLocalBlogPosts(): BlogPostData[] {
  return blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.description,
    h1: post.title,
    publishDate: post.date,
    intro: post.description,
    coverImage: post.image,
    coverAlt: post.imageAlt,
    sections: [],
    cta: DEFAULT_CTA,
  }));
}
