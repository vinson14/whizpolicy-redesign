import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { formatFormInt } from "../../../../utils/utils";

const YearInput = ({
  name,
  register,
  error,
  required,
  min,
  max,
  label,
  placeholder,
  shrink = true,
  variant = "outlined",
}) => {
  return (
    <TextField
      {...register(name, {
        required,
        min,
        max,
        setValueAs: (v) => formatFormInt(v),
      })}
      error={error}
      helperText={error ? error.message : ""}
      label={label}
      variant={variant}
      placeholder={placeholder}
      InputProps={{
        endAdornment: <InputAdornment position="end">years</InputAdornment>,
      }}
      InputLabelProps={{ shrink }}
      inputProps={{ type: "number" }}
    />
  );
};

export default YearInput;
