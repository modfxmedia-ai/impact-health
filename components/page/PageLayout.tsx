import { Children, isValidElement, type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero, type PageHeroImage } from "@/components/page/PageHero";
import { JsonLd, type JsonLdSchema } from "@/components/page/JsonLd";
import type { Crumb } from "@/components/page/Breadcrumbs";
import { ServiceSidebar } from "@/components/page/ServiceSidebar";
import { Testimonials } from "@/components/home/Testimonials";

/** Splits flat prose children into one group per <h2> boundary, so each topic renders as its own full-width section instead of one long article. */
function splitContentSections(children: ReactNode) {
  const items = Children.toArray(children);
  const sections: ReactNode[][] = [[]];
  for (const child of items) {
    const currentSection = sections[sections.length - 1];
    const startsNewSection =
      isValidElement(child) && child.type === "h2" && currentSection.length > 0;
    if (startsNewSection) {
      sections.push([child]);
    } else {
      currentSection.push(child);
    }
  }
  return sections.filter((section) => section.length > 0);
}

const SECTION_CONTENT_CLASSES =
  "space-y-6 text-base leading-relaxed text-zinc-600 [&>p]:max-w-3xl [&>ul:not(.not-prose)]:max-w-3xl [&>ol:not(.not-prose)]:max-w-3xl [&_a]:font-semibold [&_a]:text-brand-teal [&_a:hover]:text-brand-navy-deep [&_h2]:relative [&_h2]:pl-5 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-brand-navy [&_h2]:before:absolute [&_h2]:before:top-1.5 [&_h2]:before:left-0 [&_h2]:before:h-6 [&_h2]:before:w-1.5 [&_h2]:before:rounded-full [&_h2]:before:bg-brand-teal sm:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-brand-navy [&_ul:not(.not-prose)]:list-none [&_ul:not(.not-prose)]:space-y-3 [&_ul:not(.not-prose)]:pl-0 [&_ul:not(.not-prose)>li]:relative [&_ul:not(.not-prose)>li]:flex [&_ul:not(.not-prose)>li]:items-start [&_ul:not(.not-prose)>li]:gap-3 [&_ul:not(.not-prose)>li]:rounded-xl [&_ul:not(.not-prose)>li]:border [&_ul:not(.not-prose)>li]:border-zinc-200/70 [&_ul:not(.not-prose)>li]:bg-white [&_ul:not(.not-prose)>li]:p-4 [&_ul:not(.not-prose)>li]:text-sm [&_ul:not(.not-prose)>li]:font-medium [&_ul:not(.not-prose)>li]:text-brand-navy [&_ul:not(.not-prose)>li]:shadow-sm [&_ul:not(.not-prose)>li]:transition-all [&_ul:not(.not-prose)>li]:duration-300 [&_ul:not(.not-prose)>li:hover]:-translate-y-0.5 [&_ul:not(.not-prose)>li:hover]:border-brand-teal/40 [&_ul:not(.not-prose)>li:hover]:shadow-md [&_ul:not(.not-prose)>li:hover]:shadow-brand-teal/10 [&_ul:not(.not-prose)>li]:before:flex [&_ul:not(.not-prose)>li]:before:h-6 [&_ul:not(.not-prose)>li]:before:w-6 [&_ul:not(.not-prose)>li]:before:shrink-0 [&_ul:not(.not-prose)>li]:before:items-center [&_ul:not(.not-prose)>li]:before:justify-center [&_ul:not(.not-prose)>li]:before:rounded-full [&_ul:not(.not-prose)>li]:before:bg-brand-teal [&_ul:not(.not-prose)>li]:before:text-xs [&_ul:not(.not-prose)>li]:before:font-bold [&_ul:not(.not-prose)>li]:before:text-white [&_ul:not(.not-prose)>li]:before:content-['✓'] [&_ol:not(.not-prose)]:list-decimal [&_ol:not(.not-prose)]:space-y-2 [&_ol:not(.not-prose)]:pl-6";

export interface PageLayoutProps {
  title: string;
  eyebrow?: string;
  intro?: string;
  image?: PageHeroImage;
  /** Trail excluding "Home" — that entry is prepended automatically. */
  breadcrumbs?: Crumb[];
  /** Optional JSON-LD schema (single node or graph array). */
  schema?: JsonLdSchema;
  /** Set to `false` to hide the sticky right-rail sidebar (e.g. wide directory/table pages where the extra reserved width isn't wanted). */
  showSidebar?: boolean;
  /** Extra section(s) rendered after the main content, before the CTA (e.g. Related Services). */
  afterContent?: React.ReactNode;
  /** Renders the shared patient-reviews section after `afterContent` (service and condition pages). */
  showTestimonials?: boolean;
  children?: React.ReactNode;
}

export function PageLayout({
  title,
  eyebrow,
  intro,
  image,
  breadcrumbs,
  schema,
  showSidebar = true,
  afterContent,
  showTestimonials = false,
  children,
}: PageLayoutProps) {
  const trail: Crumb[] = [
    { label: "Home", href: "/" },
    ...(breadcrumbs ?? [{ label: title }]),
  ];

  return (
    <main className="flex flex-1 flex-col">
      {schema ? <JsonLd schema={schema} /> : null}

      <PageHero
        title={title}
        eyebrow={eyebrow}
        intro={intro}
        image={image}
        breadcrumbs={trail}
      />

      {children ? (
        <div
          className={`relative bg-white ${showSidebar ? "lg:flex lg:min-h-[44rem] lg:flex-col lg:justify-center" : ""}`}
        >
          {splitContentSections(children).map((section, i) => (
            <section key={i} className="bg-white">
              <div
                className={`mx-auto max-w-6xl px-6 py-14 sm:py-20 ${showSidebar ? "lg:pr-[25rem]" : ""}`}
              >
                <Reveal>
                  <div className={SECTION_CONTENT_CLASSES}>{section}</div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Sticky right rail — keeps the wide right column filled instead of empty while the content scrolls. The card uses its own natural height (not `h-screen`) so it can never visually overflow past this container's bottom edge on short-content pages (e.g. single-paragraph condition pages) into whatever section follows (RelatedServices, the CTA band). */}
          {showSidebar ? (
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="mx-auto flex h-full max-w-6xl justify-end px-6">
                <div className="pointer-events-auto sticky top-24 w-80 self-start">
                  <div className="no-scrollbar max-h-[calc(100vh-6rem)] w-full overflow-y-auto">
                    <ServiceSidebar />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {afterContent}
      {showTestimonials ? <Testimonials /> : null}
    </main>
  );
}
