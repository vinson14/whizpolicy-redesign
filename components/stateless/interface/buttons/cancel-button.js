import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const CancelButton = ({ children, mb = 2, mr = 2, ...props }) => {
  return (
    <Button
      variant="contained"
      color="error"
      sx={{ mb: mb, mr: mr }}
      {...props}
      startIcon={<ClearIcon />}
    >
      {children}
    </Button>
  );
};

export default CancelButton;
