import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const YearInput = ({
  name,
  control,
  defaultValue,
  label,
  placeholder,
  shrink = true,
  variant = "outlined",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant={variant}
          placeholder={placeholder}
          InputProps={{
            endAdornment: <InputAdornment position="end">years</InputAdornment>,
          }}
          InputLabelProps={{ shrink }}
          inputProps={{ type: "number" }}
        />
      )}
    />
  );
};

export default YearInput;
