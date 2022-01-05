import { Grid, IconButton, Popover } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BaseCoverageInfoPopover = ({ anchorEl, handleClose, children }) => {
  return (
    <Popover
      elevation={4}
      open={anchorEl}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "center", horizontal: "right" }}
      transformOrigin={{ vertical: "center", horizontal: "left" }}
    >
      <Grid container p={3} maxWidth={500}>
        <Grid item xs={12} display="flex" justifyContent="end">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>

        {children}
      </Grid>
    </Popover>
  );
};

export default BaseCoverageInfoPopover;
