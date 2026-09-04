import { Reveal } from "@/components/motion/Reveal";
import { ServiceCard } from "@/components/home/ServiceCard";
import { SectionHeading } from "@/components/home/SectionHeading";

const services = [
  {
    label: "Regenerative Medicine",
    href: "/regenerative-medicine/",
    image: "/images/home/service-regenerative-medicine.jpg",
    alt: "Regenerative medicine",
    description:
      "Unlock your body's healing potential with cutting-edge Regenerative Medicine. Experience natural recovery and rejuvenation for lasting well-being.",
    featured: true,
    // Featured: tall block on the left.
    className: "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    label: "Anti-aging & Weight-loss",
    href: "/anti-aging-wellness/",
    image: "/images/home/service-anti-aging.jpg",
    alt: "Dietary consultations",
    description:
      "Revitalize your youth and sculpt your ideal body. Discover the fusion of anti-aging and weight-loss solutions tailored for transformative results.",
    className: "",
  },
  {
    label: "Chiropractic & Rehab",
    href: "/chiropractic-care/",
    image: "/images/home/service-chiropractic.jpg",
    alt: "Chiropractic care",
    description:
      "Align your body and mind with holistic Chiropractic Services. Experience relief, improved mobility, and enhanced wellness with every adjustment.",
    className: "",
  },
  {
    label: "Personal Injuries",
    href: "/personal-injuries/",
    image: "/images/home/service-personal-injuries.jpg",
    alt: "Personal injuries",
    description:
      "Overcome personal injuries with dedicated care. Tailored treatment plans to restore strength, function, and mobility, guiding you back to your best self.",
    className: "",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1f36] via-[#153a5e] to-[#0b1f36]">
      <div className="aurora opacity-70" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive care, tailored to you"
            variant="dark"
            className="mb-12"
          />
        </Reveal>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[230px] lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.label}
              delay={i * 0.08}
              className={`h-full ${service.className}`}
            >
              <ServiceCard
                label={service.label}
                href={service.href}
                image={service.image}
                alt={service.alt}
                description={service.description}
                featured={service.featured}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
