import { Stack } from "@mui/material";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";

/**
 * * To deal with date and time in react mui we use.
 * * Step1::We need install these packages
 * * ------------------------------------------
 * *    npm install @mui/x-date-pickers
 * *    //Install date library (if not already installed)
 * *    npm install dayjs
 * * ------------------------------------------
 *
 * * Step2::in App.tsx import the following packages
 * * -------------------------------------------
 * * import { LocalizationProvider } from "@mui/x-date-pickers";
 * * import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 * * -------------------------------------------
 * * make LocalizationProvider wrap all elements in App component like this
 * * ------------------------------------------
 * *<LocalizationProvider dateAdapter={AdapterDayjs}>....All Elements of App component...</LocalizationProvider>
 * * ------------------------------------------
 *
 * *Step3::use package like u want.
 *
 *
 * * To use DateRangePicker which allow u to select range of 2 dates
 * * Need::npm i @mui/x-date-pickers-pro
 */
export default function MUIDateAndTime() {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [rangeDate, setRangeDate] = useState<DateRange<Dayjs>>([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  console.log("date Value", value);
  return (
    <Stack m={5} spacing={4} width={"250px"}>
      {/* default to take date */}
      <DatePicker />
      {/* value and onChange */}
      <DatePicker
        defaultValue={dayjs("2024-04-17")}
        maxDate={dayjs("2024-04-25")} //for validation cant choose date > maxDate
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      {/* Date and time */}
      <DateTimePicker value={value} onChange={setValue} />
      {/* just time */}
      <TimePicker value={value} onChange={setValue} />
      {/* Range Date */}
      <DateRangePicker
        value={rangeDate}
        onChange={(newValue) => setRangeDate(newValue)}
      />
    </Stack>
  );
}
