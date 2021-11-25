import { InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CurrencyInput = ({ name, control, rules, error, ...props }) => {
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
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{ type: "number", step: 0.01 }}
          {...props}
        />
      )}
    />
  );
};

export default CurrencyInput;
