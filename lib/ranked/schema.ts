import type { JsonLdSchema } from "@/components/page/JsonLd";
import { SITE_URL } from "@/lib/site";
import type { BlogPostData } from "./types";

export function rankedPostSchema(post: BlogPostData): JsonLdSchema {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const cover = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;

  return [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      isPartOf: { "@id": url },
      headline: post.h1,
      description: post.metaDescription,
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      mainEntityOfPage: { "@id": url },
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: { "@id": `${url}#primaryimage` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: post.title,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      description: post.metaDescription,
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": `${url}#primaryimage`,
      url: cover,
      contentUrl: cover,
      caption: post.coverAlt,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
        },
      ],
    },
  ];
}
