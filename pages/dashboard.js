import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../components/stateless/interface/navigation/sidebar";
import {
  CLIENTS_VALUE,
  PORTFOLIO_VALUE,
  SETTINGS_VALUE,
  PROFILE_VALUE,
  sidebarItems,
} from "../data/ui";
import DashboardContainer from "../components/dashboard/dashboard-container";
import DashboardClients from "../components/dashboard/dashboard-clients";
import DashboardPortfolio from "../components/dashboard/dashboard-portfolio";
import useModal from "../utils/useModal";

const Dashboard = () => {
  const router = useRouter();
  const [activeOption, setActiveOption] = useState(CLIENTS_VALUE);
  const [showSidebar, openSidebar, closeSidebar] = useModal();
  const MainComponent = mainComponentMapping[activeOption];
  return (
    <DashboardContainer>
      <Sidebar open={showSidebar} onClose={closeSidebar}>
        <List>
          {sidebarItems.map((item) => (
            <ListItem key={item.value}>
              <ListItemButton
                selected={activeOption === item.value}
                onClick={() => {
                  setActiveOption(item.value);
                  router.push("/dashboard");
                  closeSidebar();
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Sidebar>
      <Container>
        <MainComponent openSidebar={openSidebar} />
      </Container>
    </DashboardContainer>
  );
};
const mainComponentMapping = {
  [CLIENTS_VALUE]: DashboardClients,
  [PORTFOLIO_VALUE]: DashboardPortfolio,
};

export default Dashboard;
