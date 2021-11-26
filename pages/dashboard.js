import {
  CircularProgress,
  Container,
  Fade,
  Grow,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
import SidebarContainer from "../components/stateless/interface/navigation/sidebar-container";
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
import { getClients, getClientsWithAuth, getPolicies, isUserAuthenticated, signOutUser } from "../utils/api";
import { Amplify, Auth } from "aws-amplify";
import awsConfig from "../src/aws-exports";
import { AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import SidebarLogoutButton from "../components/stateless/interface/buttons/sidebar-logout-button";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import useDashboardState from "../utils/useDashboardState";
import LoadingIcon from "../components/stateless/interface/misc/loading-icon";
import TopAppBar from "../components/stateless/interface/navigation/top-appbar";
import { useRouter } from "next/router";
import DashboardContext from "../context/dashboard-context";
import DashboardSidebar from "../components/dashboard/dashboard-sidebar";

Amplify.configure(awsConfig);

const Dashboard = () => {
  const router = useRouter();
  const [authState, setAuthState] = useState();

  useEffect(() => {
    isUserAuthenticated().then((res) => {
      if (!res) router.push("/login");
      else setAuthState(true);
    });
  }, []);

  const [clients, setClients] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateClients, setUpdateClients] = useState(false);
  const [sidebarState, openSidebar, closeSidebar] = useModal();
  const [
    selectedSidebarOption,
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    sidebarOptionOnClick,
    clientOnClick,
    policyOnClick,
    goBackOneLevel,
  ] = useDashboardState(clients, policies);

  const handleLogout = () => {
    setLoading(true);
    signOutUser().then((res) => {
      if (res) {
        setAuthState(false);
        setLoading(false);
        router.push("/login");
      }
    });
  };

  useEffect(() => {
    console.log("useEffect updateClients", authState);
    if (authState) {
      setLoading(true);
      getClients()
        .then((data) => {
          console.log(data);
          setClients(data);
        })
        .then(() => setLoading(false));
      // getPolicies().then((policies) => setPolicies(policies));
    } else {
      setClients([]);
    }
    setUpdateClients(false);
  }, [updateClients, authState]);

  onAuthUIStateChange((nextAuthState, authData) => {
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

  const context = {
    setLoading,
    setUpdateClients,
    policyOnClick,
  };

  return (
    <DashboardContext.Provider value={context}>
      <TopAppBar menuOnClick={openSidebar} goBackOneLevel={goBackOneLevel} />
      <DashboardContainer>
        <DashboardSidebar
          open={sidebarState}
          onClose={closeSidebar}
          selectedSidebarOption={selectedSidebarOption}
          sidebarOptionOnClick={sidebarOptionOnClick}
        />
        <Container sx={{ pb: 3 }}>
          {loading && <LoadingIcon />}
          <Fade in={!loading}>
            <div>{mainComponent[selectedSidebarOption]}</div>
          </Fade>
        </Container>
      </DashboardContainer>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
