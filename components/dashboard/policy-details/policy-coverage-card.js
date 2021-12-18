import { Grid } from "@mui/material";
import {
  ispPolicyDetailsCoverageCardFields,
  lifePolicyDetailsCoverageCardFields,
  POLICY_CATEGORY_ISP_KEY,
  POLICY_CATEGORY_KEY,
  POLICY_CATEGORY_TERM_LIFE_KEY,
  POLICY_CATEGORY_WHOLE_LIFE_KEY,
} from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const PolicyCoverageCard = ({ policy }) => {
  const policyTypeFields = {
    [POLICY_CATEGORY_WHOLE_LIFE_KEY]: lifePolicyDetailsCoverageCardFields,
    [POLICY_CATEGORY_TERM_LIFE_KEY]: lifePolicyDetailsCoverageCardFields,
    [POLICY_CATEGORY_ISP_KEY]: ispPolicyDetailsCoverageCardFields,
  };

  const fields = policyTypeFields[policy[POLICY_CATEGORY_KEY]];
  return (
    <ClientDetailCard>
      <ClientCardHeader>Policy Benefits</ClientCardHeader>
      <Grid container>
        {fields.map((field) => (
          <ClientCardInfoText
            value={policy[field.key]}
            label={field.label}
            type={field.type}
            key={field.key}
            icon={field.icon}
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default PolicyCoverageCard;
