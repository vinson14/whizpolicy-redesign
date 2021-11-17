import { Grid, Grow, Typography } from "@mui/material";
import CustomGrow from "../transitions/custom-grow";
import ClientCard from "./client-card";

const ClientCards = ({ clients, selectClient }) => {
  return (
    <>
      {clients.length === 0 && (
        <Grid item xs={12} py={3}>
          <Typography>No clients have been added yet</Typography>
        </Grid>
      )}
      {clients.map((client, index) => (
        <CustomGrow show={true} index={index} key={client.clientId}>
          <Grid item lg={6} sm={12} xs={12}>
            <ClientCard onClick={() => selectClient(client)} client={client} />
          </Grid>
        </CustomGrow>
      ))}
    </>
  );
};

export default ClientCards;
