import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { createElement, useState } from "react";
import { getClients } from "../utils/api";
import Sidebar from "../components/stateless/interface/sidebar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
  const [activeOption, setActiveOption] = useState(CLIENTS_VALUE);

  const mainComponent = {
    [CLIENTS_VALUE]: <DashboardClients />,
    [PORTFOLIO_VALUE]: <DashboardPortfolio />,
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <List>
          {sidebarItems.map((item) => (
            <ListItem key={item.value}>
              <ListItemButton onClick={() => setActiveOption(item.value)}>
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

export default Dashboard;
