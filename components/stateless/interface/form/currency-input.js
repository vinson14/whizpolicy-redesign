import { InputAdornment, TextField } from "@mui/material";

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
        valueAsNumber: true,
      })}
      error={error}
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
