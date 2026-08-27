import { contactInfo } from "@/lib/nav-data";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const quickLinks = [
  { label: "Regenerative Medicine", href: "/regenerative-medicine/", primary: true },
  { label: "Neuropathy", href: "/neuropathy-treatments/", primary: false },
  { label: "Anti-aging & Weight Loss", href: "/anti-aging-wellness/", primary: false },
  { label: "Hormone Replacement Therapy", href: "/hormone-replacement-therapy-hrt/", primary: false },
];

const stats = [
  { value: "4", label: "Core Care Specialties" },
  { value: "6", label: "Treatment Programs" },
  { value: "Westerville, OH", label: "Proudly Serving" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-navy">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(64,144,185,0.25),transparent_45%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:py-28">
        <Reveal className="max-w-3xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase">
            {contactInfo.address.split(",").slice(-2).join(",").trim()}
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Your Path to Pain Relief with Non-Surgical Regenerative Medicine
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <CtaButton
                key={link.label}
                href={link.href}
                variant={link.primary ? "teal" : "outline"}
              >
                {link.label}
              </CtaButton>
            ))}
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-bold text-white sm:text-2xl">{stat.value}</dd>
                <div className="mt-1 text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
