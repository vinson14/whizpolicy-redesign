import { Grid } from "@mui/material";
import useModal from "../../../utils/useModal";
import FloatingEditButton from "../../stateless/interface/buttons/floating-edit-button";
import CustomGrow from "../../stateless/interface/transitions/custom-grow";
import PolicyForm from "../add-policy-form/policy-form";
import PolicyAboutCard from "./policy-about-card";
import PolicyCoverageCard from "./policy-coverage-card";

const PolicyDetails = ({ policy }) => {
  return (
    <>
      <CustomGrow>
        <Grid item xs={12} lg={6}>
          <PolicyAboutCard policy={policy} />
        </Grid>
      </CustomGrow>
      <CustomGrow index={1}>
        <Grid item xs={12} lg={6}>
          <PolicyCoverageCard policy={policy} />
        </Grid>
      </CustomGrow>
    </>
  );
};

export default PolicyDetails;
