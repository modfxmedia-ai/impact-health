import { listRankedContent } from "./client";
import { getRankedCoverImage } from "./cover";
<<<<<<< HEAD
import { isBlogContentType, isRankedPostLive, slugFromTitle } from "./html-to-post";

export async function generateLiveRankedCovers(projectId: string): Promise<string[]> {
=======
import {
  isBlogContentType,
  isRankedPostLive,
  slugFromTitle,
} from "./html-to-post";

/** Cron must not import compiled blog bodies. Covers only. */
export async function generateLiveRankedCovers(
  projectId: string,
): Promise<string[]> {
>>>>>>> fca3edc (feedback edits)
  const items = await listRankedContent(projectId);
  const slugs: string[] = [];

  for (const item of items) {
    if (
      !isBlogContentType(item.content_type) ||
      !isRankedPostLive(item.status, item.scheduled_date)
    ) {
      continue;
    }

    const slug = slugFromTitle(item.title);
    await getRankedCoverImage({
      contentId: item.id,
      title: item.title,
      slug,
      generate: true,
<<<<<<< HEAD
      featuredImage: item.featured_image_url,
=======
>>>>>>> fca3edc (feedback edits)
    });
    slugs.push(slug);
  }

  return slugs;
}
