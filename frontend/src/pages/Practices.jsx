import PageBanner from "../components/PageBanner.jsx";
import PracticeAreas from "../components/PracticeAreas.jsx";
import CTA from "../components/CTA.jsx";

export default function Practices() {
  return (
    <>
      <PageBanner
        eyebrow="Practice Areas"
        title="Expertise Across Every Legal Challanges."
        text="From mergers and acquisitions to banking, infrastructure, technology, disputes, taxation, and regulatory matters, Phoenix Legal delivers partner-led legal advice across diverse industries and complex transactions."
      />
      <PracticeAreas />
      <CTA
        eyebrow="Need Legal Assistance?"
        heading="Didn't Find the Practice Area You're Looking For?"
        text="Every legal matter is unique. If your requirement isn't listed, our experienced lawyers will connect you with the appropriate practice team and provide guidance tailored to your business and legal objectives."
        buttonText="Contact Us"
      />
    </>
  );
}
