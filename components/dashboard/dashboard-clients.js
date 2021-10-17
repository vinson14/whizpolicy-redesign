import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import MainHeader from "../stateless/interface/text/main-header";

const DashboardClients = () => {
  useEffect(() => {
    console.log("this rendered");
  }, []);
  return (
    <Grid container>
      <Grid item>
        <MainHeader>Clients</MainHeader>
      </Grid>
    </Grid>
  );
};

export default DashboardClients;
