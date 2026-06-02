import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found, UeCampus";
    console.warn("404, non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout hideCta>
      <section className="bg-paper min-h-[70vh] flex items-center py-24 md:py-32 border-b border-rule">
        <div className="container-wide grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Error 404 / The blank page</p>
            <h1 className="mt-6 font-serif text-display-xl text-ink leading-[0.95]">
              We couldn&rsquo;t
              <br />
              <span className="italic-serif text-plum">find that page</span>
              <span className="text-ember">.</span>
            </h1>
            <p className="mt-10 font-serif text-[20px] leading-[1.55] text-ink-soft max-w-[52ch]">
              The page at <code className="font-mono text-[15px] text-ink bg-paper-deep px-1.5 py-0.5">
                {location.pathname}
              </code>{" "}
              didn&rsquo;t exist, or has moved. A few places you might go next.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ul className="border-y border-rule divide-y divide-rule">
              {[
                { to: "/",                              label: "Home" },
                { to: "/programmes",                    label: "Programmes & Diplomas" },
                { to: "/accreditation-and-partners",    label: "Accreditation & Partners" },
                { to: "/about-us",                      label: "About UeCampus" },
                { to: "/contact-us",                    label: "Contact" },
              ].map((l, i) => (
                <li key={l.to}>
                  <Link to={l.to} className="group flex items-center justify-between py-5">
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[22px] text-ink transition-snap group-hover:text-plum">
                        {l.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-mute transition-snap group-hover:text-plum group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/"
              className="mt-10 group inline-flex items-center gap-2 font-serif text-lg text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-snap group-hover:-translate-x-0.5" />
              <span className="link-editorial">Return home</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
