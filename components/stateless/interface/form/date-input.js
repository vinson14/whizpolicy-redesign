import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import enGB from "date-fns/locale/en-GB";
import DateAdapter from "@mui/lab/AdapterDateFns";

const DateInput = ({
  name,
  label,
  control,
  rules,
  error,
  minDate,
  maxDate,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={DateAdapter} locale={enGB}>
          <DatePicker
            minDate={minDate}
            maxDate={maxDate}
            label={label}
            {...field}
            renderInput={(params) => (
              <TextField
                fullWidth
                helperText={error?.message}
                {...params}
                error={Boolean(error)}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateInput;
