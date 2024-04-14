import { Box, Grid } from "@mui/material";

export default function MUIGrid() {
  //layout component number 3
  /**
   * ! Important to know - Screens types
   * * xs for mobile
   * * sm for tablet
   * * md for desktop
   * * lg and xl for larger monitors
   */
  return (
    <Grid
      container
      //spacing={2} --mean-->rowSpacing=2 and columnSpacing=2
      columnSpacing={1}
      rowSpacing={2}
    >
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"lightblue"} padding={8}>
          Grid Item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"lightblue"} padding={8}>
          Grid Item 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"lightblue"} padding={8}>
          Grid Item 3
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"lightblue"} padding={8}>
          Grid Item 4
        </Box>
      </Grid>
    </Grid>
  );
}
