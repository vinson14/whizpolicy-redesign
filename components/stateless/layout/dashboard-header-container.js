import { Grid } from "@mui/material";
import SidebarButton from "../interface/buttons/sidebar-button";

const DashboardHeaderContainer = ({ openSidebar, children }) => {
  return (
    <Grid container spacing={{ xs: 8 }} sx={{ pt: 2 }} alignItems="center">
      {children}
    </Grid>
  );
};

export default DashboardHeaderContainer;
