import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/struxup-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/services", label: "Services" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Civil & Structural",
  "Architectural Design",
  "MEP Engineering",
  "Commercial Construction",
  "Renewable Energy",
  "Hydro Projects",
];

export function Footer() {
  return (
    <footer className="mt-auto bg-gradient-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/95 p-1.5">
                <img src={logo} alt="Struxup logo" className="h-10 w-10 object-contain" width={40} height={40} />
              </div>
              <div>
                <p className="font-display text-base font-bold">STRUXUP</p>
                <p className="text-[11px] uppercase tracking-wider opacity-80">Engineers & Infra</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
              A multidisciplinary engineering consultancy delivering civil, structural, MEP, and renewable solutions across India.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2 transition-smooth hover:bg-accent hover:border-accent"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-white/20 p-2 transition-smooth hover:bg-accent hover:border-accent"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 transition-smooth hover:bg-accent hover:border-accent"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-glow">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/80 transition-smooth hover:text-accent-glow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-glow">Our Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-glow">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-glow" />
                <span className="text-primary-foreground/85">Amaravathi,<br />Andhra Pradesh, India</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-glow" />
                <a href="mailto:eswarvinay@struxup.net" className="break-all text-primary-foreground/85 hover:text-accent-glow">
                  eswarvinay@struxup.net
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-glow" />
                <span className="text-primary-foreground/85">Mon – Sat, 9:00 – 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Struxup Engineers & Infra Pvt. Ltd. All rights reserved.</p>
          <p>Built with precision in Amaravathi, AP.</p>
        </div>
      </div>
    </footer>
  );
}