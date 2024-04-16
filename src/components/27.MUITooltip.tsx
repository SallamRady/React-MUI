import { Stack, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MUITooltip() {
  return (
    <Stack direction={"row"} mt={5} spacing={4}>
      <Tooltip
        title="Delete" //title will show in hover on children
        placement="top" //position of title which will show on hover::"top" | "right" | "bottom" | "left" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"
        arrow //make tooltip has an arrow
        enterDelay={500} //enterDelay = 500ms
        leaveDelay={100} //leaveDelay = 100ms
      >
        <DeleteIcon />
      </Tooltip>
    </Stack>
  );
}
