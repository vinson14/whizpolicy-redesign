import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

const AutocompleteInput = ({ name, control, label, defaultValue, options }) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  console.log(options);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      )}
    />
  );
};

export default AutocompleteInput;
