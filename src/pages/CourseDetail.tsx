import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Eyebrow from "@/components/editorial/Eyebrow";
import {
  ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Plus, Minus,
} from "lucide-react";
import {
  coursesBySlug, courses, defaultKeyBenefits, type Course,
} from "@/data/courses";

const TABS = [
  { id: "overview",   label: "Overview"   },
  { id: "admissions", label: "Admissions" },
  { id: "academics",  label: "Academics"  },
  { id: "careers",    label: "Careers"    },
] as const;
type TabId = (typeof TABS)[number]["id"];

const defaultApplicationSteps = [
  { title: "Enquire",         desc: "Submit an enquiry so our admissions team can check your fit and answer your questions." },
  { title: "Apply",           desc: "Complete the short online application and upload your supporting documents." },
  { title: "Assessment",      desc: "An admissions advisor reviews your profile and confirms eligibility." },
  { title: "Offer & enrol",   desc: "Accept your offer, select your intake, and activate your student portal access." },
];

const Fact = ({ label, value }: { label: string; value: string }) => (
  <div className="py-5">
    <p className="eyebrow text-ink-mute">{label}</p>
    <p className="mt-2 font-serif text-[18px] text-ink leading-snug">{value}</p>
  </div>
);

const CourseDetailBody = ({ course }: { course: Course }) => {
  const [tab, setTab] = useState<TabId>("overview");
  const [openModule, setOpenModule] = useState<number | null>(0);

  const keyBenefits      = course.keyBenefits      ?? defaultKeyBenefits;
  const applicationSteps = course.applicationSteps ?? defaultApplicationSteps;
  const gains            = course.gains ?? course.highlights;

  const related = courses
    .filter((c) => c.slug !== course.slug && c.categories.some((x) => course.categories.includes(x)))
    .slice(0, 3);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-paper pt-10 md:pt-14 pb-14 md:pb-20 border-b border-rule">
        <div className="container-wide flex items-baseline justify-between pb-8">
          <nav className="eyebrow text-ink-mute flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-plum transition-snap">Home</Link>
            <span>/</span>
            <Link to="/programmes" className="hover:text-plum transition-snap">Programmes</Link>
            <span>/</span>
            <span className="text-ink">{course.levelGroup}</span>
          </nav>
          <p className="eyebrow hidden md:block">Brief</p>
        </div>

        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-plum">{course.levelGroup} · {course.universityShort}</p>
            <h1 className="mt-5 font-serif text-display text-ink">
              {course.title}<span className="text-ember">.</span>
            </h1>
            <p className="mt-8 font-serif text-[19px] md:text-[20px] leading-[1.55] text-ink-soft max-w-[58ch]">
              {course.tagline}
            </p>

            {/* Inline facts */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-rule border-y border-rule">
              <Fact label="Duration"     value={course.duration} />
              <Fact label="Language"     value={course.language} />
              <Fact label="Qualification" value={course.qualification} />
              <Fact label="Accessibility" value={course.accessibility} />
            </div>
          </div>

          {/* Accreditation card */}
          <aside className="lg:col-span-5 bg-aubergine text-white p-8 md:p-10 lg:sticky lg:top-28">
            <Eyebrow tone="paper">Accredited by</Eyebrow>
            <h3 className="mt-4 font-serif text-[26px] leading-tight">
              {course.accreditedBy}
            </h3>
            <p className="mt-5 text-[14px] leading-relaxed text-white/85">
              {course.accreditedByDesc}
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-white/65">
              Take the first step towards a globally recognised qualification.
              Enquire now for personalised guidance, programme details, and
              admissions support from our team.
            </p>
            <div className="mt-7 flex flex-col gap-2.5">
              <Link to="/contact-us" className="group inline-flex items-center justify-between gap-2 bg-white text-aubergine px-5 py-3 text-[13px] font-medium transition-snap hover:bg-bloom hover:text-aubergine">
                Apply now
                <ArrowUpRight className="h-4 w-4 transition-snap group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/contact-us" className="group inline-flex items-center justify-between gap-2 border border-white/40 px-5 py-3 text-[13px] font-medium hover:bg-white/10 transition-snap">
                Talk to admissions
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* TABS */}
      <section className="bg-paper sticky top-16 md:top-20 z-30 border-b border-rule">
        <div className="container-wide overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative py-5 text-[12px] font-mono uppercase tracking-[0.18em] transition-snap ${
                    active ? "text-ink" : "text-ink-mute hover:text-ink"
                  }`}
                >
                  {t.label}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-px h-px bg-ink" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAB CONTENT */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            {tab === "overview" && (
              <div className="space-y-14">
                <div>
                  <Eyebrow number="01">Overview</Eyebrow>
                  <h2 className="mt-4 font-serif text-display-sm text-ink">
                    What this programme is.
                  </h2>
                  <p className="mt-6 font-serif text-[19px] leading-[1.7] text-ink-soft max-w-prose drop-cap">
                    {course.overview}
                  </p>
                  {course.overviewLong && (
                    <p className="mt-5 text-[16px] leading-[1.7] text-ink-soft max-w-prose">
                      {course.overviewLong}
                    </p>
                  )}
                </div>

                {course.specializations && (
                  <div>
                    <Eyebrow number="02">Specialisations</Eyebrow>
                    <h3 className="mt-4 font-serif text-[28px] text-ink">
                      Pick a path within the programme.
                    </h3>
                    <ul className="mt-8 grid sm:grid-cols-3 border-t border-rule">
                      {course.specializations.map((s, i) => (
                        <li key={s} className={`py-5 ${i > 0 ? "sm:border-l sm:border-rule sm:pl-5" : ""} border-b sm:border-b-0 border-rule`}>
                          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-2 font-serif text-[20px] text-ink">{s}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <Eyebrow number={course.specializations ? "03" : "02"}>What you&rsquo;ll gain</Eyebrow>
                  <h3 className="mt-4 font-serif text-[28px] text-ink">
                    Outcomes for graduates.
                  </h3>
                  <ul className="mt-8 divide-y divide-rule border-y border-rule">
                    {gains.map((g, i) => (
                      <li key={g} className="py-5 flex items-start gap-6">
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute pt-1 w-10 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-[18px] leading-snug text-ink-soft">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "admissions" && (
              <div className="space-y-14">
                <div>
                  <Eyebrow number="01">Entry requirements</Eyebrow>
                  <h2 className="mt-4 font-serif text-display-sm text-ink">
                    How we assess applications.
                  </h2>
                  <p className="mt-6 font-serif text-[17px] leading-[1.7] text-ink-soft max-w-prose">
                    We assess each application holistically. Below are the standard
                    entry requirements for the {course.title}.
                  </p>
                  <ul className="mt-8 grid sm:grid-cols-2 border-t border-rule">
                    {course.entryRequirements.map((r, i) => (
                      <li
                        key={r}
                        className={`flex items-start gap-3 py-5 ${i % 2 !== 0 ? "sm:border-l sm:border-rule sm:pl-6" : ""} border-b border-rule`}
                      >
                        <CheckCircle2 className="h-4 w-4 text-plum mt-1 shrink-0" />
                        <span className="text-[15px] text-ink-soft leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Eyebrow number="02">How to apply</Eyebrow>
                  <h2 className="mt-4 font-serif text-display-sm text-ink">
                    Four steps from enquiry to enrolment.
                  </h2>
                  <ol className="mt-8 grid sm:grid-cols-2 border-t border-rule">
                    {applicationSteps.map((step, i) => (
                      <li
                        key={step.title}
                        className={`py-7 ${i % 2 !== 0 ? "sm:border-l sm:border-rule sm:pl-6" : ""} ${i < applicationSteps.length - 1 ? "border-b border-rule" : ""}`}
                      >
                        <p className="marker-number text-[44px]">{String(i + 1).padStart(2, "0")}</p>
                        <h4 className="mt-3 font-serif text-[22px] text-ink leading-tight">{step.title}</h4>
                        <p className="mt-2 text-[14px] text-ink-mute leading-relaxed">{step.desc}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <Eyebrow number="03">Intakes</Eyebrow>
                  <h3 className="mt-4 font-serif text-[28px] text-ink">When you can start.</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {course.intakes.map((i) => (
                      <span key={i} className="inline-flex items-center gap-2 border border-rule px-4 py-2 text-[13px] text-ink">
                        <Clock className="h-3.5 w-3.5 text-plum" /> {i}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "academics" && (
              <div className="space-y-14">
                <div>
                  <Eyebrow number="01">Curriculum</Eyebrow>
                  <h2 className="mt-4 font-serif text-display-sm text-ink">
                    Programme structure.
                  </h2>
                  <p className="mt-6 font-serif text-[17px] leading-[1.7] text-ink-soft max-w-prose">
                    The {course.title} is structured to build your expertise
                    progressively, from foundations through to advanced
                    application and capstone work.
                  </p>

                  <div className="mt-10 divide-y divide-rule border-y border-rule">
                    {course.modules.map((m, i) => {
                      const isOpen = openModule === i;
                      return (
                        <div key={m.title}>
                          <button
                            onClick={() => setOpenModule(isOpen ? null : i)}
                            className="w-full flex items-start gap-6 md:gap-10 py-6 text-left group"
                            aria-expanded={isOpen}
                          >
                            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute pt-2 w-10 shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 font-serif text-[22px] text-ink transition-snap group-hover:text-plum">
                              {m.title}
                            </span>
                            <span className="shrink-0 mt-1 h-8 w-8 rounded-full border border-rule flex items-center justify-center">
                              {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </span>
                          </button>
                          {isOpen && (
                            <ul className="pl-[3.5rem] md:pl-16 pb-6 grid sm:grid-cols-2 gap-2">
                              {m.items.map((it) => (
                                <li key={it} className="flex items-start gap-2 text-[14px] text-ink-soft">
                                  <span className="mt-2 h-1 w-1 rounded-full bg-plum shrink-0" />
                                  <span>{it}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {tab === "careers" && (
              <div className="space-y-14">
                <div>
                  <Eyebrow number="01">Careers</Eyebrow>
                  <h2 className="mt-4 font-serif text-display-sm text-ink">
                    Where this programme can take you.
                  </h2>
                  <p className="mt-6 font-serif text-[17px] leading-[1.7] text-ink-soft max-w-prose">
                    {course.careerDesc ??
                      `Graduates of the ${course.title} are prepared for a range of senior, specialist and leadership roles across industries. Our careers team supports you with CV coaching, interview prep, and employer introductions.`}
                  </p>
                  <ul className="mt-10 grid sm:grid-cols-2 border-t border-rule">
                    {course.careerOutcomes.map((o, i) => (
                      <li
                        key={o}
                        className={`py-5 ${i % 2 !== 0 ? "sm:border-l sm:border-rule sm:pl-6" : ""} border-b border-rule`}
                      >
                        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">{String(i + 1).padStart(2, "0")}</p>
                        <p className="mt-2 font-serif text-[20px] text-ink">{o}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-44 lg:self-start space-y-6">
            <div className="bg-aubergine text-white p-7">
              <Eyebrow tone="paper">Programme highlight</Eyebrow>
              <h3 className="mt-3 font-serif text-[22px] text-white">Key benefits</h3>
              <ul className="mt-5 space-y-3">
                {keyBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[14px] text-white/90">
                    <span className="mt-2 h-1 w-1 rounded-full bg-bloom shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-rule p-7">
              <p className="eyebrow text-ink-mute">Need help deciding?</p>
              <h3 className="mt-3 font-serif text-[18px] text-ink leading-snug">
                Our advisors can confirm eligibility and plan your intake.
              </h3>
              <Link
                to="/contact-us"
                className="mt-5 group inline-flex items-center gap-2 font-serif text-[16px] text-ink"
              >
                <span className="link-editorial">Talk to admissions</span>
                <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-paper-soft py-20 md:py-28 border-t border-rule">
          <div className="container-wide">
            <div className="flex items-end justify-between gap-4 mb-12">
              <div>
                <Eyebrow>Continue browsing</Eyebrow>
                <h2 className="mt-4 font-serif text-display-sm text-ink">Related programmes.</h2>
              </div>
              <Link
                to="/programmes"
                className="group inline-flex items-center gap-2 font-serif text-lg text-ink"
              >
                <ArrowLeft className="h-4 w-4 transition-snap group-hover:-translate-x-0.5" />
                <span className="link-editorial">All programmes</span>
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/programmes/${r.slug}`} className="group block">
                  <div className="relative aspect-[5/4] overflow-hidden bg-paper-deep">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="eyebrow eyebrow-plum">{r.levelGroup} · {r.universityShort}</p>
                    <h3 className="mt-3 font-serif text-[22px] text-ink leading-tight transition-snap group-hover:text-plum">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? coursesBySlug[slug] : undefined;

  useEffect(() => {
    document.title = course ? `${course.title}, UeCampus` : "Course not found, UeCampus";
    window.scrollTo({ top: 0 });
  }, [course]);

  if (!course) {
    return (
      <PageLayout>
        <section className="container-wide py-32 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 font-serif text-display text-ink">Course not found<span className="text-ember">.</span></h1>
          <p className="mt-6 font-serif text-[18px] text-ink-mute">
            We couldn&rsquo;t find the programme you were looking for.
          </p>
          <Link
            to="/programmes"
            className="mt-10 group inline-flex items-center gap-2 bg-aubergine text-white px-7 py-3.5 text-[13px] font-medium hover:bg-plum transition-snap"
          >
            <ArrowLeft className="h-4 w-4 transition-snap group-hover:-translate-x-0.5" />
            Back to all programmes
          </Link>
        </section>
      </PageLayout>
    );
  }

  return <CourseDetailBody course={course} />;
};

export default CourseDetail;
