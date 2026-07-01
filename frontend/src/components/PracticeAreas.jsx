import { motion } from "framer-motion";
import { practices } from "../assets/practices.js";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import AnimatedButton from "./AnimatedButton.jsx";

export default function PracticeAreas({ limit }) {
  const practiceItem = limit ? practices.slice(0, limit) : practices;
  return (
    <section className="px-2 py-24 md:py-32">
      <div className="container-pl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Practices"
            title="Integrated advice for complex mandates."
            text="Our practices work as one firm, combining transactional precision, courtroom strategy, and regulatory judgment."
          />
          {limit && (
            <AnimatedButton to="/practices" variant="light">
              View All Practices
            </AnimatedButton>
          )}
        </div>

        <div className="grid gap-px overflow-hidden border border-pl-border bg-pl-border md:grid-cols-2 lg:grid-cols-3">
          {practiceItem.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                to={`/practices/${item.slug}`}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group h-full cursor-pointer bg-pl-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-pl-white hover:shadow-xl"
                >
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-full border border-pl-gold/40 text-2xl text-pl-dark-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-pl-gold group-hover:text-pl-text">
                    <Icon />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-pl-text sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-6 text-pl-muted">{item.summary}</p>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
