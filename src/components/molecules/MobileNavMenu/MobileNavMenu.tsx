"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import { SITE } from "@/lib/constants";
import type { NavChildItem } from "@/lib/navigation";
import { isNavItemActive, NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

function MobileServiceNavItem({
  child,
  activePath,
  isExpanded,
  onToggle,
  onClose,
}: {
  child: NavChildItem;
  activePath: string;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const hasSubsections = Boolean(child.children?.length);

  return (
    <div>
      <div className="flex items-stretch border-b border-outline-variant">
        <NavLink
          href={child.href}
          isActive={activePath === child.href}
          variant="stacked"
          className={cn(
            "text-xs font-semibold",
            hasSubsections && "flex-1 border-b-0",
          )}
          onClick={onClose}
        >
          {child.label}
        </NavLink>
        {hasSubsections ? (
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? "Hide" : "Show"} ${child.label} sections`}
            onClick={onToggle}
            className="inline-flex w-12 shrink-0 items-center justify-center border-b border-outline-variant text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isExpanded && "rotate-180",
              )}
            />
          </button>
        ) : null}
      </div>
      {isExpanded && hasSubsections ? (
        <div className="pl-4">
          {child.children?.map((subItem) => (
            <NavLink
              key={subItem.href}
              href={subItem.href}
              isActive={false}
              variant="stacked"
              className="text-xs text-on-surface-variant"
              onClick={onClose}
            >
              {subItem.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function MobileNavMenu({
  isOpen,
  onClose,
  activePath,
}: MobileNavMenuProps) {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setExpandedServices([]);
    }
  }, [isOpen]);

  function toggleService(href: string) {
    setExpandedServices((current) =>
      current.includes(href)
        ? current.filter((item) => item !== href)
        : [...current, href],
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Dismiss menu overlay"
            className="fixed inset-0 z-40 bg-primary/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.nav
            id="mobile-nav-menu"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-outline-variant bg-surface shadow-ambient md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="flex h-20 items-center justify-between border-b border-outline-variant px-margin-mobile">
              <span className="font-headline text-sm font-semibold tracking-wider text-primary">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-margin-mobile">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <NavLink
                      href={item.href}
                      isActive={isNavItemActive(activePath, item)}
                      variant="stacked"
                      onClick={onClose}
                    >
                      {item.label}
                    </NavLink>
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <MobileServiceNavItem
                          key={child.href}
                          child={child}
                          activePath={activePath}
                          isExpanded={expandedServices.includes(child.href)}
                          onToggle={() => toggleService(child.href)}
                          onClose={onClose}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    isActive={isNavItemActive(activePath, item)}
                    variant="stacked"
                    onClick={onClose}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>

            <div className="border-t border-outline-variant p-margin-mobile">
              <Button
                href={SITE.phoneHref}
                variant="primary"
                size="md"
                className="w-full"
                onClick={onClose}
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
