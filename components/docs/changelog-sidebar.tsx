"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { ChangelogRelease } from "@/lib/changelog-data";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getMajorVersion(version: string) {
  const match = version.match(/^v?(\d+)/);
  return match ? `v${match[1]}` : version;
}

function groupReleasesByMajor(
  releases: ChangelogRelease[]
): Map<string, ChangelogRelease[]> {
  const grouped = new Map<string, ChangelogRelease[]>();
  for (const release of releases) {
    const major = getMajorVersion(release.version);
    const existing = grouped.get(major) ?? [];
    existing.push(release);
    grouped.set(major, existing);
  }
  return grouped;
}

function VersionSection({
  majorLabel,
  releases,
  activeVersion,
}: {
  majorLabel: string;
  releases: ChangelogRelease[];
  activeVersion?: string;
}) {
  const hasActive = releases.some((r) => r.version === activeVersion);
  const [open, setOpen] = React.useState(hasActive);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "h-auto w-full justify-between rounded-md px-3 py-1.5 text-[13.5px] font-medium",
          hasActive
            ? "text-ink-900 hover:bg-brand-50"
            : "text-ink-600 hover:bg-brand-50 hover:text-ink-900"
        )}
      >
        <span>{majorLabel}</span>
        <ChevronRight
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-ink-400 transition-transform duration-200",
            open && "rotate-90"
          )}
        />
      </SidebarMenuButton>

      {open && (
        <SidebarMenuSub className="mx-3 mt-0.5 border-l-ink-200 py-0">
          {releases.map((release) => (
            <SidebarMenuSubItem key={release.version}>
              <SidebarMenuSubButton
                render={<Link href={`#${release.version}`} />}
                isActive={activeVersion === release.version}
                aria-current={
                  activeVersion === release.version ? "true" : undefined
                }
                className={cn(
                  "h-auto rounded-md px-2.5 py-1 text-[13px]",
                  "text-ink-500 hover:bg-brand-50 hover:text-ink-900",
                  "data-active:bg-brand-900 data-active:font-medium data-active:text-white"
                )}
              >
                <span className="flex flex-col gap-0.5">
                  <span>{release.version}</span>
                  {release.publishedAt && (
                    <span className="text-[11px] text-ink-400 data-active:text-white/60">
                      {formatDate(release.publishedAt)}
                    </span>
                  )}
                </span>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}

export function ChangelogSidebar({
  releases,
  activeVersion,
}: {
  releases: ChangelogRelease[];
  activeVersion?: string;
}) {
  const grouped = groupReleasesByMajor(releases);

  return (
    <SidebarProvider className="min-h-0 w-full">
      <Sidebar
        collapsible="none"
        className="h-auto w-full! bg-transparent text-ink-900 border-r border-ink-100 p-1"
      >
        <SidebarContent className="gap-0 overflow-visible">
          <nav aria-label="Changelog releases">
            {/* Overview link */}
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      render={<Link href="/docs" />}
                      className="h-auto rounded-md px-3 py-1.5 text-[13.5px] text-ink-500 hover:bg-brand-50 hover:text-ink-900 data-active:bg-brand-900 data-active:font-medium data-active:text-white"
                    >
                      Documentation
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Version groups */}
            <SidebarGroup className="p-0 mt-6">
              <SidebarGroupLabel className="h-auto px-3 pb-2 text-xs font-semibold text-brand-700">
                Releases
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0.5">
                  {Array.from(grouped.entries()).map(
                    ([major, releaseList]) => (
                      <VersionSection
                        key={major}
                        majorLabel={major}
                        releases={releaseList}
                        activeVersion={activeVersion}
                      />
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </nav>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
