import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return undefined;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, [paused, testimonials.length]);

  const current = testimonials[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      className="mx-auto max-w-3xl"
    >
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span
          aria-hidden="true"
          className="font-display text-6xl leading-none text-pl-gold/60"
        >
          &ldquo;
        </span>

        <blockquote className="mx-auto max-w-2xl text-lg leading-7 text-pl-walnut md:text-xl md:leading-8">
          {current.quote}
        </blockquote>

        <footer className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pl-text">
            {current.author}
          </p>
          {current.role && (
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-pl-muted">
              {current.role}
            </p>
          )}
        </footer>

        {/* button */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              setActive(
                (active - 1 + testimonials.length) % testimonials.length,
              )
            }
            className="border border-pl-border px-4 py-2 cursor-pointer text-xs uppercase tracking-[0.2em] transition hover:border-pl-gold hover:text-pl-gold"
          >
            Previous
          </button>

          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="border border-pl-border cursor-pointer px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-pl-gold hover:text-pl-gold"
          >
            Next
          </button>
        </div>
      </motion.div>

      {/* Pagination */}
      {testimonials.length > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.author + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-pl-gold"
                  : "w-1.5 bg-pl-border hover:bg-pl-gold/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
