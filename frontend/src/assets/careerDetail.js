export const careerDetails = {
  internship: {
    slug: "internship",
    banner: {
      eyebrow: "Internship Programme",
      title: "Legal Internship Programme",
      text: "Gain practical exposure to corporate legal practice through partner-led mentorship, legal research, drafting and live commercial matters.",
    },
    overview: {
      eyebrow: "Programme Overview",
      title: "A structured introduction to commercial legal practice.",
      text: "Phoenix Legal offers law students a structured internship designed to provide practical exposure to corporate legal practice. Interns work closely with partners and associates while developing research, drafting, analytical and professional skills.",
      cards: [
        { label: "Duration", value: "4 Weeks" },
        { label: "Offices", value: "New Delhi & Mumbai" },
        { label: "Eligibility", value: "Law Students" },
        { label: "Programme Type", value: "Structured Internship" },
      ],
    },
    highlights: [
      {
        icon: "research",
        title: "Legal Research",
        description:
          "Develop precise research habits across corporate, regulatory and commercial legal questions.",
      },
      {
        icon: "drafting",
        title: "Drafting Exposure",
        description:
          "Work on legal notes, transaction support and drafting tasks guided by experienced lawyers.",
      },
      {
        icon: "mentorship",
        title: "Partner-Led Mentorship",
        description:
          "Learn through close interaction with partners and associates across active matters.",
      },
      {
        icon: "matters",
        title: "Live Matter Exposure",
        description:
          "Gain practical context by observing how commercial legal advice is developed and delivered.",
      },
      {
        icon: "conduct",
        title: "Professional Conduct",
        description:
          "Understand workplace expectations, client sensitivity and the discipline of legal practice.",
      },
      {
        icon: "communication",
        title: "Communication Skills",
        description:
          "Build confidence in written analysis, professional communication and collaborative working.",
      },
    ],
    eligibility: [
      "Law students currently pursuing their degree",
      "Strong written and verbal communication skills",
      "Positive learning attitude and intellectual curiosity",
      "Ability to work collaboratively in a professional environment",
    ],
    process: [
      {
        title: "Apply Early",
        description:
          "Submit your application 8-12 weeks before your preferred internship dates.",
      },
      {
        title: "Application Review",
        description:
          "Applications are reviewed in advance by the relevant team and office.",
      },
      {
        title: "Selection Update",
        description:
          "Selected candidates are informed 4-6 weeks before commencement.",
      },
    ],
    form: {
      eyebrow: "Apply For Internship",
      title: "Submit your internship application.",
      successEyebrow: "Internship Application Submitted",
      successTitle: "Application Received",
      successText:
        "Thank you for applying to Phoenix Legal. Your internship application has been received successfully and will be reviewed by our recruitment team.",
      submitLabel: "Submit Internship Application",
      fields: [
        {
          name: "fullName",
          label: "Full Name *",
          type: "text",
          required: true,
          placeholder: "Full name",
        },
        {
          name: "email",
          label: "Email *",
          type: "email",
          required: true,
          placeholder: "name@example.com",
        },
        {
          name: "college",
          label: "College / University *",
          type: "text",
          required: true,
          placeholder: "Institution name",
        },
        {
          name: "currentYear",
          label: "Current Year *",
          type: "text",
          required: true,
          placeholder: "e.g. 4th Year",
        },
        {
          name: "city",
          label: "Preferred Office *",
          type: "select",
          required: true,
          placeholder: "Select an office",
          options: [
            {
              label: "New Delhi",
              value: "New Delhi",
            },
            {
              label: "Mumbai",
              value: "Mumbai",
            },
          ],
        },
        {
          name: "resume",
          label: "Resume Upload *",
          type: "file",
          required: true,
        },
      ],
    },
  },
  retainership: {
    slug: "retainership",
    banner: {
      eyebrow: "Retainership Programme",
      title: "Associate Retainership Programme",
      text: "Build your legal career through meaningful legal work, diverse practice areas and professional mentorship.",
    },
    overview: {
      eyebrow: "Programme Overview",
      title: "A professional path for lawyers ready for meaningful work.",
      text: "Phoenix Legal welcomes talented legal professionals with exceptional skills and a passion for excellence. Our retainership programme offers meaningful exposure across diverse practice areas while fostering professional growth in a collaborative and inclusive environment.",
      cards: [
        { label: "Practice Areas", value: "Corporate, Disputes & Regulatory" },
        { label: "Offices", value: "New Delhi & Mumbai" },
        { label: "Professional Level", value: "Graduates & Lawyers" },
        { label: "Programme Type", value: "Associate Retainership" },
      ],
    },
    highlights: [
      {
        icon: "partners",
        title: "Partner-Led Work",
        description:
          "Work closely with experienced partners and associates on client-focused legal assignments.",
      },
      {
        icon: "practice",
        title: "Diverse Practice Exposure",
        description:
          "Build experience across corporate, commercial, regulatory and dispute-led matters.",
      },
      {
        icon: "collaboration",
        title: "Collaborative Culture",
        description:
          "Grow within an inclusive environment shaped by excellence, integrity and teamwork.",
      },
      {
        icon: "development",
        title: "Professional Development",
        description:
          "Strengthen legal judgment, drafting discipline and matter-management skills.",
      },
      {
        icon: "clients",
        title: "Client-Focused Assignments",
        description:
          "Contribute to meaningful legal work for businesses, institutions and stakeholders.",
      },
      {
        icon: "growth",
        title: "Merit-Based Growth",
        description:
          "Progress through performance, reliability and consistently high professional standards.",
      },
    ],
    eligibility: [
      "Law graduates and qualified legal professionals",
      "Strong legal research, drafting and analytical skills",
      "Excellent communication, teamwork and matter ownership",
      "Commitment to professionalism, integrity and client service",
    ],
    process: [
      {
        title: "Submit Application",
        description:
          "Send your application with your name, PQE and preferred location.",
      },
      {
        title: "Attach Credentials",
        description:
          "Share your latest CV and relevant professional details for review.",
      },
      {
        title: "Recruitment Review",
        description:
          "The team reviews your profile and follows up with shortlisted candidates.",
      },
    ],
    form: {
      eyebrow: "Apply For Retainership",
      title: "Submit your retainership application.",
      successEyebrow: "Retainership Application Submitted",
      successTitle: "Application Received",
      successText:
        "Thank you for applying to Phoenix Legal. Your retainership application has been received successfully and will be reviewed by our recruitment team.",
      submitLabel: "Submit Retainership Application",
      fields: [
        {
          name: "fullName",
          label: "Full Name *",
          type: "text",
          required: true,
          placeholder: "Full name",
        },
        {
          name: "email",
          label: "Email *",
          type: "email",
          required: true,
          placeholder: "name@example.com",
        },
        {
          name: "graduatedFrom",
          label: "Graduated From *",
          type: "text",
          required: true,
          placeholder: "Institution name",
        },
        {
          name: "graduationYear",
          label: "Graduation Year *",
          type: "text",
          required: true,
          placeholder: "e.g. 2024",
        },
        {
          name: "currentlyWorkingAt",
          label: "Currently Working At",
          type: "text",
          required: false,
          placeholder: "Organisation name",
        },
        {
          name: "designation",
          label: "Designation *",
          type: "text",
          required: true,
          placeholder: "Current designation",
        },
        {
          name: "pqe",
          label: "PQE *",
          type: "text",
          required: true,
          placeholder: "e.g. 2 years",
        },
        {
          name: "city",
          label: "Preferred Office *",
          type: "select",
          required: true,
          placeholder: "Select an office",
          options: [
            {
              label: "New Delhi",
              value: "New Delhi",
            },
            {
              label: "Mumbai",
              value: "Mumbai",
            },
          ],
        },
        {
          name: "resume",
          label: "Resume Upload *",
          type: "file",
          required: true,
        },
      ],
    },
  },
};