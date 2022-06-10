import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export const DataPicker = ({ renderInput,onChange }) => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    ""
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //     <DesktopDatePicker
    //       label="Date desktop"
    //       inputFormat="yyyy-MM-dd"
    //       value={value}
    //       onChange={(e)=>{
    //         handleChange(e)
    //         onChange(value)
    //       }}
    //       renderInput={renderInput}
    //     />
    // </LocalizationProvider>
  );
};
