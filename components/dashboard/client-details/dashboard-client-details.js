import { Divider, Grid } from "@mui/material";
import { clientDetailsCards } from "../../../data/ui";
import PolicyCards from "./policy-cards";

const ClientDetails = ({ client }) => {
  return (
    <>
      {clientDetailsCards.map((Component, index) => (
        <Grid key={index} item xs={12} lg={6}>
          <Component client={client} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <PolicyCards client={client} />
      </Grid>
    </>
  );
};

export default ClientDetails;
