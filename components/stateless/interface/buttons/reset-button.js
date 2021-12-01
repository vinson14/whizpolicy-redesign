import ReplayIcon from "@mui/icons-material/Replay";
import BaseButton from "./base-button";

const ResetButton = ({ children, color = "secondary", ...props }) => {
  return (
    <BaseButton {...props} color={color} startIcon={<ReplayIcon />}>
      {children}
    </BaseButton>
  );
};

export default ResetButton;
