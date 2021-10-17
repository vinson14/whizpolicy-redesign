import { Box, Grid, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getClients } from "../../utils/api";
import AddButton from "../stateless/interface/buttons/add-button";
import ClientCard from "../stateless/interface/cards/client-card";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";

const DashboardClients = () => {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState();
  useEffect(() => {
    getClients().then((clients) => setClients(clients));
  }, []);

  const selectClient = (id) => {
    setSelectedClient(id);
    router.push(`?clientId=${id}`, undefined, { shallow: true });
  };

  return (
    <Box p={5}>
      <Grid container>
        <Grid item>
          <MainHeader>Clients</MainHeader>
          <CustomBreadcrumbs links={links} />
        </Grid>
        <Grid
          item
          flexGrow={1}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <AddButton>New Client</AddButton>
        </Grid>
      </Grid>
      <Grid container mt={5} spacing={3}>
        {clients.map((client) => (
          <Grid key={client.id} item lg={4} sm={12} xs={12}>
            <ClientCard
              onClick={() => selectClient(client.id)}
              client={client}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const links = [
  { label: "Dashboard", route: "/" },
  { label: "Clients", route: "/" },
];

export default DashboardClients;
