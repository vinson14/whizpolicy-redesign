import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { LoadingButton } from "@mui/lab";
const AddButton = ({
  children,
  loading = false,
  mr = 2,
  mb = 2,
  color = "primary",
  variant = "contained",
  ...props
}) => {
  return (
    <LoadingButton
      loading={loading}
      {...props}
      color={color}
      variant={variant}
      aria-label={children}
      startIcon={variant === "contained" ? <AddIcon /> : <AddCircleIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </LoadingButton>
  );
};

export default AddButton;
