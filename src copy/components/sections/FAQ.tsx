import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/editorial/Eyebrow";

const FAQS = [
  { q: "What is UeCampus?", a: "UeCampus is an online platform offering a wide range of accredited courses and degrees, delivered with leading universities and awarding bodies, to help you advance your career from anywhere." },
  { q: "How do I enrol in a course?", a: "You can enrol in any course directly from our website by creating an account and choosing your programme. Our admissions team guides you through every step." },
  { q: "Are the degrees recognised globally?", a: "Yes, all degrees offered through UeCampus are accredited and recognised by employers and institutions worldwide." },
  { q: "What financial aid or scholarships are available?", a: "UeCampus offers a range of scholarships, discounts, and promotional tuition offers. Full details are on our Scholarships page." },
  { q: "Can I transfer credit hours from another institution?", a: "Yes. We allow credit-hour transfers, subject to an evaluation of your prior qualifications by the awarding body." },
  { q: "Do I need an English proficiency test?", a: "This depends on the programme and partner institution. Some require IELTS or TOEFL; others accept alternative qualifications or prior study in English." },
  { q: "Is there a mobile app for studying?", a: "Yes. UeCampus offers a mobile app so you can attend classes, track progress, and stay in touch with tutors on the go." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-hero-purple py-24 md:py-32">
      <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sticky title column */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Eyebrow>An open Q&amp;A</Eyebrow>
          <h2 className="mt-5 font-serif text-display text-ink">
            Things you
            <br />
            <span className="italic-serif text-plum">may ask</span>
            <span className="text-ember">.</span>
          </h2>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-soft max-w-xs">
            Seven of the most common questions. If yours isn&rsquo;t here, write
            to us, we read every note that comes in.
          </p>
          <Link
            to="/faqs"
            className="mt-8 inline-flex items-center gap-2 font-serif text-lg text-ink group"
          >
            <span className="link-editorial">All FAQs</span>
            <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-6 md:gap-10 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-mute pt-2 w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-[22px] md:text-[26px] leading-[1.18] text-ink transition-snap group-hover:text-plum">
                    {f.q}
                  </span>
                  <span className="shrink-0 mt-1.5 h-9 w-9 rounded-full border border-white/20 flex items-center justify-center transition-snap group-hover:border-white group-hover:bg-white/10">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pl-[3.5rem] md:pl-20 pr-2 pb-8 -mt-3">
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
    </section>
  );
};

export default FAQ;
