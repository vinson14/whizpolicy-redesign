import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { policyCardFields } from "../../../data/ui";
import formatNumber from "../../../utils/utils";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
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
          <Grid key={field.label} item xs={6} py={2}>
            <Typography variant="body2" color="text.secondary">
              {field.label}
            </Typography>
            <Typography variant="body1">
              {formatData(policy[field.key], field)}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default PolicyCards;
