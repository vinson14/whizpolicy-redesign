import { Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SidebarButton = ({ openSidebar }) => {
  return (
    <Grid item xs={1} sx={{ display: { xs: "block", md: "none" } }}>
      <IconButton onClick={openSidebar}>
        <MenuIcon />
      </IconButton>
    </Grid>
  );
};

export default SidebarButton;
