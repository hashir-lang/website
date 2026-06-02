import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Eyebrow from "@/components/editorial/Eyebrow";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { num: "36+", title: "Total programmes" },
  { num: "4.9", title: "Course rating" },
  { num: "100+", title: "Students" },
];

const SCHOLARSHIPS = [
  {
    n: "01",
    title: "Academic Excellence",
    eligibility: "Open to high-performing secondary school graduates and top-ranking university students.",
    desc: "Awarded to outstanding students who demonstrate exceptional academic achievement. Eligible applicants may receive partial or full tuition support based on their academic performance and qualifications.",
    award: "Up to 50% tuition",
  },
  {
    n: "02",
    title: "Residents of Developing Countries",
    eligibility: "For residents of regions with limited access to higher education.",
    desc: "Designed to support residents of developing countries with substantial tuition reductions. The award aims to empower talented individuals who are eager to advance their education and make a positive impact in their communities.",
    award: "Substantial tuition reduction",
  },
];

const Scholarship = () => {
  useEffect(() => {
    document.title = "Scholarships, UeCampus";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-paper pt-10 md:pt-14 pb-20 md:pb-24 border-b border-rule">
        <div className="container-wide flex items-baseline justify-between pb-12 md:pb-16">
          <p className="eyebrow">Chapter 05 / Financial aid</p>
          <p className="eyebrow hidden md:block">Scholarships</p>
        </div>
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-display-lg text-ink">
              Tuition support,
              <br />
              for the <span className="italic-serif text-plum">already-motivated</span>
              <span className="text-ember">.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 font-serif text-[19px] leading-[1.6] text-ink-soft">
            Financial aid options designed to help motivated students access
            world-class education, without the world-class debt.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-plum-paper py-16 border-t border-rule">
        <div className="container-wide grid md:grid-cols-3 border-t border-ink/20">
          {STATS.map((s, i) => (
            <div key={s.title} className={`reveal py-8 ${i > 0 ? "md:border-l md:border-rule md:pl-8" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-serif text-display-sm text-ink leading-none">{s.num}</p>
              <p className="mt-3 eyebrow text-ink-mute">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHOLARSHIPS DETAIL */}
      <section className="bg-paper py-24 md:py-32 border-t border-rule">
        <div className="container-wide mb-16 md:mb-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Two pathways</Eyebrow>
            <h2 className="mt-5 font-serif text-display text-ink">
              Awards,
              <br />
              <span className="italic-serif text-plum">explained simply</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 font-serif text-[19px] leading-[1.6] text-ink-soft">
            Speak with admissions to confirm eligibility. Awards are subject to
            evaluation and limited each intake, apply early.
          </p>
        </div>

        <div className="container-wide divide-y divide-rule border-y border-rule">
          {SCHOLARSHIPS.map((s, i) => (
            <article key={s.n} className="reveal py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12 items-start" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="md:col-span-2">
                <p className="marker-number text-[72px]">{s.n}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-serif text-display-sm text-ink leading-[1.05]">
                  {s.title}<span className="text-ember">.</span>
                </h3>
                <p className="mt-5 font-serif text-[18px] italic-serif text-ink-mute">
                  {s.eligibility}
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-soft max-w-[58ch]">
                  {s.desc}
                </p>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="bg-aubergine text-white p-6">
                  <p className="eyebrow text-white/65">Award</p>
                  <p className="mt-3 font-serif text-[24px] leading-tight">{s.award}</p>
                  <Link to="/contact-us" className="mt-6 group inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.18em] text-white">
                    Apply now
                    <ArrowUpRight className="h-4 w-4 transition-snap group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FeaturedCourses />
    </PageLayout>
  );
};

export default Scholarship;
