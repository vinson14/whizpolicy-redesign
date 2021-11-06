import { Box, InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AddButton from "../components/stateless/interface/buttons/add-button";

const Testing = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box sx={{ p: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("testing")}
          label="Testing"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <AddButton type="submit">Testing</AddButton>
      </form>
    </Box>
  );
};

export default Testing;
