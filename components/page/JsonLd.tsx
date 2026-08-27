export type JsonLdSchema =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

export function JsonLd({ schema }: { schema: JsonLdSchema }) {
  const payload = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema }
    : schema;

  return (
    <script
      type="application/ld+json"
      // The captured schema is trusted content from our own data pipeline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
