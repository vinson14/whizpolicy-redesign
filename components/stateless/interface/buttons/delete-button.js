import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
const DeleteButton = ({
  children,
  loading = false,
  mr = 2,
  mb = 2,
  color = "warning",
  ...props
}) => {
  return (
    <LoadingButton
      {...props}
      color={color}
      loading={loading}
      variant="contained"
      aria-label={children}
      startIcon={<DeleteIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </LoadingButton>
  );
};

export default DeleteButton;
