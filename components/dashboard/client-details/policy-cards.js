import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { policyCardFields } from "../../../data/ui";
import formatNumber from "../../../utils/utils";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const PolicyCards = ({ client }) => {
  return (
    <>
      <Typography
        align="center"
        variant="h5"
        sx={{ fontWeight: 700 }}
        gutterBottom
      >
        Policies
      </Typography>
      <Grid container spacing={3} alignItems="stretch">
        {client.policies.map((policy) => (
          <Grid key={policy.policyNumber} item xs={12} lg={6}>
            <PolicyCard policy={policy} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const PolicyCard = ({ policy }) => {
  const formatData = (data, field) => {
    if (field.key !== "premium") return data;
    return `$${formatNumber(data)}`;
  };

  return (
    <ClientDetailCard>
      <ClientCardHeader>
        {policy.insurer} - {policy.policyName}
      </ClientCardHeader>
      <Grid container>
        {policyCardFields.map((field) => (
          <ClientCardInfoText
            key={field.key}
            label={field.label}
            value={formatData(policy[field.key], field)}
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default PolicyCards;
