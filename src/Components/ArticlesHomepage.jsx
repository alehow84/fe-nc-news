import { useState, useEffect } from "react";
import { getAllArticles } from "../Api";
import ArticlesCard from "./ArticlesCard";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";

export default function ArticlesHomepage({
  setSingleArticle,
  articles,
  setArticles,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isLoading) return <LoadingComponent />;
  if (!Error) return <ErrorComponent />;
  return (
    <ArticlesCard articles={articles} setSingleArticle={setSingleArticle} />
  );
}
