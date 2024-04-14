import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function MUIRadioBtn() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Box width="300px">
      <FormControl error>
        <FormLabel id="years-of-experience-label">
          Years Of Experience
        </FormLabel>
        <RadioGroup
          name="years-of-experience"
          value={value}
          onChange={handleChange}
          aria-labelledby="years-of-experience-label"
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value={"0-2"}
          />
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="3-5"
            value={"3-5"}
          />
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="5-7"
            value={"5-7"}
          />
        </RadioGroup>
        {/* for show helper message */}
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
}
