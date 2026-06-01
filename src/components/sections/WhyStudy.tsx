import { Link } from "react-router-dom";
import { Play, ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/editorial/Eyebrow";

const WhyStudy = () => (
  <section className="bg-hero-purple py-24 md:py-32 relative overflow-hidden">
    {/* Soft accent halo */}
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full"
      style={{ background: "radial-gradient(closest-side, hsl(var(--bloom) / 0.18), transparent 70%)" }}
    />

    <div className="relative container-wide grid lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Left: opinion essay */}
      <div className="lg:col-span-7">
        <Eyebrow tone="plum">From the editor</Eyebrow>
        <h2 className="mt-6 font-serif text-display text-ink leading-[1.02]">
          Why study at
          <br />
          <span className="italic-serif text-plum">UeCampus</span>
          <span className="text-ember">.</span>
        </h2>

        <p className="mt-10 font-serif text-[19px] md:text-[20px] leading-[1.65] text-ink-soft drop-cap max-w-[58ch]">
          Step into the future of learning with UeCampus, where global
          opportunities meet true flexibility. We break down the barriers of
          traditional education by delivering world-class, accredited degrees
          online at a fraction of the usual cost. Study at your own pace, from
          anywhere in the world, while gaining the knowledge, skills, and
          confidence to thrive. At UeCampus, you don&rsquo;t just earn a degree;
          you gain the freedom and competitive edge to shape the career and
          life you&rsquo;ve always imagined.
        </p>

        <div className="mt-12 flex items-center gap-8">
          <Link
            to="/about-us"
            className="group inline-flex items-center gap-2 font-serif text-lg text-ink"
          >
            <span className="link-editorial">More about UeCampus</span>
            <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="hidden md:block h-px w-16 bg-rule" aria-hidden />
          <p className="eyebrow text-ink-mute hidden md:block">A note from the team</p>
        </div>
      </div>

      {/* Right: pull-quote + video */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        <blockquote className="bg-white rounded-2xl ring-1 ring-white/15 p-8 md:p-10">
          <p className="eyebrow eyebrow-plum">Pull quote</p>
          <p className="mt-4 font-serif text-[26px] md:text-[28px] leading-[1.2] text-ink">
            <span className="italic-serif text-plum">&ldquo;</span>
            A reliable partner in online higher education, flexible, affordable,
            and fully accredited.
            <span className="italic-serif text-plum">&rdquo;</span>
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            UeCampus brand promise
          </p>
        </blockquote>

        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer bg-aubergine">
          <div
            aria-hidden
            className="absolute inset-0 opacity-90"
            style={{ background: "linear-gradient(135deg, hsl(var(--plum)), hsl(var(--aubergine)))" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="font-serif italic-serif text-white text-2xl md:text-3xl leading-tight">
                A film, from our students
              </p>
              <p className="eyebrow text-white/70 mt-3">Student testimonial · Part 1</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/95 flex items-center justify-center transition-smooth group-hover:scale-110">
              <Play className="h-7 w-7 text-aubergine fill-aubergine ml-0.5" />
            </span>
          </button>
          <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
            Plate 02
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default WhyStudy;
