import { Paper } from "@mui/material";

export default function MUIPaper() {
  return (
    <>
      {/* Paper by default take elevation:1 and box-shadow */}
      <Paper
        sx={{ padding: "32px" }} //to css style
        elevation={4} //elevation(ارتفاع) of paper about its parent
        >
        Paper Component
      </Paper>
    </>
  );
}
