import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedButton from "../components/AnimatedButton.jsx";
import { benefits, jobs } from "../assets/data.js";
import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Career() {
  return (
    <>
      <PageBanner
        eyebrow="Careers"
        title="Grow With Phoenix Legal."
        text="At Phoenix Legal, you'll work alongside experienced professionals on challenging matters while building a career founded on integrity, collaboration, and continuous learning."
      />

      <section className="px-4 py-24 md:py-32">
        <div className="container-pl grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Culture"
              title="High standards without theatrics."
              text="Our teams value preparation, precision, generosity, and the ability to stay calm when matters become difficult."
            />

            <div className="mt-8 h-px w-24 bg-pl-gold" />

            <p className="mt-8 max-w-md leading-7 text-pl-muted">
              We foster an environment where collaboration, continuous learning
              and professional excellence shape every engagement and every
              career.
            </p>
          </div>

          <div className="grid gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-bottom gap-4 border border-pl-border bg-pl-white p-4 transition-all duration-300 hover:border-pl-gold"
              >
                <span className="font-display text-2xl text-pl-gold">
                  {(index + 1).toString().padStart(2, "0").padEnd(3, ".")}
                </span>

                <span className="text-[14px] text-pl-walnut sm:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pl-white px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Opportunities"
            title="Begin your legal journey with Phoenix Legal."
            text="Explore internship and retainership opportunities designed for aspiring and experienced legal professionals."
            align="center"
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                to={`/careers/${job.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-pl-border bg-pl-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-pl-gold hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-8"
              >
                {/* Decorative Glow */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pl-gold/5 blur-3xl transition-all duration-500 group-hover:bg-pl-gold/10" />

                {/* Type */}
                <span className="inline-flex w-fit items-center rounded-full border border-pl-gold/20 bg-pl-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-pl-dark-gold">
                  {job.type}
                </span>

                {/* Title */}
                <h3 className="mt-5 font-display text-xl leading-tight text-pl-text sm:text-2xl md:text-3xl">
                  {job.role}
                </h3>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-pl-muted">
                  <span>{job.location}</span>
                  <span className="text-pl-gold">•</span>
                  <span>{job.level}</span>
                </div>

                {/* Description */}
                <p className="mt-6 line-clamp-3 text-sm leading-5 text-pl-muted md:text-base md:leading-7">
                  {job.shortDescription}
                </p>

                {/* Push CTA to Bottom */}
                <div className="mt-auto pt-8">
                  <div className="flex items-center justify-between border-t border-pl-border pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Learn More
                    </span>

                    <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-pl-text transition-all duration-300 group-hover:text-pl-gold">
                      <span>View Details</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-pl-gold/30 text-pl-gold transition-all duration-300 group-hover:translate-x-1 group-hover:border-pl-gold group-hover:bg-pl-gold group-hover:text-pl-white">
                        <HiOutlineArrowUpRight className="text-lg" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
