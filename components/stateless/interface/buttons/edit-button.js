import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const EditButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      {...props}
      startIcon={<EditIcon />}
      color="success"
    >
      {children}
    </Button>
  );
};

export default EditButton;
