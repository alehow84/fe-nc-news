import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TopicsForm({ topics, setTopicalArticles }) {
  const navigate = useNavigate();

  function handleTopicChange(event) {
    navigate(`/articles/topics/${event.target.value}`);
  }

  function handleResetFilter() {
    //the below changes topicalArticles state to hide SortArticles component. Not used at present as conditional rendering for SortArticles commented out in NavBar
    setTopicalArticles([]);
    navigate(`/`);
  }

  return (
    <>
      <form onReset={handleResetFilter}>
        <label className="dropdown-label">Search Articles by Topic</label>
        <select defaultValue={"placeholder"} onChange={handleTopicChange}>
          <option disabled value={"placeholder"}>
            Choose a Topic
          </option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
        <input className="reset-input" type="reset" value="Reset filter" />
      </form>
    </>
  );
}
