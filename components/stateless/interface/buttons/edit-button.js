import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { LoadingButton } from "@mui/lab";
const EditButton = ({
  children,
  loading = false,
  mr = 2,
  mb = 2,
  color = "secondary",
  ...props
}) => {
  return (
    <LoadingButton
      {...props}
      loading={loading}
      color={color}
      variant="contained"
      aria-label={children}
      startIcon={<EditIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </LoadingButton>
  );
};

export default EditButton;
