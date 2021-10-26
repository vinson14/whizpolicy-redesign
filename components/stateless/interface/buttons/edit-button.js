import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const EditButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      {...props}
      color="success"
      startIcon={<EditIcon />}
    >
      {children}
    </Button>
  );
};

export default EditButton;
