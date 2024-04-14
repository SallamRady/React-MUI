import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const SKILLS = ["HTML", "CSS", "JS", "TS", "REACT"];
export default function MUIAutoComplete() {
  const [value, setValue] = useState<string | null>(null);

  console.log(value);
  const handleChange = (e: React.ChangeEvent<{}>, newVal: string | null) => {
    setValue(newVal);
  };
  return (
    <Stack spacing={2} width={"250px"}>
      {/* options,renderInput are required */}
      <Autocomplete
        options={SKILLS} //array of strings
        renderInput={(params) => {
          return <TextField {...params} label="Skills" />;
        }}
        value={value} //as u know
        onChange={handleChange}
      />
    </Stack>
  );
}
