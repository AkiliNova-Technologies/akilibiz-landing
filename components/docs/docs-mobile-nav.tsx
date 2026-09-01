"use client";
import { Menu } from "lucide-react";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function DocsMobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outlineOnDark"
          size="icon"
          className="md:hidden"
          aria-label="Open documentation navigation">
          <Menu className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="left-0 right-auto bg-white text-ink-900">
        <h2 className="font-[family-name:var(--font-sora)] text-lg font-semibold">
          Documentation
        </h2>
        <div className="overflow-y-auto pr-2">
          <DocsSidebar />
        </div>
      </DialogContent>
    </Dialog>
  );
}