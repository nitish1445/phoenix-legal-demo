import { media } from "../assets/data.js";
import SectionHeading from "./SectionHeading.jsx";
import AnimatedButton from "./AnimatedButton.jsx";

export default function Publications({ title = "Latest thinking from the firm.", limit = 3 }) {
  const items = [...media.news, ...media.articles, ...media.updates].slice(0, limit);
  return (
    <section className="bg-pl-white px-2 py-24 md:py-32">
      <div className="container-pl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Media & Publications" title={title} text="Deal notes, legal updates, and boardroom briefings from Phoenix Legal partners and counsel." />
          <AnimatedButton to="/media" variant="light">View Media</AnimatedButton>
        </div>
        <div className="grid gap-px overflow-hidden border border-pl-border bg-pl-border md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="bg-pl-white p-7 transition hover:bg-pl-bg">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pl-dark-gold">{item.category}</p>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-pl-text">{item.title}</h3>
              <p className="mt-6 text-xs text-pl-muted">{item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
