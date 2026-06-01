import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import Eyebrow from "@/components/editorial/Eyebrow";
import { ArrowUpRight } from "lucide-react";
import eie     from "@/assets/partner-eie-exact.jpg";
import ppa     from "@/assets/partner-ppa-exact-cropped.png";
import walsh   from "@/assets/partner-walsh.png";
import qualifi from "@/assets/partner-qualifi-exact.png";

const PARTNERS = [
  {
    logo: eie,
    name: "EIE European Business School",
    place: "St Julian's, Malta",
    tagline: "European Institute of Executives",
    desc: "A European business school delivering professionally-focused bachelor's, master's and MBA programmes designed around the skills employers demand.",
    logoClass: "max-h-16",
  },
  {
    logo: ppa,
    name: "PPA Business School",
    place: "Paris, France",
    tagline: "La Grande École en Alternance",
    desc: "A Paris-based grande école offering work-integrated bachelor and master programmes across business, marketing and management.",
    logoClass: "max-h-20",
  },
  {
    logo: walsh,
    name: "Walsh College",
    place: "Michigan, United States",
    tagline: "Business-focused higher education",
    desc: "A US institution offering accredited business, technology and accounting degrees with a strong emphasis on applied learning and career outcomes.",
    logoClass: "max-h-14",
  },
  {
    logo: qualifi,
    name: "Qualifi",
    place: "Ofqual-regulated, UK",
    tagline: "UK awarding organisation",
    desc: "A UK awarding organisation regulated by Ofqual, offering Level 3–7 diplomas used as pathways to full undergraduate and postgraduate degrees.",
    logoClass: "max-h-16",
  },
];

const PILLARS = [
  { n: "01", title: "Fully accredited",       desc: "Every programme is delivered with a regulated awarding body or accredited higher-education institution." },
  { n: "02", title: "Globally recognised",    desc: "Qualifications respected by employers, universities and professional bodies worldwide." },
  { n: "03", title: "Progression pathways",   desc: "Our diplomas ladder into full bachelor's and master's degrees so you can build credentials step by step." },
  { n: "04", title: "Quality assured",        desc: "Rigorous academic oversight, external examiners and regular reviews ensure the integrity of every award." },
];

const Partners = () => {
  useEffect(() => {
    document.title = "Accreditation & Partners, UeCampus";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-paper pt-10 md:pt-14 pb-20 md:pb-28 border-b border-rule">
        <div className="container-wide flex items-baseline justify-between pb-12 md:pb-16">
          <p className="eyebrow">Chapter 04 / On accreditation</p>
          <p className="eyebrow hidden md:block">Partners</p>
        </div>
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-display-lg text-ink">
              Qualifications that
              <br />
              <span className="italic-serif text-plum">travel with you</span>
              <span className="text-ember">.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 font-serif text-[19px] leading-[1.6] text-ink-soft">
            UeCampus partners with regulated awarding bodies and accredited
            universities to deliver degrees and diplomas recognised across the
            UK, Europe and beyond.
          </p>
        </div>
      </section>

      <PartnersMarquee />

      {/* PILLARS */}
      <section className="bg-plum-paper py-24 md:py-32 border-t border-rule">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20 items-end">
            <div className="lg:col-span-6">
              <Eyebrow>Why it matters</Eyebrow>
              <h2 className="mt-5 font-serif text-display text-ink">
                Accreditation
                <br />
                you can <span className="italic-serif text-plum">trust</span>.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 font-serif text-[19px] leading-[1.6] text-ink-soft">
              Behind every UeCampus award is a regulated awarding body or
              accredited university. That&rsquo;s the floor, not the ceiling.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-ink/20">
            {PILLARS.map((p, i) => (
              <li
                key={p.n}
                className={`reveal pt-8 pb-10 pr-6 ${i > 0 ? "lg:border-l lg:border-rule lg:pl-6" : ""} ${i % 2 !== 0 ? "md:border-l md:border-rule md:pl-6" : ""} border-b border-rule`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="marker-number text-[56px]">{p.n}</p>
                <h3 className="mt-5 font-serif text-[22px] text-ink leading-tight">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARTNER PROFILES — editorial split layout */}
      <section className="bg-paper py-24 md:py-32 border-t border-rule">
        <div className="container-wide mb-16 md:mb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <Eyebrow>The partners</Eyebrow>
              <h2 className="mt-5 font-serif text-display text-ink">
                Four institutions,
                <br />
                <span className="italic-serif text-plum">one promise</span>.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 font-serif text-[19px] leading-[1.6] text-ink-soft">
              Each partner was selected for its academic rigour, industry
              relevance, and commitment to inclusive, flexible online learning.
            </p>
          </div>
        </div>

        <div className="container-wide divide-y divide-rule border-y border-rule">
          {PARTNERS.map((p, i) => (
            <article key={p.name} className="reveal py-12 md:py-16 grid md:grid-cols-12 gap-8 md:gap-12 items-start" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="md:col-span-3 flex items-start gap-5">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="bg-white border border-rule p-6 h-32 flex items-center justify-center w-full">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className={`${p.logoClass} w-auto object-contain`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="eyebrow eyebrow-plum">{p.place}</p>
                <h3 className="mt-3 font-serif text-[32px] md:text-[36px] leading-[1.1] text-ink">
                  {p.name}
                </h3>
                <p className="mt-3 italic-serif text-[16px] text-ink-mute">{p.tagline}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft max-w-[58ch]">
                  {p.desc}
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end items-start">
                <Link to="/programmes" className="group inline-flex items-center gap-2 font-serif text-lg text-ink">
                  <span className="link-editorial">Browse programmes</span>
                  <ArrowUpRight className="h-4 w-4 transition-snap group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-aubergine text-white py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Eyebrow tone="paper">Closing remarks</Eyebrow>
            <h2 className="mt-5 font-serif text-display text-white">
              Ready to earn a qualification
              <br />
              that <span className="italic-serif text-bloom">opens doors</span>?
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/programmes" className="group inline-flex items-center gap-3 bg-white text-aubergine px-7 py-4 text-[13px] font-medium transition-snap hover:bg-bloom">
              View programmes
              <ArrowUpRight className="h-4 w-4 transition-snap group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;
