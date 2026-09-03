import { Reveal } from "@/components/motion/Reveal";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { Breadcrumbs, type Crumb } from "@/components/page/Breadcrumbs";

export interface PageHeroImage {
  src: string;
  alt: string;
}

export interface PageHeroProps {
  title: string;
  eyebrow?: string;
  intro?: string;
  breadcrumbs: Crumb[];
  image?: PageHeroImage;
}

export function PageHero({
  title,
  eyebrow,
  intro,
  breadcrumbs,
  image,
}: PageHeroProps) {
  const hasImage = Boolean(image);

  return (
    <section className="relative overflow-hidden bg-[#eef4f9]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_10%,rgba(64,144,185,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_10%_90%,rgba(23,61,101,0.08),transparent_60%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-20"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <Breadcrumbs items={breadcrumbs} />
        </Reveal>

        <div
          className={`mt-8 grid gap-10 lg:mt-10 ${
            hasImage ? "lg:grid-cols-2 lg:items-center lg:gap-16" : ""
          }`}
        >
          <div>
            {eyebrow ? (
              <Reveal delay={0.05}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal shadow-sm shadow-brand-navy/5 backdrop-blur-md">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                  />
                  {eyebrow}
                </span>
              </Reveal>
            ) : null}
            <Reveal delay={0.1}>
              <h1 className="mt-4 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </Reveal>
            {intro ? (
              <Reveal delay={0.15}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {intro}
                </p>
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10 ring-1 ring-white/60">
                <BlogCoverImage
                  src={image.src}
                  alt={image.alt}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
