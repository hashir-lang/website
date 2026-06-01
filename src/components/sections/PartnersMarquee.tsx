import Eyebrow from "@/components/editorial/Eyebrow";
import eie from "@/assets/partner-eie-exact.jpg";
import ppa from "@/assets/partner-ppa-exact-cropped.png";
import walsh from "@/assets/partner-walsh.png";
import qualifi from "@/assets/partner-qualifi-exact.png";
import eduqual from "@/assets/partner-eduqual-exact.png";

const PARTNERS = [
  { src: eie,     name: "EIE European Business School", place: "Malta, EU" },
  { src: ppa,     name: "PPA Business School",          place: "Paris, FR" },
  { src: walsh,   name: "Walsh College",                place: "Michigan, US" },
  { src: qualifi, name: "Qualifi",                      place: "Ofqual-Regulated, UK" },
  { src: eduqual, name: "EduQual",                      place: "London, UK" },
];

const PartnersMarquee = () => (
  <section className="bg-paper border-t border-rule py-16 md:py-20 overflow-hidden">
    <div className="container-wide">
      <div className="flex items-baseline justify-between mb-10 md:mb-12">
        <Eyebrow>In partnership with</Eyebrow>
        <p className="hidden md:block eyebrow text-ink-mute">
          Five institutions · Four jurisdictions
        </p>
      </div>
    </div>

    {/* Infinite editorial ticker */}
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(90deg, hsl(var(--paper)), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(-90deg, hsl(var(--paper)), transparent)" }}
      />

      <div className="flex w-max animate-marquee gap-16 md:gap-24 items-center">
        {[...PARTNERS, ...PARTNERS].map((p, i) => (
          <figure
            key={`${p.name}-${i}`}
            className="flex flex-col items-center gap-3 shrink-0 group"
          >
            <div className="h-20 md:h-24 flex items-center">
              <img
                src={p.src}
                alt={`${p.name}, partner of UeCampus`}
                loading="lazy"
                className="max-h-full w-auto object-contain max-w-[200px] md:max-w-[240px] grayscale opacity-80 transition-smooth group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            <figcaption className="text-center">
              <p className="font-serif text-[14px] text-ink leading-tight">{p.name}</p>
              <p className="eyebrow text-ink-mute mt-1">{p.place}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersMarquee;
