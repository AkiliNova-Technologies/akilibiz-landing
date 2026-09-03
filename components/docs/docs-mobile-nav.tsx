"use client";
import { Menu } from "lucide-react";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { ChangelogSidebar } from "@/components/docs/changelog-sidebar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { ChangelogRelease } from "@/lib/changelog-data";

export function DocsMobileNav({
  mode = "docs",
  releases,
}: {
  mode?: "docs" | "changelog";
  releases?: ChangelogRelease[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outlineOnDark"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation">
          <Menu className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="left-0 right-auto bg-white text-ink-900">
        <h2 className="font-[family-name:var(--font-sora)] text-lg font-semibold">
          {mode === "changelog" ? "Changelog" : "Documentation"}
        </h2>
        <div className="overflow-y-auto pr-2">
          {mode === "changelog" && releases ? (
            <ChangelogSidebar releases={releases} />
          ) : (
            <DocsSidebar />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
