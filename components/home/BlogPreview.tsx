import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function BlogPreview() {
  const [lead, ...rest] = blogPosts.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Wellness Reads"
            title="Health & Wellness Blog"
            align="left"
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <Link
              href={`/blog/${lead.slug}/`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {lead.image ? (
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-xl font-bold text-brand-navy">
                  {lead.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {lead.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-teal uppercase">
                  Read Article
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-8">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i + 1) * 0.08} className="h-full">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex h-full gap-5 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {post.image ? (
                    <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl sm:w-40">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        quality={90}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 112px, 160px"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col py-1">
                    <h3 className="text-base font-semibold text-brand-navy">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                      {post.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-teal uppercase">
                      Read Article
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
