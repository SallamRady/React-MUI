import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function MUISelectFiled() {
  // TODO::declare component state and variables
  const [countries, setCountries] = useState<string[]>([]);

  //   TODO::declare and define helpers methods
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    let value = e.target.value;
    setCountries(typeof value == "string" ? value.split(",") : value);
  };

  return (
    <Stack spacing={4}>
      <Box width={"250px"} marginTop={10}>
        {/* To do Select Element we can use TextFiled or use Select */}
        <TextField
          label="Select Country"
          select
          value={countries}
          onChange={handleCountryChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          helperText="Choose countries"
          color="success"
          error // for invalid case
        >
          <MenuItem value="EG">Egypt</MenuItem>
          <MenuItem value="C2">Country 2</MenuItem>
          <MenuItem value="C3">Country 3</MenuItem>
          <MenuItem value="C4">Country 4</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}
