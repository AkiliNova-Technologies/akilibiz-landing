import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ExternalLink,
  Shield,
  AlertTriangle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  getAkiliBizChangelog,
  type ChangelogChangeType,
  type ChangelogGroup,
  type ChangelogRelease,
} from "@/lib/changelog-data";
import { ChangelogSidebar } from "@/components/docs/changelog-sidebar";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See the latest AkiliBiz product updates, improvements, fixes, and release changes.",
};

const typeConfig: Record<
  ChangelogChangeType,
  { label: string; variant: "brand" | "neutral" | "available" | "soon" }
> = {
  new: { label: "New", variant: "brand" },
  improved: { label: "Improved", variant: "neutral" },
  fixed: { label: "Fixed", variant: "neutral" },
  security: { label: "Security", variant: "available" },
  important: { label: "Important", variant: "soon" },
  other: { label: "Other", variant: "neutral" },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ChangeItem({ text, type }: { text: string; type: ChangelogChangeType }) {
  return (
    <li className="flex gap-3 text-[15px] leading-7 text-ink-600">
      {type === "new" ? (
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <Check className="h-3 w-3" aria-hidden="true" />
        </span>
      ) : type === "security" ? (
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
          <Shield className="h-3 w-3" aria-hidden="true" />
        </span>
      ) : type === "important" ? (
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
          <AlertTriangle className="h-3 w-3" aria-hidden="true" />
        </span>
      ) : (
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300" />
      )}
      <p>{text}</p>
    </li>
  );
}

function ReleaseSection({ release }: { release: ChangelogRelease }) {
  const typeOrder: ChangelogChangeType[] = [
    "new",
    "improved",
    "fixed",
    "security",
    "important",
    "other",
  ];

  const groupsByType = new Map<ChangelogChangeType, ChangelogGroup>();
  for (const group of release.changes) {
    groupsByType.set(group.type, group);
  }

  return (
    <article
      id={release.version}
      className="scroll-mt-24"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
            {release.title}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-500">
            <span className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium tabular-nums">
              {release.version}
            </span>
            {release.publishedAt ? (
              <time dateTime={release.publishedAt} className="text-ink-400">
                {formatDate(release.publishedAt)}
              </time>
            ) : null}
          </div>
        </div>

        {release.releaseUrl ? (
          <a
            href={release.releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400 transition-colors hover:text-ink-700"
          >
            View on GitHub
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {release.summary ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-600">
          {release.summary}
        </p>
      ) : null}

      {release.changes.length > 0 ? (
        <div className="mt-6 space-y-6">
          {typeOrder.map((type) => {
            const group = groupsByType.get(type);
            if (!group || group.items.length === 0) return null;
            const config = typeConfig[type];

            return (
              <div key={type}>
                <div className="flex items-center gap-2.5">
                  <Badge variant={config.variant}>{group.label}</Badge>
                  <span className="text-xs text-ink-400">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "change" : "changes"}
                  </span>
                </div>

                <ul className="mt-3 space-y-2.5 pl-0.5">
                  {group.items.map((text) => (
                    <ChangeItem key={text} text={text} type={group.type} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-5 text-sm text-ink-400">
          No detailed release notes for this version.
        </p>
      )}
    </article>
  );
}

function TocReleaseLink({ release }: { release: ChangelogRelease }) {
  return (
    <a
      href={`#${release.version}`}
      className="block text-ink-500 hover:text-ink-900 transition-colors"
    >
      <span className="block text-[13px] font-medium">{release.version}</span>
      {release.publishedAt && (
        <span className="block text-[11px] text-ink-400 mt-0.5">
          {formatDate(release.publishedAt)}
        </span>
      )}
    </a>
  );
}

async function ChangelogContent() {
  let releases: ChangelogRelease[];

  try {
    releases = await getAkiliBizChangelog();
  } catch {
    return (
      <div className="mx-auto max-w-[1480px] px-4 py-16 lg:grid lg:grid-cols-[240px_minmax(0,700px)_200px] lg:gap-10 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ChangelogSidebar releases={[]} />
          </div>
        </aside>

        <article>
          <nav className="text-sm text-ink-400">Docs / Changelog</nav>
          <h1 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-.03em] text-ink-900">
            Changelog
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-ink-500">
            See the latest AkiliBiz product updates, improvements, fixes, and
            release changes.
          </p>
          <hr className="mt-8 border-ink-100" />
          <div className="mt-10 rounded-lg border border-ink-100 bg-ink-50/50 p-6 text-center">
            <p className="text-sm text-ink-500">
              Release history is temporarily unavailable. Please try again
              shortly.
            </p>
          </div>
        </article>

        <aside className="hidden lg:block" />
      </div>
    );
  }

  if (releases.length === 0) {
    return (
      <div className="mx-auto max-w-[1480px] px-4 py-16 lg:grid lg:grid-cols-[240px_minmax(0,700px)_200px] lg:gap-10 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ChangelogSidebar releases={[]} />
          </div>
        </aside>

        <article>
          <nav className="text-sm text-ink-400">Docs / Changelog</nav>
          <h1 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-.03em] text-ink-900">
            Changelog
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-ink-500">
            See the latest AkiliBiz product updates, improvements, fixes, and
            release changes.
          </p>
          <hr className="mt-8 border-ink-100" />
          <div className="mt-10 rounded-lg border border-ink-100 bg-ink-50/50 p-6 text-center">
            <p className="text-sm text-ink-500">
              No releases have been published yet. Check back soon.
            </p>
          </div>
        </article>

        <aside className="hidden lg:block" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1480px] px-4 py-10 lg:grid lg:grid-cols-[240px_minmax(0,700px)_200px] lg:gap-10 lg:px-8">
      {/* Left sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <ChangelogSidebar releases={releases} />
        </div>
      </aside>

      {/* Center content */}
      <article>
        <nav className="text-sm text-ink-400">Docs / Changelog</nav>
        <h1 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-.03em] text-ink-900">
          Changelog
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-ink-500">
          Follow new features, improvements, fixes, and important changes across
          AkiliBiz.
        </p>
        <hr className="mt-8 border-ink-100" />

        <div className="mt-8 space-y-10">
          {releases.map((release) => (
            <ReleaseSection key={release.version} release={release} />
          ))}
        </div>

        {/* Support box */}
        <div className="mt-10 rounded-lg border border-ink-100 p-4">
          <p className="text-sm font-semibold text-ink-900">
            Need help with an update?
          </p>
          <p className="mt-1 text-sm text-ink-500">
            Contact us and we will help you get the most from the latest version.
          </p>
          <Link
            href="/contact"
            className="mt-2.5 inline-block text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            Contact support
          </Link>
        </div>
      </article>

      {/* Right TOC */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 text-sm">
          <p className="font-semibold text-ink-900">On this page</p>
          <nav className="mt-3 space-y-2.5 border-l border-ink-100 pl-3.5 text-ink-500">
            {releases.map((release) => (
              <TocReleaseLink key={release.version} release={release} />
            ))}
          </nav>
          <Link
            href="/download"
            className="mt-8 block border-t border-ink-100 pt-5 text-sm font-medium text-ink-700 hover:text-ink-900"
          >
            Download latest version
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default async function ChangelogPage() {
  return (
    <main className="min-h-screen bg-white text-ink-900">
      <ChangelogContent />
    </main>
  );
}
