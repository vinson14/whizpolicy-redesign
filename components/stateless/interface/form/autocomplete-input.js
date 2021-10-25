import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

const AutocompleteInput = ({
  name,
  control,
  label,
  defaultValue,
  options,
  placeholder,
  shrink = true,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
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
              label={label}
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
