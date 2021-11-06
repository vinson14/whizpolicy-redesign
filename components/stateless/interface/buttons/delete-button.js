import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const DeleteButton = ({ children, mr = 2, color = "warning", ...props }) => {
  return (
    <Button
      {...props}
      color={color}
      variant="contained"
      aria-label={children}
      startIcon={<DeleteIcon />}
      sx={{ mr: mr }}
    >
      {children}
    </Button>
  );
};

export default DeleteButton;
