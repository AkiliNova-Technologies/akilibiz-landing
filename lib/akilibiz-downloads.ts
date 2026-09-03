import {
  type GitHubRelease,
  type GitHubReleaseAsset,
  LATEST_RELEASE_API,
  GITHUB_ACCEPT_HEADER,
} from "@/lib/github-types";

export type LatestAkiliBizDownloads = {
  version: string;
  releaseUrl: string;
  publishedAt: string | null;
  windowsExe?: string;
  windowsMsi?: string;
  linuxAppImage?: string;
  linuxDeb?: string;
  linuxRpm?: string;
  macosDmg?: string;
  macosArchive?: string;
};

function findAsset(
  assets: GitHubReleaseAsset[],
  matches: (name: string) => boolean,
) {
  return assets.find((asset) => matches(asset.name))?.browser_download_url;
}

export async function getLatestAkiliBizDownloads(): Promise<LatestAkiliBizDownloads | null> {
  const response = await fetch(LATEST_RELEASE_API, {
    headers: {
      Accept: GITHUB_ACCEPT_HEADER,
    },
    next: {
      revalidate: 300,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Unable to load the latest AkiliBiz release.");
  }

  const release = (await response.json()) as GitHubRelease;

  return {
    version: release.tag_name,
    releaseUrl: release.html_url,
    publishedAt: release.published_at,
    windowsExe: findAsset(release.assets, (name) => /\.exe$/i.test(name)),
    windowsMsi: findAsset(release.assets, (name) => /\.msi$/i.test(name)),
    linuxAppImage: findAsset(release.assets, (name) => /\.AppImage$/i.test(name)),
    linuxDeb: findAsset(release.assets, (name) => /\.deb$/i.test(name)),
    linuxRpm: findAsset(release.assets, (name) => /\.rpm$/i.test(name)),
    macosDmg: findAsset(release.assets, (name) => /\.dmg$/i.test(name)),
  };
}
