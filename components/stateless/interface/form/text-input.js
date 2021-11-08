import { InputAdornment, TextField } from "@mui/material";

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
  pattern,
}) => {
  return (
    <TextField
      {...register(name, {
        required,
        minLength,
        maxLength,
        pattern,
      })}
      error={error ? true : false}
      helperText={error ? error.message : ""}
      label={label + (required && required.value ? "*" : "")}
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
