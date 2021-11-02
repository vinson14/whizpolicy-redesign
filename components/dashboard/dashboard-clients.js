import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getClients } from "../../utils/api";
import { findClientById, findPolicyByPolicyNumber } from "../../utils/utils";
import FloatingAddButton from "../stateless/interface/buttons/floating-add-button";
import FloatingEditButton from "../stateless/interface/buttons/floating-edit-button";
import ClientCards from "../stateless/interface/cards/client-cards";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import ClientDetails from "./client-details/dashboard-client-details";
import { defaultDashboardClientBreadcrumbs } from "../../data/ui";
import ClientFormModal from "./add-client-form/add-client-form-modal";
import useModal from "../../utils/useModal";
import PolicyDetails from "./policy-details/policy-details";
import SidebarButton from "../stateless/interface/buttons/sidebar-button";
import DashboardHeaderContainer from "../stateless/layout/dashboard-header-container";
import AddPolicyForm from "./add-policy-form/add-policy-form";

const DashboardClients = ({
  openSidebar,
  clients,
  selectedClient,
  selectedPolicy,
  breadcrumbLinks,
  clientOnClick,
  policyOnClick,
}) => {
  const [clientFormModalState, openClientFormModal, closeClientFormModal] =
    useModal();
  const [editClientModalState, openEditClientModal, closeEditClientModal] =
    useModal();
  const [
    addPolicyFormModalState,
    openAddPolicyFormModal,
    closeAddPolicyFormModal,
  ] = useModal();

  const renderButton = () => {
    if (selectedClient != null && selectedPolicy != null) {
      return null;
    } else if (selectedClient != null && selectedPolicy == null) {
      return (
        <>
          <FloatingEditButton onClick={openEditClientModal} bottom={10}>
            Edit Client
          </FloatingEditButton>
          <ClientFormModal
            open={editClientModalState}
            handleClose={closeEditClientModal}
            defaultValues={selectedClient}
            edit
          />
          <FloatingAddButton onClick={openAddPolicyFormModal}>
            Add Policy
          </FloatingAddButton>
          <AddPolicyForm
            open={addPolicyFormModalState}
            handleClose={closeAddPolicyFormModal}
            client={selectedClient}
          />
        </>
      );
    } else if (selectedClient == null) {
      return (
        <>
          <FloatingAddButton onClick={openClientFormModal}>
            Add Client
          </FloatingAddButton>
        </>
      );
    }
  };

  return (
    <>
      <Box sx={{ p: { md: 5, xs: 1 } }}>
        <DashboardHeaderContainer openSidebar={openSidebar}>
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
        </DashboardHeaderContainer>
        <Grid container mt={5} spacing={3} alignItems="stretch">
          {selectedClient == null && (
            <ClientCards clients={clients} selectClient={clientOnClick} />
          )}
          {selectedClient != null && selectedPolicy == null && (
            <ClientDetails
              client={selectedClient}
              policyOnClick={policyOnClick}
            />
          )}
          {selectedClient != null && selectedPolicy != null && (
            <PolicyDetails policy={selectedPolicy} />
          )}
          <ClientFormModal
            open={clientFormModalState}
            handleClose={closeClientFormModal}
          />
        </Grid>
      </Box>
    </>
  );
};

export default DashboardClients;
