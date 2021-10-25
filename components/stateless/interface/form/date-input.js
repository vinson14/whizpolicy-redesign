import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import enGB from "date-fns/locale/en-GB";
import DateAdapter from "@mui/lab/AdapterDateFns";

const DateInput = ({ name, control, defaultValue, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={DateAdapter} locale={enGB}>
          <DatePicker
            label={label}
            {...field}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateInput;
