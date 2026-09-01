import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProductRouteCard({
  icon: Icon,
  name,
  description,
  href,
  ctaLabel,
  status,
  className,
}: {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  ctaLabel: string;
  status: "available" | "soon";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-2xl border border-ink-200 bg-white p-7",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {status === "available" ? (
          <Badge variant="available" icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}>
            Available now
          </Badge>
        ) : (
          <Badge variant="soon" icon={<Clock className="h-3.5 w-3.5" aria-hidden="true" />}>
            Coming soon
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold text-ink-900">{name}</h3>
        <p className="text-sm leading-relaxed text-ink-500">{description}</p>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
