"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/navigation";
import { isNavItemActive } from "@/lib/navigation";

interface NavDropdownProps {
  item: NavItem;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const isActive = isNavItemActive(pathname, item);
  const children = item.children ?? [];

  return (
    <div className="group relative flex h-full items-center">
      <Link
        href={item.href}
        className={cn(
          "flex h-full items-center gap-1 text-sm font-medium tracking-wider transition-colors duration-200",
          isActive
            ? "border-b-2 border-tertiary font-semibold text-primary"
            : "text-on-surface-variant hover:text-tertiary",
        )}
      >
        {item.label}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>

      <div className="invisible absolute top-full left-0 z-50 min-w-[12rem] pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface shadow-ambient">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "block border-b border-outline-variant px-4 py-3 text-sm font-medium tracking-wider transition-colors last:border-b-0",
                pathname === child.href
                  ? "bg-surface-container-low font-semibold text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
