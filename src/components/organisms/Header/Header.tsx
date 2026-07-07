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
      <div className="container-site grid h-24 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 md:gap-6">
        <Logo size="lg" className="shrink-0" />

        <nav
          className="hidden h-full min-w-0 items-center justify-center gap-3 md:flex md:gap-4 lg:gap-6 xl:gap-8"
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

        <div className="relative flex shrink-0 items-center justify-self-end gap-2 md:gap-4">
          <a
            href={SITE.phoneHref}
            aria-label="Call Now To Schedule!"
            className="hidden flex-col items-center self-center text-center text-base leading-tight font-bold text-gold transition-colors hover:text-gold-hover xl:flex xl:text-lg"
          >
            <span className="whitespace-nowrap">Call Now</span>
            <span className="whitespace-nowrap">To Schedule!</span>
          </a>
          <Button
            href={SITE.phoneHref}
            variant="primary"
            size="sm"
            className="min-w-0 shrink px-2 text-xs sm:px-4 sm:text-sm"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="min-w-0 text-center leading-tight">
              {SITE.phone}
            </span>
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface-container-low md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="absolute left-full ml-2 hidden whitespace-nowrap text-xs text-on-surface-variant xl:inline md:ml-4">
            TREC ID: {SITE.trecId}
          </span>
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
