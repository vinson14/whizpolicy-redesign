import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";

const DashboardClients = () => {
  useEffect(() => {
    console.log("this rendered");
  }, []);
  return (
    <Grid container>
      <Grid item>
        <MainHeader>Clients</MainHeader>
        <CustomBreadcrumbs links={links} />
      </Grid>
    </Grid>
  );
};

const links = [
  { label: "Dashboard", route: "/dashboard/clients/dashboard" },
  { label: "Clients", route: "/dashboard/clients" },
];

export default DashboardClients;
