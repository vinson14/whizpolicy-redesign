import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextInput = ({
  name,
  control,
  label,
  defaultValue,
  variant = "outlined",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField {...field} label={label} variant={variant} fullWidth />
      )}
    />
  );
};

export default TextInput;
