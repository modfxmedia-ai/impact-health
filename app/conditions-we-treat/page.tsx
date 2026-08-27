import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Conditions We Treat in Westerville, OH",
  description:
    "Impact Health & Wellness in Westerville, OH treats a wide range of conditions, from chronic pain to sports injuries. Find relief today. Schedule an exam!",
  alternates: { canonical: "/conditions-we-treat/" },
};

export default function ConditionsWeTreatPage() {
  return (
    <PagePlaceholder
      title="Conditions We Treat"
      description="A wide range of conditions we treat, from chronic pain to sports injuries."
    />
  );
}
