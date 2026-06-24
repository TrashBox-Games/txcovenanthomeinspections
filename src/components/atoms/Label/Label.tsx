import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type LabelProps = ComponentPropsWithoutRef<"label">;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-1 block text-xs font-medium text-primary-container",
        className,
      )}
      {...props}
    />
  );
}
