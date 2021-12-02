import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BaseButton from "./base-button";
const AddButton = ({ children, loading = false, variant = "contained", ...props }) => {
  return (
    <BaseButton
      loading={loading}
      color="primary"
      startIcon={variant === "contained" ? <AddIcon /> : <AddCircleIcon />}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default AddButton;
