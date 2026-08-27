import { contactInfo } from "@/lib/nav-data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/site-header/icons";
import { CtaButton } from "@/components/ui/CtaButton";

const officeHours = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
  { day: "Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contactInfo.address,
)}&output=embed`;

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapOfficeHours() {
  return (
    <section className="relative overflow-hidden bg-[#eef4f9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-white [clip-path:ellipse(60%_100%_at_50%_0%)] sm:h-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_10%,rgba(64,144,185,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_10%_90%,rgba(23,61,101,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Visit Us"
            title="Find us & office hours"
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10 ring-1 ring-zinc-100 lg:grid-cols-2">
            <div className="bg-brand-navy p-8 text-white sm:p-10">
              <h3 className="text-xl font-bold">Impact Health &amp; Wellness</h3>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="leading-relaxed text-white/85">
                    {contactInfo.address}
                  </span>
                </li>
                <li className="flex gap-4">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <a
                    href={contactInfo.phoneHref}
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <a
                    href={contactInfo.emailHref}
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>

              <div className="mt-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2.5">
                  <ClockIcon className="h-5 w-5 text-brand-teal" />
                  <h4 className="text-sm font-semibold tracking-wide uppercase">
                    Office Hours
                  </h4>
                </div>
                <dl className="mt-4 space-y-2 text-sm">
                  {officeHours.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
                    >
                      <dt className="text-white/70">{row.day}</dt>
                      <dd
                        className={
                          row.hours === "Closed"
                            ? "font-medium text-white/40"
                            : "font-medium text-white"
                        }
                      >
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <CtaButton
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="teal"
                className="mt-8"
              >
                Get Directions
              </CtaButton>
            </div>

            <div className="relative min-h-[360px] lg:min-h-full">
              <iframe
                title="Map showing Impact Health &amp; Wellness location"
                src={mapEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
