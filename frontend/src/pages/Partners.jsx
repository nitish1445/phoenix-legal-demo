import PageBanner from "../components/PageBanner.jsx";
import PartnersPreview from "../components/PartnersPreview.jsx";
import CTA from "../components/CTA.jsx";

export default function Partners() {
  return (
    <>
      <PageBanner
        eyebrow="Our Partners"
        title="Experienced counsel. Trusted leadership."
        text="Meet the partners who lead Phoenix Legal's practice areas, delivering strategic legal advice with partner involvement, commercial focus, and unwavering commitment to client success."
      />
      <PartnersPreview limit={null} />
    </>
  );
}
