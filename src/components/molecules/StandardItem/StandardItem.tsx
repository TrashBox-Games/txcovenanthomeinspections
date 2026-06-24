import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StandardItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function StandardItem({
  icon: Icon,
  title,
  description,
  className,
}: StandardItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-stack-md text-center",
        className,
      )}
    >
      <span className="mb-stack-sm rounded-full bg-primary-fixed p-4 text-primary-container">
        <Icon className="h-10 w-10" />
      </span>
      <h4 className="mb-2 text-sm font-semibold tracking-wider text-primary">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
