import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-700 text-white shadow-[0_10px_30px_-10px_rgba(11,94,168,0.45)] hover:bg-brand-800",
        secondary:
          "border border-ink-200 bg-white text-ink-900 hover:border-brand-400 hover:text-brand-700",
        outline:
          "border border-ink-200 bg-white text-ink-900 hover:border-brand-400 hover:bg-ink-50 hover:text-brand-700",
        ghost: "text-ink-700 hover:bg-ink-100 hover:text-ink-900",
        outlineOnDark:
          "border border-white/30 text-white hover:bg-white/10",
        link: "text-brand-700 underline-offset-4 hover:underline p-0 h-auto rounded-none",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_4px_14px_-4px_rgba(37,211,102,0.4)] hover:bg-[#20BD5C]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
