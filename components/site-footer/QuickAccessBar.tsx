import { HeartIcon, BoltIcon, ChatIcon, PhoneIcon } from "@/components/site-header/icons";
import { contactInfo } from "@/lib/nav-data";

const quickLinks = [
  { label: "Services", href: "/#homepage-services", Icon: HeartIcon },
  { label: "Conditions", href: "/conditions-we-treat/", Icon: BoltIcon },
  { label: "Contact Us", href: "/contact-us/", Icon: ChatIcon },
  { label: "Call Us", href: contactInfo.phoneHref, Icon: PhoneIcon },
];

/**
 * Fixed bottom quick-action bar, mirroring the live site's mobile-only
 * `.quick_access_bar` (background #3a73b8, position: fixed; bottom: 0).
 */
export function QuickAccessBar() {
  return (
    <nav
      aria-label="Quick access"
      className="fixed inset-x-0 bottom-0 z-40 bg-quick-bar lg:hidden"
    >
      <ul className="grid grid-cols-4">
        {quickLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-medium text-white transition-colors hover:bg-brand-navy"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
