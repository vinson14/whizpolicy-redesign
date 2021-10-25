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
import Sidebar from "../components/stateless/interface/sidebar";
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

const Dashboard = () => {
  const router = useRouter();
  const [activeOption, setActiveOption] = useState(CLIENTS_VALUE);
  return (
    <DashboardContainer>
      <Sidebar>
        <List>
          {sidebarItems.map((item) => (
            <ListItem key={item.value}>
              <ListItemButton
                selected={activeOption === item.value}
                onClick={() => {
                  setActiveOption(item.value);
                  router.push("/dashboard");
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Sidebar>
      <Container>{mainComponent[activeOption]}</Container>
    </DashboardContainer>
  );
};
const mainComponent = {
  [CLIENTS_VALUE]: <DashboardClients />,
  [PORTFOLIO_VALUE]: <DashboardPortfolio />,
};

export default Dashboard;
