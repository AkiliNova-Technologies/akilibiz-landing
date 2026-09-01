import Image from "next/image";
import Link from "next/link";

import logo from "@/public/Logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  reversed?: boolean;
};

export function Logo({ className, reversed = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="AkiliBiz home"
      className={cn(
        "group inline-flex items-center gap-2 rounded-md text-[17px] font-semibold tracking-tight transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        reversed
          ? "text-white focus-visible:ring-offset-brand-900"
          : "text-ink-900 focus-visible:ring-offset-white",
        className
      )}
    >
      <Image
        src={logo}
        alt=""
        className="h-10 w-10 shrink-0 object-contain"
        sizes="40px"
      />
      <span>AkiliBiz</span>
    </Link>
  );
}
