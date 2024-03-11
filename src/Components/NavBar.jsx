import { useState, useEffect } from "react";
import { useStickyBox } from "react-sticky-box";
import NavLink from "./NavLink";
import TopicsForm from "./TopicsForm";
import { getTopics } from "../Api";
import SortArticles from "./SortArticles";

export default function NavBar({
  setArticles,
  topicalArticles,
  setTopicalArticles,
}) {
  const stickyRef = useStickyBox({ offsetTop: 40, offsetBottom: 20 });
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);

  //Issue in the NavBar - SortArticles not being re-shown after user clicks ResetFilter on Choose a Topic after first click. Take two clicks
  return (
    <>
      <nav>
        <ul ref={stickyRef} className="nav-items">
          <NavLink linkDestination={"/users"} linkName={"Switch User"} />
          <NavLink linkDestination={"/"} linkName={"Articles Home"} />
          <li>
            <TopicsForm
              topics={topics}
              setTopicalArticles={setTopicalArticles}
            />
          </li>
          {topicalArticles.length === 0 ? (
            <SortArticles setArticles={setArticles} />
          ) : null}
        </ul>
      </nav>
    </>
  );
}
