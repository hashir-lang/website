import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/editorial/Eyebrow";

const CTABanner = () => (
  <section className="bg-paper-soft border-t border-rule">
    <div className="container-wide py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
      <div className="lg:col-span-7">
        <Eyebrow>Closing remarks</Eyebrow>
        <h2 className="mt-5 font-serif text-display text-ink">
          Apply when it&rsquo;s
          <br />
          <span className="italic-serif text-plum">right for you</span>
          <span className="text-ember">.</span>
        </h2>
        <p className="mt-8 font-serif text-[19px] leading-[1.6] text-ink-soft max-w-[58ch]">
          Most programmes operate on a flexible intake, you can apply at any
          time and begin as soon as your enrolment is confirmed. Speak with an
          admissions officer to find the right starting point.
        </p>
      </div>

      <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4 lg:items-end">
        <Link
          to="/contact-us"
          className="group inline-flex items-center gap-3 bg-aubergine text-white px-8 py-4 text-[14px] font-medium transition-smooth hover:bg-plum"
        >
          Speak with admissions
          <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          to="/scholarship"
          className="group inline-flex items-center gap-2 font-serif text-lg text-ink"
        >
          <span className="link-editorial">Or, find a scholarship</span>
          <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <p className="mt-2 eyebrow text-ink-mute">
          Flexible intake · Apply anytime
        </p>
      </div>
    </div>
  </section>
);

export default CTABanner;
