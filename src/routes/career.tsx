import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, HeartHandshake, Rocket } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Struxup Engineers & Infra" },
      {
        name: "description",
        content:
          "Join Struxup. Build your engineering career with a multidisciplinary consultancy in Rajahmundry, AP.",
      },
      { property: "og:title", content: "Careers at Struxup" },
      {
        property: "og:description",
        content: "Engineering careers across civil, structural, MEP, renewable and more.",
      },
    ],
  }),
  component: Career,
});

const openings = [
  { title: "Senior Structural Engineer", type: "Full-time", loc: "Rajahmundry, AP" },
  { title: "MEP Design Engineer", type: "Full-time", loc: "Rajahmundry, AP" },
  { title: "Architectural Designer", type: "Full-time", loc: "Rajahmundry, AP" },
  { title: "Renewable Energy Consultant", type: "Full-time", loc: "Hybrid" },
  { title: "Civil Site Engineer", type: "Full-time", loc: "Project Site" },
  { title: "Graduate Trainee — Engineering", type: "Trainee", loc: "Rajahmundry, AP" },
];

function Career() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
            Careers
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
            Build the future. Build it with us.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85">
            We're always looking for sharp, curious engineers who want to leave a mark on real-world
            infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Rocket, title: "Real Impact", desc: "Work on landmark projects from day one." },
            {
              icon: GraduationCap,
              title: "Continuous Learning",
              desc: "Mentorship from senior engineers.",
            },
            {
              icon: HeartHandshake,
              title: "Collaborative Culture",
              desc: "Cross-discipline teams, shared wins.",
            },
            { icon: Briefcase, title: "Career Growth", desc: "Clear paths into leadership roles." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card-soft"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl font-bold text-foreground">Current openings</h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            {openings.map((o) => (
              <div
                key={o.title}
                className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {o.type} • {o.loc}
                  </p>
                </div>
                <a
                  href={`mailto:eswarvinay@struxup.net?subject=Application: ${encodeURIComponent(o.title)}`}
                  className="inline-flex w-full items-center justify-center rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:shadow-elegant sm:w-auto"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Don't see your role? Email your CV to{" "}
            <a
              className="font-semibold text-primary hover:text-accent"
              href="mailto:eswarvinay@struxup.net"
            >
              eswarvinay@struxup.net
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
