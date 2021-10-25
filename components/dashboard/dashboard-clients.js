import { Box, Grid, Typography, Modal, Card, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getClients } from "../../utils/api";
import { findClientById, findPolicyByPolicyNumber } from "../../utils/utils";
import AddButton from "../stateless/interface/buttons/add-button";
import EditButton from "../stateless/interface/buttons/edit-button";
import ClientCard from "../stateless/interface/cards/client-card";
import ClientCards from "../stateless/interface/cards/client-cards";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import ClientDetails from "./client-details/dashboard-client-details";
import { defaultBreadcrumbLinks } from "../../data/ui";
import AddClientFormModal from "./add-client-form/add-client-form-modal";
import useModal from "../../utils/useModal";
import PolicyDetails from "./policy-details/policy-details";
import MenuIcon from "@mui/icons-material/Menu";

const DashboardClients = ({ openSidebar }) => {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultBreadcrumbLinks
  );
  const [clientFormModalState, openClientFormModal, closeClientFormModal] =
    useModal();

  useEffect(() => {
    console.log("useEffect 1 ran");
    getClients().then((clients) => setClients(clients));
  }, []);

  useEffect(() => {
    if (clients.length === 0) return;

    const clientId = router.query.clientId;
    const policyNumber = router.query.policyNumber;

    if (clientId == null) {
      setSelectedClient(null);
      setSelectedPolicy(null);
      setBreadcrumbLinks(defaultBreadcrumbLinks);
    } else if (policyNumber == null) {
      const client = findClientById(clients, clientId);
      setSelectedPolicy(null);
      setBreadcrumbLinks([
        ...defaultBreadcrumbLinks,
        { label: client.name, route: `/dashboard?clientId=${clientId}` },
      ]);
    } else {
      const client = findClientById(clients, clientId);
      setSelectedClient(client);
      setSelectedPolicy(
        findPolicyByPolicyNumber(client.policies, policyNumber)
      );
      setBreadcrumbLinks([
        ...defaultBreadcrumbLinks,
        { label: client.name, route: `/dashboard?clientId=${clientId}` },
        {
          label: policyNumber,
          route: `/dashboard?clientId=${clientId}&policyNumber=${policyNumber}`,
        },
      ]);
    }
  }, [clients, router.query.clientId, router.query.policyNumber]);

  const selectClient = (client) => {
    setSelectedClient(client);
    router.push(`?clientId=${client.id}`, undefined, { shallow: true });
  };

  const renderButton = () => {
    if (selectedClient == null)
      return <AddButton onClick={openClientFormModal}>Add Client</AddButton>;
    return <EditButton>Edit Client</EditButton>;
  };

  return (
    <>
      <Box sx={{ p: { md: 5, xs: 1 } }}>
        <Grid container alignItems="center">
          <Grid item xs={1} sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={openSidebar}>
              <MenuIcon />
            </IconButton>
          </Grid>
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
          {selectedClient != null && selectedPolicy == null && (
            <ClientDetails client={selectedClient} />
          )}
          {selectedClient != null && selectedPolicy != null && (
            <PolicyDetails policy={selectedPolicy} />
          )}
        </Grid>
      </Box>
      <AddClientFormModal
        open={clientFormModalState}
        handleClose={closeClientFormModal}
      />
    </>
  );
};

export default DashboardClients;
