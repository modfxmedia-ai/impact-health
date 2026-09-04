export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavColumn {
  heading?: string;
  headingHref?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Omitted for top-level items that are dropdown-only triggers on the live site (href="#"). */
  href?: string;
  columns?: NavColumn[];
  /** Dropdown alignment relative to the trigger; defaults to "left". */
  align?: "left" | "right";
}

// Mirrors the live site's primary menu (header nav), including dropdown
// structure. The 3-level "Services" submenu is flattened into mega-menu
// columns (by parent topic) rather than nested flyouts, for usability.
export const primaryNav: NavItem[] = [
  {
    label: "About",
    href: "/about-us/",
    columns: [
      {
        links: [
          { label: "Meet Our Team", href: "/our-team/" },
          { label: "Blog", href: "/blog/" },
        ],
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        heading: "Regenerative Medicine",
        headingHref: "/regenerative-medicine/",
        links: [
          { label: "HA Gel Injections", href: "/ha-gel-injections/" },
          { label: "PRP Therapy", href: "/prp-therapy/" },
          { label: "Shockwave Therapy", href: "/shockwave/" },
          { label: "Laser Therapy", href: "/laser-therapy/" },
        ],
      },
      {
        heading: "Anti-Aging & Weight Loss",
        headingHref: "/anti-aging-wellness/",
        links: [
          { label: "Meal Planning", href: "/meal-planning/" },
          { label: "IV Therapy", href: "/iv-therapy/" },
          {
            label: "IV Therapy Infusion Boosters",
            href: "/iv-therapy-infusion-boosters/",
          },
          { label: "Peptide Therapy", href: "/peptide-therapy/" },
        ],
      },
      {
        heading: "Chiropractic Care",
        headingHref: "/chiropractic-care/",
        links: [
          { label: "Diagnostics", href: "/chiropractic-care/diagnostics/" },
          {
            label: "Pregnancy & Infant Chiropractic Care",
            href: "/chiropractic-care/pregnancy-infant-chiropractic-care/",
          },
          {
            label: "Spinal Decompression",
            href: "/chiropractic-care/spinal-decompression/",
          },
          {
            label: "Trigger Point Injections",
            href: "/chiropractic-care/trigger-point-injections/",
          },
        ],
      },
      {
        heading: "More Services",
        links: [
          { label: "Neuropathy Treatments", href: "/neuropathy-treatments/" },
          {
            label: "Hormone Replacement Therapy",
            href: "/hormone-replacement-therapy-hrt/",
          },
          {
            label: "Physical Therapy",
            href: "/chiropractic-care/physical-therapy/",
          },
          { label: "Work Related Injuries", href: "/workers-compensation/" },
          { label: "Auto Related Injuries", href: "/car-accident-injuries/" },
          { label: "Personal Injuries", href: "/personal-injuries/" },
          {
            label: "School & Sports Physicals",
            href: "/school-sports-physicals/",
          },
        ],
      },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions-we-treat/",
    columns: [
      {
        links: [
          { label: "Back Pain", href: "/conditions-we-treat/back-pain/" },
          { label: "Carpal Tunnel", href: "/conditions-we-treat/carpal-tunnel/" },
          { label: "Chronic Pain", href: "/conditions-we-treat/chronic-pain/" },
          {
            label: "Foot & Ankle Pain",
            href: "/conditions-we-treat/foot-ankle-pain/",
          },
          { label: "Hip Pain", href: "/conditions-we-treat/hip-pain/" },
          { label: "Knee Pain", href: "/conditions-we-treat/knee-pain/" },
        ],
      },
      {
        links: [
          {
            label: "Migraines and Headaches",
            href: "/conditions-we-treat/migraines-and-headaches/",
          },
          { label: "Neck Pain", href: "/conditions-we-treat/neck-pain/" },
          {
            label: "Neuropathy",
            href: "/neuropathy-treatments/#Understanding_Neuropathy",
          },
          {
            label: "Osteoarthritis",
            href: "/conditions-we-treat/osteoarthritis/",
          },
          {
            label: "Shoulder Pain",
            href: "/conditions-we-treat/shoulder-pain/",
          },
          {
            label: "Sports Injuries",
            href: "/conditions-we-treat/sports-injuries/",
          },
          { label: "Whiplash", href: "/conditions-we-treat/whiplash/" },
        ],
      },
    ],
  },
  {
    label: "Patients",
    align: "right",
    columns: [
      {
        links: [
          { label: "Accepted Insurances", href: "/accepted-insurance/" },
          {
            label: "Online Bill Pay",
            href: "https://www.bodzin.net/cashpractice/Page_Index_Blank.php?Page=Gateway&MID=aJhkrg&GID=22290943&FID=&FEE=",
            external: true,
          },
          {
            label: "Patient Portal",
            href: "https://mycw156.ecwcloud.com/portal21781/jsp/100mp/login_otp.jsp",
            external: true,
          },
        ],
      },
    ],
  },
  {
    label: "Wellness Shop",
    align: "right",
    columns: [
      {
        links: [
          {
            label: "Evexias – Nutraceuticals/Supplements",
            href: "https://connect.evexi.as/nutraceuticals/?p_id=329ce0c8-cd9c-42ce-a715-78ca2067b1cd",
            external: true,
          },
          {
            label: "Fullscript – Supplements",
            href: "https://us.fullscript.com/welcome/impacthealthandwellness/store-start",
            external: true,
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact-us/",
  },
];

/** The "Services" top-level nav item's columns — the flattened Services route map. */
const serviceColumns = primaryNav.find((item) => item.label === "Services")?.columns ?? [];

/**
 * Cross-links for a service page's "Related Services" section: the other
 * links in the same Services nav column (siblings), excluding the page
 * itself. Falls back to an empty array for pages outside the Services menu.
 */
export function getRelatedServices(href: string): NavLink[] {
  const column = serviceColumns.find(
    (col) => col.headingHref === href || col.links.some((link) => link.href === href),
  );
  if (!column) return [];

  const all: NavLink[] =
    column.headingHref && column.heading
      ? [{ label: column.heading, href: column.headingHref }, ...column.links]
      : column.links;

  return all.filter((link) => link.href !== href);
}

export const contactInfo = {
  phoneDisplay: "(614) 942-6986",
  phoneCompactDisplay: "614-942-6986",
  phoneHref: "tel:+16149426986",
  email: "info@ihwoh.com",
  emailHref: "mailto:info@ihwoh.com",
  address: "193 W. Schrock Road, Westerville, Ohio 43081",
  mapsUrl: "https://maps.app.goo.gl/7LqxFrYareGJaG2v6",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/impacthealthandwellnessohio",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/impacthealthandwellness/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/impacthealthandwellness/",
  },
] as const;
