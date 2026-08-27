import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Patient Testimonials | Impact Health & Wellness",
  description:
    "See what our patients say about Impact Health & Wellness in Westerville, OH. Read real testimonials and reviews.",
  alternates: { canonical: "/patient-testimonials/" },
};

export default function PatientTestimonialsPage() {
  return (
    <PagePlaceholder
      title="Patient Testimonials"
      description="See what our patients say about us."
    />
  );
}
