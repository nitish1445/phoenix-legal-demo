import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function AnimatedButton({ children, to, variant = "dark", className = "" }) {
  const classes =
    variant === "light"
      ? "border border-pl-border bg-pl-white text-pl-text hover:border-pl-gold"
      : "gold-gradient text-pl-text";

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`button-ripple inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold uppercase tracking-[0.12em] transition ${classes} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <FiArrowUpRight className="relative z-10" />
    </motion.span>
  );

  return to ? <Link to={to}>{content}</Link> : <button type="submit">{content}</button>;
}
