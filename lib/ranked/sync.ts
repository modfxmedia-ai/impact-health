import { hasRankedApiKey, listRankedProjects } from "./client";
import { generateLiveRankedCovers } from "./publish";
import { revalidateRankedBlog } from "./revalidate";
import { getRankedSiteTargets, isLocalOrigin } from "./sites";
import type { RankedProject } from "./types";

function projectWebsite(project: RankedProject): string | null {
  return project.websiteUrl || project.website_url || null;
}

export async function syncAllRankedSites() {
  const projects = hasRankedApiKey() ? await listRankedProjects().catch(() => []) : [];
  const targets = getRankedSiteTargets();
  const mappedIds = new Set(targets.map((t) => t.projectId));

  const unmapped = projects
    .filter((p) => !mappedIds.has(p.id))
    .map((p) => ({
      id: p.id,
      name: p.name,
      status: p.status,
      websiteUrl: projectWebsite(p),
    }));

  const published: Array<{
    projectId: string;
    name: string;
    origin: string;
    local: boolean;
    livePosts: number;
    slugs: string[];
  }> = [];

  for (const site of targets) {
    if (!isLocalOrigin(site.origin)) {
      continue;
    }

    revalidateRankedBlog();
    const slugs = await generateLiveRankedCovers(site.projectId);
    published.push({
      projectId: site.projectId,
      name: site.name,
      origin: site.origin,
      local: true,
      livePosts: slugs.length,
      slugs,
    });
  }

  return {
    rankedProjectCount: projects.length,
    mappedCount: targets.length,
    unmappedCount: unmapped.length,
    unmapped,
    published,
  };
}
