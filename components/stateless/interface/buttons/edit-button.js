import EditIcon from "@mui/icons-material/Edit";
import BaseButton from "./base-button";
const EditButton = ({ children, loading = false, ...props }) => {
  return (
    <BaseButton {...props} loading={loading} color="secondary" startIcon={<EditIcon />}>
      {children}
    </BaseButton>
  );
};

export default EditButton;
