function schemaJson(data: unknown): string | null {
  if (data == null || data === false) return null;
  if (typeof data === "string") {
    const trimmed = data.trim();
    if (!trimmed) return null;
    return trimmed.replace(/</g, "\\u003c");
  }
  if (typeof data !== "object") return null;
  if (!Array.isArray(data) && Object.keys(data).length === 0) return null;
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: unknown }) {
  const json = schemaJson(data);
  if (!json) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
