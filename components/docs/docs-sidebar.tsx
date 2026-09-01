import Link from "next/link";

import {
  docsSections,
  getGuideGroups,
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
  SidebarProvider,
} from "@/components/ui/sidebar";

export function DocsSidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <SidebarProvider className="min-h-0 w-full">
      <Sidebar
        collapsible="none"
        className="h-auto w-full! bg-transparent text-ink-900"
      >
        <SidebarContent className="gap-5 overflow-visible">
          <nav aria-label="Documentation guides">
            {docsSections.map((section) => (
              <SidebarGroup key={section.id} className="p-0 mt-4">
                <SidebarGroupLabel className="h-auto px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {section.label}
                </SidebarGroupLabel>

                <SidebarGroupContent>
                  <SidebarMenu className="gap-0.5">
                    {section.id === "start" && (
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          render={<Link href="/docs" />}
                          isActive={!activeSlug}
                          className="h-auto rounded-lg px-3 py-1.5 text-[13.5px] text-ink-500 hover:bg-ink-50 hover:text-ink-900 data-active:bg-ink-900 data-active:font-medium data-active:text-white"
                        >
                          Welcome
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}

                    {getGuideGroups(section.id).map(([group, guides]) => (
                      <div key={group} className="first:mt-0">
                        {/* <p className="px-3 pb-1 text-[11px] font-medium text-ink-400">
                          {group}
                        </p> */}

                        {guides.map((guide) => (
                          <SidebarMenuItem key={guide.slug}>
                            <SidebarMenuButton
                              render={<Link href={`/docs/${guide.slug}`} />}
                              isActive={activeSlug === guide.slug}
                              aria-current={
                                activeSlug === guide.slug ? "page" : undefined
                              }
                              className="h-auto rounded-lg px-3 py-1.5 text-[13.5px] text-ink-500 hover:bg-ink-50 hover:text-ink-900 data-active:bg-ink-900 data-active:font-medium data-active:text-white"
                            >
                              {guide.navLabel}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </div>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </nav>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}