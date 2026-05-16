import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-bg py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold tracking-tight text-text">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
              {siteConfig.tagline}. We help professionals across Africa look
              credible online.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a
                  href={siteConfig.consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-text"
                >
                  WhatsApp · {siteConfig.whatsapp}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed for professionals who build real reputations.</p>
        </div>
      </Container>
    </footer>
  );
}
