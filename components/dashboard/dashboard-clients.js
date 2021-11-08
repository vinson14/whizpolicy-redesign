import { Box, Grid } from "@mui/material";

import FloatingAddButton from "../stateless/interface/buttons/floating-add-button";
import FloatingEditButton from "../stateless/interface/buttons/floating-edit-button";
import ClientCards from "../stateless/interface/cards/client-cards";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import MainHeader from "../stateless/interface/text/main-header";
import ClientDetails from "./client-details/dashboard-client-details";
import ClientFormModal from "./add-client-form/add-client-form-modal";
import useModal from "../../utils/useModal";
import PolicyDetails from "./policy-details/policy-details";
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
  setUpdateClients,
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
            setUpdateClients={setUpdateClients}
            edit
          />
          <FloatingAddButton onClick={openAddPolicyFormModal}>
            Add Policy
          </FloatingAddButton>
          <AddPolicyForm
            open={addPolicyFormModalState}
            handleClose={closeAddPolicyFormModal}
            client={selectedClient}
            setUpdateClients={setUpdateClients}
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
            <PolicyDetails
              client={selectedClient}
              policy={selectedPolicy}
              setUpdateClients={setUpdateClients}
            />
          )}
          <ClientFormModal
            open={clientFormModalState}
            handleClose={closeClientFormModal}
            setUpdateClients={setUpdateClients}
          />
        </Grid>
      </Box>
    </>
  );
};

export default DashboardClients;
