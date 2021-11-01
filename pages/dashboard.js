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
import { getClients, getPolicies } from "../utils/api";
import useUrlQuery from "../utils/useUrlQuery";

const Dashboard = ({ clients, policies }) => {
  const router = useRouter();
  const [showSidebar, openSidebar, closeSidebar] = useModal();
  const [
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    activeSidebarOption,
    setActiveSidebarOption,
  ] = useUrlQuery(clients, policies);

  const mainComponent = {
    [SIDEBAR_CLIENTS_VALUE]: (
      <DashboardClients
        openSidebar={openSidebar}
        clients={clients}
        selectedClient={selectedClient}
        selectedPolicy={selectedPolicy}
        breadcrumbLinks={breadcrumbLinks}
      />
    ),
    [SIDEBAR_PORTFOLIO_VALUE]: (
      <DashboardPortfolio
        openSidebar={openSidebar}
        policies={policies}
        selectedPolicy={selectedPolicy}
        breadcrumbLinks={breadcrumbLinks}
      />
    ),
  };

  const sideBarOptionOnClick = () => {};

  return (
    <DashboardContainer>
      <Sidebar open={showSidebar} onClose={closeSidebar}>
        <List>
          {sidebarItems.map((item) => (
            <ListItem key={item.value}>
              <ListItemButton
                selected={activeSidebarOption === item.value}
                onClick={() => {
                  router.push("/dashboard");
                  setActiveSidebarOption(item.value);
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
      <Container sx={{ pb: 3 }}>{mainComponent[activeSidebarOption]}</Container>
    </DashboardContainer>
  );
};
export async function getServerSideProps({ req }) {
  const clients = await getClients();
  const policies = await getPolicies();

  return { props: { clients, policies } };
}

export default Dashboard;
