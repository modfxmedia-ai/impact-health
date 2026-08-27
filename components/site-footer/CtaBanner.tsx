import { contactInfo } from "@/lib/nav-data";
import { CtaButton } from "@/components/ui/CtaButton";

export function CtaBanner() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-semibold text-white sm:text-xl">
            Don&apos;t hesitate to contact us!{" "}
            <a
              href={contactInfo.phoneHref}
              className="underline-offset-2 hover:underline"
            >
              {contactInfo.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm text-white/70">We&apos;re here for you!</p>
        </div>
        <CtaButton href={contactInfo.phoneHref} variant="white" className="shrink-0">
          Call Now
        </CtaButton>
      </div>
    </section>
  );
}
