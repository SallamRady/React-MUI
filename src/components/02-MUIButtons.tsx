import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

export default function MUIButtons() {
  // TODO::declare our component state and variables.
  //   const [textFormats, setTextFormats] = useState<string[]>([]);
  // if we use exclusive
  const [textFormats, setTextFormats] = useState<string | null>(null);
  // TODO::define our comoponent helpers variables.
  //   const handleFormatChange = (
  //     e: React.MouseEvent<HTMLElement>,
  //     updatedFormates: string[]
  //   ) => {
  //     setTextFormats(updatedFormates);
  //     console.log(updatedFormates);
  //   };

  // use this is u use exclusive
  const handleFormatChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormates: string | null
  ) => {
    setTextFormats(updatedFormates);
    console.log(updatedFormates);
  };

  //* return component ui.
  return (
    <Stack spacing={4}>
      {/* Variant */}
      <Stack direction={"row"} spacing={2}>
        {/* after using href element will be <a></a> */}
        <Button variant="text" href="https://www.google.com" color="info">
          Text Btn
        </Button>
        <Button variant="contained">Contained Btn</Button>
        <Button variant="outlined">Outlined Btn</Button>
      </Stack>
      {/* Color */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="inherit">
          inherit
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
      </Stack>
      {/* Sizes */}
      <Stack spacing={2} direction={"row"} display={"block"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      {/* Add Icons */}
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add Person
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          disableElevation //Elevation is a good effect on haver
          disableRipple //Ripple good effect on click
        >
          Add Person
        </Button>
        {/* icon btn */}
        <IconButton color="success" size="small">
          <AddIcon />
        </IconButton>
      </Stack>
      {/* Button Group */}
      <Stack direction={"row"}>
        {/* ButtonGroup is a great if put some buttons togeathers give you a good ui 
            In this case put size,orientation,color and variant on ButtonGroup not in Bytton*/}
        <ButtonGroup
          size="small"
          color="secondary"
          variant="contained"
          orientation="vertical" //"vertical" | "horizontal" ->horizontal is deafult
          aria-label="alignment button group" //help in accessablility
        >
          <Button onClick={() => console.log("Btn 1")}>Left</Button>
          <Button onClick={() => console.log("Btn 2")}>Center</Button>
          <Button onClick={() => console.log("Btn 3")}>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Toggle Buttons */}
      <Stack direction={"row"} spacing={3}>
        <ToggleButton value={"bold"} aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>

        <ToggleButtonGroup
          value={textFormats}
          size="small"
          color="success"
          orientation="vertical"
          onChange={handleFormatChange}
          aria-label="text-formating"
          exclusive //that make you select just only one choice in click
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
