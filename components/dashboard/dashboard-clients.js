import { Box, Grid, Typography, Modal, Card } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getClients } from "../../utils/api";
import { findClientById } from "../../utils/utils";
import AddButton from "../stateless/interface/buttons/add-button";
import EditButton from "../stateless/interface/buttons/edit-button";
import ClientCard from "../stateless/interface/cards/client-card";
import ClientCards from "../stateless/interface/cards/client-cards";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import ClientDetails from "./client-details/dashboard-client-details";
import { defaultBreadcrumbLinks } from "../../data/ui";
import AddClientFormModal from "./add-client-form/add-client-form-modal";

const DashboardClients = () => {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultBreadcrumbLinks
  );
  const [openAddClientModal, setOpenAddClientModal] = useState(false);

  useEffect(() => {
    console.log("useEffect 1 ran");
    getClients().then((clients) => setClients(clients));
  }, []);

  useEffect(() => {
    console.log("useEffect 2 ran");
    const clientId = router.query.clientId;
    if (clients.length === 0) return;
    if (clientId == null) {
      setSelectedClient(null);
      setBreadcrumbLinks(defaultBreadcrumbLinks);
    } else {
      const client = findClientById(clients, clientId);
      setSelectedClient(client);
      setBreadcrumbLinks([...defaultBreadcrumbLinks, { label: client.name }]);
    }
  }, [clients, router.query.clientId]);

  const selectClient = (client) => {
    setSelectedClient(client);
    router.push(`?clientId=${client.id}`, undefined, { shallow: true });
  };

  const renderButton = () => {
    if (selectedClient == null)
      return (
        <AddButton onClick={() => setOpenAddClientModal(true)}>
          Add Client
        </AddButton>
      );
    return <EditButton>Edit Client</EditButton>;
  };

  const handleCloseAddClientModal = () => setOpenAddClientModal(false);

  return (
    <>
      <Box p={5}>
        <Grid container>
          <Grid item>
            <MainHeader>Clients</MainHeader>
            <CustomBreadcrumbs links={breadcrumbLinks} />
          </Grid>
          <Grid
            item
            flexGrow={1}
            display="flex"
            justifyContent="end"
            alignItems="center"
          >
            {renderButton()}
          </Grid>
        </Grid>
        <Grid container mt={5} spacing={3} alignItems="stretch">
          {selectedClient == null && (
            <ClientCards clients={clients} selectClient={selectClient} />
          )}
          {selectedClient != null && <ClientDetails client={selectedClient} />}
        </Grid>
      </Box>
      <AddClientFormModal
        open={openAddClientModal}
        handleClose={handleCloseAddClientModal}
      />
    </>
  );
};

export default DashboardClients;
