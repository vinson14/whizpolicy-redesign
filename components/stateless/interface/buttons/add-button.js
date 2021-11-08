import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({
  children,
  mr = 2,
  mb = 2,
  color = "primary",
  ...props
}) => {
  return (
    <Button
      {...props}
      color={color}
      variant="contained"
      aria-label={children}
      startIcon={<AddIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </Button>
  );
};

export default AddButton;
