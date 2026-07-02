import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton.jsx";
import { company } from "../assets/data.js";
import heroImage from "../assets/images/banner.jpg";

export default function Hero() {
  return (
    <section className="hero-visual relative min-h-screen overflow-hidden px-2 pt-36 pb-16 text-pl-white md:min-h-[92vh] md:pt-40 md:pb-20">
      {[...Array(12)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-pl-gold"
          style={{
            left: `${8 + index * 8}%`,
            top: `${18 + (index % 5) * 13}%`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{
            duration: 4 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container-pl relative z-10 grid items-center gap-12 lg:min-h-[70vh] lg:grid-cols-[1.08fr_0.92fr]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-pl-light-gold sm:text-xs">
            Premium Law Firm
          </p>

          <h1 className="max-w-4xl font-display text-[3.2rem] font-semibold leading-[0.9] sm:text-6xl md:text-8xl lg:text-9xl">
            {company.name}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-pl-bg/90 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            {company.tagline}
          </p>

          <p className="mt-1 max-w-2xl text-sm leading-5.5 text-pl-bg/75 md:text-lg md:leading-7">
            {company.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <AnimatedButton
              to="/contact"
              variant="light"
              className="bg-white/10 text-pl-white backdrop-blur"
            >
              Request Counsel
            </AnimatedButton>
            <AnimatedButton to="/partners">Meet Our Partners</AnimatedButton>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 lg:max-w-xl">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-display text-3xl text-pl-gold">20+</h3>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                Expertise
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-display text-3xl text-pl-gold">18+</h3>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                Years
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-display text-3xl text-pl-gold">98%</h3>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                Satisfaction
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative aspect-4/5 overflow-hidden border border-pl-gold/30 luxury-shadow ">
            {/* Background Image */}
            <img
              src={heroImage}
              alt="Phoenix Legal"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            {/* Gold Border */}
            <div className="absolute inset-5 border border-pl-white/20" />
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-4xl leading-tight text-white">
                  Institutional <br /> Judgment.
                </h3>
                <span className="mb-4 inline-block border border-pl-gold/40 bg-pl-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pl-gold backdrop-blur">
                  Since 2008
                </span>
              </div>
              <p className="mt-5 max-w-sm text-white/80">
                Corporate, disputes, finance, regulatory and technology counsel
                for institutions, founders, boards, and global investors
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
