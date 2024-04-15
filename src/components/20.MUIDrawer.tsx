import { Box, Button, Drawer, Typography } from "@mui/material";
import { useState } from "react";

export default function MUIDrawer() {
  // TODO::declare and define our state variables
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //* Drawer used to set sidebar.
  return (
    <>
      <Button
        variant="contained"
        sx={{ float: "right" }}
        onClick={() => setIsDrawerOpen((prev) => !prev)}
      >
        Toggle Show Drawer
      </Button>
      <Drawer
        anchor="left" //'"left" | "top" | "right" | "bottom" | undefined'
        open={isDrawerOpen}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Side Bar
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
