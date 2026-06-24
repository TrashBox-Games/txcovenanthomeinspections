import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-stack-lg",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="mb-stack-sm font-headline text-2xl font-semibold text-primary md:text-[2rem] md:leading-10">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base text-on-surface-variant md:text-lg md:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
