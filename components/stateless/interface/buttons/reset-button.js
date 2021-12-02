import ReplayIcon from "@mui/icons-material/Replay";
import { Button } from "@mui/material";

const ResetButton = ({
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
      startIcon={<ReplayIcon />}
      sx={{ mr: mr, mb: mb }}
    >
      {children}
    </Button>
  );
};

export default ResetButton;
