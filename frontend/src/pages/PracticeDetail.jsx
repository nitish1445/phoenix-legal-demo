import { useParams } from "react-router-dom";
import { practices } from "../assets/practices.js";
import PracticeDetailLayout from "../components/PracticeDetailLayout";
import NotFound from "./NotFound";

export default function PracticeDetail() {
  const { slug } = useParams();

  const practice = practices.find((item) => item.slug === slug);

  if (!practice) {
    return <NotFound />;
  }

  return <PracticeDetailLayout practice={practice} />;
}
