import { Box } from "@mui/material";

const FormContainer = ({ handleSubmit, onSubmit, children }) => {
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </Box>
  );
};

export default FormContainer;
