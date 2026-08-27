import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import { CtaBanner } from "@/components/site-footer/CtaBanner";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { QuickAccessBar } from "@/components/site-footer/QuickAccessBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impacthealthoh.com"),
  title: "Care Clinic | Health & Wellness Services in Westerville, OH",
  description:
    "Experience full-spectrum pain management at our medically-integrated care facility. We provide treatments based on Physical, Traditional, & Functional Medicine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <CtaBanner />
        <SiteFooter />
        <QuickAccessBar />
      </body>
    </html>
  );
}
