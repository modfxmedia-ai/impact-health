import { Reveal } from "@/components/motion/Reveal";
import { ServiceIconCard } from "@/components/home/ServiceIconCard";
import { SectionHeading } from "@/components/home/SectionHeading";

const services = [
  {
    title: "Non-Surgical Regenerative Medicine",
    href: "/regenerative-medicine/",
    icon: "/images/icons/molecule.svg",
    description:
      "Impact Health & Wellness offers a variety of regenerative treatments like PRP Therapy and Shockwave Therapy to promote natural healing for chronic pain and tissue injuries, offering a non-invasive recovery option.",
  },
  {
    title: "Anti-Aging & Weight Loss",
    href: "/anti-aging-wellness/",
    icon: "/images/icons/time.svg",
    description:
      "Our Anti-Aging & Weight Loss programs include Peptide and IV Therapy, Hormone Replacement, and dietary advice, tailored to improve metabolic health, skin vitality, and hormone balance, supporting wellness and graceful aging.",
  },
  {
    title: "Hormone Replacement Therapy (HRT)",
    href: "/hormone-replacement-therapy-hrt/",
    icon: "/images/icons/muscle.svg",
    description:
      "Hormone Replacement Therapy provides personalized treatment and relief for hormonal imbalances, addressing symptoms of menopause, andropause, and thyroid disorders, promoting well-being across different stages of life.",
  },
  {
    title: "Chiropractic Care",
    href: "/chiropractic-care/",
    icon: "/images/icons/spine.svg",
    description:
      "Our Chiropractic Care provides diagnostics, spinal decompression, and therapy for all ages, focusing on pain relief, preventive care, and long-term spinal health for improved life quality.",
  },
  {
    title: "Wound Care",
    href: "/wound-care/",
    icon: "/images/icons/help.svg",
    description:
      "Our wound care services focus on advanced management and healing of complex wounds, utilizing cutting-edge techniques to enhance tissue regeneration, prevent infection, and achieve the best patient outcomes.",
  },
  {
    title: "Personal Injuries",
    href: "/personal-injuries/",
    icon: "/images/icons/accident.svg",
    description:
      "We provide comprehensive care for personal injury victims, combining medical treatment, physical therapy, and specialized services for effective recovery and function restoration.",
  },
];

export function ServicesOverview({ className = "bg-white" }: { className?: string } = {}) {
  return (
    <section id="homepage-services" className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_20%,rgba(64,144,185,0.07),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(64,144,185,0.12),transparent_70%)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading eyebrow="Comprehensive Care" title="Our Services" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} className="h-full">
              <ServiceIconCard
                title={service.title}
                href={service.href}
                icon={service.icon}
                description={service.description}
                index={i}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
