import * as React from "react";
import type { VariantProps } from "@repo/utils";
import { cn, cva } from "@repo/utils";

const badgeVariants = cva(
  "flex items-center rounded-full text-xs font-medium border",
  {
    variants: {
      color: {
        default: "border-gray-400/30 bg-gray-400/30 text-foreground",
        primary: "border-primary text-primary-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
      },
      variant: {
        filled: "border-transparent",
        outlined: "bg-transparent",
      },
      size: {
        sm: "px-2 py-[1px]",
        md: "px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "filled",
      color: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {}

function Badge(props: BadgeProps): JSX.Element {
  const { className, variant, color, size, ...restProps } = props;
  return (
    <div
      className={cn(badgeVariants({ color, variant, size }), className)}
      {...restProps}
    />
  );
}

export { Badge, badgeVariants };
