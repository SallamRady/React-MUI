import { Masonry } from "@mui/lab";
import { Paper, Stack } from "@mui/material";

export default function MUIMasonry() {
  return (
    <Stack m={5} width={400} height={400}>
      <Masonry columns={4} spacing={1}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          2
        </Paper>
      </Masonry>
    </Stack>
  );
}
