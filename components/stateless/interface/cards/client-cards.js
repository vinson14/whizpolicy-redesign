import { Grid } from "@mui/material";
import ClientCard from "./client-card";

const ClientCards = ({ clients, selectClient }) => {
  return (
    <>
      {clients.map((client) => (
        <Grid key={client.client_id} item lg={4} sm={12} xs={12}>
          <ClientCard onClick={() => selectClient(client)} client={client} />
        </Grid>
      ))}
    </>
  );
};

export default ClientCards;
