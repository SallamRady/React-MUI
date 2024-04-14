import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function MUITextfield() {
  return (
    <Stack spacing={4}>
      {/* Text Field Variant */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      {/* 
        size:"small"|"medium"
        color:"primary"|"error"|"warning"...as u know
        label:Text Field Label
        variant:"outlined"|"filled"|"standard"
        required //for validation
        helperText // text that help user 
        disabled
        InputProps={{
            readOnly: true,//make field is read only
            startAdornment: ICon or String,//work as a prefiex in text field
            endAdornment: ICon or String,//work as a sefiex in text field
        }}
        error, //that show invalid input style on filed
        value, //as you know
        onChange, //as you know
        defaultValue,//as you know
       */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Name"
          size="small"
          color="secondary"
          variant="outlined"
          required
          helperText="Dont show password for any one"
        />
        <TextField
          label="Name"
          size="medium"
          color="secondary"
          variant="filled"
          disabled
        />
        <TextField
          label="Read Only"
          size="medium"
          color="warning"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <AttachMoneyIcon sx={{ marginRight: 1 }} />,
          }}
        />
        <TextField
          label="Weight"
          error
          InputProps={{
            endAdornment: "kg",
          }}
        />
      </Stack>
    </Stack>
  );
}
