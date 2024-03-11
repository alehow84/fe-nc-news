import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { orange } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { sortArticles } from "../Api";

export default function SortArticles({ setArticles }) {
  const [value, setValue] = useState("desc");
  const [sortQuery, setSortQuery] = useState(null);

  useEffect(() => {
    sortArticles(value, sortQuery).then(({ articles }) => {
      setArticles(articles);
    });
  }, [value, sortQuery]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  function handleSortChange(event) {
    setSortQuery(event.target.value);
  }

  function handleResetSortFilter() {
    setSortQuery(null);
  }

  return (
    <>
      <li>
        <FormControl>
          <FormLabel id="Order-articles-radio-buttons-form">
            Order articles
          </FormLabel>
          <RadioGroup
            aria-labelledby="Order-articles-radio-buttons-form"
            defaultValue="desc"
            name="radio-buttons-group"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="desc"
              control={
                <Radio
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="Descending"
            />
            <FormControlLabel
              value="asc"
              control={
                <Radio
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="Ascending"
            />
          </RadioGroup>
        </FormControl>
      </li>
      <li>
        <form onReset={handleResetSortFilter}>
          <label className="dropdown-label">Sort Articles</label>
          <select defaultValue={"placeholder"} onChange={handleSortChange}>
            <option disabled value={"placeholder"}>
              Select a field to sort by
            </option>
            <option value={"created_at"}>Date</option>
            <option value={"comment_count"}>Comments</option>
            <option value={"votes"}>Votes</option>
          </select>
          <input className="reset-input" type="reset" value="Reset filter" />
        </form>
      </li>
    </>
  );
}
