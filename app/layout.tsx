import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import { CtaBanner } from "@/components/site-footer/CtaBanner";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { QuickAccessBar } from "@/components/site-footer/QuickAccessBar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Care Clinic | Health & Wellness Services in Westerville, OH";
const defaultDescription =
  "Experience full-spectrum pain management at our medically-integrated care facility. We provide treatments based on Physical, Traditional, & Functional Medicine.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  // Sitewide OG/Twitter fallback — pages that set their own `openGraph`
  // (e.g. blog posts) override this per Next.js metadata field merging;
  // all other pages inherit this instead of shipping zero social-card data.
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: "Impact Health & Wellness",
    images: [{ url: "/images/impact-logo.png", width: 620, height: 199 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/impact-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes like cz-shortcut-listen onto <body> before hydration */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <CtaBanner />
        <SiteFooter />
        <QuickAccessBar />
      </body>
    </html>
  );
}
