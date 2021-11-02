import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import useUrlQuery from "../utils/useUrlQuery";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "../src/aws-exports";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import SidebarLogoutButton from "../components/stateless/interface/buttons/sidebar-logout-button";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import useDashboardState from "../utils/useUrlQuery";
Amplify.configure(awsmobile);

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSidebar, openSidebar, closeSidebar] = useModal();
  const [
    selectedSidebarOption,
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    sidebarOptionOnClick,
    clientOnClick,
    policyOnClick,
  ] = useDashboardState();

  const handleLogout = () => {
    setLoading(true);
    Auth.signOut().then(setLoading(false));
  };

  useEffect(() => {
    getClients().then((data) => setClients(data));
    getPolicies().then((policies) => setPolicies(policies));
  }, []);

  onAuthUIStateChange((nextAuthState, authData) => {
    console.log("onAuthUIStateChange ran");
    console.log(nextAuthState);
    console.log(authData);
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
          {mainComponent[selectedSidebarOption]}
        </Container>
      </DashboardContainer>
    </AmplifyAuthenticator>
  );
};

export default Dashboard;
