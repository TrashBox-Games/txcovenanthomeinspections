import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  variant?: "inline" | "stacked";
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  isActive = false,
  className,
  variant = "inline",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-medium tracking-wider transition-colors duration-200",
        variant === "inline" &&
          "flex h-full items-center text-base md:text-lg",
        variant === "stacked" &&
          "block border-b px-4 py-4 text-sm",
        isActive && "border-b-2 border-gold font-semibold text-gold",
        !isActive &&
          (variant === "stacked"
            ? "border-outline-variant text-on-surface-variant hover:border-gold hover:text-primary"
            : "text-on-surface-variant hover:text-tertiary"),
        className,
      )}
    >
      {children}
    </Link>
  );
}
