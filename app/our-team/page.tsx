import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Our Team | Expert Health Specialists in Westerville, OH",
  description:
    "Meet our expert team at Impact Health & Wellness in Westerville, OH. We offer personalized care, including chiropractic & regenerative medicine. Meet us today!",
  alternates: { canonical: "/our-team/" },
};

export default function OurTeamPage() {
  return (
    <PagePlaceholder
      title="Our Team"
      description="Meet our expert team at Impact Health & Wellness in Westerville, OH."
    />
  );
}
