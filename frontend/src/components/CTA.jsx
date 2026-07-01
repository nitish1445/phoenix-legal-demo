import AnimatedButton from "./AnimatedButton";

export default function CTA({
  eyebrow,
  heading,
  text,
  buttonText,
  buttonTo = "/contact",
}) {
  const title = heading || (
    <>
      When the Matter is
      <span className="block text-pl-light-gold">Decisive, Choose Counsel</span>
      Built for Consequence.
    </>
  );

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#120C09] via-[#1B130F] to-[#241711] py-16 text-pl-white sm:py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-pl-gold/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-pl-gold/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-pl-gold/60 to-transparent" />

      <div className="container-pl relative z-10 text-center">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-pl-light-gold sm:text-xs sm:tracking-[0.45em]">
          {eyebrow}
        </p>

        <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold md:leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl px-2 text-[14px] leading-5 text-pl-white/75 sm:mt-8 sm:px-6 sm:text-lg sm:leading-8">
          {text}
        </p>

        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
          <AnimatedButton to={buttonTo}>{buttonText}</AnimatedButton>
        </div>
      </div>

      {/* Premium Bottom Golden Border */}
      <div className="absolute bottom-0 left-0 h-0.75 w-full bg-linear-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Shine Effect */}
      <div className="absolute bottom-0.75 left-0 h-px w-full bg-linear-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}
