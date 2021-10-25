import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextInput = ({
  name,
  control,
  label,
  defaultValue,
  placeholder,
  startAdornment,
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
          InputProps={
            startAdornment && {
              startAdornment: (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ),
            }
          }
          placeholder={placeholder}
          fullWidth
          InputLabelProps={{ shrink }}
        />
      )}
    />
  );
};

export default TextInput;
