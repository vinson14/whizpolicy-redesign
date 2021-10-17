import { Grid, Typography } from "@mui/material";

const PolicyCards = ({ client }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" variant="h5" sx={{ fontWeight: 700 }}>
          Policies
        </Typography>
      </Grid>
      {client.policies.map((policy) => (
        <Grid key={policy.policyNumber} item xs={12} lg={6}>
          Policy
        </Grid>
      ))}
    </Grid>
  );
};

const PolicyCard = ({ policy }) => {};

export default PolicyCards;
