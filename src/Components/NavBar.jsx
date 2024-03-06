import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useStickyBox } from "react-sticky-box";
import NavLink from "./NavLink";
import TopicsOptions from "./TopicsOptions";
import { getAllArticles, getSingleArticle, getTopics } from "../Api";

export default function NavBar({ setSingleArticle }) {
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });
  const [searchArticle, setSearchArticle] = useState("");
  const [topics, setTopics] = useState("");
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
    getTopics().then((response) => {
      setTopics(response);
    });
  }, [topics]);

  function handleChange(event) {
    setSearchArticle(event.target.value);
  }

  //function to handle submit
  function handleSubmit(event) {
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
            <form onSubmit={handleSubmit} className="" action="">
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
          <li>
            <form onSubmit={handleSubmit}>
              <label>Search Articles by Topic</label>
              <TopicsOptions topics={topics} />
              <input type="submit" value="Reset filter" />
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
}

//
