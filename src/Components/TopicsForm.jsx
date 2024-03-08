import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TopicsForm({ topics }) {
  const navigate = useNavigate();
  /*
    -create onChange event to grab the value of the selected option
    -state needed to set selectedTopic
    -update the state of selectedTopic to the selected option
    */
  function handleTopicChange(event) {
    console.log(event.target.value, "<<event in handleTopicChange");
    navigate(`/articles/topics/${event.target.value}`);
  }

  function handleResetFilter() {
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
              // <Link
              //   to={`/articles/topics/${topic.slug}`}
              //   id="topic"
              //   key={topic.slug}
              // >
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
              // </Link>
            );
          })}
        </select>
        <input type="reset" value="Reset filter" />
      </form>
    </>
  );
}
