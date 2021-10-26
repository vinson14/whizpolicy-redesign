import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      {...props}
      color="success"
      startIcon={<AddIcon />}
    >
      {children}
    </Button>
  );
};

export default AddButton;
