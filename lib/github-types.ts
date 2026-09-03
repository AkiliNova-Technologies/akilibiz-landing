/**
 * Shared types for consuming the public AkiliBiz releases GitHub API.
 *
 * These types represent the shape of GitHub's Releases API responses and are
 * used by both the Download page and the Changelog page. They should not be
 * exposed directly to UI components — use internal models instead.
 */

export type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

export type GitHubRelease = {
  tag_name: string;
  name: string | null;
  body: string | null;
  html_url: string;
  published_at: string | null;
  draft: boolean;
  prerelease: boolean;
  assets: GitHubReleaseAsset[];
};

export const GITHUB_REPO = "AkiliNova-Technologies/akilibiz-releases";

export const RELEASES_BASE_API = `https://api.github.com/repos/${GITHUB_REPO}/releases`;

export const LATEST_RELEASE_API = `${RELEASES_BASE_API}/latest`;

export const GITHUB_ACCEPT_HEADER = "application/vnd.github+json";
