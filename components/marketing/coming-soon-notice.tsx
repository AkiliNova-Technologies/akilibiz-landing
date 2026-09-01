import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export function ComingSoonNotice({
  title = "Coming soon",
  description,
  className,
}: {
  title?: string;
  description: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4",
        className
      )}
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-brand-700">{title}</p>
        <p className="text-sm leading-relaxed text-ink-600">
          {description}
        </p>
      </div>
    </div>
  );
}
