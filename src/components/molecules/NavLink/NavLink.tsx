import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export function NavLink({
  href,
  children,
  isActive = false,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-full items-center text-sm font-medium tracking-wider transition-colors duration-200",
        isActive
          ? "border-b-2 border-tertiary font-semibold text-primary"
          : "text-on-surface-variant hover:text-tertiary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
