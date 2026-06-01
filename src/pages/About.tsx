import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import Eyebrow from "@/components/editorial/Eyebrow";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "@/assets/about-hero.jpg";

const STATS = [
  { num: "36+", title: "Total programmes", desc: "Flexible, career-focused, fully accredited online programmes." },
  { num: "4.9", title: "Course rating",    desc: "Trusted and highly rated by our students worldwide." },
  { num: "90+", title: "Students",         desc: "A growing global community of engaged learners." },
];

const PILLARS = [
  { n: "01", title: "Learn from anywhere",       desc: "Study from the comfort of your home with a flexible online learning platform." },
  { n: "02", title: "Globally recognised degrees", desc: "Earn degrees that are recognised and respected by employers worldwide." },
  { n: "03", title: "Career advancement",        desc: "Boost your career prospects with our industry-relevant programmes." },
  { n: "04", title: "Flexible schedules",        desc: "Study at your own pace with schedules that fit your lifestyle." },
  { n: "05", title: "Affordable tuition",        desc: "High-quality education at a fraction of the cost of traditional programmes." },
  { n: "06", title: "Expert faculty",            desc: "Learn from industry experts and experienced academics." },
  { n: "07", title: "Certifications & credentials", desc: "Earn valuable certifications that enhance your professional profile." },
  { n: "08", title: "Global community",          desc: "Connect with students and professionals from around the world." },
];

const About = () => {
  useEffect(() => {
    document.title = "About, UeCampus";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-paper pt-10 md:pt-14 pb-20 md:pb-28">
        <div className="container-wide flex items-baseline justify-between pb-12 md:pb-16">
          <p className="eyebrow">Chapter 02 / The institution</p>
          <p className="eyebrow hidden md:block">About UeCampus</p>
        </div>

        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-display-xl text-ink">
              An online
              <br />
              <span className="italic-serif text-plum">learning house</span>
              <span className="text-ember">.</span>
            </h1>
            <p className="mt-10 font-serif text-[20px] md:text-[22px] leading-[1.55] text-ink-soft max-w-xl">
              UeCampus is a higher-education institution built for a globally
              connected generation: flexible, affordable, and held to the
              standards of the partner universities and awarding bodies that
              accredit our work.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <Link to="/programmes" className="group inline-flex items-center gap-2 font-serif text-lg text-ink">
                <span className="link-editorial">Explore programmes</span>
                <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/accreditation-and-partners" className="group inline-flex items-center gap-2 font-serif text-lg text-ink">
                <span className="link-editorial">Meet our partners</span>
                <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <figure className="lg:col-span-5 relative aspect-[4/5] grain overflow-hidden bg-aubergine">
            <img
              src={aboutImg}
              alt="UeCampus students"
              className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-95"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, hsl(var(--aubergine) / 0.15), hsl(var(--aubergine) / 0.7))" }}
            />
            <figcaption className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif italic-serif text-[16px] leading-snug">
                &ldquo;Your online learning platform, for the community, for you.&rdquo;
              </p>
              <p className="eyebrow text-white/60 mt-3">Plate 04</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <PartnersMarquee />

      {/* STATS */}
      <section className="bg-plum-paper py-20 md:py-28 border-t border-rule">
        <div className="container-wide">
          <Eyebrow>In numbers</Eyebrow>
          <div className="mt-10 grid md:grid-cols-3 border-t border-ink/20">
            {STATS.map((s, i) => (
              <div
                key={s.title}
                className={`reveal pt-10 md:pt-14 pb-12 ${i > 0 ? "md:border-l md:border-rule md:pl-10" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-serif text-display-lg text-ink leading-none">{s.num}</p>
                <p className="mt-4 font-serif text-[22px] text-ink">{s.title}</p>
                <p className="mt-3 text-[14px] text-ink-mute leading-relaxed max-w-[30ch]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + MISSION/VISION ───────────────── */}
      <section className="bg-aubergine text-white py-24 md:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full"
          style={{ background: "radial-gradient(closest-side, hsl(var(--orchid) / 0.3), transparent 70%)" }}
        />
        <div className="relative container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow tone="paper">From the editor</Eyebrow>
            <h2 className="mt-5 font-serif text-display text-white">
              Why study at
              <br />
              <span className="italic-serif text-bloom">UeCampus</span>
              <span className="text-ember">.</span>
            </h2>
            <p className="mt-10 font-serif text-[19px] md:text-[20px] leading-[1.65] text-white/90 drop-cap max-w-[58ch]">
              Step into the future of learning with UeCampus, where global
              opportunities meet true flexibility. We break down the barriers of
              traditional education by delivering world-class, accredited
              degrees online at a fraction of the usual cost. Study at your own
              pace, from anywhere in the world, while gaining the knowledge,
              skills, and confidence to thrive. At UeCampus, you don&rsquo;t
              just earn a degree; you gain the freedom and competitive edge to
              shape the career and life you&rsquo;ve always imagined.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <article className="bg-white text-ink p-8 md:p-10">
              <Eyebrow number="01" tone="plum">Mission</Eyebrow>
              <h3 className="mt-5 font-serif text-[28px] leading-tight text-ink">
                Expand access to higher education.
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                We provide flexible, affordable, high-quality online learning
                opportunities for students worldwide, and we are dedicated to
                breaking down barriers so that talent, not circumstance, decides
                who studies.
              </p>
            </article>
            <article className="bg-white text-ink p-8 md:p-10">
              <Eyebrow number="02" tone="plum">Vision</Eyebrow>
              <h3 className="mt-5 font-serif text-[28px] leading-tight text-ink">
                A global leader in online education.
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                We envisage a future where every learner, regardless of
                circumstance, has the chance to learn, grow, and achieve their
                goals through inclusive and innovative education.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PILLARS / ADVANTAGES ─────────────────── */}
      <section className="bg-paper py-24 md:py-32 border-t border-rule">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <Eyebrow>Eight reasons</Eyebrow>
              <h2 className="mt-5 font-serif text-display text-ink">
                Advance your career
                <br />
                with an <span className="italic-serif text-plum">online degree</span>.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 font-serif text-[20px] leading-[1.6] text-ink-soft pt-2 md:pt-12">
              From globally recognised qualifications to the flexibility of
              learning on your own terms, eight reasons students choose
              UeCampus, set out plainly.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-ink/20">
            {PILLARS.map((p, i) => (
              <li
                key={p.n}
                className={`reveal pt-8 pb-10 pr-6 ${
                  i % 4 !== 0 ? "lg:border-l lg:border-rule lg:pl-6" : ""
                } ${
                  i % 2 !== 0 ? "sm:border-l sm:border-rule sm:pl-6 lg:border-l lg:pl-6" : ""
                } border-b border-rule`}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <p className="marker-number text-[44px]">{p.n}</p>
                <h3 className="mt-4 font-serif text-[22px] text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
