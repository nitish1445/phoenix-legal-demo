import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Go to Top"
      aria-label="Scroll to top"
      className={`cursor-pointer group fixed bottom-6 right-6 z-999 flex h-12 w-12 items-center justify-center rounded-full border border-pl-white/20 bg-pl-gold/95 text-pl-white shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pl-white hover:bg-pl-white hover:text-pl-gold hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <FaArrowUp className="text-2xl transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
