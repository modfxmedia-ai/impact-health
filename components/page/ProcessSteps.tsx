import { Reveal } from "@/components/motion/Reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

/** "How it works" step list with large watermark numerals and a connecting timeline rail. */
export function ProcessSteps({ items }: { items: ProcessStep[] }) {
  return (
    <ol className="not-prose relative grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 4) * 0.05}>
          <li className="relative h-full overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-extrabold text-brand-navy/[0.06]"
            >
              {i + 1}
            </span>
            <div className="relative">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
