import React from "react";
import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { videos } from "../assets/news-vidoes.js";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Videos = () => {
  return (
    <>
      <div>
        <PageBanner
          eyebrow="Knowledge Centre"
          title="Videos & Thought Leadership"
          text="Explore our collection of expert talks, legal updates, webinars, and industry insights from Phoenix Legal."
        />
      </div>

      {/* Heading */}
      <section className="px-2 py-20 md:py-24">
        <div className="container-pl">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pl-dark-gold">
              Video Library
            </p>

            <h2 className="mt-3 font-display text-4xl md:leading-tight text-pl-text md:text-5xl">
              Insights Beyond the Written Word
            </h2>

            <div className="mt-1 h-px w-28 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent" />

            <p className="mt-2 max-w-3xl text-base leading-5 md:leading-8 text-pl-walnut md:text-lg">
              Explore expert discussions, legal perspectives, webinars,
              conference sessions, and industry commentary presented by the
              lawyers at Phoenix Legal. Our videos offer practical insights into
              emerging legal developments, regulatory changes, and matters
              shaping businesses across India and beyond.
            </p>

            <div className="flex items-center gap-10">
              <div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-pl-muted">
                  Featured Videos
                </p>
                <p className="font-display text-5xl text-pl-gold">
                  {videos.length}
                </p>
              </div>
              <div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-pl-muted">
                  Practical Insights
                </p>
                <p className="font-display text-5xl text-pl-gold">100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="scroll-mt-8 px-2 pb-24 md:pb-32">
        <div className="container-pl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((item) => {
              const videoId = new URL(item.link).searchParams.get("v");
              const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <article
                  key={item.heading}
                  className="group flex flex-col overflow-hidden border border-pl-border bg-pl-white transition-all duration-500 hover:-translate-y-1 hover:border-pl-gold hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  {/* Thumbnail */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block overflow-hidden"
                  >
                    <img
                      src={thumbnail}
                      alt={item.heading}
                      className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/35" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-pl-gold">
                        <svg
                          className="ml-1 h-6 w-6 fill-white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-pl-dark-gold">
                        {item.author}
                      </p>

                      <span className="shrink-0 text-xs text-pl-muted">
                        {item.date}
                      </span>
                    </div>

                    {/* Accent */}
                    <div className="mt-1 h-px w-20 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent" />

                    {/* Title */}
                    <h3 className="mt-3 font-display text-[1.3rem] leading-4.5 md:leading-6 text-pl-text transition-colors duration-300 group-hover:text-[#143A6F] md:text-[1.6rem]">
                      {item.heading}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 flex-1 text-sm text-pl-muted">
                      {item.details}
                    </p>

                    {/* Footer */}
                    <div className="mt-2 flex items-center justify-between border-t border-pl-border pt-2">
                      <Link
                        to={item.link}
                        target="_blank"
                        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pl-dark-gold transition-colors duration-300 group-hover:text-pl-gold! group-hover:scale-[1.02]"
                      >
                        Watch on YouTube
                      </Link>

                      <Link
                        to={item.link}
                        target="_blank"
                        className="text-lg text-pl-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-[1.2]"
                      >
                        <FiArrowUpRight className="text-xl" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;
