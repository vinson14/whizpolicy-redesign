import { Box, Grid, Typography, Modal, Card } from "@mui/material";
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

const DashboardClients = () => {
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

  // useEffect(() => {
  //   console.log("useEffect 2 ran");
  //   const clientId = router.query.clientId;
  //   if (clients.length === 0) return;
  //   if (clientId == null) {
  //     setSelectedClient(null);
  //     setBreadcrumbLinks(defaultBreadcrumbLinks);
  //   } else {
  //     const client = findClientById(clients, clientId);
  //     setSelectedClient(client);
  //     setBreadcrumbLinks([
  //       ...defaultBreadcrumbLinks,
  //       { label: client.name, route: `/dashboard?clientId=${clientId}` },
  //     ]);
  //   }
  // }, [clients, router.query.clientId]);

  // useEffect(() => {
  //   console.log("useEffect 3 ran");
  //   if (selectedClient == null) {
  //     return;
  //   }

  //   const policyNumber = router.query.policyNumber;

  //   if (policyNumber == null) {
  //     setSelectedPolicy(null);
  //     setBreadcrumbLinks([
  //       ...defaultBreadcrumbLinks,
  //       {
  //         label: selectedClient.name,
  //         route: `/dashboard?clientId=${selectedClient.id}`,
  //       },
  //     ]);
  //   }

  //   if (selectedClient.policies.length > 0) {
  //     setSelectedPolicy(
  //       findPolicyByPolicyNumber(selectedClient.policies, policyNumber)
  //     );
  //     setBreadcrumbLinks([
  //       ...breadcrumbLinks,
  //       {
  //         label: policyNumber,
  //         route: `/dashboard?clientId=${selectedClient.id}&policyNumber=${policyNumber}`,
  //       },
  //     ]);
  //   }
  // }, [selectedClient, router.query.policyNumber]);

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
