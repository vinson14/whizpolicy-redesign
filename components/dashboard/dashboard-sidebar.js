import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { sidebarItems } from "../../data/ui";
import SidebarLogoutButton from "../stateless/interface/buttons/sidebar-logout-button";
import SidebarContainer from "../stateless/interface/navigation/sidebar-container";

const DashboardSidebar = ({ open, onClose, selectedSidebarOption, sidebarOptionOnClick, handleLogout }) => {
  const [loggingOut, setLoggingOut] = useState(false);

  const logoutOnClick = () => {
    setLoggingOut(true);
    handleLogout();
    onClose();
  };

  return (
    <SidebarContainer open={open} onClose={onClose}>
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.value}>
            <ListItemButton
              selected={selectedSidebarOption === item.value}
              onClick={() => {
                sidebarOptionOnClick(item.value);
                onClose();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <SidebarLogoutButton onClick={logoutOnClick} />
      </List>
    </SidebarContainer>
  );
};

export default DashboardSidebar;
