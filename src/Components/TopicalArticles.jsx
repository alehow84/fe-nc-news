import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import { getArticlesByTopic } from "../Api";

export default function TopicalArticles({
  articles,
  topicalArticles,
  setTopicalArticles,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic)
      .then(({ articles }) => {
        setTopicalArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data, "<<<error in topical articles");
        setIsLoading(false);
        setIsError(true);
        setError(error.response.data);
      });
  }, [topicalArticles]);

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorComponent error={error} />;

  return (
    <>
      <ArticlesCard articles={articles} topicalArticles={topicalArticles} />
    </>
  );
}
