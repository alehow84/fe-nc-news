import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { orange } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { sortArticles } from "../Api";

export default function OrderToggleRadio({ setArticles }) {
  const [value, setValue] = useState("desc");

  useEffect(() => {
    sortArticles(value).then(({ articles }) => {
      setArticles(articles);
    });
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    /*
    -destructure setArticles from props - done
    -invoke an api call in a useEffect that takes value as an argumemt
    -api call gets the correct endpoint with the order query
    - setsArticles with the response
    */
  };

  return (
    <FormControl>
      <FormLabel id="Order-articles-radio-buttons-form">
        Order articles
      </FormLabel>
      <RadioGroup
        aria-labelledby="Order-articles-radio-buttons-form"
        defaultValue="desc"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
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
          label="Newest First"
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
          label="Oldest First"
        />
      </RadioGroup>
    </FormControl>
  );
}
