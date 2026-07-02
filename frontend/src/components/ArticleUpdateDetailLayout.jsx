import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  startOptimizedAppearAnimation,
  useScroll,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const formatMonthYear = (dateString) => {
  if (!dateString) return "";
  const [day, month, year] = dateString.split("-");
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const toPadded = (n) => String(n).padStart(2, "0");

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-[#B8935F] z-50 hidden lg:block"
    />
  );
}

function PublicationInfo({ article, articlesCount }) {
  const formattedDate = article.date
    ? (() => {
        const [day, month, year] = article.date.split("-");
        return new Date(year, month - 1, day).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });
      })()
    : "";

  const items = [
    { label: "Publication Date", value: formattedDate },
    {
      label: "Contributors",
      value: article.contributors?.map((c) => c.name).join(" & "),
    },
    {
      label: "Articles",
      value: toPadded(articlesCount),
    },
  ].filter((item) => item.value);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto max-w-225 px-6 pb-10 pt-14 md:px-10 md:pb-14 md:pt-20"
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-pl-border py-8 md:grid-cols-4 md:py-10">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`${
              index !== 0 ? "md:border-l md:border-pl-border md:pl-6" : ""
            }`}
          >
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-pl-dark-gold md:text-[11px]">
              {item.label}
            </p>

            <p className="font-serif text-[15px] leading-snug text-pl-text md:text-[16px]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ArticleSection({ heading, content, index }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={1}
      className="py-10 md:py-14"
    >
      <h3 className="mb-6 font-serif text-lg leading-tight font-semibold tracking-[0.04rem] text-pl-walnut md:text-[22px] md:tracking-[0.07rem]">
        {heading}
      </h3>

      <div className="space-y-4 md:space-y-5">
        {content.map((para, i) => (
          <p
            key={i}
            className="font-serif text-[15px] leading-normal text-pl-text md:text-[18.5px] md:leading-[1.75]"
          >
            {para}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

function ContributorCard({ contributor, partner, index }) {
  const display = {
    name: partner?.name || contributor.name,
    designation: partner?.designation,
    city: partner?.city,
    email: partner?.email,
    image: partner?.image,
    slug: partner?.slug,
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      className="flex items-start gap-5 py-4 md:items-center"
    >
      {display.image ? (
        <Link to={`/partners/${display.slug}`}>
          <img
            src={display.image}
            alt={display.name}
            className="h-24 w-24 shrink-0 rounded-full border-2 border-pl-gold object-cover md:h-32 md:w-32 hover:scale-101"
          />
        </Link>
      ) : (
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-pl-border bg-pl-bg md:h-32 md:w-32 hover:scale-101">
          <span className="font-serif text-xl text-pl-gold">
            {display.name?.charAt(0)}
          </span>
        </div>
      )}

      <div>
        {display.slug ? (
          <Link
            to={`/partners/${display.slug}`}
            className="font-serif text-2xl text-pl-text! transition-colors duration-300 hover:text-pl-gold! md:text-3xl"
          >
            {display.name}
          </Link>
        ) : (
          <p className="font-serif text-2xl text-pl-text md:text-3xl">
            {display.name}
          </p>
        )}

        {display.designation && (
          <p className="text-[13px] tracking-wide text-pl-walnut md:text-[14px]">
            {display.designation}
          </p>
        )}

        {display.city && (
          <p className="text-[13px] tracking-wide text-pl-walnut md:text-[14px]">
            {display.city}
          </p>
        )}

        {display.email && (
          <a
            href={`mailto:${display.email}`}
            className="text-[13px] text-pl-walnut transition-colors duration-300 hover:text-pl-gold! md:text-[14px]"
          >
            {display.email}
          </a>
        )}
      </div>
    </motion.div>
  );
}

function Disclaimer() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto px-4 py-14 md:px-32 md:py-18"
    >
      <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-pl-dark-gold">
        Disclaimer :
      </p>

      <p className="text-xs leading-[1.4] text-pl-muted md:text-sm">
        The information contained in this document is intended for general
        information and does not constitute legal advice. Readers are advised to
        seek specific legal advice on any matters discussed above. The views
        expressed in this document are personal.
      </p>
    </motion.div>
  );
}

function RelatedPublications({ related }) {
  if (!related?.length) return null;

  return (
    <div className="bg-pl-bg py-16 md:py-24">
      <div className="mx-auto px-4 md:px-32">
        <SectionHeading
          eyebrow="Further Reading"
          title="Related Publications"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {related.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="group"
            >
              <Link
                to={`/articles-updates/${item.slug}`}
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#143A6F]">
                  {item.date
                    ? new Date(formatMonthYear(item.date)).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          year: "numeric",
                        },
                      )
                    : ""}
                </p>

                <h4 className="font-serif text-[19px] leading-snug text-pl-text transition-colors duration-300 group-hover:text-pl-gold md:text-[21px]">
                  {item.title}
                </h4>

                <div className="mt-4 h-px w-8 bg-pl-gold transition-all duration-300 group-hover:w-14" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ArticleUpdateDetailLayout({
  article,
  partners = [],
  relatedArticles = [],
}) {
  if (!article) return null;

  const resolvedContributors = article.contributors?.map((c) => ({
    contributor: c,
    partner: partners.find((p) => p.slug === c.contributorSlug),
  }));

  return (
    <div className="bg-pl-white">
      <ReadingProgress />

      <PageBanner
        eyebrow="Publication"
        title="Monthly Competition"
        text={
          <>
            {article.description}
            <br />
            <span className="mt-2 inline-block text-pl-gold">
              {article.articles.length} Legal Updates • {article.date}
            </span>
          </>
        }
        backLabel="Back to Articles"
        backTo="/articles-updates"
      />

      <main className="mx-auto  px-4 md:px-36">
        <div className="pt-10 md:pt-14">
          <h2 className="mt font-serif text-2xl leading-tight text-pl-text md:text-3xl font-normal">
            {article.title}
          </h2>

          <div className="mt-2 h-0.75 w-48 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent" />
        </div>
        <div className="divide-y divide-pl-border">
          {article.articles?.map((a, i) => (
            <ArticleSection
              key={i}
              heading={a.heading}
              content={a.content}
              index={i}
            />
          ))}
        </div>
      </main>

      {resolvedContributors?.length > 0 && (
        <div className="mx-auto px-4 pt-4 md:px-36 md:pt-8">
          <SectionHeading title="Contributors :" />

          <div
            className={`mt-6 ${
              resolvedContributors.length > 1
                ? "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:px-24 xl:px-40"
                : "max-w-4xl lg:px-60"
            }`}
          >
            {resolvedContributors.map((rc, i) => (
              <ContributorCard
                key={rc.contributor.contributorSlug || rc.contributor.name}
                contributor={rc.contributor}
                partner={rc.partner}
                index={i}
              />
            ))}
          </div>
        </div>
      )}

      <Disclaimer />

      <RelatedPublications related={relatedArticles} />
    </div>
  );
}
