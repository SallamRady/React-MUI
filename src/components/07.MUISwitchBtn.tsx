import { Box, FormControlLabel, Stack, Switch } from "@mui/material";
import { useState } from "react";

export default function MUISwitchBtn() {
  const [checked, setChecked] = useState(false);

  const handleChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <Stack spacing={2}>
      <Box width={"250px"}>
        {/* 
            to use FormControlLabel
            label:string
            control:input controller like raido... 
        */}
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              size="small"
              color="secondary"
              checked={checked}
              onChange={handleChangeSwitch}
            />
          }
        />
      </Box>
    </Stack>
  );
}
