import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { media } from "../assets/data.js";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const tabs = ["news", "articles", "updates", "videos"];

export default function Media() {
  const [params] = useSearchParams();
  const initial = tabs.includes(params.get("tab")) ? params.get("tab") : "news";
  const [active, setActive] = useState(initial);
  const [query, setQuery] = useState("");
  const categories = useMemo(
    () => ["All", ...new Set(media[active].map((item) => item.category))],
    [active],
  );
  const [category, setCategory] = useState("All");
  const items = media[active].filter((item) => {
    const matchQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "All" || item.category === category;
    return matchQuery && matchCategory;
  });

  // Paginations
  const totalPages = 50; // Your total pages
  const visiblePages = 2;

  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const nextPages = () => {
    if (endPage < totalPages) {
      setStartPage(startPage + visiblePages);
    }
  };

  const prevPages = () => {
    if (startPage > 1) {
      setStartPage(Math.max(1, startPage - visiblePages));
    }
  };

  return (
    <>
      <PageBanner
        eyebrow="Media & Publications"
        title="Legal intelligence for decision makers."
        text="News, articles, updates, and partner-led video briefings from Phoenix Legal."
      />
      <section className="px-4 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Insights"
            title="Current thinking, carefully argued."
          />
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActive(tab);
                    setCategory("All");
                  }}
                  className={`border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition ${active === tab ? "border-pl-gold bg-pl-gold text-pl-text" : "border-pl-border bg-pl-white text-pl-muted hover:border-pl-gold"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <label className="flex min-h-12 items-center gap-3 border border-pl-border bg-pl-white px-4 lg:w-80">
              <FiSearch className="text-pl-dark-gold" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search publications"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${category === item ? "border-pl-walnut bg-pl-walnut text-pl-white" : "border-pl-border bg-pl-white text-pl-muted hover:border-pl-gold"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-pl-border bg-pl-border md:grid-cols-3">
            {items.map((item) => (
              <article key={item.title} className="bg-pl-white p-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pl-dark-gold">
                  {item.category}
                </p>
                <h3 className="font-display text-3xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-6 text-sm text-pl-muted">{item.date}</p>
              </article>
            ))}
          </div>

          {/* <div className="mt-10 flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`grid h-11 w-11 place-items-center border text-sm ${page === 1 ? "border-pl-gold bg-pl-gold" : "border-pl-border bg-pl-white"}`}
              >
                {page}
              </button>
            ))}
          </div> */}

          <div className="mt-10 flex items-center justify-center">
            {startPage > 1 && (
              <button
                onClick={prevPages}
                className="grid h-11 w-11 place-items-center border border-pl-border bg-pl-white transition rounded-l-sm text-2xl hover:bg-pl-gold/50 cursor-pointer"
              >
                <MdKeyboardDoubleArrowLeft />
              </button>
            )}

            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i,
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`grid h-11 w-11 place-items-center border text-sm transition cursor-pointer ${
                  currentPage === page
                    ? "border-pl-gold bg-pl-gold text-pl-white"
                    : "border-pl-border bg-pl-white hover:bg-pl-white/10"
                }`}
              >
                {page}
              </button>
            ))}

            {endPage < totalPages && (
              <button
                onClick={nextPages}
                className="grid h-11 w-11 place-items-center border border-pl-border bg-pl-white transition rounded-r-sm text-2xl hover:bg-pl-gold/50 cursor-pointer"
              >
                <MdKeyboardDoubleArrowRight />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
