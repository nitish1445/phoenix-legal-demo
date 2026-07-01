import { FiCheckCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";

const reasons = [
  "High Degree of Partner Involvement and Availability.",
  "High Quality Legal Advice.",
  "Availability and Responsiveness.",
  "Legal Research and Analysis Based Advisory.",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-pl-white px-2 py-24 md:py-32">
      <div className="container-pl grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Why Phoenix Legal"
          title="Clear judgment when the stakes are highest."
          text="The firm is structured for senior involvement, fast synthesis, and advice that helps clients make confident decisions under pressure."
        />
        <div className="grid gap-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex gap-4 border border-pl-border bg-pl-bg p-3"
            >
              <FiCheckCircle className="mt-1 shrink-0 text-pl-dark-gold" />
              <p className="text-sm lg:text-lg sm:text-base text-pl-text">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
