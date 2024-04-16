import { Alert, AlertProps, Button, Snackbar, Stack } from "@mui/material";
import React, { forwardRef, useState } from "react";

export default function MUISnackbar() {
  const [open, setOpen] = useState(false);

  const handleClose = (e: React.SyntheticEvent | Event, reason: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const CustomAlertSnackbar = forwardRef<HTMLDivElement, AlertProps>(
    function SnackAlert(props, ref) {
      return <Alert elevation={5} ref={ref} {...props} />;
    }
  );

  return (
    <Stack spacing={4} m={5}>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="form submitted successfully!" //message will appear
        autoHideDuration={4000} //duration to hide message 4000 ms
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          //position of snackbar
          vertical: "bottom", //"top" | "bottom"
          horizontal: "center", //"center" | "left" | "right"
        }}
      />
      {/* Custom Snackbar */}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <CustomAlertSnackbar severity="success">
          Form Submitted Successfully
        </CustomAlertSnackbar>
      </Snackbar>
    </Stack>
  );
}
