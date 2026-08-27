import { contactInfo } from "@/lib/nav-data";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export interface BookAppointmentCtaProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

/** Compact inline CTA band (text + two buttons) — not a big gradient hero banner. */
export function BookAppointmentCta({
  title = "Ready to feel your best?",
  description = "Book an appointment with Impact Health & Wellness and take the next step toward relief and recovery.",
  primaryLabel = "Book an Appointment",
  primaryHref = "/contact-us/",
}: BookAppointmentCtaProps) {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <CtaButton href={contactInfo.phoneHref} variant="outline">
                Call {contactInfo.phoneDisplay}
              </CtaButton>
              <CtaButton href={primaryHref} variant="teal">
                {primaryLabel}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
