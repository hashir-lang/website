import Eyebrow from "@/components/editorial/Eyebrow";

const PILLARS = [
  {
    n: "01",
    title: "Study, on your own terms.",
    body: "Learn without limits. UeCampus delivers education that fits around your life, anywhere, anytime, on your terms.",
    accent: "ember" as const,
  },
  {
    n: "02",
    title: "Degrees that travel with you.",
    body: "UeCampus offers globally respected qualifications designed to open doors wherever your journey takes you.",
    accent: "plum" as const,
  },
  {
    n: "03",
    title: "Made attainable, on purpose.",
    body: "We make high-quality education attainable, because every motivated student deserves the chance to succeed without financial barriers.",
    accent: "ink" as const,
  },
];

const ValueCards = () => (
  <section className="bg-paper py-20 md:py-32 border-t border-rule">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20">
        <div className="lg:col-span-5">
          <Eyebrow>Our promise</Eyebrow>
          <h2 className="mt-5 font-serif text-display text-ink">
            Three pillars,
            <br />
            <span className="italic-serif text-plum">one institution</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-serif text-[20px] leading-[1.55] text-ink-soft pt-2 md:pt-12">
            Every decision we make, whether building a programme or awarding a
            scholarship, traces back to the same three commitments. They are how
            we measure ourselves.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-t border-ink/20">
        {PILLARS.map((p, i) => (
          <article
            key={p.n}
            className={`reveal group relative border-b border-rule md:border-b-0 ${
              i > 0 ? "md:border-l md:border-rule" : ""
            } pt-10 md:pt-16 pb-12 md:px-10`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-baseline justify-between mb-12">
              <span className="marker-number text-[72px] md:text-[96px]">{p.n}</span>
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${
                  p.accent === "ember"
                    ? "bg-ember"
                    : p.accent === "plum"
                      ? "bg-plum"
                      : "bg-ink"
                }`}
              />
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.1] text-ink mb-5 transition-snap group-hover:text-plum">
              {p.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-soft max-w-[34ch]">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ValueCards;
