import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";
import { contactInfo, socialLinks } from "@/lib/nav-data";

const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

export function UtilityBar() {
  return (
    <div className="hidden bg-brand-navy text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-1.5 transition-colors hover:text-brand-teal"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {contactInfo.phoneDisplay}
          </a>
          <a
            href={contactInfo.emailHref}
            className="flex items-center gap-1.5 transition-colors hover:text-brand-teal"
          >
            <MailIcon className="h-3.5 w-3.5" />
            {contactInfo.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.label as keyof typeof socialIcons];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:text-brand-teal"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
