import { Grid } from "@mui/material";
import { policyDetailsAboutCardFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const PolicyAboutCard = ({ policy }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Policy Info</ClientCardHeader>
      <Grid container>
        {policyDetailsAboutCardFields.map((field) => (
          <ClientCardInfoText
            key={field.key}
            label={field.label}
            value={policy[field.key]}
            type={field.type}
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default PolicyAboutCard;
