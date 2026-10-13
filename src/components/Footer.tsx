import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/struxup-new-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/services", label: "Services" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Civil & Structural Design",
  "Architectural Plans & Designs",
  "MEP Engineering",
  "Commercial Construction",
  "Renewable Energy",
  "Hydro Projects",
];

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Instagram SVG icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-gradient-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/95 p-1.5">
                <img
                  src={logo}
                  alt="Struxup logo"
                  className="h-10 w-auto max-w-[160px] object-contain"
                />
              </div>
              <div>
                <p className="font-display text-base font-bold">STRUXUP</p>
                <p className="text-[11px] uppercase tracking-wider opacity-80">Engineers &amp; Infra</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
              A multidisciplinary engineering consultancy delivering civil, structural, MEP, and
              renewable solutions across India.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/struxup/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/20 p-2 transition-smooth hover:bg-accent hover:border-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/strux.up?utm_source=qr&dlrf=ZGlza3BiOHFpdmMz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/20 p-2 transition-smooth hover:bg-accent hover:border-accent"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/qr/27H5TPUPB7R4I1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-white/20 p-2 transition-smooth hover:bg-accent hover:border-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-glow">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 transition-smooth hover:text-accent-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-glow">
              Our Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-glow">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-glow" />
                <span className="text-primary-foreground/85">
                  Rajahmundry,
                  <br />
                  Andhra Pradesh, India
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-glow" />
                <a
                  href="mailto:info@struxup.net"
                  className="break-all text-primary-foreground/85 hover:text-accent-glow"
                >
                  info@struxup.net
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-glow" />
                <a
                  href="tel:+917013393445"
                  className="text-primary-foreground/85 hover:text-accent-glow"
                >
                  +91 7013393445
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Struxup Engineers &amp; Infra Pvt. Ltd. All rights reserved.
          </p>
          <p>Built with precision in Rajahmundry, AP.</p>
        </div>
      </div>
    </footer>
  );
}
