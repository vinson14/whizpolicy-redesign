import { Container, Typography } from "@mui/material";
import { useState } from "react";
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
import { Amplify } from "aws-amplify";
import awsConfig from "../src/aws-exports";

import DashboardSidebar from "../components/dashboard/dashboard-sidebar";
import useAuthState from "../utils/useAuthState";
import AgentProfile from "../components/dashboard/profile/agent-profile";

Amplify.configure(awsConfig);

const Dashboard = () => {
  const [authState, handleLogout] = useAuthState();

  const [sidebarState, openSidebar, closeSidebar] = useModal();
  const [selectedSidebarOption, setSelectedSidebarOption] = useState(SIDEBAR_CLIENTS_VALUE);
  const mainComponent = {
    [SIDEBAR_CLIENTS_VALUE]: <DashboardClients authState={authState} openSidebar={openSidebar} />,
    [SIDEBAR_PORTFOLIO_VALUE]: <Typography>Dashboard Portfolio</Typography>,
    [SIDEBAR_PROFILE_VALUE]: <AgentProfile openSidebar={openSidebar} />,
  };

  return (
    <>
      <DashboardContainer>
        <DashboardSidebar
          open={sidebarState}
          onClose={closeSidebar}
          selectedSidebarOption={selectedSidebarOption}
          sidebarOptionOnClick={setSelectedSidebarOption}
          handleLogout={handleLogout}
        />
        <Container sx={{ pb: 3, mt: NAVBAR_HEIGHT / 8 }}>
          <div>{mainComponent[selectedSidebarOption]}</div>
        </Container>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
