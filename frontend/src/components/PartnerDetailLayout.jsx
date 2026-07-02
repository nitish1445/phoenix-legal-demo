import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiDownload } from "react-icons/fi";
import PageBanner from "./PageBanner.jsx";
import SectionHeading from "./SectionHeading.jsx";
import CTA from "./CTA.jsx";
import TestimonialCarousel from "../components/TestimonialCarousel.jsx";
import { FaAward } from "react-icons/fa6";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PartnerDetailLayout({ partner }) {
  return (
    <main>
      <PageBanner
        eyebrow="Partner Profile"
        title={partner?.name}
        text={partner?.shortBio}
        backTo="/partners"
        backLabel="Back to Partners"
      />

      {/* Profile Introduction :- Done*/}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl grid gap-16 lg:grid-cols-[320px_1fr]">
          <div className="lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden border border-pl-border bg-pl-white p-3"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="aspect-9/10 w-full object-cover"
              />
            </motion.div>
            <div className="mt-6 overflow-hidden border border-pl-border bg-pl-white">
              <div className="px-6 pt-5 pb-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pl-dark-gold">
                  Partner Details
                </p>

                <div className="mt-3 h-px w-24 bg-linear-to-r from-[#143A6F] via-[#143A6F]/40 to-transparent" />
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 px-6 py-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pl-muted">
                    Designation
                  </span>

                  <span className="text-right text-sm font-semibold text-pl-text">
                    {partner.designation}
                  </span>
                </div>

                {partner.city && (
                  <div className="flex items-center justify-between gap-4 px-6 py-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pl-muted">
                      Office
                    </span>

                    <span className="text-right text-sm font-semibold text-pl-text">
                      {partner.city}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between px-6 pt-2 pb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pl-muted">
                    Connect
                  </span>

                  <div className="flex items-center gap-3">
                    {partner.email && (
                      <a
                        href={`mailto:${partner.email}`}
                        aria-label="Email"
                        className="grid place-items-center font-bold text-pl-text transition-all duration-300 hover:border-pl-gold hover:text-pl-gold!"
                      >
                        <FiMail className="text-[17px]" />
                      </a>
                    )}

                    {partner.vCard && (
                      <a
                        href={partner.vCard}
                        download
                        aria-label="Download vCard"
                        className="grid place-items-center font-bold text-pl-text transition-all duration-300 hover:border-pl-gold hover:text-pl-gold!"
                      >
                        <FiDownload className="text-[17px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {partner.overview?.length > 0 && (
              <>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.28em] text-pl-dark-gold">
                  Overview
                </p>
                <div className="space-y-6">
                  {partner.overview.map((para, index) => (
                    <p
                      key={index}
                      className="text-sm leading-5 text-pl-walnut md:text-base md:leading-6"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>

        {partner.quote && (
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <span
              aria-hidden="true"
              className="font-display text-7xl leading-none text-pl-gold/65 md:text-8xl"
            >
              &ldquo;
            </span>

            <blockquote className="-mt-6 mx-auto max-w-3xl font-display text-2xl font-semibold leading-7 text-pl-text md:text-3xl md:leading-8">
              {partner.quote}
            </blockquote>
          </div>
        )}
      </section>

      {/* Representative Experience :- bg-pl-white*/}
      {partner.experience?.length > 0 && (
        <section className="bg-pl-white px-2 py-18 md:py-32">
          <div className="container-pl max-w-6xl bg-pl-white">
            <SectionHeading
              eyebrow="Representative Experience"
              title="Selected Matters and Recent Experience"
              align="start"
            />

            <div className="mt-4 pl-2 md:pl-12 lg:pl-20">
              {partner.experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex gap-4 py-1 transition-all duration-300"
                >
                  {/* Number */}
                  <div className="w-8 shrink-0">
                    <span className="font-display text-3xl text-pl-gold/80">
                      {(index + 1).toString().padStart(2, "0").padEnd(3, ".")}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="mt-3 text-sm leading-4.5 text-pl-walnut md:text-base">
                    {typeof item === "string" ? item : item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* . Awards and Recognition */}
      {partner.recognitions?.length > 0 && (
        <section className="px-2 py-24 md:py-32">
          <div className="container-pl">
            <SectionHeading
              eyebrow="Awards & Recognition"
              title="Professional Recognition and Industry Rankings"
              align="start"
            />

            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-pl-gold/30 md:block" />

              <div className="space-y-8">
                {partner.recognitions.map((rec, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="group relative grid gap-6 rounded-sm border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:shadow-xl md:grid-cols-[110px_1fr]"
                  >
                    <div className="absolute -left-8 top-8 hidden h-4 w-4 rounded-full border-4 border-pl-bg bg-pl-gold md:block" />

                    {/* Left Icon */}
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-pl-gold/30 bg-pl-gold/10 shadow-sm transition-all duration-300 group-hover:border-pl-gold group-hover:bg-pl-gold/15">
                        <FaAward className="h-5 w-5 text-pl-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      {(rec.organization || rec.year) && (
                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                          {rec.organization && (
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pl-dark-gold">
                              {rec.organization}
                            </p>
                          )}

                          {rec.year && (
                            <span className="whitespace-nowrap text-sm text-pl-muted">
                              {rec.year}
                            </span>
                          )}
                        </div>
                      )}

                      <h3 className="mt-3 font-display text-xl leading-4.5 text-pl-text md:text-2xl">
                        {rec.title}
                      </h3>

                      {rec.description && (
                        <p className="mt-4 text-sm leading-4.5 text-pl-muted md:text-base md:leading-6">
                          {rec.description}
                        </p>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Publications & Presentation :- bg-pl-white*/}
      {partner.publications?.length > 0 && (
        <section className="bg-pl-white px-2 py-18 md:py-32">
          <div className="container-pl max-w-6xl bg-pl-white">
            <SectionHeading
              eyebrow="Publications & Presentations"
              title="Insights and Written Commentary"
              align="start"
            />

            <div className="mt-4 pl-2 md:pl-12 lg:pl-20">
              {partner.publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex gap-4 items-baseline py-2 transition-all duration-300"
                >
                  {/* Golden Dot */}
                  <div className="mt-4 flex w-8 shrink-0 justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-pl-gold" />
                  </div>

                  {/* Content */}
                  <p className="text-sm leading-5 text-pl-walnut md:text-base">
                    {publication}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/*  Memberships */}
      {partner.memberships?.length && (
        <section className="px-2 py-24 md:py-32">
          <div className="container-pl">
            <SectionHeading
              eyebrow="Memberships"
              title="Professional bodies and bar associations."
              align="center"
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-12 grid grid-cols-1 lg:grid-cols-2 justify-center gap-3"
            >
              {partner.memberships.map((membership) => (
                <motion.span
                  key={membership}
                  variants={fadeUp}
                  className="border border-pl-border bg-pl-white px-5 py-2.5 lg:h-14 text-xs font-semibold uppercase tracking-[0.12em] text-pl-walnut transition-all duration-300 hover:border-pl-gold hover:text-pl-text group flex gap-4 items-baseline"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pl-gold transition-transform duration-300 group-hover:scale-125" />
                  <span>{membership}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials :- bg-pl-white*/}
      {partner.testimonials?.length && (
        <section className="px-2 py-24 md:py-32 bg-pl-white">
          <div className="container-pl">
            <SectionHeading
              eyebrow="Testimonials"
              title="What clients say."
              align="center"
            />

            <div className="mt-14">
              <TestimonialCarousel testimonials={partner.testimonials} />
            </div>
          </div>
        </section>
      )}

      {/*  Professional Affiliations */}
      {partner.affiliations?.length && (
        <section className="bg-pl-white px-2 py-24 md:py-32">
          <div className="container-pl">
            <SectionHeading
              eyebrow="Professional Affiliations"
              title="Organisations we are proud to be associated with."
              align="center"
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4"
            >
              {partner.affiliations.map((aff, i) => (
                <motion.div
                  key={aff.name || i}
                  variants={fadeUp}
                  className="flex h-28 items-center justify-center border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold"
                >
                  <img
                    src={aff.logo}
                    alt={aff.name || "Affiliation logo"}
                    className="max-h-12 max-w-[80%] object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <CTA
        eyebrow="Ready to Begin?"
        heading="Trusted legal counsel for individuals, businesses, and institutions."
        text="Connect with our experienced lawyers to discuss your legal challenges and discover solutions tailored to your objectives."
        buttonText="Get in Touch"
      />
    </main>
  );
}
