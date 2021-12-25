import { Grid } from "@mui/material";
import {
  POLICY_CATEGORY_KEY,
  POLICY_CATEGORY_WHOLE_LIFE_KEY,
  POLICY_CATEGORY_TERM_LIFE_KEY,
  POLICY_CATEGORY_ENDOWMENT_KEY,
  POLICY_CATEGORY_ILP_KEY,
  POLICY_CATEGORY_ACCIDENT_KEY,
  POLICY_CATEGORY_ISP_KEY,
  POLICY_CATEGORY_CARESHIELD_KEY,
  defaultPolicyDetailsAboutCardFields,
  policyDetailsAboutCardFields,
  ispPolicyDetailsAboutCardFields,
  careshieldPolicyDetailsAboutCardFields,
} from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const PolicyAboutCard = ({ policy }) => {
  const policyCategoryFields = {
    [POLICY_CATEGORY_WHOLE_LIFE_KEY]: defaultPolicyDetailsAboutCardFields,
    [POLICY_CATEGORY_TERM_LIFE_KEY]: defaultPolicyDetailsAboutCardFields,
    [POLICY_CATEGORY_ENDOWMENT_KEY]: defaultPolicyDetailsAboutCardFields,
    [POLICY_CATEGORY_ILP_KEY]: defaultPolicyDetailsAboutCardFields,
    [POLICY_CATEGORY_ACCIDENT_KEY]: defaultPolicyDetailsAboutCardFields,
    [POLICY_CATEGORY_ISP_KEY]: ispPolicyDetailsAboutCardFields,
    [POLICY_CATEGORY_CARESHIELD_KEY]: careshieldPolicyDetailsAboutCardFields,
  };

  const fields = policyCategoryFields[policy[POLICY_CATEGORY_KEY]];

  return (
    <ClientDetailCard>
      <ClientCardHeader>Policy Info</ClientCardHeader>
      <Grid container>
        {fields.map((fieldName) => {
          const field = policyDetailsAboutCardFields[fieldName];
          return <ClientCardInfoText key={field.key} label={field.label} value={policy[field.key]} type={field.type} />;
        })}
      </Grid>
    </ClientDetailCard>
  );
};

export default PolicyAboutCard;
