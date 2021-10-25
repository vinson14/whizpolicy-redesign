import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const CancelButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="error"
      {...props}
      startIcon={<ClearIcon />}
    >
      {children}
    </Button>
  );
};

export default CancelButton;
