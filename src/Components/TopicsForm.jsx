import { Navigate, useNavigate } from "react-router-dom";

export default function TopicsForm({ topics, setTopicalArticles }) {
  const navigate = useNavigate();

  function handleTopicChange(event) {
    navigate(`/articles/topics/${event.target.value}`);
  }

  function handleResetFilter() {
    setTopicalArticles([]);
    navigate(`/`);
  }

  return (
    <>
      <form onReset={handleResetFilter}>
        <label>Search Articles by Topic</label>
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
        <input type="reset" value="Reset filter" />
      </form>
    </>
  );
}
