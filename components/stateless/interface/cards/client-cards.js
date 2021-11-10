import { Grid, Typography } from "@mui/material";
import ClientCard from "./client-card";

const ClientCards = ({ clients, selectClient }) => {
  return (
    <>
      {clients.length === 0 && (
        <Grid item sx={12} py={3}>
          <Typography>No clients have been added yet</Typography>
        </Grid>
      )}
      {clients.map((client) => (
        <Grid key={client.clientId} item lg={4} sm={12} xs={12}>
          <ClientCard onClick={() => selectClient(client)} client={client} />
        </Grid>
      ))}
    </>
  );
};

export default ClientCards;
