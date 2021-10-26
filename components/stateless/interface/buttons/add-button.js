import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ children, color = "primary", ...props }) => {
  return (
    <Button
      {...props}
      variant="contained"
      aria-label={children}
      startIcon={<AddIcon />}
    >
      {children}
    </Button>
  );
};

export default AddButton;
