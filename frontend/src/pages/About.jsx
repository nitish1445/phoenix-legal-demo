import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PartnersPreview from "../components/PartnersPreview.jsx";
import CTA from "../components/CTA.jsx";
import { timeline, values } from "../assets/data.js";
import { FaDownload, FaUpRightFromSquare } from "react-icons/fa6";
import firmProfile from "../assets/pdf/Firm-ProfileMay2026.pdf";

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Phoenix Legal"
        title="Trusted Advisors to Clients Across India."
        text="With offices in New Delhi and Mumbai, Phoenix Legal combines deep sector expertise, partner-led engagement, and commercially focused legal advice to help clients navigate complex business and regulatory challenges."
      />

      <section className="px-4 py-24 md:py-32">
        <div className="container-pl grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Overview"
              title="Quiet confidence. Exacting standards. Commercial outcomes."
              text="We advise boards, financial institutions, sponsors, founders, and global companies across transactions, disputes, investigations, governance, and regulatory strategy."
            />

            <div className="mb-5 flex flex-wrap items-center justify-start gap-3">
              <a
                href={firmProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-pl-border px-5 py-3 text-sm font-medium text-pl-text transition hover:border-pl-gold hover:text-pl-gold"
              >
                <FaUpRightFromSquare />
                Open PDF
              </a>

              <a
                href={firmProfile}
                download
                className="flex items-center gap-2  bg-pl-gold px-5 py-3 text-sm font-semibold text-pl-white transition hover:opacity-90"
              >
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="border border-pl-border bg-pl-white p-7">
              <h3 className="font-display text-3xl text-pl-walnut">
                Our Mission
              </h3>
              <p className="mt-3 leading-6 text-pl-muted">
                To provide strategic legal counsel that empowers businesses with
                clarity, confidence, and commercially sound solutions across
                every stage of growth.
              </p>
            </div>

            <div className="border border-pl-border bg-pl-white p-7">
              <h3 className="font-display text-3xl text-pl-walnut">
                Our Vision
              </h3>
              <p className="mt-3 leading-6 text-pl-muted">
                To set the benchmark for legal excellence by combining deep
                expertise, uncompromising integrity, and lasting partnerships
                with clients in India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pl-white px-4 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind the practice."
            align="center"
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-pl-border bg-pl-border md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value}
                className="bg-pl-white p-8 font-display text-3xl text-pl-text"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-2 pt-24 md:pt-32 md:pb-8">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Timeline"
            title="Built patiently. Trusted repeatedly."
            text="Over the years, Phoenix Legal has grown into one of India's leading full-service law firms through innovation, trust and enduring client relationships."
            align="start"
          />

          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Timeline */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-pl-gold/30 md:block" />

            <div className="space-y-8">
              {timeline.map((item) => (
                <article
                  key={item.year}
                  className="group relative grid gap-6 rounded-sm border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:shadow-xl md:grid-cols-[110px_1fr]"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 top-8 hidden h-4 w-4 rounded-full border-4 border-pl-bg bg-pl-gold md:block" />

                  {/* Year */}
                  <div>
                    <div className="inline-flex rounded-full border border-pl-gold/30 bg-pl-gold/10 px-4 py-2">
                      <span className="font-display text-2xl text-pl-gold">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Phoenix Legal
                    </p>

                    <h3 className="mt-3 font-display text-xl md:text-2xl leading-tight text-pl-text">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm md:text-base leading-5 md:leading-7 text-pl-muted">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersPreview limit={4} />
    </>
  );
}
