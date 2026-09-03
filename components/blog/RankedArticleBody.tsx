import type { ReactNode } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import type { BlogPostData } from "@/lib/ranked/types";

function safeHref(href: string): string | null {
  const trimmed = href.trim();
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return trimmed;
  try {
    const url = new URL(trimmed);
    if (url.protocol === "http:" || url.protocol === "https:") return trimmed;
  } catch {
    return null;
  }
  return null;
}

function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={i}>{part}</span>;
        const href = safeHref(match[2]);
        if (!href) return <span key={i}>{match[1]}</span>;
        if (href.startsWith("/")) {
          return (
            <Link key={i} href={href}>
              {match[1]}
            </Link>
          );
        }
        return (
          <a key={i} href={href} rel="noopener noreferrer">
            {match[1]}
          </a>
        );
      })}
    </>
  );
}

/** Flat nodes so PageLayout can split on each <h2>, matching compiled local posts. */
export function rankedArticleNodes(post: BlogPostData): ReactNode[] {
  const titleNorm = post.h1.replace(/\s+/g, " ").trim().toLowerCase();
  const nodes: ReactNode[] = [];

  post.sections.forEach((section, i) => {
    const headingNorm = section.heading.replace(/\s+/g, " ").trim().toLowerCase();
    const hideHeading = headingNorm === titleNorm && i === 0;
    if (!hideHeading) {
      nodes.push(<h2 key={`h-${i}`}>{section.heading}</h2>);
    }
    section.body.forEach((para, j) => {
      nodes.push(
        <p key={`p-${i}-${j}`}>
          <LinkedText text={para} />
        </p>,
      );
    });
  });

  nodes.push(
    <p key="cta">
      <CtaButton href={post.cta.href}>{post.cta.label}</CtaButton>
    </p>,
  );

  if (post.relatedPosts && post.relatedPosts.length > 0) {
    nodes.push(<h2 key="related-h">Related articles</h2>);
    nodes.push(
      <ul key="related-list">
        {post.relatedPosts.map((related) => (
          <li key={related.slug}>
            <Link href={`/blog/${related.slug}/`}>{related.title}</Link>
          </li>
        ))}
      </ul>,
    );
  }

  return nodes;
}
