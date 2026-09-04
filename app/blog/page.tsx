import type { Metadata } from "next";
import Link from "next/link";
import { formatBlogDate } from "@/lib/blog-posts";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { PageLayout } from "@/components/page/PageLayout";
import { Reveal } from "@/components/motion/Reveal";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Health & Wellness Tips from Impact Health & Wellness",
  description:
    "Explore health, wellness, and pain-relief tips from Impact Health & Wellness in Westerville, OH, from hormone therapy to nutrition, recovery, and more.",
  alternates: { canonical: "/blog/" },
};

const schema = [
  {
    "@type": "CollectionPage",
    "@id": "https://impacthealthoh.com/blog/",
    url: "https://impacthealthoh.com/blog/",
    name: "Blog | Health & Wellness Tips from Impact Health & Wellness",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    description:
      "Explore health, wellness, and pain-relief tips from Impact Health & Wellness in Westerville, OH, from hormone therapy to nutrition, recovery, and more.",
    breadcrumb: { "@id": "https://impacthealthoh.com/blog/#breadcrumb" },
    inLanguage: "en-US",
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/blog/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Blog" },
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
];

export default async function BlogIndexPage() {
  const posts = await getPublishedBlogPosts();
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );

  return (
    <PageLayout
      title="Blog"
      eyebrow="Wellness Reads"
      intro="Practical, expert-backed health and wellness tips from the Impact Health & Wellness team in Westerville, OH."
      breadcrumbs={[{ label: "Blog" }]}
      schema={schema}
      afterContent={
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-20">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={(i % 3) * 0.08}
                  className="h-full"
                >
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[3/2] w-full overflow-hidden">
                      <BlogCoverImage
                        src={post.coverImage}
                        alt={post.coverAlt}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <time
                        dateTime={post.publishDate}
                        className="text-xs font-semibold tracking-wide text-brand-teal uppercase"
                      >
                        {formatBlogDate(post.publishDate)}
                      </time>
                      <h2 className="mt-2 text-lg font-bold text-brand-navy">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                        {post.metaDescription}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-teal uppercase">
                        Read Article
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
