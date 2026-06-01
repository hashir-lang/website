import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Eyebrow from "@/components/editorial/Eyebrow";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

type Category = {
  id: string;
  label: string;
  items: { q: string; a: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: "general",
    label: "General",
    items: [
      { q: "What is UeCampus?", a: "UeCampus is an online platform offering a wide range of accredited courses and degrees, delivered in partnership with leading universities and awarding bodies, to help you advance your career from anywhere in the world." },
      { q: "Where is UeCampus based?", a: "Our head office is in Hatfield, Hertfordshire, UK. We support students remotely in more than 90 countries." },
      { q: "How is UeCampus different from a traditional university?", a: "We deliver fully online, flexible programmes in partnership with accredited institutions, at a fraction of the cost of traditional study, with no need to relocate." },
    ],
  },
  {
    id: "admissions",
    label: "Admissions",
    items: [
      { q: "How do I enrol in a course?", a: "You can enrol in any course directly from our website by creating an account, choosing your programme, and completing the application. Our admissions team will guide you through every step." },
      { q: "Can I transfer credit hours from another institution?", a: "Yes. We allow credit-hour transfers, subject to an evaluation of your prior qualifications by the awarding body." },
      { q: "Do I need to take an English proficiency test?", a: "This depends on the programme and partner institution. Some require IELTS or TOEFL; others accept alternative qualifications or prior study in English." },
      { q: "When can I start?", a: "Most programmes have flexible intakes, you can apply at any time and start as soon as your enrolment is confirmed." },
    ],
  },
  {
    id: "fees",
    label: "Fees & Scholarships",
    items: [
      { q: "How much do courses cost?", a: "Fees vary by programme and partner institution. Tuition is published on each course page, and payment plans are available." },
      { q: "What financial aid or scholarships are available?", a: "UeCampus offers a range of scholarships, discounts, and promotional tuition offers. Full details are on our Scholarships page." },
      { q: "Can I pay in instalments?", a: "Yes. Most programmes support monthly or term-based instalment plans, speak to our admissions team for options." },
    ],
  },
  {
    id: "learning",
    label: "Learning Experience",
    items: [
      { q: "Is there a mobile app for studying?", a: "Yes. UeCampus offers a mobile app so you can attend classes, track progress, and stay in touch with tutors on the go." },
      { q: "How are classes delivered?", a: "Programmes are delivered fully online through a mix of live sessions, recorded lectures, guided readings, and interactive assessments." },
      { q: "Will I have tutor support?", a: "Yes. Every programme includes academic tutors, a dedicated student success manager, and peer study groups." },
    ],
  },
  {
    id: "recognition",
    label: "Recognition",
    items: [
      { q: "Are the degrees recognised globally?", a: "Yes. All qualifications are delivered with accredited universities or regulated awarding bodies, so they are recognised by employers and institutions internationally." },
      { q: "Can I use a UeCampus qualification to apply for further study?", a: "Absolutely. Our diplomas ladder into bachelor's and master's degrees, and our degrees are accepted for postgraduate progression worldwide." },
    ],
  },
  {
    id: "support",
    label: "Privacy & Support",
    items: [
      { q: "How do I contact support?", a: "You can reach us at info@uecampus.com, on +44 7586 797014, or via the WhatsApp button on every page." },
      { q: "How is my data handled?", a: "Your data is processed in line with our Privacy Policy and UK GDPR. You can request data deletion at any time from our Data Deletion page." },
    ],
  },
];

const FAQs = () => {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const [open,   setOpen]   = useState<string | null>(`${CATEGORIES[0].id}-0`);

  useEffect(() => {
    document.title = "Frequently Asked Questions, UeCampus";
  }, []);

  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-paper pt-10 md:pt-14 pb-20 md:pb-28 border-b border-rule">
        <div className="container-wide flex items-baseline justify-between pb-12 md:pb-16">
          <p className="eyebrow">Help Centre</p>
          <p className="eyebrow hidden md:block">FAQs</p>
        </div>
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-display-lg text-ink">
              Things you
              <br />
              <span className="italic-serif text-plum">may ask</span>
              <span className="text-ember">.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 font-serif text-[19px] leading-[1.6] text-ink-soft">
            Everything you need to know about studying with UeCampus, from
            admissions and fees to how your qualification is recognised
            worldwide.
          </p>
        </div>
      </section>

      {/* CATEGORIES + ACCORDION */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Category rail */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-5">Browse by topic</p>
            <ul className="flex lg:flex-col flex-wrap gap-1 lg:gap-0 lg:divide-y lg:divide-rule lg:border-y lg:border-rule">
              {CATEGORIES.map((c) => {
                const isActive = c.id === active;
                return (
                  <li key={c.id} className="lg:w-full">
                    <button
                      onClick={() => {
                        setActive(c.id);
                        setOpen(`${c.id}-0`);
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 lg:px-0 lg:py-4 text-left transition-snap ${
                        isActive ? "text-ink" : "text-ink-mute hover:text-ink"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] w-7">
                          {String(CATEGORIES.indexOf(c) + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-[18px] leading-tight">{c.label}</span>
                      </span>
                      <span className="font-mono text-[10px] text-ink-mute">{c.items.length}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Accordion */}
          <div>
            <Eyebrow>{current.label}</Eyebrow>
            <h2 className="mt-4 font-serif text-display-sm text-ink">{current.label}<span className="text-ember">.</span></h2>

            <div className="mt-10 divide-y divide-rule border-y border-rule">
              {current.items.map((f, i) => {
                const key = `${current.id}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key}>
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="w-full flex items-start gap-6 md:gap-10 py-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-mute pt-2 w-10 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-serif text-[22px] md:text-[24px] leading-[1.18] text-ink transition-snap group-hover:text-plum">
                        {f.q}
                      </span>
                      <span className="shrink-0 mt-1.5 h-9 w-9 rounded-full border border-rule flex items-center justify-center transition-snap group-hover:border-ink">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pl-[3.5rem] md:pl-20 pb-8 -mt-3">
                        <p className="font-serif text-[17px] leading-[1.7] text-ink-soft max-w-[58ch]">
                          {f.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="bg-aubergine text-white py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="paper">Beyond the FAQ</Eyebrow>
            <h2 className="mt-5 font-serif text-display text-white">
              Still have
              <br />
              <span className="italic-serif text-bloom">questions</span>?
            </h2>
            <p className="mt-8 font-serif text-[18px] text-white/85 max-w-[52ch]">
              Our admissions team is happy to help. Reach out by email, phone or
              WhatsApp, we&rsquo;ll get back to you within one working day.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3 lg:items-end">
            <Link to="/contact-us" className="group inline-flex items-center gap-3 bg-white text-aubergine px-7 py-4 text-[13px] font-medium transition-snap hover:bg-bloom">
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-snap group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a href="mailto:info@uecampus.com" className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 hover:text-white">
              info@uecampus.com
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQs;
