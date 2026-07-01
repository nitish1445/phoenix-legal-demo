import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.28em] text-pl-dark-gold">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-semibold leading-[0.95] text-pl-text md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-[14px] text-pl-muted md:text-lg">{text}</p>}
    </motion.div>
  );
}
