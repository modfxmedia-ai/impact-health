import { PageLayout } from "@/components/page/PageLayout";
import type { Crumb } from "@/components/page/Breadcrumbs";
import type { JsonLdSchema } from "@/components/page/JsonLd";

export function PagePlaceholder({
  title,
  description,
  eyebrow,
  breadcrumbs,
  schema,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  schema?: JsonLdSchema;
}) {
  return (
    <PageLayout
      title={title}
      eyebrow={eyebrow}
      intro={description}
      breadcrumbs={breadcrumbs}
      schema={schema}
    >
      <p className="text-base text-zinc-600">
        Content for this page is being prepared. Please check back soon.
      </p>
    </PageLayout>
  );
}
