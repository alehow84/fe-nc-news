import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import { getArticlesByTopic } from "../Api";

export default function TopicalArticles({ articles }) {
  const [topicalArticles, setTopicalArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic).then((response) => {
      setTopicalArticles(response.articles);
    });
  }, [topicalArticles]);

  return (
    <>
      <ArticlesCard articles={articles} topicalArticles={topicalArticles} />
    </>
  );
}
