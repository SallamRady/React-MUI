import { Avatar, Chip, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

export default function MUIChip() {
  const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);

  const handleDelete = (str: string) => {
    setChips(chips.filter((c) => c != str));
  };
  return (
    <Stack spacing={4} mt={5} direction={"row"}>
      {/* label require */}
      <Chip label="leader" />
      {/* color: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"*/}
      <Chip label="leader" color="primary" />
      {/* size : "small" | "medium" */}
      <Chip label="leader" color="primary" size="small" />
      {/* variant:"filled" | "outlined" */}
      <Chip label="leader" color="primary" variant="filled" />
      <Chip label="leader" color="primary" variant="outlined" />
      {/* Avatar prop */}
      <Chip
        label="leader"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>SR</Avatar>}
      />
      {/* icon prop */}
      <Chip
        label="leader"
        color="secondary"
        variant="outlined"
        icon={<EmailIcon />}
      />
      {/* make it clickable */}
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("Chip is clicked")}
      />
      {/* if we use onDelete chip will add delete bth and on click it will file delete function*/}
      {chips.map((item) => {
        return (
          <Chip
            key={item}
            label={item}
            color="error"
            onDelete={() => handleDelete(item)}
          />
        );
      })}
    </Stack>
  );
}
