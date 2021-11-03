import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const SidebarLogoutButton = ({ onClick }) => {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarLogoutButton;
