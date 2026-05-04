import { createFileRoute } from "@tanstack/react-router";
import { Users, Briefcase, ShieldCheck, Globe2 } from "lucide-react";
import team from "@/assets/team-engineers.jpg";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — Struxup Engineers & Infra" },
      { name: "description", content: "A team of multidisciplinary engineers and consultants delivering integrated infrastructure solutions across India." },
      { property: "og:title", content: "Who We Are — Struxup" },
      { property: "og:description", content: "Meet the team behind Struxup — engineers, designers and consultants." },
    ],
  }),
  component: WhoWeAre,
});

function WhoWeAre() {
  return (
    <>
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Who We Are</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">A collective of engineers solving the hardest problems in infrastructure.</h1>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Struxup unites civil engineers, structural designers, MEP specialists, architects and renewable-energy consultants. We work in tightly integrated teams so design intent flows seamlessly from sketch to site.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={team} alt="Struxup engineers collaborating" className="h-full w-full object-cover" loading="lazy" width={1280} height={800} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, title: "Multidisciplinary Team", desc: "Every relevant discipline under one roof." },
            { icon: Briefcase, title: "Sector Experience", desc: "Commercial, industrial, transport, energy." },
            { icon: ShieldCheck, title: "Code Compliant", desc: "IS, IRC and international standards." },
            { icon: Globe2, title: "Pan-India Reach", desc: "Headquartered in Amaravathi, AP." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
