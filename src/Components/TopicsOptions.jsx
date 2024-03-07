export default function TopicsOptions({ topics }) {
  return (
    <>
      <select>
        {console.log(topics, "<<topics in TopicsOptions")}
        {/* Sometimes I'm getting a typeError on the below, but when i first comment the code back in, it works */}
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </>
  );
}
