import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StandardItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  accent?: "primary" | "gold";
}

export function StandardItem({
  icon: Icon,
  title,
  description,
  className,
  accent = "primary",
}: StandardItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md text-center shadow-ambient",
        className,
      )}
    >
      <span
        className={cn(
          "mb-stack-sm rounded-full p-4",
          accent === "gold"
            ? "bg-gold/15 text-gold"
            : "bg-primary-fixed text-primary-container",
        )}
      >
        <Icon className="h-10 w-10" />
      </span>
      <h4 className="mb-2 text-sm font-semibold tracking-wider text-primary">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
