/**
 * AkiliBiz changelog data source.
 *
 * Fetches published release information from the public GitHub Releases API
 * for the AkiliNova-Technologies/akilibiz-releases repository, then parses
 * structured release notes into an internal model the marketing site can
 * consume without depending on GitHub's API shape directly.
 */

import {
  type GitHubRelease,
  RELEASES_BASE_API,
  GITHUB_ACCEPT_HEADER,
} from "@/lib/github-types";

// ---------------------------------------------------------------------------
// Internal changelog model
// ---------------------------------------------------------------------------

export type ChangelogChangeType =
  | "new"
  | "improved"
  | "fixed"
  | "security"
  | "important"
  | "other";

export type ChangelogGroup = {
  type: ChangelogChangeType;
  label: string;
  items: string[];
};

export type ChangelogRelease = {
  version: string;
  title: string;
  summary?: string;
  publishedAt: string | null;
  releaseUrl: string;
  changes: ChangelogGroup[];
};

// ---------------------------------------------------------------------------
// Supported heading → type mapping
// ---------------------------------------------------------------------------

const HEADING_TYPE_MAP: Record<string, ChangelogChangeType> = {
  new: "new",
  improved: "improved",
  fixed: "fixed",
  security: "security",
  important: "important",
};

const TYPE_LABELS: Record<ChangelogChangeType, string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
  security: "Security",
  important: "Important",
  other: "Other",
};

// ---------------------------------------------------------------------------
// Release notes parser
// ---------------------------------------------------------------------------

/**
 * Parse a GitHub Release body (Markdown) into structured changelog groups.
 *
 * Recognised headings (case-insensitive):
 *   ## New, ## Improved, ## Fixed, ## Security, ## Important
 *
 * Bullet items under each heading are collected. Text before the first
 * recognised heading is treated as an optional summary.
 *
 * Unknown headings are mapped to "other". Malformed or empty bodies
 * produce an empty result without throwing.
 */
export function parseReleaseNotes(body: string | null): {
  summary?: string;
  groups: ChangelogGroup[];
} {
  if (!body || !body.trim()) {
    return { groups: [] };
  }

  const lines = body.split("\n");
  const groups: ChangelogGroup[] = [];
  let currentGroup: ChangelogGroup | null = null;
  const summaryLines: string[] = [];

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Detect ## headings
    const headingMatch = line.match(/^#{2,3}\s+(.+)$/);
    if (headingMatch) {
      const headingText = headingMatch[1].trim().toLowerCase();
      const type = HEADING_TYPE_MAP[headingText];

      if (type) {
        currentGroup = { type, label: TYPE_LABELS[type], items: [] };
        groups.push(currentGroup);
      } else {
        // Unknown heading — map to "other"
        currentGroup = {
          type: "other",
          label: headingMatch[1].trim(),
          items: [],
        };
        groups.push(currentGroup);
      }
      continue;
    }

    // Detect bullet items: -, *, or numbered (1. 2. etc.)
    const bulletMatch = line.match(/^\s*[-*]\s+(.+)$/);
    const numberedMatch = line.match(/^\s*\d+\.\s+(.+)$/);
    const bulletText = bulletMatch?.[1] ?? numberedMatch?.[1];

    if (bulletText) {
      const trimmed = bulletText.trim();
      if (trimmed && currentGroup) {
        currentGroup.items.push(trimmed);
      }
      continue;
    }

    // Non-empty text before any heading = summary
    if (!currentGroup) {
      const trimmed = line.trim();
      if (trimmed) {
        summaryLines.push(trimmed);
      }
    }
  }

  // Clean up empty groups
  const cleanGroups = groups.filter((g) => g.items.length > 0);

  const summary = summaryLines.length > 0 ? summaryLines.join(" ") : undefined;

  return { summary, groups: cleanGroups };
}

// ---------------------------------------------------------------------------
// GitHub Release → internal model mapping
// ---------------------------------------------------------------------------

function mapRelease(release: GitHubRelease): ChangelogRelease {
  const { summary, groups } = parseReleaseNotes(release.body);

  return {
    version: release.tag_name,
    title:
      release.name?.trim() || `AkiliBiz Desktop ${release.tag_name}`,
    summary,
    publishedAt: release.published_at,
    releaseUrl: release.html_url,
    changes: groups,
  };
}

// ---------------------------------------------------------------------------
// Fetch published changelog from GitHub
// ---------------------------------------------------------------------------

/**
 * Fetch published, non-draft, non-prerelease releases from the public
 * AkiliBiz releases repository and return them as structured changelog data.
 *
 * Results are newest-first (GitHub's default order).
 * Draft and prerelease versions are excluded.
 * Up to 100 releases are fetched (first page).
 * Cached for 5 minutes via Next.js revalidation, matching the download fetch.
 */
export async function getAkiliBizChangelog(): Promise<ChangelogRelease[]> {
  const response = await fetch(`${RELEASES_BASE_API}?per_page=100`, {
    headers: {
      Accept: GITHUB_ACCEPT_HEADER,
    },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load AkiliBiz release history.");
  }

  const releases = (await response.json()) as GitHubRelease[];

  return releases
    .filter((r) => !r.draft && !r.prerelease)
    .map(mapRelease);
}
