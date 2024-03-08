import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { orange } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function OrderToggleButton() {
  const [value, setValue] = useState("desc");

  const handleChange = (event) => {
    setValue(event.target.value);
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
  );
}
