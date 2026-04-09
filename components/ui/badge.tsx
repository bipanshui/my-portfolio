import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-muted text-muted-foreground border border-border",
        success: "bg-green-500/10 text-green-500 border border-green-500/20",
        warning: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
        destructive: "bg-red-500/10 text-red-500 border border-red-500/20",
        outline: "border border-border text-foreground",
        cyan: "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20",
        primary: "bg-primary/10 text-primary border border-primary/20",
        green: "bg-green-500/10 text-green-500 border border-green-500/20",
        yellow: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };