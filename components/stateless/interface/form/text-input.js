import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextInput = ({
  name,
  label,
  error,
  placeholder,
  startAdornment,
  shrink = true,
  variant = "outlined",
  register,
  required,
  minLength,
  maxLength,
}) => {
  return (
    <TextField
      {...register(name, {
        required,
        minLength,
        maxLength,
      })}
      error={error}
      helperText={error ? error.message : ""}
      label={label}
      variant={variant}
      InputProps={
        startAdornment && {
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
        }
      }
      placeholder={placeholder}
      fullWidth
      InputLabelProps={{ shrink }}
    />
  );
};

export default TextInput;
