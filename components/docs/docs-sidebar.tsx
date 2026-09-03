"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  docsSections,
  getGuideGroups,
  type DocsGuide,
} from "@/lib/docs-data";

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

function GroupSection({
  sectionId,
  sectionLabel,
  groups,
  activeSlug,
}: {
  sectionId: string;
  sectionLabel: string;
  groups: [string, DocsGuide[]][];
  activeSlug?: string;
}) {
  const [openGroups, setOpenGroups] = React.useState<Set<string>>(new Set());

  function toggleGroup(name: string) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  return (
    <SidebarGroup className="p-0 mt-6">
      <SidebarGroupLabel className="h-auto px-3 pb-2 text-xs font-semibold text-brand-700">
        {sectionLabel}
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu className="gap-0.5">
          {sectionId === "start" && (
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link href="/docs" />}
                isActive={!activeSlug}
                className="h-auto rounded-md px-3 py-1.5 text-[13.5px] text-ink-500 hover:bg-brand-50 hover:text-ink-900 data-active:bg-brand-900 data-active:font-medium data-active:text-white"
              >
                Welcome
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}

          {groups.map(([groupName, guides]) => {
            const open = openGroups.has(groupName);
            const hasActive = guides.some((g) => g.slug === activeSlug);

            return (
              <SidebarMenuItem key={groupName}>
                <SidebarMenuButton
                  onClick={() => toggleGroup(groupName)}
                  aria-expanded={open}
                  className={cn(
                    "h-auto w-full justify-between rounded-md px-3 py-1.5 text-[13.5px] font-medium",
                    hasActive
                      ? "text-ink-900 hover:bg-brand-50"
                      : "text-ink-600 hover:bg-brand-50 hover:text-ink-900"
                  )}
                >
                  <span>{groupName}</span>
                  <ChevronRight
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 text-ink-400 transition-transform duration-200",
                      open && "rotate-90"
                    )}
                  />
                </SidebarMenuButton>

                {open && (
                  <SidebarMenuSub className="mx-3 mt-0.5 border-l-ink-200 py-0">
                    {guides.map((guide) => (
                      <SidebarMenuSubItem key={guide.slug}>
                        <SidebarMenuSubButton
                          render={<Link href={`/docs/${guide.slug}`} />}
                          isActive={activeSlug === guide.slug}
                          aria-current={
                            activeSlug === guide.slug ? "page" : undefined
                          }
                          className={cn(
                            "h-auto rounded-md px-2.5 py-1 text-[13px]",
                            "text-ink-500 hover:bg-brand-50 hover:text-ink-900",
                            "data-active:bg-brand-900 data-active:font-medium data-active:text-white"
                          )}
                        >
                          {guide.navLabel}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function DocsSidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <SidebarProvider className="min-h-0 w-full">
      <Sidebar
        collapsible="none"
        className="h-auto w-full! bg-transparent text-ink-900 border-r border-ink-100 p-1"
      >
        <SidebarContent className="gap-0 overflow-visible">
          <nav aria-label="Documentation guides">
            {docsSections.map((section) => (
              <GroupSection
                key={section.id}
                sectionId={section.id}
                sectionLabel={section.label}
                groups={getGuideGroups(section.id)}
                activeSlug={activeSlug}
              />
            ))}
          </nav>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
