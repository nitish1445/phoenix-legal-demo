import { news } from "../assets/news-vidoes.js";
import { articlesUpdate } from "../assets/articlesUpdate.js";
import SectionHeading from "./SectionHeading.jsx";
import AnimatedButton from "./AnimatedButton.jsx";
import News from "../pages/News.jsx";
import ArticleUpdate from "../pages/ArticleUpdate.jsx";
import NewsPreview from "./NewsPreview.jsx";
import ArticlePreview from "./ArticlePreview.jsx";

export default function Publications({
  title = "Latest thinking from the firm.",
}) {
  const items = [...news.slice(0, 2), ...articlesUpdate.slice(0, 2)];

  return (
    <section className="bg-pl-white px-2 py-24 md:py-32">
      <div className="container-pl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Media & Publications"
            title={title}
            text="Deal notes, legal updates, and boardroom briefings from Phoenix Legal partners and counsel."
          />

          <AnimatedButton to="/media" variant="light">
            View Media
          </AnimatedButton>
        </div>

        <div className="grid gap-20">
          <NewsPreview limit={2} />
          <ArticlePreview limit={2} />
        </div>
      </div>
    </section>
  );
}
