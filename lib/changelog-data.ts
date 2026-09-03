/**
 * AkiliBiz changelog data.
 *
 * This file re-exports the changelog model and fetch function from
 * lib/changelog.ts. The hard-coded release data has been replaced
 * with live data fetched from the public GitHub Releases API.
 *
 * To add a new release, publish it in the AkiliNova-Technologies/akilibiz-releases
 * repository with structured release notes using ## headings.
 */

export {
  type ChangelogChangeType,
  type ChangelogGroup,
  type ChangelogRelease,
  getAkiliBizChangelog,
} from "@/lib/changelog";
