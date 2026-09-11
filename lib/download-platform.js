/**
 * Identifies only the platform information needed to prevent a Chromebook from
 * receiving a Windows installer recommendation. It is presentation logic, not
 * an authorization or compatibility guarantee.
 */
export function detectDownloadPlatform({ userAgent = "", clientPlatform = "" } = {}) {
  const platform = clientPlatform.replaceAll('"', "").toLowerCase();
  const agent = userAgent.toLowerCase();

  if (platform.includes("chrome os") || /\bcros\b/.test(agent)) {
    return "chrome-os";
  }
  if (platform.includes("windows") || agent.includes("windows nt")) {
    return "windows";
  }
  if (platform.includes("mac") || /macintosh|mac os x/.test(agent)) {
    return "macos";
  }
  if (platform.includes("linux") || agent.includes("linux")) {
    return "linux";
  }
  return "unknown";
}
