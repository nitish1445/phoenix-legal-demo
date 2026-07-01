import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FiX, FiChevronDown } from "react-icons/fi";
import { navigation } from "../assets/data.js";
import logo from "../assets/icons/logo.png";

function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="Phoenix Legal" className="h-12 w-auto" />
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-2xl font-semibold tracking-wide">
            Phoenix
          </span>
          <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-pl-gold">
            Legal
          </span>
        </span>
      )}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((current) => (current === label ? null : label));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-pl-bg/90 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div
        className={`container-pl flex h-20 items-center justify-between ${scrolled ? "text-pl-text" : "text-pl-white"}`}
      >
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const isParentActive =
              item.children &&
              item.children.some((child) => location.pathname === child.path);

            return (
              <div key={item.label} className="group relative">
                {item.children ? (
                  <button
                    type="button"
                    className={`nav-underline relative flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer ${
                      isParentActive ? "active text-current" : ""
                    }`}
                  >
                    {item.label}

                    <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `nav-underline relative flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                        isActive ? "active text-pl-gold" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {item.children && (
                  <div
                    className={`invisible absolute left-0 top-full z-50 mt-5 w-64 overflow-hidden rounded-md p-3 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:visible group-hover:mt-3 group-hover:opacity-100 ${
                      scrolled
                        ? "border border-pl-border bg-pl-white"
                        : "border border-white/10 bg-black/60 backdrop-blur-2xl"
                    }`}
                  >
                    <div className="space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          className={({ isActive }) =>
                            `flex items-center justify-between rounded-md px-4 py-3 text-[13px] font-medium transition-all duration-300 ${
                              isActive
                                ? "bg-pl-gold text-pl-white shadow-sm"
                                : scrolled
                                  ? "text-pl-muted hover:bg-[#FCF6E8] hover:text-pl-walnut"
                                  : "text-white/85 hover:bg-white/10 hover:text-pl-gold"
                            }`
                          }
                        >
                          <span>{child.label}</span>

                          <HiOutlineArrowUpRight className="text-sm opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Hamburger Animation */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="group relative flex h-11 w-11 items-center justify-center lg:hidden"
        >
          {/* Top */}
          <span
            className={`absolute h-0.5 w-7 rounded-full transition-all duration-300 ease-in-out ${
              scrolled ? "bg-pl-text" : "bg-pl-white"
            } ${open ? "rotate-45" : "-translate-y-2"}`}
          />

          {/* Middle */}
          <span
            className={`absolute h-0.5 w-7 rounded-full transition-all duration-200 ${
              scrolled ? "bg-pl-text" : "bg-pl-white"
            } ${open ? "scale-x-0 opacity-0" : "opacity-100"}`}
          />

          {/* Bottom */}
          <span
            className={`absolute h-0.5 w-7 rounded-full transition-all duration-300 ease-in-out ${
              scrolled ? "bg-pl-text" : "bg-pl-white"
            } ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* Mobile ANvigations */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative overflow-hidden border-t lg:hidden ${
              scrolled
                ? "border-pl-border bg-pl-bg shadow-xl"
                : "border-white/10 bg-black/55 backdrop-blur-2xl"
            }`}
          >
            {!scrolled && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute left-[12%] top-24 h-28 w-28 rounded-full border border-pl-gold/40" />
                <div className="absolute bottom-10 right-[16%] h-44 w-44 rounded-full border border-pl-light-gold/30" />
              </div>
            )}

            <div className="relative z-10 px-6 py-5">
              {/* Navigation */}

              <div className="space-y-1">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.label} className="py-3">
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`flex w-full items-center gap-3 text-[13px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-pl-gold ${
                          scrolled ? "text-pl-walnut" : "text-pl-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MdOutlineKeyboardArrowRight className="text-lg text-pl-gold transition-transform duration-300 group-hover:translate-x-1" />
                          {item.label}
                        </span>

                        <FiChevronDown
                          className={`text-pl-gold text-lg transition-transform duration-300 ${
                            mobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileDropdown === item.label
                            ? "max-h-96 opacity-100 pt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-9 flex flex-col gap-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-3 text-sm transition-all duration-300 hover:text-pl-gold ${
                                scrolled ? "text-pl-walnut!" : "text-white!"
                              }`}
                            >
                              <span className="text-pl-gold font-semibold">
                                →
                              </span>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2 py-3 text-[13px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-pl-gold ${
                        scrolled ? "text-pl-walnut!" : "text-white!"
                      }`}
                    >
                      <MdOutlineKeyboardArrowRight className="text-lg text-pl-gold transition-transform duration-300 group-hover:translate-x-1" />
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
