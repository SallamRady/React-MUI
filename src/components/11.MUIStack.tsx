import { Box, Divider, Stack, Typography } from "@mui/material";

export default function MUIStack() {
  //layout component number 2
  //* Stack by default flex - and flexdirection:column
  return (
    <Stack
      spacing={2} // with of gap between elements
      component={"div"} //determine the html element box will cast to it,default -> div
      sx={{
        color: "lightcoral",
        ":hover": {
          color: "lightblue",
        },
      }} //sx add style
      //we can use css properities directly in box element as props
      //! important (Nice) We can make a Driver between Element look and learn
      divider={<Divider orientation="vertical" flexItem />}
      flexDirection={'row'}
    >
      <Box width={200} height={200} bgcolor={"lawngreen"} color={"black"}>
        MUI Stack UI Component num 1
      </Box>
      <Box width={200} height={200} bgcolor={"lightblue"} color={"black"}>
        MUI Stack UI Component num 2
      </Box>
    </Stack>
  );
}
