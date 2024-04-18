import { Box, Stack, Typography } from "@mui/material";

export default function MUICustomTheme() {
  /**
   * * Very Important
   * * Theme handle every thing about our app dont just color but containts every thing like colors,elements props like box ,typograph, and more and more
   *
   * * By default we use default theme which react mui provide.
   *
   * * Steps to create a custom theme
   * * Step 1 :: Create your theme like we do in file /src/themes/customTheme.ts
   * * Step 2 :: use ThemeProvider and wrap app component like this :<ThemeProvider theme={your custom theme}>...App Component...</ThemeProvider>
   * * Step 3 :: use your theme and engoy :)
   */
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Try and Use Custom Theme</Typography>
      <Stack spacing={4} direction={"row"}>
        <Box width={200} height={200} margin={2} bgcolor={"primary.main"}>
          <Typography variant="h3">Box1</Typography>
        </Box>

        <Box width={200} height={200} margin={2} bgcolor={"primary.light"}>
          <Typography variant="h3">Box1</Typography>
        </Box>

        <Box width={200} height={200} margin={2} bgcolor={"primary.dark"}>
          <Typography variant="h3">Box1</Typography>
        </Box>
      </Stack>

      <Stack spacing={4} direction={"row"}>
        <Box width={200} height={200} margin={2} bgcolor={"secondary.main"}>
          <Typography variant="h3">Box1</Typography>
        </Box>

        <Box width={200} height={200} margin={2} bgcolor={"secondary.light"}>
          <Typography variant="h3">Box1</Typography>
        </Box>

        <Box width={200} height={200} margin={2} bgcolor={"secondary.dark"}>
          <Typography variant="h3">Box1</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
