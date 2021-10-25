import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { defaultBreadcrumbLinks } from "../../data/ui";
import { getPolicies } from "../../utils/api";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import DashboardHeaderContainer from "../stateless/layout/dashboard-header-container";
import { PolicyCard } from "./client-details/policy-cards";

const DashboardPortfolio = ({ openSidebar }) => {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    getPolicies().then((policies) => setPolicies(policies));
  }, []);
  return (
    <>
      <Box sx={{ p: { md: 5, xs: 1 } }}>
        <DashboardHeaderContainer openSidebar={openSidebar}>
          <Grid item>
            <MainHeader>Portfolio</MainHeader>
            <CustomBreadcrumbs links={defaultBreadcrumbLinks} />
          </Grid>
        </DashboardHeaderContainer>
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
