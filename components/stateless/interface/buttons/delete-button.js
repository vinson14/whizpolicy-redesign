import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import BaseButton from "./base-button";
const DeleteButton = ({ children, color = "warning", ...props }) => {
  return (
    <BaseButton color={color} startIcon={<DeleteIcon />} {...props}>
      {children}
    </BaseButton>
  );
};

export default DeleteButton;
