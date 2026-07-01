import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero-visual relative flex min-h-screen items-center justify-center overflow-hidden px-4">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute left-[12%] top-32 h-28 w-28 rounded-full border border-pl-gold/40" />
    <div className="absolute bottom-16 right-[12%] h-44 w-44 rounded-full border border-pl-light-gold/30" />
  </div>

  <div className="relative z-10 flex w-full items-center justify-center">
    <div className="max-w-2xl text-center text-pl-white">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-pl-light-gold">
        Error 404
      </p>

      <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.9] md:text-8xl">
        Page
        <br />
        Not Found
      </h1>

      <div className="mx-auto mt-5 h-px w-32 bg-linear-to-r from-transparent via-pl-gold to-transparent" />

      <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-pl-bg/85 md:text-lg">
        The page you are looking for may have been moved, removed, or the URL is incorrect.
      </p>

      <Link
        to="/"
        className="group mt-10 inline-flex items-center gap-3 border border-pl-gold bg-pl-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-pl-white transition-all duration-300 hover:bg-pl-dark-gold"
      >
        <FaArrowLeft className="transition group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </div>
  </div>
</section>
  );
}
