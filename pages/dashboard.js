import {
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
import Sidebar from "../components/stateless/interface/navigation/sidebar";
import {
  SIDEBAR_CLIENTS_VALUE,
  SIDEBAR_PORTFOLIO_VALUE,
  SIDEBAR_SETTINGS_VALUE,
  SIDEBAR_PROFILE_VALUE,
  sidebarItems,
} from "../data/ui";
import DashboardContainer from "../components/dashboard/dashboard-container";
import DashboardClients from "../components/dashboard/dashboard-clients";
import DashboardPortfolio from "../components/dashboard/dashboard-portfolio";
import useModal from "../utils/useModal";
import { getClients, getClientsWithAuth, getPolicies } from "../utils/api";
import { Amplify, Auth } from "aws-amplify";
import awsConfig from "../src/aws-exports";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import SidebarLogoutButton from "../components/stateless/interface/buttons/sidebar-logout-button";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import useDashboardState from "../utils/useUrlQuery";
import LoadingIcon from "../components/stateless/interface/misc/loading-icon";
Amplify.configure(awsConfig);

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateClients, setUpdateClients] = useState(false);
  const [authState, setAuthState] = useState();
  const [showSidebar, openSidebar, closeSidebar] = useModal();
  const [
    selectedSidebarOption,
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    sidebarOptionOnClick,
    clientOnClick,
    policyOnClick,
  ] = useDashboardState(clients, policies);

  const handleLogout = () => {
    setLoading(true);
    Auth.signOut().then(setLoading(false));
  };

  useEffect(() => {
    console.log("this ran");
    if (authState === AuthState.SignedIn) {
      setLoading(true);
      getClients()
        .then((data) => setClients(data))
        .then(() => setLoading(false));
      // getPolicies().then((policies) => setPolicies(policies));
    }
    setUpdateClients(false);
  }, [updateClients, authState]);

  onAuthUIStateChange((nextAuthState, authData) => {
    console.log("onAuthUIStateChange ran");
    console.log(nextAuthState);
    console.log(authData);
    setAuthState(nextAuthState);
  });

  const mainComponent = {
    [SIDEBAR_CLIENTS_VALUE]: (
      <DashboardClients
        openSidebar={openSidebar}
        clients={clients}
        selectedClient={selectedClient}
        selectedPolicy={selectedPolicy}
        breadcrumbLinks={breadcrumbLinks}
        clientOnClick={clientOnClick}
        policyOnClick={policyOnClick}
        setUpdateClients={setUpdateClients}
      />
    ),
    [SIDEBAR_PORTFOLIO_VALUE]: (
      <DashboardPortfolio
        openSidebar={openSidebar}
        policies={policies}
        selectedPolicy={selectedPolicy}
        breadcrumbLinks={breadcrumbLinks}
        policyOnClick={policyOnClick}
      />
    ),
  };

  return (
    <AmplifyAuthenticator>
      <DashboardContainer>
        <Sidebar open={showSidebar} onClose={closeSidebar}>
          <List>
            {sidebarItems.map((item) => (
              <ListItem key={item.value}>
                <ListItemButton
                  selected={selectedSidebarOption === item.value}
                  onClick={() => {
                    sidebarOptionOnClick(item.value);
                    closeSidebar();
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <SidebarLogoutButton onClick={handleLogout} />
          </List>
        </Sidebar>
        <Container sx={{ pb: 3 }}>
          {loading && <LoadingIcon />}
          {!loading && mainComponent[selectedSidebarOption]}
        </Container>
      </DashboardContainer>
    </AmplifyAuthenticator>
  );
};

export default Dashboard;
