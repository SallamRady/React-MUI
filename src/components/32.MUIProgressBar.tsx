import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export default function MUIProgress() {
  return (
    <Stack m={10} spacing={2}>
      <CircularProgress />
      {/* color:"primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" */}
      <CircularProgress color="info" />
      <CircularProgress color="success" />
      {/* 
        variant:"determinate" | "indeterminate"
        "indeterminate":- default
        "determinate":-progress will be fixed and get value which u will put 
      */}
      <CircularProgress variant="indeterminate" color="warning" />
      <CircularProgress variant="determinate" value={80} color="success" />
      {/* LinearProgress */}
      <LinearProgress />
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress variant="indeterminate" color="warning" />
      <LinearProgress variant="determinate" value={70} color="success" />
    </Stack>
  );
}
