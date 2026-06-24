import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-sm border border-outline-variant bg-surface-container-lowest px-3 py-2 text-base text-on-surface transition-colors",
        "focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container",
        className,
      )}
      {...props}
    />
  );
}
