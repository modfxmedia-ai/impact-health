import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { StaffMember } from "@/lib/staff-data";

export function TeamGrid({ members }: { members: StaffMember[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {members.map((member, i) => (
        <Reveal key={member.slug} delay={(i % 3) * 0.05}>
          <Link
            href={`/staff/${member.slug}/`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/10"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-[#eef4f9]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 p-5">
              <h3 className="text-lg font-bold text-brand-navy">
                {member.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                {member.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {member.blurb}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal">
                Read More
                <span
                  aria-hidden="true"
                  className="-translate-x-1 transition-transform duration-300 group-hover:translate-x-0"
                >
                  &rarr;
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
