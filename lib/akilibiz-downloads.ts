const RELEASES_API =
  "https://api.github.com/repos/AkiliNova-Technologies/akilibiz-releases/releases/latest";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  published_at: string | null;
  assets: GitHubReleaseAsset[];
};

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
  const response = await fetch(RELEASES_API, {
    headers: {
      Accept: "application/vnd.github+json",
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