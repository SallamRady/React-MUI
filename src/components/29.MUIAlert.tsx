import { Alert, AlertTitle, Button, Stack } from "@mui/material";

export default function MUIAlert() {
  return (
    <Stack m={10} p={5} spacing={2}>
      <Alert
        severity="error" //'error'| 'info'| 'success'| 'warning'| string
        variant="filled" //"standard" | "filled" | "outlined"
        // icon={..Icon..} // if u want to change default icon
        onClose={() => alert("Close Alert Icon Clicked")}
        // action={
        //   /*Here can set btns*/
        //   <Button variant="text">UNDO</Button>
        // }
      >
        <AlertTitle>Error</AlertTitle>
        Error Alert - variant filled
      </Alert>
      <Alert severity="info" variant="outlined">
        <AlertTitle>Info</AlertTitle>
        Info Alert - variant outlined
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        success Alert - variant default (standard)
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        warning Alert - variant default (standard)
      </Alert>
      <Alert severity="info">Info Alert - variant default (standard)</Alert>
    </Stack>
  );
}
