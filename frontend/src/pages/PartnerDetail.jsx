import { useParams } from "react-router-dom";
import { partners } from "../assets/partner.js";
import PartnerDetailLayout from "../components/PartnerDetailLayout";
import NotFound from "./NotFound";

export default function PracticeDetail() {
  const { slug } = useParams();

  const partner = partners.find((item) => item.slug === slug);

  if (!partner) {
    return <NotFound />;
  }

  return <PartnerDetailLayout partner={partner} />;
}
