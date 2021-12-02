import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import BaseButton from "./base-button";
const CancelButton = ({ children, ...props }) => {
  return (
    <BaseButton color="error" {...props} startIcon={<ClearIcon />}>
      {children}
    </BaseButton>
  );
};

export default CancelButton;
