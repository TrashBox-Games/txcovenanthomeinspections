"use client";

import { Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { Logo } from "@/components/atoms/Logo/Logo";
import { MobileNavMenu } from "@/components/molecules/MobileNavMenu/MobileNavMenu";
import { NavDropdown } from "@/components/molecules/NavDropdown/NavDropdown";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import { SITE } from "@/lib/constants";
import { isNavItemActive, NAV_ITEMS } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
      <div className="container-site flex h-24 items-center justify-between">
        <Logo size="lg" />

        <nav
          className="hidden h-full items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <NavDropdown key={item.href} item={item} />
            ) : (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={isNavItemActive(pathname, item)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={SITE.phoneHref}
            className="hidden text-base font-bold text-gold transition-colors hover:text-gold-hover md:inline md:text-lg"
          >
            Call Now To Schedule!
          </a>
          <Button
            href={SITE.phoneHref}
            variant="primary"
            size="sm"
            className="px-2 text-xs sm:px-4 sm:text-sm"
          >
            <Phone className="h-4 w-4 shrink-0" />
            {SITE.phone}
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface-container-low md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        activePath={pathname}
      />
    </header>
  );
}
