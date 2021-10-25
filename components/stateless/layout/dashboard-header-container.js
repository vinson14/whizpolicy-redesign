import { Grid } from "@mui/material";
import SidebarButton from "../interface/buttons/sidebar-button";

const DashboardHeaderContainer = ({ openSidebar, children }) => {
  return (
    <Grid container spacing={{ xs: 8 }} alignItems="center">
      <SidebarButton openSidebar={openSidebar} />
      {children}
    </Grid>
  );
};

export default DashboardHeaderContainer;
