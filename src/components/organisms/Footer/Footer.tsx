import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/atoms/Logo/Logo";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-primary text-on-primary">
      <div className="container-site grid grid-cols-1 gap-gutter py-stack-xl md:grid-cols-3">
        <div className="flex flex-col gap-stack-md">
          <Logo size="lg" variant="footer" />
          <p className="text-sm text-primary-fixed-dim opacity-80">
            Serving the Texas community with integrity, professionalism, and
            care in every inspection.
          </p>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h3 className="mb-2 font-headline text-base font-semibold">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-primary-fixed-dim opacity-80 transition-colors hover:text-tertiary-fixed"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h3 className="mb-2 font-headline text-base font-semibold">
            Contact Info
          </h3>
          <div className="flex flex-col gap-3 text-sm text-primary-fixed-dim opacity-80">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-tertiary-fixed"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {SITE.location}
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 transition-colors hover:text-tertiary-fixed"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-on-primary/20 py-stack-md">
        <div className="container-site flex flex-col items-center justify-center gap-1 text-center text-sm text-primary-fixed-dim opacity-60 sm:flex-row sm:gap-3">
          <p>{SITE.copyright}</p>
          <span className="hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <p>
            Web development by{" "}
            <a
              href={SITE.developer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-primary opacity-100 transition-colors hover:text-tertiary-fixed"
            >
              {SITE.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
