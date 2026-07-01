import { Link } from "react-router-dom";
import { company, socialLinks } from "../assets/data.js";
import { practices } from "../assets/practices.js";
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";
import logo from "../assets/icons/logo.png";

export default function Footer() {
  return (
    <footer className="bg-pl-footer px-4 py-12 text-pl-white sm:py-14 lg:pt-16 lg:pb-8">
      <div className="container-pl">
        <div className="grid gap-10 border-b border-pl-white/10 pb-10 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Phoenix Legal" className="h-12 w-auto" />

              <div className="flex flex-col">
                <span className="text-white font-serif text-xl sm:text-2xl font-light tracking-wide">
                  Phoenix Legal
                </span>
                <span className=" text-[#c9a84c] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium mt-1">
                  Law Firm
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md text-xs leading-5 text-pl-white/65">
              {company.description}
            </p>

            {/* social */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                {socialLinks.slice(0, 4).map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-pl-white/15 bg-white/5 text-pl-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:bg-pl-gold/10 hover:text-pl-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                    >
                      <Icon className="text-base transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* golden divider */}
            <div className="h-px mt-5 w-20 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent sm:w-20" />
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-pl-gold sm:text-sm">
              Practice Areas
            </h3>
            <div>
              <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-3 sm:gap-x-5">
                {practices.slice().map((item) => (
                  <Link
                    key={item.title}
                    to={`/practices/${item.slug}`}
                    className="group flex items-center py-1 text-xs transition-all duration-300"
                  >
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-pl-gold sm:hidden" />

                    <span className="text-pl-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-pl-gold">
                      {item.title}
                    </span>

                    <span className="ml-5 translate-x-2 text-pl-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-pl-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs leading-6 text-pl-white/45">
            © {new Date().getFullYear()} Phoenix Legal. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-col items-center gap-3 text-center text-xs text-pl-white/65 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0 sm:text-sm">
            <Link
              to="/privacy-policy"
              className="group transition-all duration-300 hover:text-pl-gold sm:px-3 sm:first:pl-0"
            >
              <span className="relative inline-block">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-pl-gold transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            <span className="hidden h-4 w-px bg-pl-white/20 sm:block" />

            <p className="sm:px-3">
              Designed & Developed by{" "}
              <a
                href="https://github.com/nitish1445"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-semibold text-pl-white transition-all duration-300 hover:text-pl-gold"
              >
                Nitish Kumar.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
