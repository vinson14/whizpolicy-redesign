import { Grid } from "@mui/material";
import useModal from "../../../utils/useModal";
import FloatingEditButton from "../../stateless/interface/buttons/floating-edit-button";
import AddPolicyForm from "../add-policy-form/add-policy-form";
import PolicyAboutCard from "./policy-about-card";
import PolicyCoverageCard from "./policy-coverage-card";

const PolicyDetails = ({ policy }) => {
  const [editPolicyModalState, openPolicyModal, closePolicyModal] = useModal();

  return (
    <>
      <Grid item xs={12} lg={6}>
        <PolicyAboutCard policy={policy} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <PolicyCoverageCard policy={policy} />
      </Grid>
      <FloatingEditButton onClick={openPolicyModal}>
        Edit Policy
      </FloatingEditButton>
      <AddPolicyForm
        open={editPolicyModalState}
        handleClose={closePolicyModal}
        defaultValues={policy}
        edit
      />
    </>
  );
};

export default PolicyDetails;
