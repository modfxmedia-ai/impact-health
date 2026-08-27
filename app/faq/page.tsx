import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Impact Health & Wellness",
  description:
    "Find answers to frequently asked questions about Impact Health & Wellness in Westerville, OH — our services, insurance, and appointments.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <PagePlaceholder
      title="Frequently Asked Questions"
      description="Answers to common questions about our services, insurance, and appointments."
    />
  );
}
