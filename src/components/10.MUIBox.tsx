import { Box } from "@mui/material";

export default function MUIBox() {
  // layout component num 1
  return (
    <Box
      component={"div"} //determine the html element box will cast to it,default -> div
      sx={{
        color: "lightcoral",
        ":hover": {
          color: "lightblue",
        },
      }} //sx add style
      //we can use css properities directly in box element as props
    >
      MUI Box Layout Component
    </Box>
  );
}
