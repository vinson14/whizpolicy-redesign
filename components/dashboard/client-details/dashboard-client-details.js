import { Divider, Grid } from "@mui/material";
import { clientDetailsCards } from "../../../data/ui";
import CoverageCard from "./coverage-card";
import PolicyCards from "./policy-cards";

const ClientDetails = ({ client, policyOnClick, setUpdateClients }) => {
  return (
    <>
      {clientDetailsCards.map((Component, index) => (
        <Grid key={index} item xs={12} lg={6}>
          <Component client={client} setUpdateClients={setUpdateClients} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <CoverageCard client={client} setUpdateClients={setUpdateClients} />
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <PolicyCards client={client} policyOnClick={policyOnClick} />
      </Grid>
    </>
  );
};

export default ClientDetails;
