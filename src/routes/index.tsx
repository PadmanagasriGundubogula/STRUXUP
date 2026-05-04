import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Hammer, Leaf, Wrench, Zap, CheckCircle2,
  Cog, Factory, TrainTrack, Waves, Radio, Target, Eye, Award,
  Users, Briefcase, ShieldCheck, Globe2, Rocket, GraduationCap,
  HeartHandshake, Mail, MapPin, Phone, Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import hero from "@/assets/hero-construction.jpg";
import team from "@/assets/team-engineers.jpg";
import renewable from "@/assets/renewable.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Struxup Engineers & Infra — Engineering Consultancy in Amaravathi" },
      { name: "description", content: "Multidisciplinary engineering consultancy: civil, structural, MEP, architectural, renewable energy & hydro projects." },
      { property: "og:title", content: "Struxup Engineers & Infra Pvt. Ltd." },
      { property: "og:description", content: "Engineering consultancy & design — civil, structural, MEP, renewable & hydro projects." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Building2, title: "Civil & Structural", desc: "Foundations, frames, high-rises and special structures.", image: "https://via.placeholder.com/400x300?text=Civil+Structural" },
  { icon: Hammer, title: "Architectural Design", desc: "Functional, beautiful spaces with engineering coordination.", image: "https://via.placeholder.com/400x300?text=Architectural+Design" },
  { icon: Cog, title: "Mechanical Engineering", desc: "HVAC, plumbing, fire protection and process systems.", image: "https://via.placeholder.com/400x300?text=Mechanical+Engineering" },
  { icon: Zap, title: "Electrical Engineering", desc: "LV/HV distribution, lighting, controls and emergency systems.", image: "https://via.placeholder.com/400x300?text=Electrical+Engineering" },
  { icon: Radio, title: "Electromagnetic Design", desc: "Specialized EM design for industrial and high-tech facilities.", image: "https://via.placeholder.com/400x300?text=Electromagnetic+Design" },
  { icon: Wrench, title: "MEP Coordination", desc: "Fully coordinated MEP delivery — design through commissioning.", image: "https://via.placeholder.com/400x300?text=MEP+Coordination" },
  { icon: Factory, title: "Commercial & Industrial Construction", desc: "End-to-end construction consultancy for offices and plants.", image: "https://via.placeholder.com/400x300?text=Commercial+Industrial" },
  { icon: TrainTrack, title: "Transportation Engineering", desc: "Roads, bridges and transit infrastructure.", image: "https://via.placeholder.com/400x300?text=Transportation+Engineering" },
  { icon: Leaf, title: "Renewable Energy", desc: "Solar, wind and hybrid energy project engineering.", image: renewable },
  { icon: Waves, title: "Hydro Projects", desc: "Dams, intake structures and hydropower facilities.", image: "https://via.placeholder.com/400x300?text=Hydro+Projects" },
];

const stats = [
  { value: "10+", label: "Disciplines" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Expert Engineers" },
  { value: "100%", label: "Quality Commitment" },
];

const openings = [
  { title: "Senior Structural Engineer", type: "Full-time", loc: "Amaravathi, AP" },
  { title: "MEP Design Engineer", type: "Full-time", loc: "Amaravathi, AP" },
  { title: "Architectural Designer", type: "Full-time", loc: "Amaravathi, AP" },
  { title: "Renewable Energy Consultant", type: "Full-time", loc: "Hybrid" },
];

function Home() {
  return (
    <>
      {/* 1. HOME / HERO */}
      <section id="home" className="relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0">
          <img src={hero} alt="Construction skyline" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Engineering Consultancy • Amaravathi, AP
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Building the <span className="text-gradient-accent">infrastructure</span> of tomorrow.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Struxup Engineers & Infra Pvt. Ltd. delivers integrated civil, structural, MEP, architectural and renewable energy consultancy — engineered for performance, built for permanence.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-smooth hover:scale-[1.02]">
                Our Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-white/15">
                Talk to an Engineer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Engineering trust through every project, every detail.</h2>
          <p className="mt-4 text-muted-foreground">A multidisciplinary consultancy delivering complete engineering solutions across civil, structural, MEP, renewable energy and hydro projects.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", body: "Deliver safe, sustainable and economical engineering solutions that endure." },
            { icon: Eye, title: "Our Vision", body: "Be India's most trusted multidisciplinary engineering consultancy." },
            { icon: Award, title: "Our Values", body: "Integrity, technical rigor, sustainability and on-time delivery." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
            Read our full story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section id="who-we-are" className="scroll-mt-24 bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={team} alt="Struxup engineers collaborating" className="h-full w-full object-cover" loading="lazy" width={1280} height={800} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">A collective solving the hardest problems in infrastructure.</h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">Struxup unites civil engineers, structural designers, MEP specialists, architects and renewable-energy consultants — working in tightly integrated teams from sketch to site.</p>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Users, t: "Multidisciplinary team — every relevant discipline under one roof." },
                { icon: Briefcase, t: "Sector experience across commercial, industrial, transport, energy." },
                { icon: ShieldCheck, t: "Code-compliant designs aligned with IS, IRC and international standards." },
                { icon: Globe2, t: "Pan-India reach, headquartered in Amaravathi, AP." },
              ].map((p) => (
                <li key={p.t} className="flex gap-3">
                  <p.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground/85">{p.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">A full spectrum of engineering disciplines</h2>
          <p className="mt-4 text-muted-foreground">From concept design to final commissioning, we are your single accountable partner.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground transition-smooth group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <img src={s.image} alt={s.title} className="mt-4 h-32 w-full rounded-lg object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-10 rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-elegant lg:grid-cols-2 lg:p-12">
          <div className="overflow-hidden rounded-2xl">
            <img src={renewable} alt="Renewable energy" className="h-full w-full object-cover" loading="lazy" width={1280} height={800} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Sustainability is engineered in.</h3>
            <p className="mt-4 text-primary-foreground/85">Our renewable energy and hydro project teams design clean-energy infrastructure that meets today's demand while future-proofing assets.</p>
            <Link to="/services" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card-soft transition-smooth hover:shadow-glow">
              Detailed services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CAREER */}
      <section id="career" className="scroll-mt-24 bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Careers</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Build the future. Build it with us.</h2>
            <p className="mt-4 text-muted-foreground">Sharp, curious engineers who want to leave a mark on real-world infrastructure.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Rocket, title: "Real Impact", desc: "Landmark projects from day one." },
              { icon: GraduationCap, title: "Continuous Learning", desc: "Mentorship from senior engineers." },
              { icon: HeartHandshake, title: "Collaborative Culture", desc: "Cross-discipline teams, shared wins." },
              { icon: Briefcase, title: "Career Growth", desc: "Clear paths into leadership roles." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            {openings.map((o) => (
              <div key={o.title} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.type} • {o.loc}</p>
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
          <div className="mt-8 text-center">
            <Link to="/career" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
              See all openings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">Let's build something extraordinary.</h2>
          <p className="mt-4 text-muted-foreground">Reach our office or drop us a message — we typically reply within one business day.</p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-muted-foreground">Amaravathi, Andhra Pradesh, India</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:eswarvinay@struxup.net" className="break-all text-primary hover:text-accent">eswarvinay@struxup.net</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-muted-foreground">Mon – Sat, 9:00 – 18:00</p>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">
              Open full contact page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>

      <CheckCircle2 className="hidden" />
    </>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry from ${data.get("name") ?? "Website"}`;
    const body =
      `Name: ${data.get("name") ?? ""}\n` +
      `Email: ${data.get("email") ?? ""}\n` +
      `Phone: ${data.get("phone") ?? ""}\n\n` +
      `${data.get("message") ?? ""}`;
    window.location.href = `mailto:eswarvinay@struxup.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client…");
    setTimeout(() => setSubmitting(false), 800);
  }
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft sm:p-8 lg:col-span-3">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Full Name <span className="text-accent">*</span></label>
          <input name="name" required className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Email <span className="text-accent">*</span></label>
          <input name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium">Phone</label>
          <input name="phone" type="tel" className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">Message</label>
        <textarea name="message" required rows={5} className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" placeholder="Tell us about your project…" />
      </div>
      <button type="submit" disabled={submitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card-soft transition-smooth hover:shadow-glow disabled:opacity-60 sm:w-auto">
        <Send className="h-4 w-4" />
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
