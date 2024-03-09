//in api call, add a second argument for sortByQueries - done
// import api call sortArticles - done
//destructure setArticles from SortByForm - done
//include a useEffect to make sortArticles Call, with sortByQuery as dependency
//have a state to store the sortByQuery as an empty string - done
//in the then block of above api calls, set articles to articles & remember to destructure articles from response
//in handleSortByChange, set the sortByQuery to event.target.value
//in handleResetSortBy, setSortByQuery to an empty string
import { sortArticles } from "../Api";
import { useEffect, useState } from "react";

export default function SortByForm({ setArticles }) {
  const [sortQuery, setSortQuery] = useState("");

  function handleSortChange(event) {
    console.log(event.target.value);
  }

  function handleResetFilter() {
    console.log("hello");
  }

  return (
    <form onReset={handleResetFilter}>
      <label>Sort Articles</label>
      <select defaultValue={"placeholder"} onChange={handleSortChange}>
        <option disabled value={"placeholder"}>
          Select a field to sort by
        </option>
        <option value={"created_at"}>Date</option>
        <option value={"comment_count"}>Comments</option>
        <option value={"votes"}>Votes</option>
      </select>
      <input type="reset" value="Reset filter" />
    </form>
  );
}
