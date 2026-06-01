import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/editorial/Eyebrow";
import s1 from "@/assets/student-1.jpg";
import s2 from "@/assets/student-2.jpg";
import s3 from "@/assets/student-3.jpg";

const VOICES = [
  {
    name: "Jacek Zalewski",
    place: "Poland",
    programme: "Bachelor of Business Administration in Marketing",
    quote:
      "UeCampus transformed my career trajectory. The BBA gave me both the strategic knowledge and the hands-on experience to thrive in today's marketing landscape. If you're serious about building a marketing career, UeCampus delivers.",
    img: s1,
  },
  {
    name: "Jose Arismendy",
    place: "United Kingdom",
    programme: "BBA in Marketing",
    quote:
      "Completing my BBA at UeCampus was a pivotal moment in my career. The in-depth curriculum and industry-focused training gave me the expertise and the confidence to excel in any professional setting.",
    img: s2,
  },
  {
    name: "Liliana Sequia",
    place: "United Arab Emirates",
    programme: "Psychology, Level 5",
    quote:
      "Completing my Psychology Level 5 at UeCampus was a game-changer. The comprehensive curriculum and practical training gave me the skills and confidence to excel.",
    img: s3,
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = VOICES[i];
  const total = VOICES.length;

  return (
    <section className="bg-paper-soft py-24 md:py-32 border-t border-rule">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="mt-5 font-serif text-display-sm text-ink leading-[1.1]">
            On returning to study<span className="text-ember">.</span>
          </h2>
        </div>

        {/* Horizontal testimonial card */}
        <article className="bg-white rounded-3xl overflow-hidden ring-1 ring-rule shadow-[0_30px_70px_-40px_rgba(40,16,80,0.25)] grid md:grid-cols-12">
          {/* Portrait */}
          <figure className="md:col-span-5 relative aspect-[4/5] md:aspect-auto md:min-h-[580px] bg-aubergine grain overflow-hidden">
            <img
              src={t.img}
              alt={t.name}
              className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-95"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, hsl(var(--aubergine) / 0.55))",
              }}
            />
            <span className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
              Plate {String(i + 1).padStart(2, "0")}
            </span>
            <figcaption className="absolute bottom-5 left-5 right-5 text-white">
              <p className="font-serif text-[20px] leading-tight">{t.name}</p>
              <p className="eyebrow text-white/70 mt-1">{t.place}</p>
            </figcaption>
          </figure>

          {/* Quote */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
            <p className="font-serif text-[20px] md:text-[24px] leading-[1.45] text-ink">
              <span className="italic-serif text-plum text-[1.4em] leading-none mr-1">“</span>
              {t.quote.replace(/^[“"]?|[”"]?$/g, "")}
              <span className="italic-serif text-plum text-[1.4em] leading-none ml-1">”</span>
            </p>

            <div className="mt-10 flex items-end justify-between gap-6 border-t border-rule pt-5">
              <div>
                <p className="eyebrow eyebrow-plum">{t.programme}</p>
                <p className="mt-1 font-serif text-[16px] text-ink-soft">
                  {t.name}, {t.place}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="pagination-pill">
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setI((p) => (p - 1 + total) % total)}
                    aria-label="Previous testimonial"
                    className="h-9 w-9 rounded-full border border-rule flex items-center justify-center transition-snap hover:bg-ink hover:text-paper hover:border-ink"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 -rotate-[225deg]" />
                  </button>
                  <button
                    onClick={() => setI((p) => (p + 1) % total)}
                    aria-label="Next testimonial"
                    className="h-9 w-9 rounded-full border border-rule flex items-center justify-center transition-snap hover:bg-ink hover:text-paper hover:border-ink"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
