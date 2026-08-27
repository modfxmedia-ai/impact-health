import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/site-header/icons";
import { contactInfo, socialLinks } from "@/lib/nav-data";

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-footer-charcoal text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" aria-label="Impact Health & Wellness — home">
              <Image
                src="/images/impact-logo-white.png"
                alt="Impact Health & Wellness"
                width={620}
                height={199}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              At Impact Health &amp; Wellness, our team is committed to
              providing outstanding regenerative medicine and wellness
              services to the Westerville community and surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <span>
                  Find us at:{" "}
                  <a
                    href={contactInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-teal"
                  >
                    {contactInfo.address}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <span>
                  Call us at:{" "}
                  <a
                    href={contactInfo.phoneHref}
                    className="transition-colors hover:text-brand-teal"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <span>
                  Email us at:{" "}
                  <a
                    href={contactInfo.emailHref}
                    className="transition-colors hover:text-brand-teal"
                  >
                    {contactInfo.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Social
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Feel free to drop us a note if you wish to learn more about any
              of our treatments &amp; procedures.
            </p>
            <ul className="mt-4 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-teal"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-footer-black pb-16 lg:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>
            &copy; Copyright {new Date().getFullYear()} Impact Health &amp;
            Wellness | All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use/" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
