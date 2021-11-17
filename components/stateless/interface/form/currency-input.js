import { InputAdornment, TextField } from "@mui/material";
import { formatFormInt } from "../../../../utils/utils";

const CurrencyInput = ({
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
        // setValueAs: (v) => formatFormInt(v),
      })}
      error={error ? true : false}
      helperText={error ? error.message : ""}
      label={label}
      variant={variant}
      placeholder={placeholder}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      InputLabelProps={{ shrink }}
      inputProps={{ type: "number", step: 0.01 }}
    />
  );
};

export default CurrencyInput;
