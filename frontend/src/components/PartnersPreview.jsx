import { Link } from "react-router-dom";
import { partners } from "../assets/partner.js";
import SectionHeading from "./SectionHeading.jsx";
import AnimatedButton from "./AnimatedButton.jsx";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function PartnersPreview({ limit = 3 }) {
  return (
    <section className="px-2 py-24 md:py-32">
      <div className="container-pl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Leadership"
            title="Partner-led by design."
            text="Experienced lawyers with the judgment, restraint, and technical depth expected from a top-tier institution."
          />
          {limit && (
            <AnimatedButton to="/partners" variant="light">
              Meet Our Partners
            </AnimatedButton>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {partners.slice(0, limit || partners.length).map((partner) => (
            <Link
              key={partner.slug}
              to={`/partners/${partner.slug}`}
              className="group flex h-100 flex-col overflow-hidden rounded-sm border border-pl-border bg-pl-white transition-all duration-500 hover:-translate-y-1 hover:border-pl-gold hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/4.8] overflow-hidden bg-pl-bg">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Designation */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-5">
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-pl-gold">
                    {partner.designation}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 py-3">
                <h3 className="font-display text-[1.7rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#143A6F] md:text-[1.8rem]">
                  {partner.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pl-gold" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#143A6F]/70">
                    {partner.city}
                  </p>
                </div>

                <p className="mt-2 line-clamp-3 leading-4.5 text-sm font-normal text-pl-muted">
                  {partner.shortBio}
                </p>

                <div className="mt-auto pt-3">
                  <div className="flex items-center justify-between border-t border-pl-border pt-2">
                    <div className="flex items-center gap-4">
                      <a
                        href={`mailto:${partner.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-pl-muted! transition-all duration-300 hover:text-pl-gold!"
                      >
                        Email
                      </a>

                      <span className="text-pl-border">|</span>

                      <a
                        href={partner.vCard}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-pl-muted! transition-all duration-300 hover:text-pl-gold!"
                      >
                        vCard
                      </a>
                    </div>

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
  );
}
