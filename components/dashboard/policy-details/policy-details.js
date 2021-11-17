import { Grid } from "@mui/material";
import useModal from "../../../utils/useModal";
import FloatingEditButton from "../../stateless/interface/buttons/floating-edit-button";
import CustomGrow from "../../stateless/interface/transitions/custom-grow";
import AddPolicyForm from "../add-policy-form/add-policy-form";
import PolicyAboutCard from "./policy-about-card";
import PolicyCoverageCard from "./policy-coverage-card";

const PolicyDetails = ({ client, policy, setLoading }) => {
  const [editPolicyModalState, openPolicyModal, closePolicyModal] = useModal();

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

      <FloatingEditButton onClick={openPolicyModal}>
        Edit Policy
      </FloatingEditButton>
      <AddPolicyForm
        open={editPolicyModalState}
        client={client}
        handleClose={closePolicyModal}
        defaultValues={policy}
        setLoading={setLoading}
        edit
      />
    </>
  );
};

export default PolicyDetails;
