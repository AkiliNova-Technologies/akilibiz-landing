import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { docsGuides, docsHome } from "@/lib/docs-data";

export const metadata: Metadata = {
  title: "Documentation",
  description: docsHome.summary,
};

export default function DocsPage() {
  return (
    <div className="mx-auto grid max-w-[1480px] gap-10 px-4 py-10 lg:grid-cols-[240px_minmax(0,700px)_200px] lg:px-8">
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <DocsSidebar />
        </div>
      </aside>

      <article>
        <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-.03em] text-ink-900">
          {docsHome.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-500">
          {docsHome.summary}
        </p>
        <hr className="mt-8 border-ink-100" />

        <h2 id="welcome" className="mt-10 text-xl font-semibold text-ink-900">
          Welcome to AkiliBiz
        </h2>
        <p className="mt-3 text-[15px] leading-7 text-ink-600">
          AkiliBiz Desktop is an offline-first workspace for the daily
          operations that keep your business moving, from sales and stock to
          customers, suppliers, VAT records, and reports.
        </p>

        <div className="mt-6 rounded-lg border border-ink-100 bg-ink-50/50 p-4">
          <p className="text-sm font-semibold text-ink-900">
            Work offline with confidence
          </p>
          <p className="mt-1.5 text-sm leading-6 text-ink-500">
            Daily sales, stock updates, and records can continue with limited
            internet connectivity.
          </p>
        </div>

        <h2 id="first-day" className="mt-10 text-xl font-semibold text-ink-900">
          Your first day with AkiliBiz
        </h2>
        <ol className="mt-4 space-y-2.5 text-[15px] text-ink-600">
          {[
            "Install AkiliBiz Desktop",
            "Add your business details",
            "Create categories and products",
            "Record opening stock",
            "Make your first sale",
            "Review stock, VAT, and reports",
            "Back up your data",
          ].map((item, index) => (
            <li key={item} className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[11px] font-semibold text-ink-600">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>

        <h2 id="start-here" className="mt-10 text-xl font-semibold text-ink-900">
          Start here
        </h2>
        <div className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
          {docsGuides.slice(0, 3).map((guide) => (
            <Link
              key={guide.slug}
              href={"/docs/" + guide.slug}
              className="flex items-center justify-between py-3.5 text-sm font-medium text-ink-700 hover:text-ink-900">
              {guide.title}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-24 text-sm">
          <p className="font-semibold text-ink-900">On this page</p>
          <nav className="mt-3 space-y-2 border-l border-ink-100 pl-3.5 text-ink-500">
            <a className="block hover:text-ink-900" href="#welcome">Welcome</a>
            <a className="block hover:text-ink-900" href="#first-day">Your first day</a>
            <a className="block hover:text-ink-900" href="#start-here">Start here</a>
          </nav>
          <Link
            href="/contact"
            className="mt-8 block border-t border-ink-100 pt-5 text-sm font-medium text-ink-700 hover:text-ink-900">
            Need help? Contact support
          </Link>
        </div>
      </aside>
    </div>
  );
}