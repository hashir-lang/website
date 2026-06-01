import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Eyebrow from "@/components/editorial/Eyebrow";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    primary: "info@uecampus.com",
    href: "mailto:info@uecampus.com",
    note: "General enquiries · admissions · support",
  },
  {
    icon: Phone,
    label: "Phone",
    primary: "+44 7586 797014",
    href: "tel:+447586797014",
    note: "Mon – Fri · 9:00 to 18:00 (GMT)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    primary: "Open chat",
    href: "https://wa.me/447586797014",
    note: "Real-time replies within working hours",
  },
  {
    icon: MapPin,
    label: "Mailing address",
    primary: "Hatfield, UK",
    href: "https://www.google.com/maps/search/?api=1&query=Office+249%2C+Titan+Court%2C+3+Bishop+Square%2C+Hatfield",
    note: "Office 249, Titan Court · AL10 9NA",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    document.title = "Contact, UeCampus";
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Our admissions team will get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageLayout hideCta>
      {/* HERO */}
      <section className="bg-paper pt-10 md:pt-14 pb-16 md:pb-24 border-b border-rule">
        <div className="container-wide flex items-baseline justify-between pb-12 md:pb-16">
          <p className="eyebrow">Chapter 06 / Get in touch</p>
          <p className="eyebrow hidden md:block">Contact</p>
        </div>
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-display-lg text-ink">
              Send us
              <br />
              <span className="italic-serif text-plum">a note</span>
              <span className="text-ember">.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 font-serif text-[19px] leading-[1.6] text-ink-soft">
            Questions about courses, admissions, scholarships, or current
            studies, the UeCampus team is ready to help.
          </p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="bg-plum-paper border-t border-rule">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-4 border-t border-ink/20">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                className={`group block py-10 px-6 lg:px-10 transition-snap hover:bg-paper ${
                  i > 0 ? "lg:border-l lg:border-rule" : ""
                } ${i % 2 !== 0 ? "md:border-l md:border-rule" : ""} border-b border-rule`}
              >
                <Icon className="h-5 w-5 text-plum" strokeWidth={1.5} />
                <p className="mt-4 eyebrow text-ink-mute">{c.label}</p>
                <p className="mt-2 font-serif text-[22px] text-ink group-hover:text-plum transition-snap">
                  {c.primary}
                </p>
                <p className="mt-3 text-[13px] text-ink-mute leading-relaxed">{c.note}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* FORM + STATEMENT */}
      <section className="bg-paper py-24 md:py-32 border-t border-rule">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>A note from us</Eyebrow>
            <h2 className="mt-5 font-serif text-display text-ink">
              We answer
              <br />
              <span className="italic-serif text-plum">every note</span>.
            </h2>
            <p className="mt-8 font-serif text-[18px] leading-[1.65] text-ink-soft max-w-[44ch]">
              No bots, no autoresponders that pretend to be people. Just our
              admissions team, with answers, usually within one working day,
              often sooner.
            </p>
            <ul className="mt-12 space-y-3 text-[14px] text-ink-mute">
              <li>Office 249, Titan Court</li>
              <li>3 Bishop Square, Hatfield</li>
              <li>Hertfordshire, AL10 9NA, UK</li>
            </ul>
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-7 bg-white border border-rule p-8 md:p-10"
          >
            <Eyebrow>Write to us</Eyebrow>
            <h3 className="mt-4 font-serif text-[28px] text-ink leading-tight">
              Tell us what you&rsquo;re thinking.
            </h3>

            <div className="mt-10 space-y-7">
              <Field label="Full name"      value={form.name}    onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email address"  type="email"
                                            value={form.email}   onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Subject"        value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />

              <label className="block">
                <span className="eyebrow text-ink-mute block mb-3">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-rule py-3 text-[16px] text-ink placeholder:text-ink-mute outline-none focus:border-ink transition-snap resize-none"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-aubergine text-white px-7 py-4 text-[13px] font-medium transition-smooth hover:bg-plum"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) => (
  <label className="block">
    <span className="eyebrow text-ink-mute block mb-3">{label}</span>
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b border-rule py-3 text-[16px] text-ink placeholder:text-ink-mute outline-none focus:border-ink transition-snap"
    />
  </label>
);

export default Contact;
