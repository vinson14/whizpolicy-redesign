import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const AddButton = ({
  children,
  mr = 2,
  mb = 2,
  color = "primary",
  variant = "contained",
  ...props
}) => {
  return (
    <Button
      {...props}
      color={color}
      variant={variant}
      aria-label={children}
      startIcon={variant === "contained" ? <AddIcon /> : <AddCircleIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </Button>
  );
};

export default AddButton;
