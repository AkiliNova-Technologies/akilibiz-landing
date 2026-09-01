import Link from "next/link";
import { DocsSearch } from "@/components/docs/docs-search";
import { DocsMobileNav } from "@/components/docs/docs-mobile-nav";
import { Logo } from "@/components/marketing/logo";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`body > header, body > footer { display: none; }`}</style>
      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#06131f] px-4 backdrop-blur sm:px-6">
        <div className="mx-auto flex h-16 max-w-[1480px] items-center gap-6">
          <DocsMobileNav />
          <div className="flex shrink-0 items-center gap-2">
            <Logo reversed className="text-[15px]" />
            <Link href="/docs" className="font-normal text-white/60 hover:text-white">
              Docs
            </Link>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/65 md:flex">
            <Link href="/docs" className="text-white">
              Documentation
            </Link>
            <Link href="/docs/api-reference" className="hover:text-white">
              API Reference
            </Link>
            <Link href="/changelog" className="hover:text-white">
              Changelog
            </Link>
          </nav>

          <div className="hidden flex-1 justify-end md:flex">
            <DocsSearch />
          </div>

        </div>
        <div className="pb-3 md:hidden">
          <DocsSearch />
        </div>
      </header>
      {children}
    </div>
  );
}
