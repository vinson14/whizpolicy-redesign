import { Button, Fab, useMediaQuery } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FLOATING_ACTION_BUTTON_WIDTH } from "../../../../data/ui";
const FloatingEditButton = ({
  children,
  color = "secondary",
  bottom = 3,
  right = 3,
  ...props
}) => {
  const fabSx = {
    width: FLOATING_ACTION_BUTTON_WIDTH,
    zIndex: (theme) => theme.zIndex.speedDial,
    position: "fixed",
    bottom: (theme) => theme.spacing(bottom),
    right: (theme) => theme.spacing(right),
  };
  return (
    <Fab
      {...props}
      variant="extended"
      sx={fabSx}
      color={color}
      aria-label="edit"
    >
      <EditIcon sx={{ mr: 1 }} />
      {children}
    </Fab>
  );
};

export default FloatingEditButton;
