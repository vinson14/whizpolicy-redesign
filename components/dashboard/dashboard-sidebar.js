import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { sidebarItems } from "../../data/ui";
import SidebarLogoutButton from "../stateless/interface/buttons/sidebar-logout-button";
import SidebarContainer from "../stateless/interface/navigation/sidebar-container";

const DashboardSidebar = ({ open, onClose, selectedSidebarOption, sidebarOptionOnClick }) => {
  return (
    <SidebarContainer open={open} onClose={onClose}>
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
        <SidebarLogoutButton
          onClick={() => {
            handleLogout();
            closeSidebar();
          }}
        />
      </List>
    </SidebarContainer>
  );
};

export default DashboardSidebar;
