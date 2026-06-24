"use client";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/atoms/Button/Button";
import { Logo } from "@/components/atoms/Logo/Logo";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
      <div className="container-site flex h-20 items-center justify-between">
        <Logo />

        <nav
          className="hidden h-full items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href={SITE.phoneHref}
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </Button>
          <Button
            href={SITE.phoneHref}
            variant="primary"
            size="sm"
            className="inline-flex md:hidden"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
