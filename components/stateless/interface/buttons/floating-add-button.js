import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FLOATING_ACTION_BUTTON_WIDTH } from "../../../../data/ui";

const FloatingAddButton = ({
  children,
  color = "primary",
  bottom = 3,
  right = 3,
  ...props
}) => {
  const fabSx = {
    width: FLOATING_ACTION_BUTTON_WIDTH,
    position: "fixed",
    zIndex: (theme) => theme.zIndex.speedDial,
    bottom: (theme) => theme.spacing(bottom),
    right: (theme) => theme.spacing(right),
  };

  return (
    <Fab
      {...props}
      variant="extended"
      sx={fabSx}
      color={color}
      aria-label="add"
    >
      <AddIcon sx={{ mr: 1 }} />
      {children}
    </Fab>
  );
};

export default FloatingAddButton;
