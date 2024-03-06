export default function TopicsOptions({ topics }) {
  return (
    <>
      <select>
        {console.log(topics, "<<topics in TopicOptions")}
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
      </select>
    </>
  );
}
