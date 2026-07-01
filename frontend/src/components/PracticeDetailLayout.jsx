import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PageBanner from "./PageBanner.jsx";
import SectionHeading from "./SectionHeading.jsx";
import CTA from "./CTA.jsx";
import TestimonialCarousel from "./TestimonialCarousel.jsx";

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

export default function PracticeDetailLayout({ practice }) {
  return (
    <main>
      {/* Hero */}
      <PageBanner
        title={practice.title}
        text={practice.summary}
        backTo="/practices"
        backLabel="Back to Practices"
      />

      {/* Overview */}

      <section className="px-2 py-24 md:py-32">
        <div className="container-pl mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              eyebrow="Overview"
              title={practice.title}
              align="start"
            />

            <div className="mt-8 space-y-5">
              {practice.overview.map((para, i) => (
                <p
                  key={i}
                  className="text-sm text-pl-walnut md:text-base md:leading-7"
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Advise */}
      <section className="bg-pl-white px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Industries We Advise"
            title="Supporting Businesses Across Diverse Industry Sectors"
            align="center"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center"
          >
            {practice.industries.map((industry) => (
              <motion.div
                key={industry}
                variants={fadeUp}
                className="group h-14 sm:h-12 px-4 flex items-center justify-center border border-pl-border bg-pl-white text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-pl-gold hover:bg-[#FCF9F1]"
              >
                <span className="text-center text-xs sm:uppercase font-semibold leading-4.5 text-pl-walnut transition-colors duration-300 group-hover:text-pl-text md:text-sm">
                  {industry}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Phoenix Legal */}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Why Client Choose Us"
            title="Delivering Practical Legal Solutions with Proven Expertise"
            align="start"
          />

          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Vertical gold rule */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-pl-gold/30 md:block" />

            <div className="space-y-8">
              {practice.strengths.map((strength, index) => (
                <motion.article
                  key={strength.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative grid gap-6 border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:shadow-xl md:grid-cols-[110px_1fr]"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-8 hidden h-4 w-4 rounded-full border-4 border-pl-bg bg-pl-gold md:block" />

                  {/* Number */}
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-pl-gold/30 bg-pl-gold/10 shadow-sm transition-all duration-300 group-hover:border-pl-gold group-hover:bg-pl-gold/15">
                      <span className="font-display text-2xl text-pl-gold">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Phoenix Legal
                    </p>

                    <h3 className="mt-2 font-display text-xl leading-6 text-pl-text md:text-2xl">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-sm leading-4.5 text-pl-muted md:text-base md:leading-6">
                      {strength.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      {practice.experience && practice.experience.length > 0 && (
        <section className="bg-pl-white px-2 pt-18 md:pt-32">
          <div className="container-pl max-w-6xl bg-pl-white">
            <SectionHeading
              eyebrow="Representative Experience"
              title="Selected Matters and Recent Experience"
              align="start"
            />

            <div className="mt-4 pl-5 md:pl-12 lg:pl-20">
              {practice.experience.map((item, index) => (
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
                    {item}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Recognition */}
      {practice.testimonials && (
        <section className="bg-pl-white px-2 py-24 md:py-32">
          <div className="container-pl">
            <SectionHeading
              eyebrow="Client Recognition"
              title="What Industry Leaders Say"
              align="center"
            />

            <div className="mx-auto mt-12 max-w-5xl">
              <TestimonialCarousel testimonials={practice.testimonials} />
            </div>
          </div>
        </section>
      )}

      <CTA
        eyebrow="Engage Phoenix Legal"
        heading="Let's discuss your legal requirements with confidence."
        text="Discuss your legal requirements with our experienced lawyers and discover practical, commercially focused solutions tailored to your business objectives."
        buttonText="Request A Consultation"
      />
    </main>
  );
}
