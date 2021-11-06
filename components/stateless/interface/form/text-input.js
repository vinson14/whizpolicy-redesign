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
}) => {
  return (
    <TextField
      {...register(name, {
        required,
        minLength,
        maxLength,
      })}
      error={error ? true : false}
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
