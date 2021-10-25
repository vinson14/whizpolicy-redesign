import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { defaultBreadcrumbLinks } from "../../data/ui";
import { getPolicies } from "../../utils/api";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import { PolicyCard } from "./client-details/policy-cards";

const DashboardPortfolio = () => {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    getPolicies().then((policies) => setPolicies(policies));
  }, []);
  return (
    <>
      <Box p={5}>
        <Grid container>
          <Grid item>
            <MainHeader>Portfolio</MainHeader>
            <CustomBreadcrumbs links={defaultBreadcrumbLinks} />
          </Grid>
        </Grid>
        <Grid container mt={5} spacing={3} alignItems="stretch">
          {policies.map((policy) => {
            console.log(policies);
            return (
              <Grid key={policy.policyNumber} item xs={12} lg={6}>
                <PolicyCard policy={policy} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default DashboardPortfolio;
