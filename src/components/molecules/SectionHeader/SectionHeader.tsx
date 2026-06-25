import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  variant?: "default" | "inverted";
  showAccent?: boolean;
}

export function SectionHeader({
  title,
  description,
  className,
  align = "center",
  variant = "default",
  showAccent = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-stack-lg",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "mb-stack-sm font-headline text-2xl font-semibold md:text-[2rem] md:leading-10",
          variant === "inverted" ? "text-on-primary" : "text-primary",
        )}
      >
        {title}
      </h2>
      {showAccent && (
        <div
          className={cn(
            "mb-stack-sm h-1 w-16 bg-gold",
            align === "center" && "mx-auto",
          )}
          aria-hidden
        />
      )}
      {description && (
        <p
          className={cn(
            "mx-auto max-w-2xl text-base md:text-lg md:leading-7",
            variant === "inverted"
              ? "text-primary-fixed-dim"
              : "text-on-surface-variant",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
