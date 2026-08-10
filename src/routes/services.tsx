import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Hammer,
  Wrench,
  Factory,
  TrainTrack,
  Leaf,
  Waves,
  Radio,
} from "lucide-react";
import renewable from "@/assets/renewable.jpg";
import mepImg from "@/assets/MEP DESIGN .png";
import structuralImg from "@/assets/Structural Designs image.jpg.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Struxup Engineers & Infra" },
      {
        name: "description",
        content:
          "Civil, structural, architectural, MEP, electromagnetic, transportation, renewable and hydro engineering services.",
      },
      { property: "og:title", content: "Engineering Services — Struxup" },
      {
        property: "og:description",
        content: "Full-spectrum engineering consultancy across 8+ disciplines.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Building2,
    title: "Civil & Structural",
    desc: "Foundations, frames, high-rises and special structures designed to perform.",
    image: structuralImg,
  },
  {
    icon: Hammer,
    title: "Architectural Design",
    desc: "Functional, beautiful spaces with integrated engineering coordination.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Radio,
    title: "Electromagnetic Design",
    desc: "Specialized EM design for industrial and high-tech facilities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wrench,
    title: "MEP designs",
    desc: "HVAC, electrical, plumbing and fire protection design with 3D coordination.",
    image: mepImg,
  },
  {
    icon: Factory,
    title: "Commercial & Industrial Construction",
    desc: "End-to-end construction consultancy for offices and plants.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: TrainTrack,
    title: "Transportation Engineering",
    desc: "Roads, bridges and transit infrastructure.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Leaf,
    title: "Renewable Energy",
    desc: "Solar, wind and hybrid energy project engineering.",
    image: renewable,
  },
  {
    icon: Waves,
    title: "Hydro Projects",
    desc: "Dams, intake structures and hydropower facilities.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
  },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
            Our Services
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
            Integrated engineering across every discipline.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85">
            From feasibility to commissioning, Struxup delivers a single accountable point of design
            and consultancy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-smooth hover:-translate-y-1 hover:border-accent/50 hover:shadow-elegant"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground transition-smooth group-hover:bg-gradient-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <img
                src={s.image}
                alt={s.title}
                className="mt-4 h-32 w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={renewable}
              alt="Renewable energy and hydro projects"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1280}
              height={800}
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Sustainability is engineered in.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Our renewable energy and hydro project teams design clean-energy infrastructure that
              meets today's load demand while future-proofing assets for the next generation.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card-soft transition-smooth hover:shadow-glow"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
