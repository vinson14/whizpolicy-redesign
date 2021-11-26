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
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import SidebarContainer from "../components/stateless/interface/navigation/sidebar-container";
import {
  SIDEBAR_CLIENTS_VALUE,
  SIDEBAR_PORTFOLIO_VALUE,
  SIDEBAR_SETTINGS_VALUE,
  SIDEBAR_PROFILE_VALUE,
  sidebarItems,
  NAVBAR_HEIGHT,
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
import useAuthState from "../utils/useAuthState";

Amplify.configure(awsConfig);

const Dashboard = () => {
  const router = useRouter();
  const [authState, handleLogout] = useAuthState();

  const [sidebarState, openSidebar, closeSidebar] = useModal();
  const [selectedSidebarOption, setSelectedSidebarOption] = useState(SIDEBAR_CLIENTS_VALUE);
  const mainComponent = {
    [SIDEBAR_CLIENTS_VALUE]: <DashboardClients authState={authState} />,
    [SIDEBAR_PORTFOLIO_VALUE]: <Typography>Dashboard Portfolio</Typography>,
  };

  return (
    <>
      <DashboardContainer>
        <DashboardSidebar
          open={sidebarState}
          onClose={closeSidebar}
          selectedSidebarOption={selectedSidebarOption}
          sidebarOptionOnClick={setSelectedSidebarOption}
        />
        <Container sx={{ pb: 3, mt: NAVBAR_HEIGHT / 8 }}>
          <div>{mainComponent[selectedSidebarOption]}</div>
        </Container>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
