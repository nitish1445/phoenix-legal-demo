import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageBanner({
  eyebrow,
  title,
  text,
  backTo,
  backLabel,
}) {
  return (
    <section className="hero-visual relative overflow-hidden px-2 pb-20 pt-36 text-pl-white md:pb-28 md:pt-44">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[12%] top-32 h-28 w-28 rounded-full border border-pl-gold/40" />
        <div className="absolute bottom-12 right-[16%] h-44 w-44 rounded-full border border-pl-light-gold/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="container-pl relative z-10"
      >
        {backTo && (
          <Link
            to={backTo}
            className={`${eyebrow ? "mb-8" : ""} inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500! transition hover:gap-3`}
          >
            <FaArrowLeftLong className="text-xs" />
            {backLabel}
          </Link>
        )}
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-pl-light-gold">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[42px] font-semibold leading-[0.98] text-balance md:text-7xl">
          {title}
        </h1>
        {text && (
          <p className="mt-6 max-w-2xl text-base leading-5 md:text-lg md:leading-7 text-pl-bg/85">
            {text}
          </p>
        )}
      </motion.div>
    </section>
  );
}
