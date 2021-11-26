import { Box, Grid } from "@mui/material";
import DashboardHeaderContainer from "../stateless/layout/dashboard-header-container";
import useDashboardClientsState from "../../utils/useDashboardClientsState";
import ClientDetails from "./client-details/dashboard-client-details";
import ClientCards from "../stateless/interface/cards/client-cards";
import FloatingAddButton from "../stateless/interface/buttons/floating-add-button";
import useModal from "../../utils/useModal";
import PolicyForm from "./add-policy-form/policy-form";
import PolicyDetails from "./policy-details/policy-details";
import FloatingEditButton from "../stateless/interface/buttons/floating-edit-button";
import CustomBreadcrumbs from "../stateless/interface/navigation/breadcrumbs";
import LoadingIcon from "../stateless/interface/misc/loading-icon";
import TopAppBar from "../stateless/interface/navigation/top-appbar";
import ClientForm from "./add-client-form/client-form";
const DashboardClients = ({ authState }) => {
  const [
    clients,
    selectedClient,
    selectedPolicy,
    breadcrumbs,
    loading,
    setLoading,
    clientOnClick,
    policyOnClick,
    goBack,
  ] = useDashboardClientsState(authState);
  const [policyFormModalState, openPolicyForm, closePolicyForm] = useModal();
  const [clientFormModalState, openClientForm, closeClientForm] = useModal();
  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      <TopAppBar goBack={goBack} />
      <Box p={{ md: 5, xs: 1 }}>
        <DashboardHeaderContainer>
          <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        </DashboardHeaderContainer>
        <Grid mt={{ xs: 2, md: 5 }} container alignItems="stretch" spacing={3}>
          {!selectedClient && <ClientCards clients={clients} clientOnClick={clientOnClick} />}
          {selectedClient && !selectedPolicy && <ClientDetails client={selectedClient} policyOnClick={policyOnClick} />}
          {selectedClient && selectedPolicy && <PolicyDetails client={selectedClient} policy={selectedPolicy} />}
        </Grid>
        {policyFormModalState && (
          <PolicyForm
            open={policyFormModalState}
            onClose={closePolicyForm}
            client={selectedClient}
            values={selectedPolicy}
            setLoading={setLoading}
          />
        )}
        {clientFormModalState && (
          <ClientForm
            open={clientFormModalState}
            onClose={closeClientForm}
            values={selectedClient}
            setLoading={setLoading}
          />
        )}
        {!selectedClient && <FloatingAddButton onClick={openClientForm}>Add Client</FloatingAddButton>}
        {selectedClient && !selectedPolicy && (
          <>
            <FloatingEditButton onClick={openClientForm} bottom={10}>
              Edit Client
            </FloatingEditButton>
            <FloatingAddButton onClick={openPolicyForm}>Add Policy</FloatingAddButton>
          </>
        )}
        {selectedClient && selectedPolicy && (
          <FloatingEditButton onClick={openPolicyForm}>Edit Policy</FloatingEditButton>
        )}
      </Box>
    </>
  );
};

export default DashboardClients;
