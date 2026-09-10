"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatBlogDate } from "@/lib/blog-posts";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { Reveal } from "@/components/motion/Reveal";

export interface BlogListItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  href: string;
  external?: boolean;
}

export function BlogCategoryFilter({
  posts,
  categories,
}: {
  posts: BlogListItem[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [posts, active],
  );

  const options = ["All", ...categories];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter articles by category"
        className="mb-10 flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setActive(option)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                isActive
                  ? "bg-brand-teal text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-zinc-600">No articles in this category yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => {
            const linkProps = post.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Reveal key={post.slug} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  href={post.href}
                  {...linkProps}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <BlogCoverImage
                      src={post.image}
                      alt={post.imageAlt}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-2">
                      <time
                        dateTime={post.date}
                        className="text-xs font-semibold tracking-wide text-brand-teal uppercase"
                      >
                        {formatBlogDate(post.date)}
                      </time>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-zinc-600 uppercase">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mt-2 text-lg font-bold text-brand-navy">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                      {post.description}
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
            );
          })}
        </div>
      )}
    </div>
  );
}
