import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import logo from "../assets/icons/logo.png";

export default function Disclaimer({ onAgree }) {
  const [checked, setChecked] = useState(false);

  const handleAgree = () => {
    sessionStorage.setItem("phoenix_disclaimer", "accepted");
    document.body.style.overflow = "";
    onAgree?.();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const points = [
    "The user wishes to gain more information about Phoenix Legal, its practice areas and its attorneys, for his/her own information and use.",
    "The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship.",
    "None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.",
  ];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-9998 bg-black/60 backdrop-blur-md" />

      {/* Popup */}
      <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-pl-border bg-pl-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.25)]"
        >
          <div className="relative">
            <img
              src={logo}
              alt=""
              className="pointer-events-none absolute left-1/2 top-1/2 hidden h-112 w-md -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-[0.035] lg:block"
            />

            <h2 className="font-display text-3xl font-semibold leading-tight text-pl-text md:text-4xl">
              Disclaimer
            </h2>
            <div className="h-px mt-2 w-32 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent " />

            <p className="mt-2 text-sm leading-4.5 text-pl-muted md:leading-5">
              The rules of the{" "}
              <span className="font-semibold text-pl-gold">
                Bar Council of India
              </span>{" "}
              prohibit law firms from soliciting work or advertising in any
              manner. By clicking on{" "}
              <span className="font-semibold text-pl-text">"I Agree"</span>, the
              user acknowledges that:
            </p>

            <div className="mt-4 space-y-3">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Mobile / Tablet */}
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-pl-gold md:hidden" />

                  {/* Desktop */}
                  <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-pl-gold/30 bg-pl-gold/10 md:flex">
                    <span className="font-display text-lg text-pl-gold">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <p className="flex-1 text-sm leading-4.5 text-pl-muted md:leading-5">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 border-t border-pl-border pt-3">
              <p className="leading-4.5 text-pl-muted text-sm md:leading-5">
                Information provided on this website is for general guidance
                only. Phoenix Legal accepts no liability arising from its use.
                Independent legal advice should be sought where appropriate.
              </p>
            </div>

            <button
              onClick={handleAgree}
              className="mt-3 flex w-full items-center justify-center gap-3 bg-pl-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-pl-white transition-all duration-300 hover:bg-pl-dark-gold md:w-auto md:min-w-56 cursor-pointer"
            >
              I Agree
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
