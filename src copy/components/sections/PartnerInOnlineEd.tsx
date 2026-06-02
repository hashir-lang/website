import Eyebrow from "@/components/editorial/Eyebrow";
import globe from "@/assets/globe-v2.png";

const STATS = [
  { k: "90+",  v: "Countries reached" },
  { k: "04",   v: "Partner institutions" },
  { k: "100%", v: "Online delivery" },
];

const PartnerInOnlineEd = () => (
  <section className="bg-paper py-24 md:py-32 border-t border-rule">
    <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Globe - left */}
      <div className="lg:col-span-5 relative">
        <div className="relative aspect-square max-w-[480px] mx-auto">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(closest-side, hsl(var(--plum-paper)), transparent 70%)",
            }}
          />
          <img
            src={globe}
            alt="Global student community"
            loading="lazy"
            className="relative w-full h-full object-contain"
          />
          <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
            Figure 03
          </span>
        </div>
      </div>

      {/* Essay - right */}
      <div className="lg:col-span-7">
        <Eyebrow>A global community</Eyebrow>
        <h2 className="mt-5 font-serif text-display text-ink">
          A community,
          <br />
          <span className="italic-serif text-plum">connected</span>
          <span className="text-ember">.</span>
        </h2>

        <p className="mt-10 font-serif text-[19px] md:text-[20px] leading-[1.65] text-ink-soft max-w-[58ch]">
          Students from across the world choose UeCampus to advance their
          education and careers. That diversity sharpens our mission: to deliver
          globally relevant education and to foster an environment of academic
          exchange that travels well beyond any single classroom.
        </p>

        <ul className="mt-12 grid grid-cols-3 border-t border-rule">
          {STATS.map((s, i) => (
            <li
              key={s.v}
              className={`pt-6 ${i > 0 ? "border-l border-rule pl-6" : ""}`}
            >
              <p className="font-serif text-display-sm text-ink leading-none">{s.k}</p>
              <p className="mt-2 text-[12px] text-ink-mute uppercase tracking-[0.12em]">
                {s.v}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PartnerInOnlineEd;
