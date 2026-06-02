import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Eyebrow from "@/components/editorial/Eyebrow";
import { Search, ArrowUpRight } from "lucide-react";
import dba     from "@/assets/blog-dba.jpg";
import data    from "@/assets/blog-data.jpg";
import diploma from "@/assets/blog-diploma.jpg";

type Post = {
  slug: string;
  img: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
};

const POSTS: Post[] = [
  { slug: "dba-vs-phd",       img: dba,     category: "Doctorates",    title: "DBA vs PhD in Business: Which Doctorate Fits You?", excerpt: "A practical breakdown of how the Doctor of Business Administration compares to the PhD, and which is the right fit for your career goals.", date: "18 May 2026", read: "8 min read" },
  { slug: "data-science-vs",  img: data,    category: "Data",          title: "Data Science vs Data Analytics: which one should you choose?", excerpt: "Two booming careers, two different mindsets. Understand the skills, tools and trajectories before you commit.", date: "11 May 2026", read: "6 min read" },
  { slug: "diploma-levels",   img: diploma, category: "Diplomas",      title: "Level 4 vs Level 5 vs Level 7 Diploma in IT: what’s the difference?", excerpt: "From foundational skills to senior strategic roles, here’s what each diploma level signals to employers.", date: "4 May 2026",  read: "5 min read" },
  { slug: "online-mba-2026",  img: dba,     category: "Business",      title: "How to choose the right online MBA in 2026", excerpt: "What accreditation, format and faculty really matter when choosing an online MBA programme.", date: "27 April 2026", read: "7 min read" },
  { slug: "ai-careers-2026",  img: data,    category: "AI",            title: "AI career paths: where to start in 2026", excerpt: "Mapping the most in-demand AI roles and the skills you’ll need to land them.", date: "20 April 2026", read: "6 min read" },
  { slug: "online-on-campus", img: diploma, category: "Recognition",   title: "Why online degrees are now equal to on-campus ones", excerpt: "Recognition, employer perception, and the credentials that actually move the needle.", date: "13 April 2026", read: "4 min read" },
];

const CATS = ["All", "Doctorates", "Business", "Data", "AI", "Diplomas", "Recognition"];

const Blogs = () => {
  const [q,   setQ]   = useState("");
  const [cat, setCat] = useState("All");

  useEffect(() => {
    document.title = "Journal, UeCampus";
  }, []);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!ql) return true;
      return p.title.toLowerCase().includes(ql) || p.excerpt.toLowerCase().includes(ql);
    });
  }, [q, cat]);

  const [hero, ...rest] = filtered;

  return (
    <PageLayout>
      {/* MASTHEAD */}
      <section className="bg-paper pt-10 md:pt-14 pb-12 md:pb-16 border-b border-rule">
        <div className="container-wide flex items-baseline justify-between pb-10">
          <p className="eyebrow">The journal</p>
          <p className="eyebrow hidden md:block">Spring 2026 · Issue 03</p>
        </div>
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-display-lg text-ink">
              The
              <br />
              <span className="italic-serif text-plum">Journal</span>
              <span className="text-ember">.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 font-serif text-[19px] leading-[1.6] text-ink-soft">
            Be inspired by the latest trends shaping the world. Long reads, short
            takes, and the occasional dispatch from our students.
          </p>
        </div>

        {/* Search + categories */}
        <div className="container-wide mt-12 grid lg:grid-cols-12 gap-6 items-center">
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-5 flex items-center gap-4 pb-2 border-b border-ink">
            <Search className="h-4 w-4 text-ink-mute shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="flex-1 bg-transparent outline-none text-[16px] text-ink placeholder:text-ink-mute py-2 border-0"
            />
          </form>
          <div className="lg:col-span-7 flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
            {CATS.map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-snap ${
                    active ? "text-ink" : "text-ink-mute hover:text-ink"
                  }`}
                >
                  <span className={active ? "border-b border-ink pb-1" : ""}>{c}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* HERO POST */}
      {hero && (
        <section className="bg-paper py-16 md:py-20 border-b border-rule">
          <div className="container-wide">
            <Link to="#" className="group grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <div className="lg:col-span-7 relative aspect-[5/4] overflow-hidden bg-paper-deep grain">
                <img
                  src={hero.img}
                  alt={hero.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white bg-aubergine/85 px-2.5 py-1">
                  Cover story
                </span>
              </div>
              <div className="lg:col-span-5">
                <p className="eyebrow eyebrow-plum">{hero.category}</p>
                <h2 className="mt-4 font-serif text-display-sm text-ink leading-[1.05] transition-snap group-hover:text-plum">
                  {hero.title}
                </h2>
                <p className="mt-6 font-serif text-[18px] leading-[1.65] text-ink-soft max-w-[44ch]">
                  {hero.excerpt}
                </p>
                <p className="mt-6 eyebrow text-ink-mute">{hero.date} · {hero.read}</p>
                <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                  Read full article
                  <ArrowUpRight className="h-3 w-3 transition-snap group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ARCHIVE */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-wide">
          <div className="flex items-baseline justify-between mb-10">
            <Eyebrow>From the archive</Eyebrow>
            <p className="eyebrow text-ink-mute">{rest.length} {rest.length === 1 ? "article" : "articles"}</p>
          </div>

          {rest.length === 0 ? (
            <p className="text-center font-serif text-2xl text-ink-mute py-16">No articles match.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
              {rest.map((p, i) => (
                <article key={p.slug} className="reveal group" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <Link to="#" className="block">
                    <div className="relative aspect-[5/4] overflow-hidden bg-paper-deep">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="pt-5">
                      <p className="eyebrow eyebrow-plum">{p.category}</p>
                      <h3 className="mt-3 font-serif text-[22px] leading-[1.18] text-ink transition-snap group-hover:text-plum">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[14px] text-ink-soft leading-relaxed">{p.excerpt}</p>
                      <p className="mt-4 eyebrow text-ink-mute">{p.date} · {p.read}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blogs;
