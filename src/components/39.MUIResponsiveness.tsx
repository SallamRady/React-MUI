import { Box } from "@mui/material";

export default function MUIResponsiveness() {
  return (
    <>
      {/*
       * Very Important
       * any css proparty can take a value as object has 5 keys:xl,sm,md,lg,xl
       */}
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          height: {
            xs: 100,
            scrollbarColorm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: {
            xs: "green",
            sm: "yellow",
            md: "lightblue",
            lg: "red",
            xl: "blue",
          },
        }}
      >
        React MUI is Great
      </Box>
    </>
  );
}
