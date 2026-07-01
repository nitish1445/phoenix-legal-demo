import CareerDetailLayout from "../components/CareerDetailLayout.jsx";
import { careerDetails } from "../assets/careerDetail.js";

export default function Internship() {
  return <CareerDetailLayout programme={careerDetails.internship} />;
}
