import { useEffect, useMemo, useRef, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { news } from "../assets/news-vidoes.js";
import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { FiSearch } from "react-icons/fi";

export default function News() {
  const sectionHeadingRef = useRef(null);
  const shouldScrollToHeadingRef = useRef(false);

  const [query, setQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const visiblePages = 2;

  // Responsive items per page
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Search
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.details.toLowerCase().includes(query.toLowerCase()) ||
        item.author.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query]);

  // Total pages
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Visible page numbers
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  // Current page news
  const currentNews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage, itemsPerPage]);

  // Reset when search or screen size changes
  useEffect(() => {
    setCurrentPage(1);
    setStartPage(1);
  }, [query, itemsPerPage]);

  // Scroll to heading only for user-triggered pagination changes.
  useEffect(() => {
    if (!shouldScrollToHeadingRef.current) {
      return;
    }

    if (!sectionHeadingRef.current) return;

    sectionHeadingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    shouldScrollToHeadingRef.current = false;
  }, [currentPage]);

  // Next group of page numbers
  const nextPages = () => {
    if (endPage < totalPages) {
      const newStart = startPage + visiblePages;
      shouldScrollToHeadingRef.current = true;
      setStartPage(newStart);
      setCurrentPage(newStart);
    }
  };

  // Previous group of page numbers
  const prevPages = () => {
    if (startPage > 1) {
      const newStart = Math.max(1, startPage - visiblePages);

      shouldScrollToHeadingRef.current = true;
      setStartPage(newStart);
      setCurrentPage(newStart);
    }
  };

  return (
    <>
      {/* Pagebanner */}
      <div>
        <PageBanner
          eyebrow="Media & Publications"
          title="Legal intelligence for decision makers."
          text="News, articles, updates, and partner-led video briefings from Phoenix Legal."
        />
      </div>

      {/* Heading */}
      <section
        ref={sectionHeadingRef}
        className="scroll-mt-8 px-2 pt-24 pb-12 md:pt-32 md:pb-16"
      >
        <div className="container-pl">
          <SectionHeading
            eyebrow="Newsroom"
            title="Latest News & Announcements"
            text="Stay informed with the latest firm updates, legal insights, recognitions, and important announcements from Phoenix Legal."
            align="start"
          />
        </div>
      </section>

      {/* news area  */}
      <section className="px-2 pb-24 pt-8 md:pb-32 md:pt-12">
        <div className="container-pl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {currentNews.map((item) => (
              <article key={item.title} className="group flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#143A6F]">
                    {item.author}
                  </p>

                  <span className="text-xs text-pl-muted">{item.date}</span>
                </div>

                <div className="mt-2 h-px w-24 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent" />

                <h2 className="mt-4 font-display text-3xl leading-8 md:leading-tight text-pl-text transition-colors duration-300">
                  {item.title}
                </h2>

                <p className="mt-4 flex-1 text-sm md:leading-7 text-pl-muted md:text-base">
                  {item.details}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-pl-border pt-5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-pl-dark-gold transition group-hover:text-pl-gold!"
                  >
                    Read More
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
                  onClick={() => {
                    if (page !== currentPage) {
                      shouldScrollToHeadingRef.current = true;
                    }
                    setCurrentPage(page);
                  }}
                  className={`grid h-11 w-11 place-items-center border text-sm transition cursor-pointer ${
                    currentPage === page
                      ? "border-pl-gold bg-pl-gold text-pl-white"
                      : "border-pl-border bg-pl-white hover:bg-pl-gold/10"
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
          )}
        </div>
      </section>
    </>
  );
}
