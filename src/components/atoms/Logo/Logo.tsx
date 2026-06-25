import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "footer";
}

const sizeMap = {
  sm: "h-14",
  md: "h-20",
  lg: "h-24",
} as const;

export function Logo({
  className,
  size = "md",
  variant = "default",
}: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/LOGO.png"
        alt={`${SITE.name} Logo`}
        width={200}
        height={80}
        className={cn(
          "w-auto object-contain",
          sizeMap[size],
          variant === "footer" &&
            "rounded-sm bg-surface-container-lowest p-1",
        )}
        priority
      />
    </Link>
  );
}
