import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const COLOPHON = {
  about: [
    { label: "About UeCampus",   to: "/about-us" },
    { label: "Accreditation",    to: "/accreditation-and-partners" },
    { label: "Scholarships",     to: "/scholarship" },
    { label: "Journal",          to: "/blogs" },
    { label: "FAQs",             to: "/faqs" },
    { label: "Contact",          to: "/contact-us" },
  ],
  studies: [
    { label: "Programmes & Diplomas", to: "/programmes" },
    { label: "All Courses",            to: "/courses" },
    { label: "Walsh College",          to: "/programmes" },
    { label: "PPA Business School",    to: "/programmes" },
    { label: "EIE European Business School", to: "/programmes" },
    { label: "Qualifi Diplomas",       to: "/programmes" },
  ],
  legal: [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Cookies", to: "#" },
    { label: "Data Deletion", to: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-aubergine text-white relative overflow-hidden">
      {/* Subtle radial halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--orchid) / 0.25), transparent 70%)" }}
      />

      <div className="relative container-wide pt-20 md:pt-28 pb-12">
        {/* Big editorial closer */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <p className="eyebrow text-white/60 mb-6">Until next class</p>
            <h2 className="font-serif text-display leading-[1.02] text-white">
              A higher education,
              <br />
              <span className="italic-serif text-bloom">anywhere you choose</span>
              <span className="text-ember">.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-3 text-white font-serif text-lg"
            >
              <span className="link-editorial pb-1">Speak with admissions</span>
              <span className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center transition-smooth group-hover:bg-white group-hover:text-aubergine">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="h-px bg-white/15 mb-14" />

        {/* Colophon */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Wordmark + blurb */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="font-serif text-3xl text-white">
              Ue<span className="italic-serif">Campus</span>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-white/65 max-w-xs">
              An online higher-education institution delivering accredited
              degrees and diplomas in partnership with universities in the UK,
              France, the United States and Malta.
            </p>
            <p className="mt-6 eyebrow text-white/50">Founded MMXXIV</p>
          </div>

          {/* Three columns */}
          <FooterCol heading="Institution" items={COLOPHON.about} />
          <FooterCol heading="Studies"     items={COLOPHON.studies} />

          {/* Contact column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="eyebrow text-white/60 mb-5">Contact</h4>
            <ul className="space-y-3 text-[14px] text-white/80">
              <li>
                <a href="mailto:info@uecampus.com" className="link-editorial hover:text-white">
                  info@uecampus.com
                </a>
              </li>
              <li>
                <a href="tel:+447586797014" className="hover:text-white transition-snap">
                  +44 7586 797014
                </a>
              </li>
              <li className="text-white/55 text-[13px] leading-relaxed pt-2">
                Office 249, Titan Court
                <br />
                3 Bishop Square, Hatfield
                <br />
                Hertfordshire, AL10 9NA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
            © {new Date().getFullYear()} UeCampus Ltd. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {COLOPHON.legal.map((l) => (
              <li key={l.label}>
                <a
                  href={l.to}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 hover:text-white transition-snap"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Outsize wordmark — quiet flourish at the very base */}
      <div aria-hidden className="relative">
        <p className="font-serif italic select-none leading-none text-center text-white/[0.05] text-[clamp(6rem,18vw,16rem)] tracking-[-0.04em] pb-4">
          UeCampus
        </p>
      </div>
    </footer>
  );
};

const FooterCol = ({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; to: string }[];
}) => (
  <div className="col-span-1 md:col-span-3">
    <h4 className="eyebrow text-white/60 mb-5">{heading}</h4>
    <ul className="space-y-3 text-[14px] text-white/80">
      {items.map((i) => (
        <li key={i.label}>
          <Link to={i.to} className="hover:text-white transition-snap link-editorial">
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
