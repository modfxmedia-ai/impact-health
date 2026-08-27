import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ConditionChip } from "@/components/home/ConditionChip";
import { CtaButton } from "@/components/ui/CtaButton";

const conditions = [
  { label: "Back Pain", href: "/conditions-we-treat/back-pain/" },
  { label: "Carpal Tunnel", href: "/conditions-we-treat/carpal-tunnel/" },
  { label: "Chronic Pain", href: "/conditions-we-treat/chronic-pain/" },
  { label: "Foot & Ankle Pain", href: "/conditions-we-treat/foot-ankle-pain/" },
  { label: "Hip Pain", href: "/conditions-we-treat/hip-pain/" },
  { label: "Knee Pain", href: "/conditions-we-treat/knee-pain/" },
  { label: "Migraines and Headaches", href: "/conditions-we-treat/migraines-and-headaches/" },
  { label: "Neck Pain", href: "/conditions-we-treat/neck-pain/" },
  { label: "Neuropathy", href: "/neuropathy-treatments/#Understanding_Neuropathy" },
  { label: "Osteoarthritis", href: "/conditions-we-treat/osteoarthritis/" },
  { label: "Sports Injuries", href: "/conditions-we-treat/sports-injuries/" },
  { label: "Whiplash", href: "/conditions-we-treat/whiplash/" },
];

export function Conditions() {
  return (
    <section className="relative overflow-hidden bg-[#eef4f9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-white [clip-path:ellipse(60%_100%_at_50%_0%)] sm:h-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_10%,rgba(64,144,185,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_10%_90%,rgba(23,61,101,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:gap-12 sm:py-20 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Find Relief"
              title="Conditions we treat"
              align="left"
            />
            <p className="mt-5 leading-relaxed text-zinc-600">
              From chronic pain to sports injuries, our team treats a wide range
              of conditions to help you get back to feeling your best.
            </p>
            <CtaButton href="/conditions-we-treat/" variant="navy" className="mt-8">
              View All Conditions
            </CtaButton>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {conditions.map((condition, i) => (
            <Reveal key={condition.label} delay={i * 0.05} className="h-full">
              <ConditionChip label={condition.label} href={condition.href} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
