import {
  FaAnchor,
  FaPlane,
  FaBalanceScale,
  FaUniversity,
  FaShieldAlt,
  FaBriefcase,
  FaSyncAlt,
  FaGavel,
  FaUsers,
  FaLeaf,
  FaGlobe,
  FaFileContract,
  FaLightbulb,
  FaHandshake,
  FaBuilding,
  FaMountain,
  FaBolt,
  FaChartLine,
  FaProjectDiagram,
  FaLandmark,
  FaClipboardCheck,
  FaCoins,
  FaBroadcastTower,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import { FiAward, FiGlobe, FiLayers, FiUsers } from "react-icons/fi";

export const company = {
  name: "Phoenix Legal",
  tagline: "Counsel for consequential business.",
  description:
    "Founded in 2008, Phoenix Legal is a leading full-service Indian law firm offering comprehensive legal services across transactional, regulatory, advisory, dispute resolution, and tax matters.",
  email: "contact@phoenixlegal.com",
  phone: "+91 22 4000 XXXX",
  address: "Phoenix House, Nariman Point, Mumbai 400021",
  hours: "Monday to Friday, 9:30 AM - 7:00 PM",
};

export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "The Firm",
    path: null,
    children: [
      { label: "About Us", path: "/about" },
      { label: "Award", path: "/award" },
    ],
  },
  {
    label: "Media & Publications",
    path: null,
    children: [
      { label: "In the News", path: "/news" },
      { label: "Articles and Updates", path: "/articles-updates" },
      { label: "Videos", path: "/videos" },
    ],
  },
  { label: "Practices", path: "/practices" },
  { label: "Partners", path: "/partners" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export const statistics = [
  {
    value: 20,
    suffix: "+",
    label: "Practice Areas",
  },
  {
    value: 50,
    suffix: "+",
    label: "Awards & Recognitions",
  },
  {
    value: 30,
    suffix: "+",
    label: "Legal Professionals",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 18,
    suffix: "+",
    label: "Years of partner-led counsel",
  },
  {
    value: 24,
    suffix: "×7",
    label: "Client Support",
  },
];

export const values = [
  "Partner-Led Engagement",
  "High-Quality Legal Advice",
  "Responsive Client Service",
  "Research-Driven Advisory",
];

export const timeline = [
  {
    year: "2008",
    title: "Phoenix Legal Founded",
    text: "Established as a full-service Indian law firm providing transactional, regulatory, advisory, dispute resolution, and taxation services.",
  },
  {
    year: "2012",
    title: "International Recognition",
    text: "Began receiving consistent recognition from Chambers Asia-Pacific and other leading legal directories across multiple practice areas.",
  },
  {
    year: "2020",
    title: "National Industry Recognition",
    text: "Recognized among India's leading law firms by India Business Law Journal, Legal500, Benchmark Litigation, IFLR1000, Asialaw, and other global publications.",
  },
  {
    year: "2026",
    title: "Leading Full-Service Law Firm",
    text: "Today, Phoenix Legal advises domestic and multinational corporations, financial institutions, private equity funds, promoter groups, and public sector undertakings from its New Delhi and Mumbai offices.",
  },
];

export const testimonials = [
  {
    quote:
      "Phoenix Legal provides timely, accurate, and astute legal services. From corporate governance and M&A activities to tax and employment matters, the team consistently guides us in the right direction.",
    name: "Legal500",
    company: "2026",
  },
  {
    quote: "They are knowledgeable experts who are commercial and practical.",
    name: "Chambers & Partners",
    company: "2025",
  },
  {
    quote:
      "Phoenix Legal has an excellent antitrust and competition team which is extremely trustworthy, reliable and sincere. Client service at its best.",
    name: "Legal500",
    company: "2026",
  },
  {
    quote:
      "The team at Phoenix Legal has in-depth knowledge of legal matters pertaining to the transaction. They are also well versed with commercial issues. Everyone is extremely responsive and efficient.",
    name: "Chambers & Partners",
    company: "2025",
  },
  {
    quote:
      "Knowledgeable and commercial with an excellent understanding of the energy industry. Partner involvement is real. Superbly responsive.",
    name: "Legal500",
    company: "2026",
  },
];

export const media = {
  news: [
    {
      title:
        "Phoenix Legal advises on landmark renewable energy platform investment",
      category: "Deals",
      date: "June 18, 2026",
    },
    {
      title: "Firm strengthens disputes bench with two senior lateral hires",
      category: "Firm News",
      date: "May 29, 2026",
    },
    {
      title: "Phoenix Legal recognized among leading corporate law firms",
      category: "Recognition",
      date: "April 11, 2026",
    },
  ],
  articles: [
    {
      title: "Board duties in an era of regulatory acceleration",
      category: "Governance",
      date: "June 4, 2026",
    },
    {
      title: "India private credit: negotiation points for sponsors",
      category: "Finance",
      date: "May 12, 2026",
    },
    {
      title: "AI contracting: risk allocation for enterprise buyers",
      category: "Technology",
      date: "March 25, 2026",
    },
  ],
  updates: [
    {
      title: "Competition filing thresholds: practical transaction guidance",
      category: "Regulatory",
      date: "June 22, 2026",
    },
    {
      title: "Employment compliance update for multinational employers",
      category: "Employment",
      date: "May 17, 2026",
    },
    {
      title: "Real estate diligence: title and beneficial ownership checklist",
      category: "Real Estate",
      date: "April 3, 2026",
    },
  ],
  videos: [
    {
      title: "Partner roundtable: arbitration strategy after emergency relief",
      category: "Video",
      date: "June 9, 2026",
    },
    {
      title: "Transaction brief: private equity exits in India",
      category: "Video",
      date: "May 2, 2026",
    },
    {
      title: "Client briefing: data governance for boards",
      category: "Video",
      date: "March 18, 2026",
    },
  ],
};

export const jobs = [
  {
    slug: "internship",
    role: "Legal Internship Programme",
    type: "Internship",
    location: "New Delhi & Mumbai",
    level: "Law Students",
    duration: "4 Weeks",
    shortDescription:
      "Gain practical exposure through research, drafting, mentorship and live commercial matters alongside experienced legal professionals.",
    highlights: [
      "4-Week Structured Internship",
      "Partner & Associate Mentorship",
      "Research & Drafting Experience",
      "Live Corporate Law Exposure",
    ],
  },
  {
    slug: "retainership",
    role: "Associate Retainership Programme",
    type: "Retainership",
    location: "New Delhi & Mumbai",
    level: "Law Graduates & Professionals",
    shortDescription:
      "Build your legal career through partner-led mentorship, challenging assignments and exposure to diverse corporate law practices.",

    highlights: [
      "Partner-Led Professional Mentorship",
      "Diverse Practice Area Exposure",
      "Collaborative Work Environment",
      "Merit-Based Career Growth",
    ],
  },
];

export const benefits = [
  "Work Alongside Industry-Leading Legal Professionals Daily.",
  "Advise On High-Value Domestic And Global Matters.",
  "Structured Learning Through Mentorship.",
  "Inclusive Workplace Focused On Integrity And Collaboration.",
  "Accelerate Your Career Through Merit And Performance.",
];

export const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, path: "https://www.linkedin.com" },
  { label: "Email", icon: FaEnvelope, path: `mailto:${company.email}` },
  { label: "Office", icon: FaMapMarkerAlt, path: "/contact" },
  {
    label: "Call",
    icon: FaPhoneAlt,
    path: `tel:${company.phone.replaceAll(" ", "")}`,
  },
];
