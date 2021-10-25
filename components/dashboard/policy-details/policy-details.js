import { Grid } from "@mui/material";
import PolicyAboutCard from "./policy-about-card";
import PolicyCoverageCard from "./policy-coverage-card";

const PolicyDetails = ({ policy }) => {
  return (
    <>
      <Grid item xs={12} lg={6}>
        <PolicyAboutCard policy={policy} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <PolicyCoverageCard policy={policy} />
      </Grid>
    </>
  );
};

export default PolicyDetails;
