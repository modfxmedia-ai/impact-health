export interface FaqItem {
  question: string;
  answer: string;
}

/** Native <details>/<summary> accordion — accessible and JS-free. Contact CTA lives in PageLayout's persistent sidebar instead of a per-FAQ card. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="not-prose divide-y divide-zinc-200 rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-navy marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl font-light text-brand-teal transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

/** Builds a schema.org FAQPage node from the same items shown in <Faq>. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
