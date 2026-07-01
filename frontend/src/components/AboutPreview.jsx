import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import AnimatedButton from "./AnimatedButton.jsx";
import { values } from "../assets/data.js";
import aboutImage from "../assets/images/image.png";

export default function AboutPreview() {
  return (
    <section className="px-2 py-24 md:py-32">
      <div className="container-pl grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="law-image relative h-105 overflow-hidden border border-pl-border sm:h-115 lg:h-130">
          {/* Background Image */}
          <img
            src={aboutImage}
            alt="Phoenix Legal"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

          {/* Decorative Border */}
          <div className="absolute inset-6 border border-pl-white/20" />

          {/* Content */}
          <div className="absolute bottom-8 left-8 z-10 border-l-2 border-pl-gold pl-6">
            <p className="font-display text-6xl leading-none text-pl-gold">
              18+
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-pl-white">
              Years of Excellence
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="The Firm"
            title="A modern legal institution with old-world discretion."
            text="Phoenix Legal operates with a partner-led model, deep sector fluency, and the composure clients need when legal outcomes carry strategic consequence."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-pl-border bg-pl-white px-5 py-4 text-sm font-semibold text-pl-walnut"
              >
                {value}
              </motion.div>
            ))}
          </div>
          <div className="mt-9">
            <AnimatedButton to="/about">About Phoenix</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
