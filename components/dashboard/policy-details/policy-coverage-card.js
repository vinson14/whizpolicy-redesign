import { Grid } from "@mui/material";
import { policyDetailsCoverageCardFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const PolicyCoverageCard = ({ policy }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Policy Benefits</ClientCardHeader>
      <Grid container>
        {policyDetailsCoverageCardFields.map((field) => (
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
