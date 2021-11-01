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
import { getClients, getPolicies } from "../utils/api";

const Dashboard = ({ clients, policies }) => {
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
      <Container sx={{ pb: 3 }}>
        <MainComponent
          openSidebar={openSidebar}
          clients={clients}
          policies={policies}
        />
      </Container>
    </DashboardContainer>
  );
};
const mainComponentMapping = {
  [CLIENTS_VALUE]: DashboardClients,
  [PORTFOLIO_VALUE]: DashboardPortfolio,
};

export async function getServerSideProps({ req }) {
  const clients = await getClients(req);
  const policies = await getPolicies();

  return { props: { clients, policies } };
}

export default Dashboard;
