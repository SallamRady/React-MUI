import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function MUIDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Stack m={5}>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      {/*  */}
      <Dialog
        // control props
        open={open}
        onClose={() => setOpen(false)}
        //accessability props
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Simple Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure u want to submit form?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
