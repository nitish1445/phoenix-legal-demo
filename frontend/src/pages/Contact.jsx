import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PageBanner from "../components/PageBanner.jsx";
import AnimatedButton from "../components/AnimatedButton.jsx";
import toast from "react-hot-toast";
import { span } from "framer-motion/client";

export const subject = [
  "General Enquiry",
  "Practice Area Enquiry",
  "Business Association",
  "Marketing Initiative",
  "Media & Publications",
  "Events & Seminars",
  "Speaking Engagement",
  "Careers",
  "Pro Bono",
  "Other",
];

const offices = [
  {
    city: "Delhi Office",
    address: ["Phoenix House,", "254, Okhla Industrial Estate", "Phase III"],
    state: "New Delhi - 110 020",
    phone: "+91 11 4983 0000",
    email: "delhi@phoenixlegal.in",
    mapQuery:
      "Phoenix House 254 Okhla Industrial Estate Phase III New Delhi 110020",
  },
  {
    city: "Mumbai Office",
    address: [
      "Vaswani Mansion, Office No. 17 & 18, 3rd Floor,",
      "120 Dinshaw Vachha Road,",
      "Churchgate",
    ],
    state: "Mumbai - 400 020",
    phone: "+91 22 4340 8500",
    email: "mumbai@phoenixlegal.in",
    mapQuery:
      "Vaswani Mansion Office No 17 18 3rd Floor 120 Dinshaw Vachha Road Churchgate Mumbai 400020",
  },
];

const getGoogleMapsDirectionsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const getGoogleMapsEmbedUrl = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export default function Contact() {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  const phonePattern = /^[6-9]\d{9}$/;
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

  const formatPhone = (value) => {
    const cleaned = value.replace(/[\s().-]/g, "");

    if (cleaned.startsWith("+91")) {
      const digits = cleaned.slice(3).replace(/\D/g, "").slice(0, 10);
      return `+91${digits}`;
    }

    const digits = cleaned.replace(/\D/g, "").slice(0, 10);
    return digits;
  };

  const normalizePhone = (value) =>
    value.replace(/[\s().-]/g, "").replace(/^\+91/, "");

  const validate = (values) => {
    const nextErrors = {};

    if (!values.firstName.trim()) {
      nextErrors.firstName = "Please enter your first name.";
    } else if (!namePattern.test(values.firstName.trim())) {
      nextErrors.firstName = "Please enter a valid first name.";
    }

    if (!values.lastName.trim()) {
      nextErrors.lastName = "Please enter your last name.";
    } else if (!namePattern.test(values.lastName.trim())) {
      nextErrors.lastName = "Please enter a valid last name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const normalizedPhone = normalizePhone(values.phone.trim());

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(normalizedPhone)) {
      nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    } else if (!/^[6-9]/.test(normalizedPhone)) {
      nextErrors.phone = "Mobile number must start with 6 to 9 only.";
    } else if (!phonePattern.test(normalizedPhone)) {
      nextErrors.phone = "Please enter a valid Indian mobile number.";
    }

    if (!values.subject) {
      nextErrors.subject = "Please select a subject.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please share a brief message.";
    }

    if (!values.agree) {
      nextErrors.agree = "Please confirm this notice to continue.";
    }

    return nextErrors;
  };

  const currentErrors = validate(formData);
  const isFormValid = Object.keys(currentErrors).length === 0;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const nextValue =
      type === "checkbox"
        ? checked
        : name === "phone"
          ? formatPhone(value)
          : value;

    const updatedForm = {
      ...formData,
      [name]: nextValue,
    };

    setFormData(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    const updatedTouched = {
      ...touched,
      [name]: true,
    };

    setTouched(updatedTouched);

    setErrors(validate(formData));
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      agree: false,
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const submittedData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
      agree: form.agree.checked,
    };

    const nextErrors = validate(submittedData);

    setFormData(submittedData);
    setErrors(nextErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
      agree: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const cleanedData = {
        ...submittedData,
        firstName: submittedData.firstName.trim(),
        lastName: submittedData.lastName.trim(),
        email: submittedData.email.trim(),
        phone: submittedData.phone.trim()
          ? normalizePhone(submittedData.phone.trim())
          : "",
        subject: submittedData.subject.trim(),
        message: submittedData.message.trim(),
        preferredOffice: selectedOffice.city,
      };
      console.log(cleanedData);
      toast.success("Message sent successfully.");
      handleClear();
      setSubmitted(true);
    } catch (error) {
      toast.error("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <PageBanner
        eyebrow="Contact Us"
        title="Discuss your legal requirements."
        text="Reach out to Phoenix Legal for strategic legal advice across corporate, disputes, banking, infrastructure, regulatory, taxation, and other practice areas."
      />

      {/* Contact grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form — 3 cols */}

          <div className="lg:col-span-3">
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-pl-dark-gold">
                Send a Message
              </span>
              <h2 className="font-display text-3xl leading-tight text-pl-text md:text-5xl">
                Request a Consultation
              </h2>
            </div>

            {submitted ? (
              <div className="overflow-hidden border border-pl-border bg-pl-white luxury-shadow rounded-t">
                {/* Top Accent */}
                <div className="h-1 w-full bg-pl-gold" />

                <div className="flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-14 rounded">
                  {/* Success Icon */}
                  <BsCheckCircle className="text-6xl text-green-600 mb-6" />

                  {/* Eyebrow */}
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-pl-dark-gold">
                    Consultation Request Submitted
                  </p>

                  <h3 className="mt-4 font-display text-3xl leading-tight text-pl-text sm:text-4xl">
                    Message Received
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-pl-muted sm:text-base">
                    Thank you for contacting <strong>Phoenix Legal</strong>.
                    Your enquiry has been received successfully. A member of our
                    team will review your request and respond within one
                    business day.
                  </p>

                  {/* Divider */}
                  <div className="my-8 h-px w-24 bg-pl-gold/30" />

                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center border border-pl-gold bg-pl-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-pl-white transition-all duration-300 hover:bg-pl-dark-gold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onReset={handleClear}
                className="space-y-8"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(
                        touched.firstName && errors.firstName,
                      )}
                      className={`w-full bg-transparent border-b border-slate-300 py-3 px-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#c9a84c] transition-colors duration-300 ${
                        touched.firstName && errors.firstName
                          ? "border-red-500 focus:border-red-500"
                          : "border-pl-border"
                      }`}
                      placeholder="John"
                      required
                    />
                    {touched.firstName && errors.firstName ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.firstName}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(
                        touched.lastName && errors.lastName,
                      )}
                      className={`w-full bg-transparent border-b border-slate-300 py-3 px-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#c9a84c] transition-colors duration-300 ${
                        touched.lastName && errors.lastName
                          ? "border-red-500 focus:border-red-500"
                          : "border-pl-border"
                      }`}
                      placeholder="Doe"
                      required
                    />
                    {touched.lastName && errors.lastName ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.lastName}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      className={`w-full bg-transparent border-b border-slate-300 py-3 px-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#c9a84c] transition-colors duration-300 ${
                        touched.email && errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-pl-border"
                      }`}
                      placeholder="john@example.com"
                      required
                    />
                    {touched.email && errors.email ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      aria-invalid={Boolean(touched.phone && errors.phone)}
                      className={`w-full bg-transparent border-b border-slate-300 py-3 px-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#c9a84c] transition-colors duration-300 ${
                        touched.phone && errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-pl-border"
                      }`}
                      placeholder="+91 999 900 0000"
                      maxLength={13}
                    />
                    {touched.phone && errors.phone ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.subject && errors.subject)}
                    className={`w-full bg-transparent border-b border-slate-300 py-3 px-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#c9a84c] transition-colors duration-300 cursor-pointer ${
                      touched.subject && errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-pl-border"
                    }`}
                    required
                  >
                    <option value="">Select a subject...</option>
                    {subject.map((s) => (
                      <option key={s.title} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {touched.subject && errors.subject ? (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-pl-dark-gold">
                    Describe Your Matter *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    required
                    aria-invalid={Boolean(touched.message && errors.message)}
                    className={`w-full bg-transparent border-b border-slate-300 py-3 px-0 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#c9a84c] transition-colors duration-300 ${
                      touched.message && errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-pl-border"
                    }`}
                    placeholder="Please briefly describe your legal situation and what you're seeking help with..."
                  />
                  {touched.message && errors.message ? (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex gap-3 items-start">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    aria-invalid={Boolean(touched.agree && errors.agree)}
                    className="mt-1 cursor-pointer accent-[#c9a84c]"
                  />

                  <label
                    htmlFor="agree"
                    className="text-slate-500 text-xs leading-relaxed cursor-pointer"
                  >
                    I understand this does not create an attorney-client
                    relationship.
                  </label>
                </div>

                {Object.keys(errors).length > 0 &&
                Object.keys(touched).length > 0 ? (
                  <p className="text-xs text-red-600 leading-relaxed">
                    Please fix the highlighted fields before submitting.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="group flex w-full items-center justify-center border border-pl-gold bg-pl-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-pl-white transition-all duration-300 hover:bg-pl-dark-gold disabled:cursor-not-allowed disabled:border-pl-border disabled:bg-pl-border disabled:text-pl-muted cursor-pointer"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <span className="hidden md:block">
                        Submit Consultation Request
                      </span>
                      <span className="block md:hidden">Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Offices Info*/}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-pl-dark-gold">
                Our Offices
              </p>

              <div className="space-y-5">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="border-l-2 border-pl-gold pl-5 "
                  >
                    <div>
                      <h4 className="font-display text-2xl font-bold uppercase text-pl-text">
                        {office.city}
                      </h4>

                      <div className="mt-2 flex items-start gap-3">
                        <FaLocationDot className="mt-0.5 shrink-0 text-base text-pl-gold" />

                        <div>
                          <div className="text-sm leading-5 text-pl-muted">
                            {office.address.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>

                          <p className="mt-1 text-sm font-medium text-pl-text">
                            {office.state}
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`tel:${office.phone}`}
                      className="mt-2 flex items-center gap-3 text-sm font-medium text-pl-text transition hover:text-pl-gold"
                    >
                      <FaPhoneAlt className="shrink-0 text-sm text-pl-gold" />
                      <span>{office.phone}</span>
                    </a>

                    <a
                      href={`mailto:${office.email}`}
                      className="mt-2 flex items-center gap-3 text-sm text-pl-text transition hover:text-pl-gold"
                    >
                      <FaEnvelope className="shrink-0 text-sm text-pl-gold" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#faf8f3] p-7 border border-slate-200">
              <span className="section-label">Office Hours</span>
              <div className="space-y-2 mt-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "By Appointment" },
                  { day: "Sunday", hours: "Closed" },
                  { day: "Emergency Matters", hours: "24 / 7" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-xs">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="text-[#c9a84c] font-medium">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Zone */}

      <section className="relative overflow-hidden bg-pl-bg px-4 py-12 md:py-16">
        {/* Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(212,175,55,0.06) 60px, rgba(212,175,55,0.06) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(212,175,55,0.06) 60px, rgba(212,175,55,0.06) 61px)",
          }}
        />

        <div className="absolute -right-28 top-0 h-60 w-60 rounded-full bg-pl-gold/5 blur-3xl" />

        <div className="container-pl relative">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            {/* Left */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-pl-dark-gold">
                Find Us
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold sm:font-medium leading-tight text-pl-text sm:text-4xl md:text-5xl">
                Visit Our {selectedOffice.city}
              </h2>

              <div className="mt-6 border-l-2 border-pl-gold pl-5">
                <p className="text-sm leading-7 text-pl-muted sm:text-base">
                  {selectedOffice.address}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-pl-dark-gold">
                  {selectedOffice.state}
                </p>
              </div>

              {/* Office Buttons */}
              <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
                {offices.map((office) => (
                  <button
                    key={office.city}
                    onClick={() => setSelectedOffice(office)}
                    className={`px-3 py-2 text-[11px] cursor-pointer font-semibold uppercase tracking-[0.2em] transition-all duration-300 border ${
                      selectedOffice.city === office.city
                        ? "border-pl-gold bg-pl-gold text-pl-white"
                        : "border-pl-border bg-pl-white text-pl-text hover:border-pl-gold hover:text-pl-gold"
                    }`}
                  >
                    {office.city.replace(" Office", "")}
                  </button>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-pl-border bg-pl-white luxury-shadow w-full h-65 sm:h-75 md:h-95 rounded-lg shadow-sm">
              {" "}
              <iframe
                title={selectedOffice.city}
                src={getGoogleMapsEmbedUrl(selectedOffice.mapQuery)}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
