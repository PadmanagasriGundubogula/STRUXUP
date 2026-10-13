import { useState, useEffect } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/struxup-new-logo.png";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home", section: "home" },
  { to: "/about", label: "About", section: "about" },
  { to: "/who-we-are", label: "Who We Are", section: "who-we-are" },
  { to: "/services", label: "Services", section: "services" },
  { to: "/career", label: "Career", section: "career" },
  { to: "/contact", label: "Contact", section: "contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const onHome = pathname === "/";

  // Scroll-spy: track which section is currently in view (homepage only)
  useEffect(() => {
    if (!onHome) return;
    const ids = navItems.map((i) => i.section);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Trigger when section crosses ~30% from top of viewport
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  function handleNav(e: React.MouseEvent, section: string, to: string) {
    if (onHome) {
      e.preventDefault();
      setOpen(false);
      const el = document.getElementById(section);
      if (el) {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
        setActiveSection(section);
        history.replaceState(null, "", section === "home" ? "/" : `/#${section}`);
      } else if (to !== "/") {
        navigate({ to });
      }
    } else {
      setOpen(false);
    }
  }

  function isActive(item: (typeof navItems)[number]) {
    if (onHome) return activeSection === item.section;
    return pathname === item.to;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("home");
            }
            setOpen(false);
          }}
        >
          <img
            src={logo}
            alt="Struxup Engineers & Infra logo"
            className="h-12 w-auto max-w-[180px] object-contain"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-bold text-primary">STRUXUP</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Engineers & Infra
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={(e) => handleNav(e, item.section, item.to)}
                className={cn(
                  "group relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-300",
                  active
                    ? "text-primary font-semibold -translate-y-0.5"
                    : "text-foreground/80 hover:text-primary hover:-translate-y-0.5",
                )}
              >
                <span className="relative inline-block">
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-accent transition-transform duration-300 ease-out",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </span>
              </Link>
            );
          })}
          <button
            onClick={() => {
              if (onHome) {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate({ to: "/contact" });
              }
            }}
            className="ml-3 inline-flex items-center justify-center rounded-md bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-card-soft transition-smooth hover:scale-[1.04] hover:shadow-glow"
          >
            Get a Quote
          </button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border bg-background lg:hidden",
          open ? "block animate-fade-in" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-h-[calc(100vh-5rem)] max-w-7xl flex-col overflow-y-auto overscroll-contain px-4 py-3 sm:px-6">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={(e) => handleNav(e, item.section, item.to)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium transition-all duration-300",
                  active
                    ? "bg-secondary text-primary font-semibold translate-x-1 border-l-2 border-accent"
                    : "text-foreground/85 hover:translate-x-1 hover:bg-secondary hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setOpen(false);
              if (onHome) {
                setTimeout(
                  () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                  50,
                );
              } else {
                navigate({ to: "/contact" });
              }
            }}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-smooth hover:shadow-glow"
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}
