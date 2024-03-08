import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import { getArticlesByTopic } from "../Api";

export default function TopicalArticles() {
  const [topicalArticles, setTopicalArticles] = useState([]);
  const { topic } = useParams();
  //this component will search for articles by Topic and render the articles card based on that response
  //use params hook - destructure topics and use this to make a call to api doing a get request for /api/articles?topic
  useEffect(() => {
    getArticlesByTopic(topic).then((response) => {
      console.log(response.articles, "response in Topical Articles");
      setTopicalArticles(response);
    });
  }, []);

  return (
    <>
      <h1>Articles by topic</h1>
      {/* <ArticlesCard topicalArticles={topicalArticles} /> */}
    </>
  );
}
