import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
//npm install @mui/lab
export default function MUILoadingBtn() {
  return (
    <Stack m={10} direction={"row"} spacing={2}>
      <LoadingButton
        variant="contained" //"text" | "outlined" | "contained"
        loading={false} //boolean
        loadingIndicator="Loading..." //text will show in loading is true
        loadingPosition="center" //"center" | "start" | "end"
      >
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loading={true} loadingPosition="center">
        Submit
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loading={true}
        loadingIndicator="Loading..."
      >
        Submit
      </LoadingButton>
    </Stack>
  );
}
