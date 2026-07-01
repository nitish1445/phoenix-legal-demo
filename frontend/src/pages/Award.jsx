import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CTA from "../components/CTA.jsx";
import { awards, legacyAwards } from "../assets/awardData.js";
import awardBanner from "../assets/images/award.png";

export default function Awards() {
  return (
    <>
      <PageBanner
        eyebrow="Recognition"
        title="Recognition earned through excellence."
        text="Phoenix Legal is consistently recognised by leading legal directories and industry publications for excellence in corporate law, dispute resolution, banking, infrastructure, and cross-border transactions."
        imagePosition="top"
      />

      {/* Overview */}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Overview"
            title="Recognition reflects the trust placed in our lawyers."
            text="Independent legal directories and industry publications have recognised Phoenix Legal for delivering commercially focused legal advice, exceptional client service, and consistently high professional standards."
          />

          <div className="grid gap-5">
            <div className="border border-pl-border bg-pl-white p-8">
              <p className="font-display text-6xl text-pl-gold">39+</p>
              <h3 className="mt-4 font-display text-3xl text-pl-text">
                National & International Recognitions
              </h3>

              <p className="mt-3 leading-7 text-pl-muted">
                Our lawyers and practice groups are regularly recognised by
                respected legal publications and independent ranking
                organisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Award */}
      <img
        src={awardBanner}
        alt="Phoenix Legal Awards"
        className="h-full w-full object-cover object-top"
      />

      {/* All Awards */}
      <section className="bg-pl-white px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Featured Recognition"
            title="Awards that reflect consistent legal excellence."
            align="center"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {awards.map((award) => (
              <article
                key={`${award.year}-${award.title}`}
                className="group overflow-hidden border border-pl-border bg-pl-white transition-all duration-500 hover:-translate-y-2 hover:border-pl-gold luxury-shadow"
              >
                {/* Award Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.brand}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute right-2 top-2 inline-flex items-center gap-2 border border-white/20 bg-pl-gold/65 px-4 py-1.5 shadow-xl backdrop-blur-lg">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-pl-white">
                      {award.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.09em] text-pl-dark-gold">
                    {award.brand}
                  </p>

                  <h3 className="mt-3 font-display text-xl leading-4.5 text-pl-text">
                    {award.title}
                  </h3>

                  <p className="mt-4 text-sm leading-5 text-pl-muted">
                    {award.description}

                    {award.link && (
                      <>
                        {" "}
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-pl-gold! transition-colors duration-300 hover:text-pl-dark-gold!"
                        >
                          Read more →
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Awards */}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Legacy Recognition"
            title="A legacy of legal excellence since our inception."
            text="Over the years, Phoenix Legal has consistently been recognised by the firm since its inception in 2008, include:"
            align="start"
          />

          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Timeline */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-pl-gold/30 md:block" />

            <div className="space-y-8">
              {legacyAwards.map((award) => (
                <article
                  key={`${award.year}-${award.title}`}
                  className="group relative grid gap-6 rounded-sm border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:shadow-xl md:grid-cols-[110px_1fr]"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-8.25 top-8 hidden h-4 w-4 rounded-full border-4 border-pl-bg bg-pl-gold md:block" />

                  {/* Year */}
                  <div>
                    <div className="inline-flex rounded-full border border-pl-gold/30 bg-pl-gold/10 px-4 py-2">
                      <span className="font-display text-2xl text-pl-gold">
                        {award.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pl-dark-gold">
                      {award.organization}
                    </p>

                    {award.achievement && (
                      <div className="mt-4">
                        <span
                          className={`inline-block border-l-4 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] ${
                            award.achievement === "Winner in the Category"
                              ? "border-[#173B73] bg-[#173B73]/6 text-[#173B73]"
                              : award.achievement === "Award Winner"
                                ? "border-[#2556A6] bg-[#2556A6]/6 text-[#2556A6]"
                                : award.achievement === "Deal of the Year"
                                  ? "border-pl-gold bg-pl-gold/10 text-pl-dark-gold"
                                  : "border-[#2C6B5A] bg-[#2C6B5A]/8 text-[#2C6B5A]"
                          }`}
                        >
                          {award.achievement}
                        </span>
                      </div>
                    )}

                    <h3 className="mt-3 font-display text-xl md:text-2xl leading-4.5 text-pl-text">
                      {award.title}
                    </h3>

                    <p className="mt-4 text-sm md:text-base leading-4.5 md:leading-6 text-pl-muted">
                      {award.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-pl-white px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="By The Numbers"
            title="A record built on trust and performance."
            align="center"
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-pl-border bg-pl-border md:grid-cols-4">
            {[
              {
                value: "39+",
                label: "Industry Awards",
              },
              {
                value: "50+",
                label: "Recognised Lawyers",
              },
              {
                value: "31+",
                label: "Ranked Practice Areas",
              },
              {
                value: "100+",
                label: "Published Legal Insights",
              },
            ].map((item) => (
              <div key={item.label} className="bg-pl-white p-8 text-center">
                <p className="font-display text-6xl text-pl-gold">
                  {item.value}
                </p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-pl-text">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Engage The Firm"
        text="Speak with Phoenix Legal about transactions, disputes, investigations, governance, or strategic advisory mandates."
        buttonText="Start a Conversation"
      />
    </>
  );
}
