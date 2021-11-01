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

const DashboardPortfolio = ({ openSidebar, policies }) => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultDashboardPortfolioBreadcrumbs
  );
  const router = useRouter();

  useEffect(() => {
    const policyNumber = router.query.policyNumber;
    if (policyNumber == null) {
      setSelectedPolicy(null);
      setBreadcrumbLinks(defaultDashboardPortfolioBreadcrumbs);
    }
    if (policyNumber != null && policies != null) {
      const policy = findPolicyByPolicyNumber(policies, policyNumber);
      setSelectedPolicy(policy);
      setBreadcrumbLinks([
        ...defaultDashboardPortfolioBreadcrumbs,
        { label: policy.policyNumber },
      ]);
    }
  }, [policies, router.query.policyNumber]);

  const selectPolicy = (policy) => {
    router.push(
      `${router.asPath}?policyNumber=${policy.policyNumber}`,
      undefined,
      {
        shallow: true,
      }
    );
  };

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
                    onClick={() => selectPolicy(policy)}
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
