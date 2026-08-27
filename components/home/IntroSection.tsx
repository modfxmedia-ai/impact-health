import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { CtaButton } from "@/components/ui/CtaButton";

const modalities = ["Physical Medicine", "Traditional Medicine", "Functional Medicine"];

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_15%,rgba(64,144,185,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="aspect-video w-full rounded-2xl object-cover shadow-lg"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="text-center lg:text-left">
            <SectionHeading
              eyebrow="Optimal Health & Well-Being"
              title="The PREMIER destination for OPTIMAL HEALTH and WELL-BEING"
              align="responsive"
            />
            <p className="mt-5 text-base leading-relaxed text-zinc-600">
              Impact Health &amp; Wellness provides a wide variety of medical
              services to help its patients regain their health and wellness
              with the goal of leading a more balanced lifestyle. Our practice
              is a medically-integrated, full-spectrum pain management care
              facility, providing treatment based on Physical Medicine,
              Traditional Medicine, and Functional Medicine.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {modalities.map((modality) => (
                <span
                  key={modality}
                  className="rounded-full border border-brand-navy/15 px-3 py-1 text-xs font-semibold text-brand-navy"
                >
                  {modality}
                </span>
              ))}
            </div>
            <CtaButton href="/about-us/" variant="navy" className="mt-6">
              More About Us
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
