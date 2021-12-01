import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const NumberInput = ({ name, control, rules, error, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister
      rules={rules}
      render={({ field }) => (
        <TextField
          fullWidth
          {...field}
          error={error ? true : false}
          helperText={error?.message}
          InputLabelProps={{ shrink: true }}
          inputProps={{ type: "number" }}
          {...props}
        />
      )}
    />
  );
};

export default NumberInput;
