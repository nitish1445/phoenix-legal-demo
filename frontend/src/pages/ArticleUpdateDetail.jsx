import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { articlesUpdate } from "../assets/articlesUpdate.js";
import { partners } from "../assets/partner.js";
import ArticleUpdateDetailLayout from "../components/ArticleUpdateDetailLayout.jsx";
import NotFound from "./NotFound.jsx";

export default function ArticleUpdateDetailPage() {
  const { slug } = useParams();

  const article = useMemo(
    () => articlesUpdate.find((item) => item.slug === slug),
    [slug],
  );

  if (!article) {
    return <NotFound />;
  }

  const relatedArticles = articlesUpdate.filter((item) => item.slug !== slug);

  return (
    <ArticleUpdateDetailLayout
      article={article}
      partners={partners}
      relatedArticles={relatedArticles}
    />
  );
}
