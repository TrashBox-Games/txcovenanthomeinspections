import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function ContactInfoCard({
  icon: Icon,
  title,
  description,
  children,
  className,
}: ContactInfoCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-stack-md",
        className,
      )}
    >
      <div className="rounded-full bg-surface-container-lowest p-2 text-gold shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="mb-1 font-headline text-lg font-semibold text-primary">
          {title}
        </h3>
        <p className="mb-2 text-base text-on-surface-variant">{description}</p>
        {children}
      </div>
    </div>
  );
}
