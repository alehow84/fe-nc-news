import { useState, useEffect } from "react";
import { useStickyBox } from "react-sticky-box";
import { Navigate, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import TopicsForm from "./TopicsForm";
import { getAllArticles, getSingleArticle, getTopics } from "../Api";
import SortArticles from "./SortArticles";

export default function NavBar({ setSingleArticle, setArticles }) {
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });
  const [searchArticle, setSearchArticle] = useState("");
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  //useEffect to rerender after searchArticle state is changed and make the call to the api to get single article
  useEffect(() => {
    getSingleArticle(searchArticle).then((response) => {
      setSingleArticle(response);
    });
  }, [searchArticle]);

  //useEffect to rerender after topics state is set and make a call to api to get topics
  useEffect(() => {
    //make api call to get topics
    //in then block, set topics to the response
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);

  function handleChange(event) {
    setSearchArticle(event.target.value);
  }

  //function to handle submit
  function handleSubmitArticleId(event) {
    event.preventDefault();
    navigate(`/articles/${searchArticle}`);
    //clear the input - not working
    setSearchArticle("");
  }

  return (
    <>
      <nav ref={stickyRef}>
        <ul className="nav-items">
          <NavLink linkDestination={"/users"} linkName={"Switch User"} />
          <NavLink linkDestination={"/"} linkName={"Articles Home"} />
          <li>
            <TopicsForm topics={topics} />
          </li>
          <li>
            <form onSubmit={handleSubmitArticleId} className="" action="">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Search by article ID..."
                name="search"
                required
              />
              <button type="submit">View Article</button>
            </form>
          </li>
          <SortArticles setArticles={setArticles} />
        </ul>
      </nav>
    </>
  );
}

//
