import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import {
  defaultDashboardClientBreadcrumbs,
  defaultDashboardPortfolioBreadcrumbs,
} from "../../data/ui";
import { getPolicies } from "../../utils/api";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import DashboardHeaderContainer from "../stateless/layout/dashboard-header-container";
import { PolicyCard } from "./client-details/policy-cards";
import { useRouter } from "next/router";
import { findPolicyByPolicyNumber } from "../../utils/utils";
import PolicyDetails from "./policy-details/policy-details";

const DashboardPortfolio = ({
  openSidebar,
  policies,
  selectedPolicy,
  breadcrumbLinks,
  policyOnClick,
}) => {
  return (
    <>
      <Box sx={{ p: { md: 5, xs: 1 } }}>
        <DashboardHeaderContainer openSidebar={openSidebar}>
          <Grid item>
            <MainHeader>Portfolio</MainHeader>
            <CustomBreadcrumbs links={breadcrumbLinks} />
          </Grid>
        </DashboardHeaderContainer>
        <Grid container mt={5} spacing={3} alignItems="stretch">
          {selectedPolicy == null &&
            policies.map((policy) => {
              return (
                <Grid key={policy.policyNumber} item xs={12} lg={6}>
                  <PolicyCard
                    policy={policy}
                    onClick={() => policyOnClick(policy)}
                  />
                </Grid>
              );
            })}
          {selectedPolicy != null && <PolicyDetails policy={selectedPolicy} />}
        </Grid>
      </Box>
    </>
  );
};

export default DashboardPortfolio;
