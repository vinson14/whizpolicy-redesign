import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

const RadioInput = ({ name, control, label, defaultValue, options }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <RadioGroup row {...field}>
            {generateOptions(options)}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

const generateOptions = (options) => {
  return (
    <>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          label={option.label}
          control={<Radio />}
        />
      ))}
    </>
  );
};

export default RadioInput;
