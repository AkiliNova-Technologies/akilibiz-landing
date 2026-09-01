import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { docsGuides, getAdjacentGuides, getGuide } from "@/lib/docs-data";

export function generateStaticParams() {
  return docsGuides.map(({ slug }) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const guide = getGuide(slug);
    return {
      title: guide?.title ?? "Documentation",
      description: guide?.summary,
    };
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const { previous, next } = getAdjacentGuides(slug);

  return (
    <div className="mx-auto grid max-w-[1480px] gap-10 px-4 py-10 lg:grid-cols-[240px_minmax(0,700px)_200px] lg:px-8">
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <DocsSidebar activeSlug={slug} />
        </div>
      </aside>

      <article>
        <nav className="text-sm text-ink-400">
          Docs / {guide.section} / {guide.title}
        </nav>
        <h1 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-.03em] text-ink-900">
          {guide.title}
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-ink-500">
          {guide.purpose}
        </p>
        <hr className="mt-8 border-ink-100" />

        {guide.callout && (
          <div className="mt-8 rounded-lg border border-ink-100 bg-ink-50/50 p-4">
            <p id="before-you-begin" className="text-sm font-semibold text-ink-900">
              {guide.callout.title}
            </p>
            <p className="mt-1.5 text-sm leading-6 text-ink-500">
              {guide.callout.text}
            </p>
          </div>
        )}

        <h2 id="steps" className="mt-10 text-xl font-semibold text-ink-900">
          Steps
        </h2>
        <ol className="mt-4 space-y-4">
          {guide.steps.map((step, index) => (
            <li
              key={step}
              id={"step-" + (index + 1)}
              className="flex gap-3 text-[15px] text-ink-600">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[11px] font-semibold text-ink-600">
                {index + 1}
              </span>
              <p className="pt-px leading-7">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-lg border border-ink-100 p-4">
          <p className="text-sm font-semibold text-ink-900">Need help with this?</p>
          <p className="mt-1 text-sm text-ink-500">
            Tell us what you are trying to do and we will help you find the
            right next step.
          </p>
          <Link
            href="/contact"
            className="mt-2.5 inline-block text-sm font-medium text-ink-700 hover:text-ink-900">
            Contact support
          </Link>
        </div>

        <nav
          aria-label="Guide navigation"
          className="mt-10 flex justify-between gap-4 border-t border-ink-100 pt-6">
          {previous ? (
            <Link
              href={previous.slug ? "/docs/" + previous.slug : "/docs"}
              className="text-sm font-medium text-ink-600 hover:text-ink-900">
              <ArrowLeft className="mr-1 inline h-3.5 w-3.5" />
              {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={"/docs/" + next.slug}
              className="text-right text-sm font-medium text-ink-600 hover:text-ink-900">
              {next.title}
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>
          )}
        </nav>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-24 text-sm">
          <p className="font-semibold text-ink-900">On this page</p>
          <nav className="mt-3 space-y-2 border-l border-ink-100 pl-3.5 text-ink-500">
            {guide.callout && (
              <a className="block hover:text-ink-900" href="#before-you-begin">
                {guide.callout.title}
              </a>
            )}
            <a className="-ml-[15px] block border-l-2 border-ink-900 pl-3.5 font-medium text-ink-900" href="#steps">
              Steps
            </a>
            {guide.steps.map((_, index) => (
              <a key={index} className="block hover:text-ink-900" href={"#step-" + (index + 1)}>
                Step {index + 1}
              </a>
            ))}
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