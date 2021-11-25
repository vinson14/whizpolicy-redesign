import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const AutocompleteInput = ({
  name,
  label,
  control,
  rules,
  error,
  options,
  placeholder,
  shrink = true,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Autocomplete
          value={field.value}
          onChange={(event, value, reason) => {
            field.onChange(value);
          }}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={label}
              error={error ? true : false}
              helperText={error?.message}
              InputLabelProps={{ shrink }}
              placeholder={placeholder}
            />
          )}
        />
      )}
    />
  );
};

export default AutocompleteInput;
