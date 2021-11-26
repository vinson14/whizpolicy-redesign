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
const DashboardClients = ({ authState }) => {
  const [clients, selectedClient, selectedPolicy, clientOnClick, policyOnClick] = useDashboardClientsState(authState);
  const [policyFormModalState, openPolicyForm, closePolicyForm] = useModal();
  return (
    <Box p={{ md: 5, xs: 1 }}>
      <DashboardHeaderContainer>dashboard clients header</DashboardHeaderContainer>
      <Grid container alignItems="stretch" spacing={3}>
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
        />
      )}
      {!selectedClient && <FloatingAddButton>Add Client</FloatingAddButton>}
      {selectedClient && !selectedPolicy && <FloatingAddButton onClick={openPolicyForm}>Add Policy</FloatingAddButton>}
      {selectedClient && selectedPolicy && (
        <FloatingEditButton onClick={openPolicyForm}>Edit Policy</FloatingEditButton>
      )}
    </Box>
  );
};

export default DashboardClients;
