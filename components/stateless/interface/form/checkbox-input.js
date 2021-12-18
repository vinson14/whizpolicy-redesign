import { Box, Checkbox, FormControlLabel, FormGroup, FormHelperText, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const CheckboxInput = ({ name, control, label, error, type, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box>
          <Box display="flex" alignItems="center">
            <Checkbox checked={field.value} {...field} />
            <Typography variant="caption">{label}</Typography>
          </Box>
          <Typography ml={1} variant="caption" color="error.main">
            {error && error.message}
          </Typography>
        </Box>
      )}
      rules={{ ...props }}
    />
  );
};

export default CheckboxInput;
