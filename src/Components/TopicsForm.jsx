import { Navigate, useNavigate } from "react-router-dom";

export default function TopicsForm({ topics }) {
  const navigate = useNavigate();
  /*
    -create onChange event to grab the value of the selected option
    -update the state of selectedTopic to the selected option
    */
  function handleTopicChange(event) {
    console.log(event.target.value, "<<event in handleTopicChange");
  }

  function handleResetFilter() {
    navigate(`/`);
  }

  return (
    <>
      <form onReset={handleResetFilter}>
        <label>Search Articles by Topic</label>
        <select defaultValue={"placeholder"} onChange={handleTopicChange}>
          {/* {console.log(topics, "<<topics in TopicsOptions")} */}
          {/* Sometimes I'm getting a typeError on the below, but when i first comment the code back in, it works. BC topics is initially set to an empty string */}
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
