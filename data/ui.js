import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";

// Constants
export const CLIENTS_VALUE = "clients";
export const CLIENTS_LABEL = "Clients";
export const PORTFOLIO_LABEL = "Portfolio";
export const PORTFOLIO_VALUE = "portfolio";
export const SETTINGS_LABEL = "Settings";
export const SETTINGS_VALUE = "settings";
export const PROFILE_LABEL = "Profile";
export const PROFILE_VALUE = "profile";

export const sidebarItems = [
  {
    label: CLIENTS_LABEL,
    value: CLIENTS_VALUE,
    icon: <PeopleAltIcon />,
  },
  {
    label: PORTFOLIO_LABEL,
    value: PORTFOLIO_VALUE,
    icon: <ListAltIcon />,
  },
  {
    label: SETTINGS_LABEL,
    value: SETTINGS_VALUE,
    icon: <SettingsIcon />,
  },
  {
    label: PROFILE_LABEL,
    value: PROFILE_VALUE,
    icon: <AccountCircleIcon />,
  },
];
