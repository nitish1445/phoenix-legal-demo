import { useMemo, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaBalanceScale,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaClipboardCheck,
  FaFileAlt,
  FaGavel,
  FaHandshake,
  FaLightbulb,
  FaPenNib,
  FaRegCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import PageBanner from "./PageBanner.jsx";
import SectionHeading from "./SectionHeading.jsx";
import CTA from "./CTA.jsx";
import applyLogo from "../assets/icons/logo.png";

const iconMap = {
  research: FaBalanceScale,
  drafting: FaPenNib,
  mentorship: FaUsers,
  matters: FaBriefcase,
  conduct: FaRegCheckCircle,
  communication: FaHandshake,
  partners: FaBuilding,
  practice: FaGavel,
  collaboration: FaUsers,
  development: FaLightbulb,
  clients: FaFileAlt,
  growth: FaChartLine,
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const createInitialState = (fields) =>
  fields.reduce((values, field) => ({ ...values, [field.name]: "" }), {});

export default function CareerDetailLayout({ programme }) {
  const [formData, setFormData] = useState(() =>
    createInitialState(programme.form.fields),
  );
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values) => {
    const nextErrors = {};

    programme.form.fields.forEach((field) => {
      const value = values[field.name];

      if (field.required && field.type === "file" && !value) {
        nextErrors[field.name] = "Please upload your resume.";
        return;
      }

      if (
        field.required &&
        field.type === "select" &&
        (!value || !value.trim())
      ) {
        nextErrors[field.name] = `Please select ${field.label
          .replace(" *", "")
          .toLowerCase()}.`;
        return;
      }

      if (field.required && typeof value === "string" && !value.trim()) {
        nextErrors[field.name] = `Please enter ${field.label
          .replace(" *", "")
          .toLowerCase()}.`;
        return;
      }

      if (
        field.type === "email" &&
        value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        nextErrors[field.name] = "Please enter a valid email address.";
      }
    });

    return nextErrors;
  };

  const currentErrors = useMemo(
    () => validate(formData),
    [formData, programme.form.fields],
  );
  const isFormValid = Object.keys(currentErrors).length === 0;

  const handleChange = (event) => {
    const { name, type, value, files } = event.target;

    const nextValue = type === "file" ? files?.[0]?.name || "" : value;

    const updatedForm = {
      ...formData,
      [name]: nextValue,
    };

    setFormData(updatedForm);

    if (touched[name]) {
      setErrors(validate(updatedForm));
    }
  };

  const handleBlur = (event) => {
    const updatedTouched = { ...touched, [event.target.name]: true };

    setTouched(updatedTouched);
    setErrors(validate(formData));
  };

  const handleClear = () => {
    setFormData(createInitialState(programme.form.fields));
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(formData);
    const nextTouched = programme.form.fields.reduce(
      (values, field) => ({ ...values, [field.name]: true }),
      {},
    );

    setErrors(nextErrors);
    setTouched(nextTouched);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      console.log({ programme: programme.slug, ...formData });
      toast.success("Application submitted successfully.");
      handleClear();
      setSubmitted(true);
    } catch (error) {
      toast.error("Unable to submit your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <PageBanner
        eyebrow={programme.banner.eyebrow}
        title={programme.banner.title}
        text={programme.banner.text}
        backTo="/careers"
        backLabel="Back to Careers"
      />

      {/* Overview */}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <SectionHeading
            eyebrow={programme.overview.eyebrow}
            title={programme.overview.title}
            text={programme.overview.text}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {programme.overview.cards.map((card) => (
              <motion.article
                key={card.label}
                variants={fadeUp}
                className="border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:shadow-xl"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pl-dark-gold">
                  {card.label}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight text-pl-text">
                  {card.value}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-pl-white px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Programme Highlights"
            title="Designed for practical exposure and professional growth."
            align="center"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {programme.highlights.map((highlight) => {
              const Icon = iconMap[highlight.icon] || FaClipboardCheck;

              return (
                <motion.article
                  key={highlight.title}
                  variants={fadeUp}
                  className="group border border-pl-border bg-pl-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-pl-gold luxury-shadow"
                >
                  <div className="mb-8 text-2xl grid h-12 w-12 place-items-center border rounded-full border-pl-gold/40 text-pl-dark-gold transition group-hover:bg-pl-gold group-hover:text-pl-text group-hover:scale-110">
                    <Icon />
                  </div>

                  <h3 className="mt-6 font-display text-2xl leading-tight text-pl-text">
                    {highlight.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-pl-muted">
                    {highlight.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who should apply."
            text="Applications are reviewed for preparation, clarity, professional intent and alignment with the programme."
            align="center"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-4 md:grid-cols-2"
          >
            {programme.eligibility.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 border border-pl-border bg-pl-white p-5 transition-all duration-300 hover:border-pl-gold"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-pl-gold" />
                <p className="text-sm leading-6 text-pl-walnut md:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-pl-white px-2 py-24 md:py-32">
        <div className="container-pl">
          <SectionHeading
            eyebrow="Application Process"
            title="A considered, transparent application journey."
            align="start"
          />

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-pl-gold/30 md:block" />

            <div className="space-y-8">
              {programme.process.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative grid gap-6 rounded-sm border border-pl-border bg-pl-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pl-gold hover:shadow-xl md:grid-cols-[110px_1fr]"
                >
                  <div className="absolute -left-8 top-8 hidden h-4 w-4 rounded-full border-4 border-pl-bg bg-pl-gold md:block" />

                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-pl-gold/30 bg-pl-gold/10 shadow-sm transition-all duration-300 group-hover:border-pl-gold group-hover:bg-pl-gold/15">
                      <span className="font-display text-2xl text-pl-gold">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Phoenix Legal
                    </p>

                    <h3 className="mt-3 font-display text-xl leading-tight text-pl-text md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-5 text-pl-muted md:text-base md:leading-7">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form  */}
      <section className="px-2 py-24 md:py-32">
        <div className="container-pl">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-pl-dark-gold">
                {programme.form.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl leading-tight text-pl-text md:text-5xl">
                {programme.form.title}
              </h2>
            </div>

            {submitted ? (
              <div className="overflow-hidden rounded-t border border-pl-border bg-pl-white luxury-shadow">
                <div className="h-1 w-full bg-pl-gold" />

                <div className="flex flex-col items-center rounded px-6 py-12 text-center sm:px-10 sm:py-14">
                  <BsCheckCircle className="mb-6 text-6xl text-green-600" />

                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-pl-dark-gold">
                    {programme.form.successEyebrow}
                  </p>

                  <h3 className="mt-4 font-display text-3xl leading-tight text-pl-text sm:text-4xl">
                    {programme.form.successTitle}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm sm:leading-7 text-pl-muted sm:text-base">
                    {programme.form.successText}
                  </p>

                  <div className="my-8 h-px w-24 bg-pl-gold/30" />

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex cursor-pointer items-center justify-center border border-pl-gold bg-pl-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-pl-white transition-all duration-300 hover:bg-pl-dark-gold"
                  >
                    Return to Careers
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onReset={handleClear}
                className="relative overflow-hidden border border-pl-border bg-pl-white p-6 luxury-shadow sm:p-8 md:p-10"
                noValidate
              >
                {/* Watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <img
                    src={applyLogo}
                    alt=""
                    aria-hidden="true"
                    className="h-[70%] w-[70%] max-h-168 max-w-2xl select-none object-contain opacity-[0.06] md:opacity-[0.02]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {programme.form.fields.map((field) => (
                    <div
                      key={field.name}
                      className={field.type === "file" ? "sm:col-span-2" : ""}
                    >
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                        {field.label}
                      </label>

                      {field.type === "file" ? (
                        <label
                          className={`flex cursor-pointer flex-col gap-2 border border-dashed p-6 transition-all duration-300 hover:border-pl-gold ${
                            touched[field.name] && errors[field.name]
                              ? "border-red-500"
                              : "border-pl-border"
                          }`}
                        >
                          <input
                            type="file"
                            name={field.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="sr-only"
                            accept=".pdf"
                            required={field.required}
                          />

                          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pl-text">
                            {formData[field.name] || "Choose resume file"}
                          </span>

                          <span className="text-xs leading-5 text-pl-muted">
                            Only PDF formats are preferred.
                          </span>
                        </label>
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={field.required}
                          aria-invalid={Boolean(
                            touched[field.name] && errors[field.name],
                          )}
                          className={`w-full border-b bg-transparent px-0 py-3 text-sm text-pl-text transition-colors duration-300 cursor-pointer focus:border-pl-gold focus:outline-none ${
                            touched[field.name] && errors[field.name]
                              ? "border-red-500 focus:border-red-500"
                              : "border-pl-border"
                          }`}
                        >
                          <option value="">{field.placeholder}</option>

                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(
                            touched[field.name] && errors[field.name],
                          )}
                          className={`w-full border-b bg-transparent px-0 py-3 text-sm text-pl-text placeholder-pl-muted/70 transition-colors duration-300 focus:border-pl-gold focus:outline-none ${
                            touched[field.name] && errors[field.name]
                              ? "border-red-500 focus:border-red-500"
                              : "border-pl-border"
                          }`}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      )}

                      {touched[field.name] && errors[field.name] ? (
                        <p className="mt-2 text-xs text-red-600">
                          {errors[field.name]}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                {Object.keys(errors).length > 0 &&
                Object.keys(touched).length > 0 ? (
                  <p className="mt-6 text-xs leading-relaxed text-red-600">
                    Please fix the highlighted fields before submitting.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="group mt-8 flex w-full cursor-pointer items-center justify-center border border-pl-gold bg-pl-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-pl-white transition-all duration-300 hover:bg-pl-dark-gold disabled:cursor-not-allowed disabled:border-pl-border disabled:bg-pl-border disabled:text-pl-muted"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
