import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default function MUICheckBox() {
  // TODO::declare and define component state and variables
  const [accept, setAccept] = useState(false);
  const [Skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setAccept(e.target.checked);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let idx = Skills.indexOf(e.target.value);
    if (idx == -1) {
      setSkills([...Skills, e.target.value]);
    } else {
      setSkills((prev) => prev.filter((sk) => sk != e.target.value));
    }
    console.log(Skills);
  };

  return (
    <>
      <Box width="330px">
        <FormControlLabel
          label="I accept terms and condations"
          control={
            <Checkbox
              checked={accept}
              onChange={handleChange}
              icon={<BookmarkBorderOutlinedIcon />} //for check box in normal stat
              checkedIcon={<BookmarkIcon />} //icon in checked state
            />
          }
        />
      </Box>
      {/* Check Button Group */}
      <Box width="330px">
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          {/* 
          <FormGroup >
           */}
          <FormGroup
            row //make btns horizental
          >
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  checked={Skills.includes("html")}
                  value={"html"}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  checked={Skills.includes("css")}
                  value={"css"}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  checked={Skills.includes("js")}
                  value={"js"}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>In valid Selection</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}
