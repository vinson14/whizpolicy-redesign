import { Divider, Grid } from "@mui/material";
import CustomGrow from "../../stateless/interface/transitions/custom-grow";
import AboutCard from "./about-card";
import ContactCard from "./contact-card";
import CoverageCard from "./coverage-card";
import DependantsCard from "./dependants-card";
import NameCard from "./name-card";
import PolicyCards from "./policy-cards";
import RemarksCard from "./remarks-card";

const ClientDetails = ({ client, policyOnClick, setLoading }) => {
  const components = [
    { Component: <NameCard client={client} />, col: { xs: 12, lg: 6 } },
    { Component: <ContactCard client={client} />, col: { xs: 12, lg: 6 } },
    { Component: <AboutCard client={client} />, col: { xs: 12, lg: 6 } },
    { Component: <DependantsCard client={client} setLoading={setLoading} />, col: { xs: 12, lg: 6 } },
    { Component: <CoverageCard client={client} />, col: { xs: 12 } },
    { Component: <RemarksCard client={client} />, col: { xs: 12 } },
    { Component: <Divider client={client} variant="middle" />, col: { xs: 12, lg: 6 } },
    { Component: <PolicyCards policies={client.policies} policyOnClick={policyOnClick} />, col: { xs: 12 } },
  ];

  return (
    <>
      {components.map(({ Component, col }, index) => {
        return (
          <CustomGrow key={index} index={index}>
            <Grid item {...col}>
              {Component}
            </Grid>
          </CustomGrow>
        );
      })}
    </>
  );
};

export default ClientDetails;
