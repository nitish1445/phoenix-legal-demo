import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { articlesUpdate } from "../assets/articlesUpdate.js";

export default function ArticlePreview({ limit = 2 }) {
  const items = articlesUpdate.slice(0, limit);

  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
  {items?.map((item, index) => {
    const author =
      item?.author ||
      item?.name ||
      item?.contributors?.map((person) => person?.name).join(", ") ||
      "Phoenix Legal";

    const date =
      item?.date ||
      item?.publishedAt ||
      "Recent Update";

    const heading =
      item?.title ||
      item?.heading ||
      "Untitled";

    const details =
      item?.details ||
      item?.description ||
      item?.summary ||
      "Read the latest legal insight from our team.";

    const link =
      item?.link ||
      item?.url ||
      "/articles-updates";

    const isExternal =
      link?.startsWith("http://") ||
      link?.startsWith("https://");

    return (
      <article
        key={`${heading}-${date}-${index}`}
        className="group flex h-full flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#143A6F]">
            {author}
          </p>

          <span className="shrink-0 text-xs text-pl-muted">
            {date}
          </span>
        </div>

        <div className="mt-2 h-px w-24 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent" />

        {/* Title */}
        <h2 className="mt-4 font-display text-2xl leading-6 text-pl-text transition-colors duration-300 md:text-3xl md:leading-tight">
          {heading}
        </h2>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm text-pl-muted md:text-base md:leading-7">
          {details}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-pl-border pt-5">
          <a
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group/link inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-pl-dark-gold transition-colors duration-300 hover:text-pl-gold"
          >
            Read More

            <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </article>
    );
  })}
</div>
  );
}
