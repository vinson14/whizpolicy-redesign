import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const PhoneInput = ({ name, control, rules, error, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      shouldUnregister
      rules={rules}
      render={({ field }) => (
        <TextField
          inputProps={{ type: "number" }}
          {...field}
          error={error ? true : false}
          fullWidth
          helperText={error?.message}
          InputLabelProps={{ shrink: true }}
          {...props}
        />
      )}
    />
  );
};

export default PhoneInput;
