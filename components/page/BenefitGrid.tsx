import { Reveal } from "@/components/motion/Reveal";

export interface Benefit {
  title: string;
  description: string;
}

/** Staggered bento grid of benefit/feature cards — first item anchors as a larger lead card. */
export function BenefitGrid({ items }: { items: Benefit[] }) {
  return (
    <div className="not-prose grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const isLead = i === 0;
        return (
          <Reveal
            key={item.title}
            delay={(i % 4) * 0.05}
            className={isLead ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
          >
            <div
              className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-teal/10 ${
                isLead
                  ? "justify-center border-brand-teal/20 bg-[#eef4f9] lg:p-8"
                  : "border-zinc-200/60 bg-white hover:border-brand-teal/50"
              }`}
            >
              <span
                aria-hidden="true"
                className={`mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isLead ? "bg-brand-teal text-white" : "bg-brand-teal/10 text-brand-teal"
                }`}
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                  <path
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3
                className={`font-bold text-brand-navy ${isLead ? "text-xl lg:text-2xl" : "text-lg"}`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-zinc-600 ${isLead ? "text-base" : "text-sm"}`}
              >
                {item.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
