import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Statistics from "../components/Statistics.jsx";
import PracticeAreas from "../components/PracticeAreas.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import PartnersPreview from "../components/PartnersPreview.jsx";
import Publications from "../components/Publications.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Statistics />
      <WhyChooseUs />
      <PracticeAreas limit={6} />
      <Publications />
      <Testimonials />
      <CTA
        eyebrow="Engage The Firm"
        text="Speak with Phoenix Legal about transactions, disputes, investigations, governance, or strategic advisory mandates."
        buttonText="Start a Conversation"
      />
    </>
  );
}
