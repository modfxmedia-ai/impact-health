import { BlobNotFoundError, head, put } from "@vercel/blob";
<<<<<<< HEAD
import { COMMITTED_COVER_SLUGS, coverPrompt, topicCover } from "./config";
=======
import { COMMITTED_COVER_SLUGS, DEFAULT_COVER, coverPrompt } from "./config";
>>>>>>> fca3edc (feedback edits)

function coverPathname(contentId: string): string {
  return `blog-covers/${contentId}.png`;
}

function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null;
  return COMMITTED_COVER_SLUGS.includes(slug)
    ? `/images/blog/covers/${slug}.png`
    : null;
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim();
  const models = [preferred, "gpt-image-2", "gpt-image-1"].filter(
    (m): m is string => Boolean(m),
  );
  return [...new Set(models)];
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;
<<<<<<< HEAD
=======

>>>>>>> fca3edc (feedback edits)
  try {
    const meta = await head(coverPathname(contentId));
    return meta.url;
  } catch (err) {
    if (err instanceof BlobNotFoundError) return null;
    return null;
  }
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("[ranked] OPENAI_API_KEY is not set; skipping AI cover");
    return null;
  }

  const prompt = coverPrompt(title);
  let lastError = "";

  for (const model of imageModels()) {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        prompt,
        size: "1536x1024",
        quality: "medium",
        n: 1,
      }),
    });

    const text = await res.text();
    if (!res.ok) {
      lastError = `${model} ${res.status}: ${text.slice(0, 240)}`;
      console.error(`[ranked] OpenAI image failed: ${lastError}`);
      continue;
    }

    const json = JSON.parse(text) as {
      data?: Array<{ url?: string; b64_json?: string }>;
    };
    const row = json.data?.[0];
<<<<<<< HEAD
    if (row?.b64_json) return Buffer.from(row.b64_json, "base64");
=======

    if (row?.b64_json) return Buffer.from(row.b64_json, "base64");

>>>>>>> fca3edc (feedback edits)
    if (row?.url) {
      const img = await fetch(row.url);
      if (!img.ok) {
        lastError = `${model} image download ${img.status}`;
        continue;
      }
      return Buffer.from(await img.arrayBuffer());
    }

    lastError = `${model} returned no image payload`;
  }

  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`);
  return null;
}

<<<<<<< HEAD
async function persistPng(contentId: string, png: Buffer): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;
=======
async function persistPng(
  contentId: string,
  png: Buffer,
): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;

>>>>>>> fca3edc (feedback edits)
  const blob = await put(coverPathname(contentId), png, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "image/png",
  });
<<<<<<< HEAD
  return blob.url;
}

function usableUrl(value?: string | null): string | null {
  const src = value?.trim();
  if (!src) return null;
  if (src.startsWith("data:")) return null;
  return src;
=======

  return blob.url;
>>>>>>> fca3edc (feedback edits)
}

export async function getRankedCoverImage(input: {
  contentId: string;
  title: string;
  generate: boolean;
  slug?: string;
<<<<<<< HEAD
  featuredImage?: string | null;
  htmlImage?: string | null;
=======
>>>>>>> fca3edc (feedback edits)
}): Promise<string> {
  const committed = committedCoverUrl(input.slug);
  if (committed) return committed;

  const cached = await existingBlobUrl(input.contentId);
  if (cached) return cached;

<<<<<<< HEAD
  if (input.generate) {
    try {
      const png = await generatePng(input.title);
      if (png) {
        const stored = await persistPng(input.contentId, png);
        if (stored) return stored;
      }
    } catch (err) {
      console.error(`[ranked] cover failed for ${input.contentId}`, err);
    }
  }

  return (
    usableUrl(input.featuredImage) ||
    usableUrl(input.htmlImage) ||
    topicCover(input.title)
  );
=======
  if (!input.generate) return DEFAULT_COVER;

  try {
    const png = await generatePng(input.title);
    if (!png) return DEFAULT_COVER;
    return (await persistPng(input.contentId, png)) || DEFAULT_COVER;
  } catch (err) {
    console.error(`[ranked] cover failed for ${input.contentId}`, err);
    return DEFAULT_COVER;
  }
>>>>>>> fca3edc (feedback edits)
}
