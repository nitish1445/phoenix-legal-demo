import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CTA from "../components/CTA.jsx";
import { FiMail, FiMapPin } from "react-icons/fi";
import { address } from "framer-motion/client";

// {
//   heading: "...",

//   content: [],

//   points: [
//     {
//       text: "...",
//       children: [],
//       footer: [
//         {
//           title: null,
//           content: []
//         }
//       ]
//     },
//     {
//       text: "...",
//       children: []
//     }
//   ],

//   footer: [
//     {
//       title: null,
//       content: []
//     },
//     {
//       title: "...",
//       content: []
//     }
//   ]
// }

const privacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: null,

  sections: [
    {
      heading: "Introduction",
      content: [
        'Welcome to our website. This privacy policy is developed and published pursuant to inter-alia, the Information Technology Act, 2000 ("IT Act") and the rules made thereunder. In this policy, we will deal with:',
      ],
      points: [
        {
          text: "Type of personal information we collect.",
        },
        {
          text: "Purposes for which we collect and use such information.",
        },
        {
          text: "How we process, disclose and protect such information.",
        },
      ],
      footer: [],
    },
    {
      heading: "General",
      content: ["This policy applies to collection of information from:"],
      points: [
        { text: "Persons accessing our website;" },
        { text: "Clients and potential clients;" },
        {
          text: "Applicants interested in working with us, including interns;",
        },
        { text: "Our existing talent and employees." },
      ],
      footer: [
        {
          title: null,
          content: [
            "This policy does not govern collection and processing of information by us in the course of provision of our services, or otherwise by virtue of entering into any engagement or other contractual obligations. In such cases, the terms and conditions governing the provision of our services, engagement agreement or other contractual terms will be applicable.",
          ],
        },
      ],
    },
    {
      heading: "Collection",
      content: [],
      points: [
        {
          text: ' In terms of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("IT Rules"), "sensitive personal data or information" of a person means such personal information which consists of information relating to:',
          children: [
            "Password;",
            "Financial information such as bank account or credit card or debit card or other payment instrument details;",
            "Physical, physiological and mental health condition;",
            "Sexual orientation;",
            "Medical records and history;",
            "Biometric information;",
            "Any detail relating to the above classes as provided to a body corporate for providing service; and",
            "Any of the information received under any of the classes (a) to (g) above, by a body corporate for processing, stored or processed under lawful contract or otherwise.",
          ],
          footer: [
            "Further, any information that is freely available or accessible in the public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purposes of the IT Rules.",
            "In terms of other applicable data protection laws, personal data means any information relating to an identified or identifiable natural person.",
          ],
        },
        {
          text: " We may collect information from you of a nature, which may fall within any of the classes above. Common examples of such personal information include, but are not limited to:",
          children: [
            "Your full name, parents' names, temporary and permanent address, telephone numbers and email address;",
            "Age, date of birth and, in case you work with us, biometrics such as fingerprints;",
            "Previous employment details including previous job title, names of previous employers, your previous compensation and financial statements;",
            "Information and documents including prior correspondence with our firm;",
            "Financial information in relation to payments due and/or received;",
            "Details about when and how frequently you have accessed our website, your IP address and location.",
          ],
        },
        {
          text: " Acceptance",
          children: [
            "While we may collect some information under paragraphs 3(b)(i), (ii), (iii) and 3(b)(vi) above when you access our website, we may also collect other personal information from you, with your prior consent.",
            "You do hereby accept and consent to the collection, use, storage, processing and sharing or disclosure of your information as described in this Privacy Policy and in accordance with the applicable data protection laws.",
            "In the event any information collected from you contains information relating to third parties, you agree that you have collected such information in compliance with applicable law and are duly authorised to furnish it to us.",
            "Our firm reserves the right to, at its discretion, modify this policy at any time. This policy, as modified from time to time, will be available on our website. Please ensure that you visit our website to keep abreast of all such modifications. By further accessing our website or providing us with your information, you will be deemed to have accepted all such modifications.",
            "In the event of a change in the applicable law, your consent shall be deemed to be valid to the extent permissible under applicable law. To the extent required by any such change, we may seek additional consents and authorisations from you.",
          ],
        },
      ],
      footer: [],
    },
    {
      heading: "Purposes of Collection and Use of Information",
      content: [],
      points: [
        {
          text: "(a) The information you may share with us will be used, stored and processed in compliance with the IT Act, IT Rules and other applicable laws relating to data protection, for the above purposes of or in connection with:",
          children: [
            "Operating our website and improving its functioning, technical and other parameters to cater to a better user experience and to align it to the beliefs of our firm;",
            "Providing legal updates to you;",
            "Complying with applicable law;",
            "Processing applications received from you and responding to the same;",
            "Processing queries raised and received and responding to the same;",
            "Internal purposes such as creating and maintaining records;",
            "Providing information to auditors, accountants or otherwise pursuant to investigations or inquiries;",
            "Inviting you for seminars, webinars and workshops conducted by us, which we believe may be of interest to you; and",
            "Contacting you from time to time to record your valuable feedback on our website, as they currently stand, and/or any potential services that may be offered in the future.",
          ],
        },
        {
          text: "(b) In addition, we may share your information to third parties on a need-to-know basis only, in connection with or pursuant to provision by us of our services or your employment with us. Details regarding disclosures to third parties is dealt with in paragraph 5 below.",
        },
      ],
      footer: [],
    },
    {
      heading: "Disclosure of Information",
      content: [
        "We may disclose your information to third parties in the following cases, in accordance with the applicable data protection laws:",
      ],
      points: [
        {
          text: "Disclosure to third party service providers such as auditors, accountants, information technology service providers, our website developers and designers, insurers, bankers, researchers, business consultants and other professional advisors or service providers for providing inter-alia, data processing.",
        },
        {
          text: "Where there is a legal obligation to disclose such information to third parties, either under applicable law or order or judgment of a court of competent jurisdiction or pursuant to any other legal process.",
        },
        {
          text: "To protect the rights, interests and security of our firm, our property, our clients and those who work with us.",
        },
      ],
      footer: [
        {
          title: "Third Party Links",
          content: [
            "Our website also contains links to third parties' websites in respect of which we do not have any rights. You hereby agree that we are not responsible for the collection, use, processing and disclosure of any information by virtue of your accessing such links and websites.",
          ],
        },
        {
          title: "Social Media Handles",
          content: [
            "In case you provide us any personal information through inbox messages or posts (as applicable) on our social media pages (e.g. on LinkedIn), to the extent that such messages and posts containing the personal information are sent to our social media accounts, the personal information will be subject to this Privacy Policy and the applicable data protection laws.",
            "However, you hereby agree that given that our social media handles are on third party websites, we are not responsible for collection, use, processing and disclosure of any of your information by third parties (including the social media websites themselves, members of the public, etc.) by virtue of your accessing or providing information on such social media websites (whether or not to our social media page) or otherwise engaging in any other activities on such websites.",
          ],
        },
      ],
    },
    {
      heading: "Data Protection",
      content: [
        "We value the privacy of the personal information collected from you and endeavour to safeguard the same from unauthorised use, disclosure, alteration and destruction. In order to do so, we maintain appropriate managerial, technical, operational and physical security control measures in relation to our computer systems. We also ensure that if any disclosures are made or any access is provided to your personal information, it is on a need-to-know basis only to persons who maintain at least the same level of safeguards for data protection and who are subject to confidentiality obligations.",
        "In our endeavour to protect your personal information, where we find that your personal information is no longer required for any of the purposes (under paragraph 4 above) for which we collected it or otherwise it is not required to be retained pursuant to any applicable data protection law, we will not store it. However, you agree that we may store your personal information in electronic back up form, in which case such backups would be subject to appropriate safeguards (including technical and organisational).",
      ],
      points: [],
      footer: [],
    },
    {
      heading: "Disclaimer",
      content: [
        "Notwithstanding the above, you agree that we shall not be responsible for:",
      ],
      points: [
        {
          text: "Any unauthorised use, collection, processing or access to your personal information or breaches of security beyond our firm’s reasonable control; and",
        },
        {
          text: "Any liability arising in connection with disclosure by you of your personal information to third parties, whether by you accessing third party webpages or websites through our website, or in any other manner.",
        },
      ],
      footer: [],
    },
    {
      heading: "Your Rights of Access to Your Information with Us",
      content: [
        "You may exercise rights in relation to your personal information by requesting for:",
      ],
      points: [
        {
          text: "The personal information collected from you or in relation to you;",
        },
        {
          text: "Any modification or updation of any of your personal information;",
        },
        {
          text: "Withdrawal of your consent;",
        },
        {
          text: "Restriction on use or processing of your personal information in any manner or to any extent;",
        },
        {
          text: "Erasure of your personal information;",
        },
        {
          text: "Transmission of your personal data by us to another controller as specified by you, subject to the applicable data protection laws;",
        },
      ],
      footer: [
        {
          title: null,
          content: [
            "By writing to us at the contact details mentioned at paragraph 9 below.",
            "In addition to the above, you are also entitled to the right to lodge a complaint with a supervisory authority.",
            "We do not have any automated decision making or profiling in relation to your personal information.",
          ],
        },
      ],
    },
    {
      heading: "Contact Information",
      content: [
        "In case you have any questions pursuant to this privacy policy or if you have any complaints or pursuant to paragraph 8 above, if you have any requests, please write to us at:",
      ],
      points: [],
      footer: [],
      contact: [
        { email: ["bhavna.mundhe@phoenixlegal.in"] },
        {
          address: [
            "Vaswani Mansion, Office No. 17 & 18 3rd Floor",
            "120 Dinshaw Vachha Road, Churchgate",
            "Mumbai - 400 020",
          ],
        },
      ],
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Hero */}
      <PageBanner
        eyebrow="Legal Information"
        title={privacyPolicy.title}
        text="This Privacy Policy explains how Phoenix Legal collects, uses, stores and protects information obtained through this website."
        backTo="/"
        backLabel="Back to Home"
      />

      {/* Content */}
      <section className="px-2 py-24 md:py-32 bg-pl-white">
        <div className="container-pl">
          {/* Main */}
          <div>
            <SectionHeading
              eyebrow="Privacy"
              title="Protecting Your Information"
              text="Phoenix Legal is committed to maintaining the confidentiality, integrity and security of all personal information entrusted to us."
              align="start"
            />

            <div className="mt-16 space-y-12">
              {privacyPolicy.sections.map((section, index) => (
                <motion.section
                  key={section.heading}
                  id={`section-${index}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="px-2 md:px-12"
                >
                  {/* Heading */}
                  <div className="flex items-start gap-3">
                    <span className="font-display font-semibold text-3xl text-pl-gold">
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>

                    <div className="flex-1">
                      <h2 className="font-display leading-7 md:leading-tight text-2xl md:text-3xl text-pl-text">
                        {section.heading}
                      </h2>

                      <div className="mt-1 h-px w-24 bg-linear-to-r from-pl-gold via-pl-gold/40 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  {section.content?.length > 0 && (
                    <div className="mt-4 space-y-6 pl-0 md:pl-18">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm md:leading-6 text-pl-walnut md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Points */}
                  {section.points?.length > 0 && (
                    <ol
                      type="a"
                      className="mt-3 list-[lower-alpha] pl-6 md:pl-24"
                    >
                      {section.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="pl-2 marker:text-pl-dark-gold/80 text-[16px] mb-2 last:mb-0"
                        >
                          <p className="text-sm leading-4.5 md:leading-6 text-pl-text md:text-base">
                            {point.text}
                          </p>

                          {point.children?.length > 0 && (
                            <ol
                              type="i"
                              className="my-3 list-[lower-roman] space-y-2 pl-3 md:pl-8"
                            >
                              {point.children.map((child, childIndex) => (
                                <li
                                  key={childIndex}
                                  className="pl-2 marker:text-pl-dark-gold/60 text-sm"
                                >
                                  <p className="text-sm leading-4.5 md:leading-5.5 text-pl-walnut md:text-base">
                                    {child}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Footer */}
                  {section.footer?.length > 0 && (
                    <div className="mt-4 space-y-4 pl-0 md:pl-18">
                      {section.footer.map((item, i) => (
                        <div key={i}>
                          {item.title && (
                            <h4 className="mb-2 font-display font-semibold text-xl text-pl-text">
                              {item.title} :
                            </h4>
                          )}

                          <div className="space-y-2">
                            {item.content.map((line, j) => (
                              <p
                                key={j}
                                className="text-sm md:leading-6 text-pl-walnut md:text-base"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Contact */}
                  {section.contact?.length > 0 && (
                    <div className="mt-4 space-y-2 pl-0 md:pl-18">
                      {section.contact.map((item, index) => (
                        <div key={index}>
                          {item.email && (
                            <p className="text-sm leading-6 text-pl-walnut md:text-base">
                              <span className="font-semibold text-pl-text">
                                Mail To :
                              </span>{" "}
                              {item.email.map((mail, index) => (
                                <span key={mail}>
                                  <a
                                    href={`mailto:${mail}`}
                                    className="transition-colors duration-300 hover:text-pl-gold"
                                  >
                                    {mail}
                                  </a>
                                  {index < item.email.length - 1 && ", "}
                                </span>
                              ))}
                            </p>
                          )}

                          {item.address && (
                            <div className="mt-1">
                              <p className="text-sm font-semibold text-pl-text md:text-base">
                                Address :
                              </p>

                              <div className="mt-1 space-y-1">
                                {item.address.map((line, i) => (
                                  <p
                                    key={i}
                                    className="text-xs leading-4.5 md:leading-6 text-pl-walnut md:text-base"
                                  >
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
