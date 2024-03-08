import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import { getArticlesByTopic } from "../Api";

export default function TopicalArticles({ articles }) {
  const [topicalArticles, setTopicalArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((response) => {
        setTopicalArticles(response.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [topicalArticles]);

  if (isLoading) return <LoadingComponent />;
  if (!Error) return <ErrorComponent />;

  return (
    <>
      <ArticlesCard articles={articles} topicalArticles={topicalArticles} />
    </>
  );
}
