import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = ComponentPropsWithoutRef<"textarea">;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full rounded-sm border border-outline-variant bg-surface-container-lowest px-3 py-2 text-base text-on-surface transition-colors",
        "focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container",
        className,
      )}
      {...props}
    />
  );
}
