import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const EditButton = ({
  children,
  mr = 2,
  mb = 2,
  color = "secondary",
  ...props
}) => {
  return (
    <Button
      {...props}
      color={color}
      variant="contained"
      aria-label={children}
      startIcon={<EditIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </Button>
  );
};

export default EditButton;
