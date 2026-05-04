import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Struxup Engineers & Infra" },
      { name: "description", content: "Get in touch with Struxup Engineers & Infra Pvt. Ltd. — Amaravathi, Andhra Pradesh." },
      { property: "og:title", content: "Contact Struxup" },
      { property: "og:description", content: "Let's discuss your next engineering project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry from ${data.get("name") ?? "Website"}`;
    const body =
      `Name: ${data.get("name") ?? ""}\n` +
      `Email: ${data.get("email") ?? ""}\n` +
      `Phone: ${data.get("phone") ?? ""}\n` +
      `Subject: ${data.get("subject") ?? ""}\n\n` +
      `${data.get("message") ?? ""}`;
    window.location.href = `mailto:eswarvinay@struxup.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client…");
    setTimeout(() => setSubmitting(false), 800);
  }

  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">Let's build something extraordinary.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85">Whether it's a feasibility study or full project delivery — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">Reach our office or drop us a message — we typically reply within one business day.</p>

            <ul className="mt-8 space-y-6">
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
                  <p className="text-muted-foreground">Monday – Saturday, 9:00 – 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft sm:p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea name="message" required rows={6} className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" placeholder="Tell us about your project…" />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card-soft transition-smooth hover:shadow-glow disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30" />
    </div>
  );
}
