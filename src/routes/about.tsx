import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Struxup Engineers & Infra Pvt. Ltd." },
      { name: "description", content: "Learn about Struxup Engineers & Infra — a multidisciplinary engineering consultancy headquartered in Amaravathi, Andhra Pradesh." },
      { property: "og:title", content: "About Struxup Engineers & Infra" },
      { property: "og:description", content: "Multidisciplinary engineering consultancy in civil, structural, MEP, renewable & hydro projects." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">About Us</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">Engineering trust through every project, every detail.</h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/85">
            Struxup Engineers & Infra Pvt. Ltd. is a multidisciplinary consultancy delivering complete engineering solutions across civil, structural, MEP, renewable energy and hydro projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", body: "Deliver safe, sustainable and economical engineering solutions that endure." },
            { icon: Eye, title: "Our Vision", body: "Be India's most trusted multidisciplinary engineering consultancy." },
            { icon: Award, title: "Our Values", body: "Integrity, technical rigor, sustainability and on-time delivery." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-card-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Story</h2>
            <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
              <p>Founded with a singular focus on engineering excellence, Struxup brings together civil, structural, mechanical and electrical experts under one roof. We act as a single accountable partner for clients across commercial, industrial, transportation and energy sectors.</p>
              <p>From early-stage feasibility through to detailed design and construction supervision, our team translates ambitious ideas into resilient infrastructure.</p>
              <p>Headquartered in Amaravathi, Andhra Pradesh, we serve clients across India with the precision and care that complex projects demand.</p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card-soft transition-smooth hover:shadow-glow">
              Start a project with us
            </Link>
          </div>
          <div className="rounded-2xl bg-gradient-brand p-8 text-primary-foreground shadow-elegant lg:p-10">
            <h3 className="font-display text-2xl font-bold">By the numbers</h3>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {[
                { v: "10+", l: "Engineering disciplines" },
                { v: "50+", l: "Projects delivered" },
                { v: "15+", l: "In-house experts" },
                { v: "9", l: "Sectors served" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl font-bold text-accent-glow">{s.v}</div>
                  <div className="mt-1 text-sm text-primary-foreground/80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
